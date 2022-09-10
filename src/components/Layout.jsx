import React from 'react';
import Header from './Header';

const Layout = (props) => {
  return (
    <div className="w-full h-screen  ">
      <Header />
      <div className="w-full h-full   ">{props.children}</div>
    </div>
  );
};

export default Layout;
