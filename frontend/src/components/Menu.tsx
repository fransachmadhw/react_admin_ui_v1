import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentChartBar,
  HiOutlinePencilSquare,
  HiOutlineCalendarDays,
  HiOutlinePresentationChartBar,
  HiOutlineDocumentText,
} from 'react-icons/hi2';

const Menu = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-5">
        {/* catalog main */}
        <div className="w-full flex flex-col items-stretch gap-2">
          <span className="px-2 xl:text-sm">MAIN</span>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineHome className="xl:text-2xl" />
            <span className="xl:text-sm">Homepage</span>
          </NavLink>
          <NavLink
            to={'/profile'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineUser className="xl:text-2xl" />
            <span className="xl:text-sm">Profile</span>
          </NavLink>
        </div>
        {/* catalog lists */}
        <div className="w-full flex flex-col items-stretch gap-2">
          <span className="px-2 xl:text-sm">LISTS</span>
          <NavLink
            to={'/users'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineUsers className="xl:text-2xl" />
            <span className="xl:text-sm">Users</span>
          </NavLink>
          <NavLink
            to={'/products'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineCube className="xl:text-2xl" />
            <span className="xl:text-sm">Products</span>
          </NavLink>
          <NavLink
            to={'/orders'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineClipboardDocumentList className="xl:text-2xl" />
            <span className="xl:text-sm">Orders</span>
          </NavLink>
          <NavLink
            to={'/posts'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineDocumentChartBar className="xl:text-2xl" />
            <span className="xl:text-sm">Posts</span>
          </NavLink>
        </div>
        {/* catalog general */}
        <div className="w-full flex flex-col items-stretch gap-2">
          <span className="px-2 xl:text-sm">GENERAL</span>
          <NavLink
            to={'/notes'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlinePencilSquare className="xl:text-2xl" />
            <span className="xl:text-sm">Notes</span>
          </NavLink>
          <NavLink
            to={'/calendar'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineCalendarDays className="xl:text-2xl" />
            <span className="xl:text-sm">Calendar</span>
          </NavLink>
        </div>
        {/* catalog analytics */}
        <div className="w-full flex flex-col items-stretch gap-2">
          <span className="px-2 xl:text-sm">GENERAL</span>
          <NavLink
            to={'/charts'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlinePresentationChartBar className="xl:text-2xl" />
            <span className="xl:text-sm">Charts</span>
          </NavLink>
          <NavLink
            to={'/logs'}
            className={({ isActive }) =>
              isActive
                ? 'btn btn-active btn-ghost btn-block justify-start'
                : 'btn btn-ghost btn-block justify-start'
            }
          >
            <HiOutlineDocumentText className="xl:text-2xl" />
            <span className="xl:text-sm">Logs</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
