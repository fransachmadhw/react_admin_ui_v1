// import toast from 'react-hot-toast';
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
  HiOutlineArrowLeftOnRectangle,
} from 'react-icons/hi2';
// import { IoSettingsOutline } from 'react-icons/io5';

export const menu = [
  {
    catalog: 'main',
    listItems: [
      {
        isLink: true,
        url: '/',
        icon: HiOutlineHome,
        label: 'homepage',
      },
      {
        isLink: true,
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
        isLink: true,
        url: '/users',
        icon: HiOutlineUsers,
        label: 'users',
      },
      {
        isLink: true,
        url: '/products',
        icon: HiOutlineCube,
        label: 'products',
      },
      {
        isLink: true,
        url: '/orders',
        icon: HiOutlineClipboardDocumentList,
        label: 'orders',
      },
      {
        isLink: true,
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
        isLink: true,
        url: '/notes',
        icon: HiOutlinePencilSquare,
        label: 'notes',
      },
      {
        isLink: true,
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
        isLink: true,
        url: '/charts',
        icon: HiOutlinePresentationChartBar,
        label: 'charts',
      },
      {
        isLink: true,
        url: '/logs',
        icon: HiOutlineDocumentText,
        label: 'logs',
      },
    ],
  },
  {
    catalog: 'miscellaneous',
    listItems: [
      // {
      //   isLink: true,
      //   url: '/settings',
      //   icon: IoSettingsOutline,
      //   label: 'settings',
      // },
      {
        isLink: true,
        url: '/login',
        icon: HiOutlineArrowLeftOnRectangle,
        label: 'log out',
      },
    ],
  },
];
