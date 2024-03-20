import climbingDiaryImage from 'public/images/climbing_diary/climbing_diary.png'
import monitorImage from 'public/images/monitor/monitor.jpg'
import apiImage from 'public/images/monitor/rest_api.png'
import monitorAppImage from 'public/images/monitor/land_use_monitor.png'
import verticalLifeImage from 'public/images/vertical_life/vl_content.jpg'
import addigoImage from 'public/images/addigo/addigo.jpg'

export const projects = [
  {
    header: 'work.addigo.header',
    imageSrc: addigoImage,
    intro: 'work.addigo.intro',
    link: 'https://addigo.de/',
    linkText: 'Website',
    technology: ['logos:laravel', 'logos:postgresql'],
  },
  {
    header: 'work.vertical_life.header',
    imageSrc: verticalLifeImage,
    intro: 'work.vertical_life.intro',
    link: 'https://8a.nu/',
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
    component: 'logos:php',
    title: 'PHP',
  },
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
    component: 'logos:tailwindcss-icon',
    title: 'TailwindCss',
  },
  {
    component: 'logos:nuxt-icon',
    title: 'Nuxt.js',
  },
  {
    component: 'logos:laravel',
    title: 'Laravel',
  },
]

export const tools = [
  {
    component: 'logos:postgresql',
    title: 'PostgreSQL',
  },
  {
    component: 'logos:mongodb',
    title: 'MongoDB',
  },
  {
    component: 'logos:kafka',
    title: 'Kafka',
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
