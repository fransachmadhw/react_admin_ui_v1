// import React from 'react';
import TopDealsBox from '../components/topDealsBox/TopDealsBox';
import SmallChartBox from '../components/charts/SmallChartBox';
import {
  totalUsers,
  totalProducts,
  totalRatio,
  totalRevenue,
} from '../components/charts/data';

const Home = () => {
  return (
    <div className="home w-full p-0 m-0">
      <div className="w-full grid grid-cols-1 xl:grid-cols-4 grid-flow-dense xl:auto-rows-[minmax(150px,auto)] gap-3 xl:gap-3 px-0">
        <div className="box col-span-full xl:col-span-1 row-span-3">
          <TopDealsBox />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <SmallChartBox {...totalUsers} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <SmallChartBox {...totalProducts} />
        </div>
        <div className="box row-span-3 col-span-full xl:col-span-1">
          4
        </div>
        <div className="box col-span-full xl:col-span-1">
          <SmallChartBox {...totalRatio} />
        </div>
        <div className="box col-span-full xl:col-span-1">
          <SmallChartBox {...totalRevenue} />
        </div>
        <div className="box row-span-2 col-span-full xl:col-span-2">
          7
        </div>
        <div className="box col-span-full xl:col-span-1">8</div>
        <div className="box col-span-full xl:col-span-1">9</div>
      </div>
    </div>
  );
};

export default Home;
