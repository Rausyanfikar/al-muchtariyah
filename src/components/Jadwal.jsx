import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Jadwal = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function getApi() {
    axios({
      method: 'get',
      url: `https://api.banghasan.com/sholat/format/json/jadwal/kota/703/tanggal/2017-02-07`,
      headers: {},
    })
      .then((response) => {
        // handle success
        console.log(response);
        // setData(results);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(() => {
        // setLoading(false);
      });
  }

  useEffect(() => {
    getApi();
  }, []);

  return <div>Jadwal</div>;
};

export default Jadwal;
