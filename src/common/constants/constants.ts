import htmlIcon from '../../assets/skillsImages/html.png';
import cssIcon from '../../assets/skillsImages/css-3.png';
import materialUiIcon from '../../assets/skillsImages/materialUI.png';
import jsIcon from '../../assets/skillsImages/js.png';
import reactIcon from '../../assets/skillsImages/structure.png';
import reduxIcon from '../../assets/skillsImages/redux.png';
import threeJsIcon from '../../assets/skillsImages/three-js.png';
import nodeJsIcon from '../../assets/skillsImages/pngwing.com.png';
import mongoDbIcon from '../../assets/skillsImages/Mongodb-PNG-Image-HD.png';
import gitIcon from '../../assets/skillsImages/git-logo.png';
import TodolistImage from '../../assets/projectsImages/TO-DO-LIST.png';
import ThreeJsImage from '../../assets/projectsImages/threeJSMobile.jpg';
import SongBirdsImage from '../../assets/projectsImages/Cute little birds set.jpg';
import WebsocketChatImage from '../../assets/projectsImages/websocket-chat.jpg';

export const PATH = {
  MAIN: 'main',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACTS: 'contacts',
};

export const HorizontalFromLeft = 'horizontalFromLeft' as const;
export const HorizontalFromRight = 'horizontalFromRight' as const;
export const VerticalFromTop = 'verticalFromTop' as const;
export const VerticalFomBottom = 'verticalFromBottom' as const;

export const skills = [
  {
    id: 1,
    title: 'HTML',
    description: ['Semantic', 'Responsive design'],
    image: htmlIcon,
  },
  {
    id: 2,
    title: 'CSS',
    description: ['Grid', 'Flex', 'SCSS', 'Tailwind CSS'],
    image: cssIcon,
  },
  {
    id: 3,
    title: 'UI Kit',
    description: ['Material UI', 'Radix UI'],
    image: materialUiIcon,
  },
  { id: 4, title: 'JavaScript', description: ['Promise', 'REST API'], image: jsIcon },
  {
    id: 5,
    title: 'React',
    description: ['React Query', 'Life cycle methods', 'UseMemo', 'UseCallback'],
    image: reactIcon,
  },
  {
    id: 6,
    title: 'Redux',
    description: ['Redux', 'Redux Toolkit', 'Redux Thunk', 'Redux Saga'],
    image: reduxIcon,
  },
  {
    id: 7,
    title: 'Three JS',
    description: ['React-three/fiber', 'React-three/drei'],
    image: threeJsIcon,
  },
  {
    id: 8,
    title: 'Express JS',
    description: ['Web server', 'Authorization', 'Cookies'],
    image: nodeJsIcon,
  },
  {
    id: 9,
    title: 'Mongo DB',
    description: ['Connection to server', 'CRUD operations DB'],
    image: mongoDbIcon,
  },
  {
    id: 10,
    title: 'Git',
    description: ['Blobs', 'Trees', 'Objects', 'Hooks'],
    image: gitIcon,
  },
];

export const projects = [
  {
    id: 1,
    title: 'Todolist',
    description:
      'Stack: TypeScript, React, React-Router, Redux Toolkit, Redux-Thunk, MUI, Formik, Axios, StoryBook, Jest',
    image: TodolistImage,
    path: 'https://todolist-taskslist.netlify.app',
  },
  {
    id: 2,
    title: 'Three JS Pix Mobile',
    description:
      'Stack: Typescript, React, React-Router, React-three/fiber,' +
      ' React-three/drei, React Query, Zustand, Tailwind CSS, Radix UI, Axios, React Hook Form',
    image: ThreeJsImage,
    path: 'https://threejs-shop.netlify.app',
  },
  {
    id: 3,
    title: 'Song Birds Quiz',
    description:
      'Stack: Typescript, React, React-Router, Redux Toolkit, Redux-Thunk, Axios, SCSS',
    image: SongBirdsImage,
    path: 'https://song-birds-quiz.netlify.app',
  },
  {
    id: 4,
    title: 'Websocket Chat',
    description:
      'Stack: Typescript, React, Socket.io, React-Router, Redux Toolkit, Redux-Thunk, Axios, Formik, SCSS',
    image: WebsocketChatImage,
    path: 'https://websocketchat-client.netlify.app',
  },
];

export const Links = {
  telegram: 'https://t.me/Ilya_Anoshko',
  github: 'https://github.com/Ilya030290',
  linkedIn: 'https://www.linkedin.com/in/ilya-anoshko-3277a8238',
};
