import registerImg from './assets/register.png';
import taskImg from './assets/taskList.png';
import funImg from './assets/fun.png';
import danceImg from './assets/dance.png';

export const pageNavigation = [
  {
    to: 'about',
    label: 'About',
    id: 'about',
  },
  {
    to: 'road-map',
    label: 'Road map',
    id: 'road-map',
  },
  {
    to: 'contact-us',
    label: 'Contact Us',
    id: 'contact-us',
  },
];

export const roadMap = [
  {
    id: 'register',
    label: 'Register',
    imgSrc: registerImg,
    alt: 'Successfull registration',
  },
  {
    id: 'task',
    label: 'Complete the tasks',
    imgSrc: taskImg,
    alt: 'Tasks list',
  },
  {
    id: 'fun',
    label: 'Have fun',
    imgSrc: funImg,
    alt: 'two persons have fun',
  },
  {
    id: 'win',
    label: 'Win prizes',
    imgSrc: danceImg,
    alt: 'two dancing persons',
  },
];
