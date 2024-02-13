import React from 'react';
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { DiReact } from 'react-icons/di';
import { HiSearch, HiOutlineBell } from 'react-icons/hi';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';
import ChangeThemes from './ChangesThemes';
import toast from 'react-hot-toast';
import { menu } from './menu/data';
import MenuItem from './menu/MenuItem';

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
    <div className="fixed z-[3] top-0 left-0 right-0 bg-base-100 w-full flex justify-between pl-4 xl:pl-3 pr-4 xl:pr-0 py-3 xl:py-5 gap-4 xl:gap-0">
      <div className="flex gap-3 items-center">
        <div className="drawer w-auto p-0 xl:hidden">
          <input
            id="my-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="p-0 w-auto drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="p-0 btn btn-ghost drawer-button"
            >
              <HiBars3CenterLeft className="text-2xl" />
            </label>
          </div>
          <div className="drawer-side z-[99]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-4 w-auto min-h-full bg-base-200 text-base-content">
              {menu.map((item) => (
                <MenuItem
                  catalog={item.catalog}
                  listItems={item.listItems}
                />
              ))}
            </div>
          </div>
        </div>
        <Link to={'/'} className="flex items-center gap-1 xl:gap-2">
          <DiReact className="text-4xl xl:text-4xl 2xl:text-6xl text-primary animate-spin-slow" />
          <span className="text-[18px] leading-[1.2] xl:text-xl 2xl:text-2xl font-semibold text-base-content dark:text-neutral-200">
            React Dashboard
          </span>
        </Link>
      </div>
      <div className="flex items-center xl:pr-3 gap-0">
        <button
          onClick={() =>
            toast('Gaboleh!', {
              icon: '😠',
              id: 'toastNavbar',
            })
          }
          className="hidden xl:inline-flex btn btn-circle btn-ghost"
        >
          <HiSearch className="xl:text-xl" />
        </button>
        <button
          onClick={toggleFullScreen}
          className="hidden xl:inline-flex btn btn-circle btn-ghost"
        >
          {isFullScreen ? (
            <RxEnterFullScreen className="xl:text-xl" />
          ) : (
            <RxExitFullScreen className="xl:text-xl" />
          )}
        </button>
        <button
          onClick={() =>
            toast('Gaboleh!', {
              icon: '😠',
              id: 'toastNavbar',
            })
          }
          className="px-0 xl:px-auto btn btn-circle btn-ghost"
        >
          <HiOutlineBell className="text-xl xl:text-xl" />
        </button>
        <div className="px-0 xl:px-auto btn btn-circle btn-ghost mr-2 xl:mr-0">
          <ChangeThemes />
        </div>
        <Link
          to={'/profile'}
          className="px-0 xl:px-4 btn btn-ghost flex items-center"
        >
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/74099030?v=4"
                alt="foto-cowok-ganteng"
              />
            </div>
          </div>
          <span className="hidden xl:block m-0 p-0 xl:text-[14px]">
            Frans
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
