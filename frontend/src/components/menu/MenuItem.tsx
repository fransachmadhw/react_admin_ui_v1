import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';

interface MenuItemProps {
  catalog: string;
  listItems: Array<{
    isLink: boolean;
    url?: string;
    icon: IconType;
    label: string;
    onClick?: () => void;
  }>;
}

const MenuItem: React.FC<MenuItemProps> = ({
  catalog,
  listItems,
}) => {
  return (
    <div className="w-full flex flex-col items-stretch gap-2">
      <span className="hidden xl:block px-2 xl:text-sm uppercase">
        {catalog}
      </span>
      {listItems.map((listItem, index) => {
        if (listItem.isLink) {
          return (
            <NavLink
              key={index}
              to={listItem.url || ''}
              className={({ isActive }) =>
                isActive
                  ? 'btn btn-active btn-ghost btn-block justify-start'
                  : 'btn btn-ghost btn-block justify-start'
              }
            >
              <listItem.icon className="xl:text-2xl" />
              <span className="xl:text-sm capitalize">
                {listItem.label}
              </span>
            </NavLink>
          );
        } else {
          return (
            <button
              key={index}
              onClick={listItem.onClick}
              className="btn btn-ghost btn-block justify-start"
            >
              <listItem.icon className="xl:text-2xl" />
              <span className="xl:text-sm capitalize">
                {listItem.label}
              </span>
            </button>
          );
        }
      })}
    </div>
  );
};

export default MenuItem;
