// import React from 'react'
import toast from 'react-hot-toast';
import { topDealUsers } from './data';

const TopDealsBox = () => {
  return (
    <div className="w-full p-0 m-0 flex flex-col items-stretch gap-6 2xl:gap-9">
      <span className="text-2xl xl:text-2xl 2xl:text-4xl font-bold">
        Top Deals
      </span>
      <div className="w-full flex flex-col items-stretch gap-3">
        {topDealUsers.map((user, index) => (
          <button
            onClick={() => toast('Gabisa!', { icon: '😠' })}
            key={index}
            className="w-full flex justify-between items-center h-auto btn btn-ghost px-1 py-2"
          >
            <div className="flex gap-3 2xl:gap-4 items-center">
              <div className="avatar">
                <div className="w-10 xl:w-8 2xl:w-16 rounded-full">
                  <img src={user.img} alt={`user${index}`} />
                </div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-sm xl:text-[13px] 2xl:text-lg m-0 p-0">
                  {user.username}
                </span>
                <span className="text-xs xl:text-[10px] 2xl:text-sm">
                  {user.email}
                </span>
              </div>
            </div>
            <span className="font-semibold text-lg xl:text-base 2xl:text-lg">
              $3.688
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopDealsBox;
