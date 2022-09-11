import React from 'react';
import '../styles/App.css';

const Hero = () => {
  return (
    <div className="hero relative  background flex flex-col items-center justify-center border mb-5 ">
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
