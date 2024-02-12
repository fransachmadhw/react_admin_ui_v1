// import React from 'react';
import { DiReact } from 'react-icons/di';

const Footer = () => {
  return (
    <div className="w-full px-5 py-5 m-0 flex justify-between gap-2 font-semibold xl:text-sm">
      <span>React Dashboard</span>
      <div className="flex gap-1 items-center">
        <span>© Frans Admin Dashboard</span>
        <DiReact className="xl:text-xl 2xl:text-2xl text-primary animate-spin-slow" />
      </div>
    </div>
  );
};

export default Footer;
