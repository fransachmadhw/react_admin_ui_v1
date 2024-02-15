import {
  MdGroup,
  MdInventory2,
  MdAssessment,
  MdSwapHorizontalCircle,
} from 'react-icons/md';

export const totalUsers = {
  color: '#8884d8',
  IconBox: MdGroup,
  title: 'Total Users',
  number: '11.238',
  dataKey: 'users',
  percentage: 45,
  chartData: [
    { name: 'Sun', users: 400 },
    { name: 'Mon', users: 600 },
    { name: 'Tue', users: 500 },
    { name: 'Wed', users: 700 },
    { name: 'Thu', users: 400 },
    { name: 'Fri', users: 500 },
    { name: 'Sat', users: 450 },
  ],
};

export const totalProducts = {
  color: 'skyblue',
  IconBox: MdInventory2,
  title: 'Total Products',
  number: '238',
  dataKey: 'products',
  percentage: 21,
  chartData: [
    { name: 'Sun', products: 400 },
    { name: 'Mon', products: 600 },
    { name: 'Tue', products: 500 },
    { name: 'Wed', products: 700 },
    { name: 'Thu', products: 400 },
    { name: 'Fri', products: 500 },
    { name: 'Sat', products: 450 },
  ],
};
export const totalRevenue = {
  color: 'teal',
  IconBox: MdAssessment,
  title: 'Total Revenue',
  number: '$56.432',
  dataKey: 'revenue',
  percentage: -12,
  chartData: [
    { name: 'Sun', revenue: 400 },
    { name: 'Mon', revenue: 600 },
    { name: 'Tue', revenue: 500 },
    { name: 'Wed', revenue: 700 },
    { name: 'Thu', revenue: 400 },
    { name: 'Fri', revenue: 500 },
    { name: 'Sat', revenue: 450 },
  ],
};
export const totalRatio = {
  color: 'gold',
  IconBox: MdSwapHorizontalCircle,
  title: 'Total Ratio',
  number: '2.6',
  dataKey: 'ratio',
  percentage: 12,
  chartData: [
    { name: 'Sun', ratio: 400 },
    { name: 'Mon', ratio: 600 },
    { name: 'Tue', ratio: 500 },
    { name: 'Wed', ratio: 700 },
    { name: 'Thu', ratio: 400 },
    { name: 'Fri', ratio: 500 },
    { name: 'Sat', ratio: 450 },
  ],
};

export const totalVisit = {
  title: 'Total Visit',
  color: '#FF8042',
  dataKey: 'visit',
  chartData: [
    {
      name: 'Sun',
      visit: 4000,
    },
    {
      name: 'Mon',
      visit: 3000,
    },
    {
      name: 'Tue',
      visit: 2000,
    },
    {
      name: 'Wed',
      visit: 2780,
    },
    {
      name: 'Thu',
      visit: 1890,
    },
    {
      name: 'Fri',
      visit: 2390,
    },
    {
      name: 'Sat',
      visit: 3490,
    },
  ],
};

export const totalProfit = {
  title: 'Profit Earned',
  color: '#8884d8',
  dataKey: 'profit',
  chartData: [
    {
      name: 'Sun',
      profit: 4000,
    },
    {
      name: 'Mon',
      profit: 3000,
    },
    {
      name: 'Tue',
      profit: 2000,
    },
    {
      name: 'Wed',
      profit: 2780,
    },
    {
      name: 'Thu',
      profit: 1890,
    },
    {
      name: 'Fri',
      profit: 2390,
    },
    {
      name: 'Sat',
      profit: 3490,
    },
  ],
};

export const totalSource = {
  title: 'Leads by Source',
  // color: '#8884d8',
  dataKey: 'value',
  chartPieData: [
    { name: 'Mobile', value: 350, color: '#0088FE' },
    { name: 'Desktop', value: 250, color: '#00C49F' },
    { name: 'Laptop', value: 325, color: '#FFBB28' },
    { name: 'Tablet', value: 75, color: '#FF8042' },
  ],
};

export const totalRevenueByProducts = {
  title: 'Revenue by Products',
  // color: '#8884d8',
  dataKey: 'name',
  chartAreaData: [
    {
      name: 'Sun',
      smartphones: 4000,
      consoles: 2400,
      laptops: 2400,
      others: 1000,
    },
    {
      name: 'Mon',
      smartphones: 3000,
      consoles: 1398,
      laptops: 2210,
      others: 700,
    },
    {
      name: 'Tue',
      smartphones: 2000,
      consoles: 9800,
      laptops: 2290,
      others: 675,
    },
    {
      name: 'Wed',
      smartphones: 2780,
      consoles: 3908,
      laptops: 2000,
      others: 685,
    },
    {
      name: 'Thu',
      smartphones: 1890,
      consoles: 4800,
      laptops: 2181,
      others: 675,
    },
    {
      name: 'Fri',
      smartphones: 2390,
      consoles: 3800,
      laptops: 2500,
      others: 650,
    },
    {
      name: 'Sat',
      smartphones: 3490,
      consoles: 4300,
      laptops: 2100,
      others: 1075,
    },
  ],
};
