import React from 'react';
import ibu from '../../src/ibu2.jpeg';
import kesehatan from '../../src/kesehatan.jpeg';
import kajian from '../../src/kajian.jpeg';
import adzan from '../../src/adzan.jpeg';

const CardKajian = () => {
  return (
    <div className="w-full  ">
      <div className="max-w-4xl mx-auto p-4 flex flex-col justify-center ">
        <div className="flex justify-center text-2xl font-bold">
          <h1>Kegiatan Al-Muchtariyah</h1>
        </div>

        {/* kegiatan kajian*/}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16]  w-full hover:scale-110 duration-500 ">
            <img className="w-full sm:h-72 h-52 mx-auto " src={ibu} alt="bagiminyak" />
            <p className="my-4">Kegitan Shodaqoh minyak untuk masyarakat sekita</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-full hover:scale-110 duration-500 ">
            <img className="w-full sm:h-72 h-52 mx-auto " src={kesehatan} alt="bagiminyak" />
            <p className="my-4">Kegitan pengajian rutin ibu -ibu</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-full hover:scale-110 duration-500 ">
            <img className="w-full sm:h-72 h-52 mx-auto " src={kajian} alt="bagiminyak" />
            <p className="my-4">Kegitan pengajian rutin ibu -ibu</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-full hover:scale-110 duration-500 ">
            <img className="w-full sm:h-72 h-52 mx-auto " src={adzan} alt="bagiminyak" />
            <p className="my-4">Kegitan pengajian rutin ibu -ibu</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-full hover:scale-110 duration-500 ">
            <img className="w-full sm:h-72 h-52 mx-auto " src={kajian} alt="bagiminyak" />
            <p className="my-4">Kegitan pengajian rutin ibu -ibu</p>
          </div>
          <div className="shadow-md shadow-[#040c16] w-full hover:scale-110 duration-500 ">
            <img className="w-full sm:h-72 h-52 mx-auto " src={kajian} alt="bagiminyak" />
            <p className="my-4">Kegitan pengajian rutin ibu -ibu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKajian;
