import React from 'react';
import logo from '../../src/logo.png';

const Header = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap absolute bg-transparent p-6 z-10 w-full ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img className="w-20 h-16" src={logo} alt="logo mesjid" />
        <span class="font-semibold text-xl tracking-tight">AL - MUCHTARIYAH</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-[#1cac85] hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow justify-between lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <a href="#responsive-header" class=" mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg  hover:text-white mr-4">
            Tentang Kami
          </a>
          <a href="#responsive-header" class=" mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg hover:text-white mr-4">
            Kajian
          </a>
          <a href="#responsive-header" class="mt-4 lg:inline-block lg:mt-0 text-white font-bold text-lg hover:text-white">
            Donasi
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
