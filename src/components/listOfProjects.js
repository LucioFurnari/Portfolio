import reactIcon from '../assets/react_icon.svg';
import tailwindIcon from '../assets/tailwind_icon.svg';
import firebaseIcon from '../assets/firebase_icon.svg';
import reactRouterIcon from '../assets/react-router_icon.svg';
import viteIcon from '../assets/vite_icon.svg';
import javascriptIcon from  '../assets/js_icon.svg';
import cssIcon from '../assets/css_icon.svg';
import webpackIcon from '../assets/webpack_icon.svg';
import htmlIcon from '../assets/html_icon.svg';

import onlineShopImage from  '../assets/online_shop.png';
import weatherAppImage from '../assets/weatherApp_image.png';
import gameImage from '../assets/game_image.png';

export const onlineShopProject = {
  projectTitle: 'Online shop', 
  projectDescription: 'A full stack single page application built with React, Tailwind css and Firebase for back end, that allow user to register, login, create a shop cart and buy products.', 
  projectImage: onlineShopImage,
  arrayOfTech: [ 
    {
      url: reactIcon,
      techName: 'React Js',
      id: 1
    },
    {
      url: tailwindIcon,
      techName: 'Tailwind Css',
      id: 2
    },
    {
      url: firebaseIcon,
      techName: 'Firebase',
      id: 3
    },
    {
      url: reactRouterIcon,
      techName: 'React router',
      id: 4
    },
    {
      url: viteIcon,
      techName: 'Vite',
      id: 5
    }
  ], 
  liveLink: 'https://luciofurnari.github.io/shopping-cart/', 
  codeLink: 'https://github.com/LucioFurnari/shopping-cart',
}

export const weatherAppProject = {
  projectTitle: 'Weather App',
  projectDescription: 'Weather app that fetch data from two APIs to get location and the weather for 7 days, a svg graphics that show the temperature of the day ',
  projectImage: weatherAppImage,
  arrayOfTech: [
    {
      url: htmlIcon,
      techName: 'Html',
      id: 1
    },
    {
      url: javascriptIcon,
      techName: 'Javascript',
      id: 2
    },
    {
      url: cssIcon,
      techName: 'Css',
      id: 3
    },
    {
      url: webpackIcon,
      techName: 'Webpack',
      id: 4
    }
  ],
  liveLink: 'https://luciofurnari.github.io/Weather-App/',
  codeLink: 'https://github.com/LucioFurnari/Weather-App'
}

export const gameProject = {
  projectTitle: 'Tic Tac Toe',
  projectDescription: 'Tic Tac Toe game, made in html/css and js, with the use of factory functions and IIFE to create modules, that way i can separate the logic code and the visual. ',
  projectImage: gameImage,
  arrayOfTech: [
    {
      url: htmlIcon,
      techName: 'Html',
      id: 1
    },
    {
      url: javascriptIcon,
      techName: 'Javascript',
      id: 2
    },
    {
      url: cssIcon,
      techName: 'Css',
      id: 3
    },
  ],
  liveLink: 'https://luciofurnari.github.io/Tic-Tac-Toe/',
  codeLink: 'https://github.com/LucioFurnari/Tic-Tac-Toe'
}