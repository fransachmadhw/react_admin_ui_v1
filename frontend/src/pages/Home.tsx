// import React from 'react';
import TopDealsBox from '../components/topDealsBox/TopDealsBox';

const Home = () => {
  return (
    <div className="home w-full p-0 m-0">
      <div className="w-full grid xl:grid-cols-4 grid-flow-dense xl:auto-rows-[minmax(0fr,auto)] xl:gap-3 px-0">
        <div className="box row-span-3">
          <TopDealsBox />
        </div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box row-span-3 col-span-1">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
        <div className="box row-span-2 col-span-2">7</div>
        <div className="box">8</div>
        <div className="box">9</div>
      </div>
    </div>
  );
};

export default Home;
