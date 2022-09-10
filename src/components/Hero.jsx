import React from 'react';
import Image from '../../src/mesjid.jpeg';
const Hero = () => {
  return (
    <div className="hero  flex flex-col items-center justify-center border" style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw' }}>
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl  text-white font-bold">AL - MUCHTARIYAH</h1>
          <button className="btn btn-primary bg-[#1cac85] p-3 text-white rounded-lg hover:bg-[#179675]">Tentang Al-Muchtariyah</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
