import React from 'react';
import { IconType } from 'react-icons';
import {
  LineChart,
  Line,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts';

interface SmallChartBoxProps {
  color: string;
  IconBox: IconType;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
}

const SmallChartBox: React.FC<SmallChartBoxProps> = ({
  color,
  IconBox,
  title,
  dataKey,
  number,
  percentage,
  chartData,
}) => {
  return (
    <div className="w-full h-full flex justify-between items-end xl:gap-5">
      <div className="flex h-full flex-col justify-between items-start">
        <div className="flex items-center gap-2">
          <IconBox className="m-0 p-0 xl:text-[30px] leading-none" />
          <span className="xl:w-[60px] m-0 p-0 xl:text-[15px] leading-none font-semibold">
            {title}
          </span>
        </div>
        <span className="font-bold xl:text-2xl m-0 p-0">
          {number}
        </span>
        <div className=" h-auto p-0 font-medium text-base-content no-underline m-0">
          View All
        </div>
      </div>
      <div className="flex h-full grow flex-col justify-between items-end">
        <div className="w-full h-full xl:h-[60%]">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={chartData}>
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
              <Tooltip
                contentStyle={{
                  background: color,
                  border: 'none',
                  color: 'white',
                  borderRadius: '8px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
                itemStyle={{ color: 'white' }}
                labelStyle={{ display: 'none' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex xl:flex-col 2xl:flex-row gap-2 xl:gap-0 xl:items-end">
          <span
            className={`${
              percentage > 0 ? 'text-success' : 'text-error'
            } xl:text-xl font-bold`}
          >
            {percentage}%
          </span>
          <span className="font-medium xl:text-sm xl:pb-[2px]">
            this month
          </span>
        </div>
      </div>
    </div>
  );
};

export default SmallChartBox;
