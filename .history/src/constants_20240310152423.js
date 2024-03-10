import climbingDiaryImage from 'public/images/climbing_diary/climbing_diary.png'
import monitorImage from 'public/images/monitor/monitor.jpg'
import apiImage from 'public/images/monitor/rest_api.png'
import monitorAppImage from 'public/images/monitor/land_use_monitor.png'
import verticalLifeImage from 'public/images/vertical_life/vertical_life.jpeg'
import addigoImage from 'public/images/addigo/addigo.png'

export const siteMetaInfo = {
  author: 'Loren Mucha',
  author_image: '/author.png',
  position: 'Full Stack Developer',
  location: 'Nürnberg, Germany',
  headerTitle: 'Md Rathik',
  slogan: 'always stay in the moment',
  language: 'en-DE',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.lorenmucha.de',
  siteRepo: '#',
  siteLogo: '../assets/author.png',
  image: '~/assets/author.png',
  socialBanner: '/static/images/twitter-card.png',
  email: process.env.USER_MAIL,
  github: 'https://github.com/lorenmucha',
  githubUser: 'lorenmucha',
  twitter: '#',
  twitter_user: 'MDRT83716131',
  stackoverflow: '#',
  youtube: '#',
  linkedin: 'https://www.linkedin.com/in/lorenmucha/',
}

export const projects = [
  // TODO
  {
    header: 'work.addigo.header',
    imageSrc: addigoImage,
    intro: 'work.addigo.intro',
    description: 'work.addigo.description',
    link: 'https://addigo.de/en/_start-english/',
    linkText: 'Website',
  },
  {
    header: 'work.vertical_life.header',
    imageSrc: verticalLifeImage,
    intro: 'work.vertical_life.intro',
    link: 'https://www.vertical-life.info/',
    linkText: 'Website',
  },
  {
    header: 'work.ioer_monitor.header',
    imageSrc: monitorImage,
    intro: 'work.ioer_monitor.intro',
    link: 'https://monitor.ioer.de/',
    linkText: 'Website',
  },
  {
    header: 'work.climbing_diary.header',
    imageSrc: climbingDiaryImage,
    intro: 'work.climbing_diary.intro',
    // TODO: link: '/ClimbingDiary',
    link: 'https://github.com/LorenMucha/Climbing-Diary-App',
    linkText: 'Git Repository',
  },
  {
    header: 'work.monitor_api.header',
    intro: 'work.monitor_api.intro',
    imageSrc: apiImage,
    link: 'https://ioer-dresden.github.io/monitor-api-doku/',
    linkText: 'Doku',
  },
  {
    header: 'work.land_use_monitor.header',
    intro: 'work.land_use_monitor.intro',
    imageSrc: monitorAppImage,
    link: 'https://github.com/LorenMucha/IOER-Monitor-App',
    linkText: 'Git Repository',
  },
]

export const languages = [
  {
    component: 'logos:java',
    title: 'Java',
  },
  {
    component: 'logos:kotlin-icon',
    title: 'Kotlin',
  },
  {
    component: 'logos:python',
    title: 'Python',
  },
  {
    component: 'logos:typescript-icon',
    title: 'Typescript',
  },
  {
    component: 'bi:filetype-sql',
    title: 'SQL',
  },
  {
    component: 'logos:ruby',
    title: 'Ruby',
  },
  {
    components: 'logos:php',
    title: 'PHP',
  }
]

export const frameWorks = [
  {
    component: 'logos:angular-icon',
    title: 'Angular',
  },
  {
    component: 'logos:spring-icon',
    title: 'Spring',
  },
  {
    component: 'logos:flask',
    title: 'Flask',
  },
  {
    component: 'logos:vue',
    title: 'Vuejs',
  },
  {
    component: 'logos:tailwindcss-icon',
    title: 'TailwindCss',
  },
  {
    component: 'logos:nuxt-icon',
    title: 'Nuxt.js',
  },
]

export const tools = [
  {
    component: 'logos:postgresql',
    title: 'PostgreSQL',
  },
  {
    component: 'logos:mysql',
    title: 'MySQL',
  },
  {
    component: 'simple-icons:esri',
    title: 'ArcGIS',
  },
  {
    component: 'simple-icons:qgis',
    title: 'QGIS',
  },
  {
    component: 'skill-icons:git',
    title: 'GIT',
  },
]
