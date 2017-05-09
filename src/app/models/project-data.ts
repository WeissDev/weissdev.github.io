import {Project} from "./project";
import {SKILLS} from "./skill-data";

export const PROJECTS: Project[] = [
  {
    title: 'Adaptation of Board Game Imhotep',
    year: '2017',
    description: 'As part of the Software Engineering Lab at UZH. We had to adapt the board game Imhotep to make it playable online in the browser as a multiplayer game! You need to be at least 2 players to play it.',
    images: ['/assets/images/projects/imhotep-login.png', '/assets/images/projects/imhotep-playingfield.png'],
    technologiesUsed: [SKILLS[0], SKILLS[12]],
    url: 'https://imhotep-c97e9.firebaseapp.com',
    gitHubRepoUrl: ''
  },
  {
    title: 'Mataram Tour & Travel, Travel Business Website',
    year: '2016',
    description: 'A Simple Website I made for my friends travel business in Indonesia. It was my first "real" Website project and was very challenging and fun to plan and implement everything on my own.',
    images: ['/assets/images/projects/mataram-index.png', '/assets/images/projects/mataramtours.png'],
    technologiesUsed: [SKILLS[10],SKILLS[11]],
    url: 'https://mataramtours.co.id',
    gitHubRepoUrl: ''
  },
  {
    title: 'Health Tracker Web App',
    year: '2015',
    description: 'A Single Page Web-App which lets you search for food items querying the Nutritionix API. Results can be added to a list which lets you then see your total calorie consumption of all the items added together.',
    images: ['/assets/images/projects/health-tracker.png'],
    technologiesUsed: [SKILLS[13]],
    url: 'http://weissdev.github.io/health-tracker/',
    gitHubRepoUrl: 'https://github.com/WeissDev/health-tracker'
  },
  {
    title: 'Zurich Neighborhood Map',
    year: '2015',
    description: 'An interactive Neighborhood Map which uses the Google Maps, OpenWeatherMap and Wikimedia API showing information about a few notable places in Zurich. Since it was my first time working with external data API\'s, the app\'s overall look and design still needs some improvement.',
    images: ['/assets/images/projects/neighborhood-map.png'],
    technologiesUsed: [SKILLS[7]],
    url: 'http://weissdev.github.io/neighborhood-map-p5',
    gitHubRepoUrl: 'https://github.com/WeissDev/neighborhood-map-p5'
  },
  {
    title: 'Arcade Game Clone',
    year: '2015',
    description: 'As my first deep dive into Object-Oriented Programming in JavaScript, I programmed a clone of the classic arcade game Frogger at Udacity',
    images: ['/assets/images/projects/arcade-game-clone.png'],
    technologiesUsed: [SKILLS[6]],
    url: 'http://weissdev.github.io/frontend-nanodegree-arcade-game-P3/',
    gitHubRepoUrl: 'https://github.com/WeissDev/frontend-nanodegree-arcade-game-P3'
  }
];
