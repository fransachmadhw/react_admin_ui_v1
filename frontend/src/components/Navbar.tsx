import React from 'react';
import { Link } from 'react-router-dom';
import { DiReact } from 'react-icons/di';
import { HiSearch, HiOutlineBell } from 'react-icons/hi';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx';
import ChangeThemes from './ChangesThemes';
import toast from 'react-hot-toast';

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
    <div className="fixed z-[3] top-0 left-0 right-0 bg-base-100 w-full flex justify-between xl:pl-3 py-5">
      <Link to={'/'} className="flex items-center gap-2">
        <DiReact className="xl:text-4xl 2xl:text-6xl text-primary animate-spin-slow" />
        <span className="xl:text-xl 2xl:text-2xl font-semibold text-base-content dark:text-neutral-200">
          React Dashboard
        </span>
      </Link>
      <div className="flex items-center pr-3">
        <button
          onClick={() =>
            toast('Gaboleh!', {
              icon: '😠',
              id: 'toastNavbar',
            })
          }
          className="btn btn-circle btn-ghost"
        >
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
        <button
          onClick={() =>
            toast('Gaboleh!', {
              icon: '😠',
              id: 'toastNavbar',
            })
          }
          className="btn btn-circle btn-ghost"
        >
          <HiOutlineBell className="xl:text-xl" />
        </button>
        <div className="btn btn-circle btn-ghost">
          <ChangeThemes />
        </div>
        <Link
          to={'/profile'}
          className="btn btn-ghost flex items-center"
        >
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/74099030?v=4"
                alt="foto-cowok-ganteng"
              />
            </div>
          </div>
          <span className="m-0 p-0 xl:text-[14px]">Frans</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
