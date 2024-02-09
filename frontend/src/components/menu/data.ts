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

export const menu = [
  {
    catalog: 'main',
    listItems: [
      {
        url: '/',
        icon: HiOutlineHome,
        label: 'homepage',
      },
      {
        url: '/profile',
        icon: HiOutlineUser,
        label: 'profile',
      },
    ],
  },
  {
    catalog: 'lists',
    listItems: [
      {
        url: '/users',
        icon: HiOutlineUsers,
        label: 'users',
      },
      {
        url: '/products',
        icon: HiOutlineCube,
        label: 'products',
      },
      {
        url: '/orders',
        icon: HiOutlineClipboardDocumentList,
        label: 'orders',
      },
      {
        url: '/posts',
        icon: HiOutlineDocumentChartBar,
        label: 'posts',
      },
    ],
  },
  {
    catalog: 'general',
    listItems: [
      {
        url: '/notes',
        icon: HiOutlinePencilSquare,
        label: 'notes',
      },
      {
        url: '/calendar',
        icon: HiOutlineCalendarDays,
        label: 'calendar',
      },
    ],
  },
  {
    catalog: 'analytics',
    listItems: [
      {
        url: '/charts',
        icon: HiOutlinePresentationChartBar,
        label: 'charts',
      },
      {
        url: '/logs',
        icon: HiOutlineDocumentText,
        label: 'logs',
      },
    ],
  },
];
