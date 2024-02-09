import React from 'react';
import { Link } from 'react-router-dom';
import { DiReact } from 'react-icons/di';
import { HiSearch, HiOutlineBell } from 'react-icons/hi';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';
import { IoSettingsOutline } from 'react-icons/io5';
import ChangeThemes from './ChangesThemes';

const Navbar = () => {
  const [isFullScreen, setIsFullScreen] = React.useState(true);
  const element = document.getElementById('root');

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  React.useEffect(() => {
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      element?.requestFullscreen({ navigationUI: 'auto' });
    }
  }, [element, isFullScreen]);

  return (
    <div className="fixed z-[3] top-0 left-0 right-0 bg-base-100 w-full flex justify-between px-3 py-5">
      <Link to={'/'} className="flex items-center gap-2">
        <DiReact className="xl:text-4xl animate-spin-slow" />
        <span className="font-semibold">React Dashboard</span>
      </Link>
      <div className="flex items-center pr-3">
        <button className="btn btn-circle btn-ghost">
          <HiSearch className="xl:text-xl" />
        </button>
        <button
          onClick={toggleFullScreen}
          className="btn btn-circle btn-ghost"
        >
          {isFullScreen ? (
            <RxEnterFullScreen className="xl:text-xl" />
          ) : (
            <RxExitFullScreen className="xl:text-xl" />
          )}
        </button>
        <button className="btn btn-circle btn-ghost">
          <HiOutlineBell className="xl:text-xl" />
        </button>
        <Link
          to={'/profile'}
          className="btn btn-ghost flex items-center"
        >
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <span className="m-0 p-0 xl:text-[14px]">Frans</span>
        </Link>
        {/* <button className="btn btn-circle btn-ghost">
          <IoSettingsOutline className="xl:text-xl" />
        </button> */}
        <div className="drawer drawer-end">
          <input
            id="my-drawer-4"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-circle btn-ghost"
            >
              <IoSettingsOutline className="xl:text-xl" />
            </label>
          </div>
          <div className="drawer-side overflow-x-hidden">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-4 xl:w-[25%] min-h-full bg-base-100 text-base-content flex flex-col items-stretch gap-5">
              {/* Sidebar content here */}
              <div className="flex flex-col gap-3 items-start">
                <span>Change Theme</span>
                <ChangeThemes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
