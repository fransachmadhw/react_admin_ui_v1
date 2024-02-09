import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';

interface MenuItemProps {
  catalog: string;
  listItems: Array<{ url: string; icon: IconType; label: string }>;
}

const MenuItem: React.FC<MenuItemProps> = ({
  catalog,
  listItems,
}) => {
  return (
    <div className="w-full flex flex-col items-stretch gap-2">
      <span className="px-2 xl:text-sm uppercase">{catalog}</span>
      {listItems.map((listItem) => (
        <NavLink
          to={listItem.url}
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
      ))}
    </div>
  );
};

export default MenuItem;
