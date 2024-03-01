import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const today = new Date();
const tomorrow = new Date();
const randomAja1 = new Date();
const randomAja2 = new Date();
const randomAja3 = new Date();
const randomAja4 = new Date();
const nextWeek = new Date();

tomorrow.setDate(today.getDate() + 1);
randomAja1.setDate(
  today.getDate() + Math.floor(Math.random() * 8 + 1)
);
randomAja2.setDate(
  today.getDate() + Math.floor(Math.random() * 12 + 1)
);
randomAja3.setDate(
  today.getDate() + Math.floor(Math.random() * 16 + 1)
);
randomAja4.setDate(
  today.getDate() + Math.floor(Math.random() * 16 + 16)
);
nextWeek.setDate(today.getDate() + 7);

const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const tomorrowStr = tomorrow.toISOString().replace(/T.*$/, '');
const nextWeekStr = nextWeek.toISOString().replace(/T.*$/, '');
const randomStr1 = randomAja1.toISOString().replace(/T.*$/, '');
const randomStr2 = randomAja2.toISOString().replace(/T.*$/, '');
const randomStr3 = randomAja3.toISOString().replace(/T.*$/, '');
const randomStr4 = randomAja4.toISOString().replace(/T.*$/, '');

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Hari ini ngapain hah? 🙃',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Jirr kerja rodi 🤡',
    start: tomorrowStr + 'T19:00:00',
  },
  {
    id: createEventId(),
    title: 'Waduh gawat, deadline! 😑',
    start: nextWeekStr + 'T20:00:00',
  },
  {
    id: createEventId(),
    title: 'Ketemu client sombong 😠',
    start: randomStr1 + 'T09:00:00',
  },
  {
    id: createEventId(),
    title: 'Surprise rekan kerja 🥳',
    start: randomStr2 + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'Business trip uhuyyy! 😎',
    start: randomStr3,
    end: randomStr4,
  },
];

export function createEventId() {
  return String(eventGuid++);
}
