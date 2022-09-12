import React from 'react';
import logo from '../../src/logo.png';

const Footer = () => {
  return (
    <footer class="p-4 bg-slate-800  shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="w-20 h-16 mr-3 hover:bg-slate-200 rounded-xl" alt="Flowbite Logo" />
          <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Al-Muchtariyah</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6  text-white text-lg sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Profile
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Alamat
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Kajian
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-white sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://flowbite.com/" class="hover:underline">
          Al-Muchtariyah
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
