// import React from 'react';
import TopDealsBox from '../components/topDealsBox/TopDealsBox';
import ChartBox from '../components/charts/ChartBox';
import {
  totalUsers,
  totalProducts,
  totalRatio,
  totalRevenue,
  totalVisit,
  totalProfit,
  totalSource,
  totalRevenueByProducts,
} from '../components/charts/data';

const Home = () => {
  return (
    <div className="home w-full p-0 m-0">
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 grid-flow-dense auto-rows-[minmax(200px,auto)] xl:auto-rows-[minmax(150px,auto)] gap-3 xl:gap-3 px-0">
        <div className="box col-span-full xl:col-span-1 row-span-3">
          <TopDealsBox />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <ChartBox chartType={'line'} {...totalUsers} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <ChartBox chartType={'line'} {...totalProducts} />
        </div>
        <div className="box row-span-3 col-span-full xl:col-span-1">
          <ChartBox chartType={'pie'} {...totalSource} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <ChartBox chartType={'line'} {...totalRatio} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <ChartBox chartType={'line'} {...totalRevenue} />
        </div>
        <div className="box row-span-2 col-span-full xl:col-span-2">
          <ChartBox chartType={'area'} {...totalRevenueByProducts} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <ChartBox chartType={'bar'} {...totalVisit} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <ChartBox chartType={'bar'} {...totalProfit} />
        </div>
      </div>
    </div>
  );
};

export default Home;
