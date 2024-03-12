// import React from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  BarChart,
  Bar,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const Charts = () => {
  const dataLine = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const dataPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const dataArea = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const dataBar = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-10 xl:gap-8">
        {/* heading */}
        <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
          Charts
        </h2>
        {/* grid */}
        <div className="w-full grid sm:grid-cols-2 gap-5">
          <div className="bg-neutral-50 dark:bg-neutral p-5 rounded-2xl w-full min-h-[256px] xl:min-h-[320px] 3xl:min-h-[460px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={300} height={100} data={dataLine}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral p-5 rounded-2xl w-full min-h-[256px] xl:min-h-[320px] 3xl:min-h-[460px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataPie}
                  innerRadius={'70%'}
                  outerRadius={'90%'}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dataPie.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral p-5 rounded-2xl w-full min-h-[256px] xl:min-h-[320px] 3xl:min-h-[460px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataArea}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                {/* <Tooltip /> */}
                <Area
                  type="monotone"
                  dataKey="uv"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="amt"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral p-5 rounded-2xl w-full min-h-[256px] xl:min-h-[320px] 3xl:min-h-[460px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dataBar}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
