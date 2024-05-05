import monitorImage from 'public/images/monitor/monitor.jpg'
import apiImage from 'public/images/monitor/rest_api.png'
import verticalLifeImage from 'public/images/vertical_life/vl_content.jpg'
import addigoImage from 'public/images/addigo/addigo.jpg'
import regioKontext from 'public/images/regio_kontext/regio_kontext.png'
import noQ from 'public/images/no-q/clipboard.jpg'

export const projects = [
  {
    header: 'work.addigo.header',
    imageSrc: addigoImage,
    intro: 'work.addigo.intro',
    link: 'https://addigo.de/',
    linkText: 'Website',
    customer: 'Deutscher Tele Markt GmbH',
    description: 'work.addigo.description',
    technology: [{ icon: 'logos:laravel', name: 'Laravel' },
      { icon: 'logos:mysql', name: 'MySQL' },
      { icon: 'logos:gitlab', name: 'Gitlab CI' },
      { icon: 'logos:android-icon', name: 'Android' },
      { icon: 'mdi:design', name: 'Software Architektur' },
      { icon: 'carbon:development', name: 'Lead Entwickler' },
    ],
  },
  {
    header: 'work.vertical_life.header',
    imageSrc: verticalLifeImage,
    intro: 'work.vertical_life.intro',
    link: 'https://8a.nu/',
    linkText: 'Website',
    description: 'work.vertical_life.description',
    customer: 'Vertical-Life GmbH',
    technology: [{ icon: 'logos:spring-icon', name: 'Spring Boot' },
      { icon: 'logos:kafka', name: 'Kafka' },
      { icon: 'mdi:language-ruby-on-rails', name: 'Ruby on rails' },
      { icon: 'devicon:vuejs', name: 'Vuejs' },
      { icon: 'logos:gitlab', name: 'Gitlab CI' },
      { icon: 'logos:postgresql', name: 'PostgreSQL' },
      { icon: 'logos:kubernetes', name: 'Kubernetes' },
      { icon: 'devicon:googlecloud', name: 'Google Cloud' },
      { icon: 'devicon:docker', name: 'Docker' },
    ],
  },
  {
    header: 'work.noq.header',
    imageSrc: noQ,
    intro: 'work.noq.intro',
    link: 'https://www.no-q.info/no-q-neue-funktionen/',
    linkText: 'Website',
    description: 'work.noq.description',
    customer: 'No-Q GmbH',
    technology: [
      { icon: 'mdi:language-ruby-on-rails', name: 'Ruby on rails' },
      { icon: 'devicon:vuejs', name: 'Vuejs' },
      { icon: 'logos:gitlab', name: 'Gitlab CI' },
      { icon: 'logos:postgresql', name: 'PostgreSQL' },
      { icon: 'logos:kubernetes', name: 'Kubernetes' },
      { icon: 'devicon:googlecloud', name: 'Google Cloud' },
      { icon: 'devicon:docker', name: 'Docker' },
    ],
  },
  {
    header: 'work.regio_kontext.header',
    imageSrc: regioKontext,
    intro: 'work.regio_kontext.intro',
    link: 'https://lorenmucha.github.io/ShowCaseRegioKontext/',
    linkText: 'Website',
    description: 'work.regio_kontext.description',
    customer: 'RegioKontext GmbH',
    technology: [
      { icon: 'logos:angular-icon', name: 'Angular' },
      { icon: 'logos:openlayers', name: 'OpenLayers' },
      { icon: 'logos:github', name: 'Github CI' },
      { icon: 'devicon:docker', name: 'Docker' },
    ],
  },
  {
    header: 'work.ioer_monitor.header',
    imageSrc: monitorImage,
    intro: 'work.ioer_monitor.intro',
    link: 'https://monitor.ioer.de/',
    linkText: 'Website',
    customer: 'Leibniz-Institut für ökologische Raumentwicklung',
    description: 'work.ioer_monitor.description',
    technology: [
      { icon: 'logos:flask', name: 'Flask' },
      { icon: 'logos:python', name: 'Python' },
      { icon: 'logos:php', name: 'PHP' },
      { icon: 'logos:typescript-icon', name: 'Typescript' },
      { icon: 'logos:gitlab', name: 'Gitlab CI' },
      { icon: 'logos:postgresql', name: 'PostgreSQL' },
      { icon: 'simple-icons:esri', name: 'ArcGIS' },
      { icon: 'simple-icons:qgis', name: 'QGIS' },
      { icon: 'devicon:docker', name: 'Docker' },
    ],
  },
  /*   {
    header: 'work.climbing_diary.header',
    imageSrc: climbingDiaryImage,
    intro: 'work.climbing_diary.intro',
    // TODO: link: '/ClimbingDiary',
    link: 'https://github.com/LorenMucha/Climbing-Diary-App',
    linkText: 'Git Repository',
  }, */
  {
    header: 'work.monitor_api.header',
    intro: 'work.monitor_api.intro',
    imageSrc: apiImage,
    link: 'https://ioer-dresden.github.io/monitor-api-doku/',
    linkText: 'Git Repository',
    customer: 'Leibniz-Institut für ökologische Raumentwicklung',
    description: 'work.monitor_api.description',
    technology: [
      { icon: 'logos:flask', name: 'Flask' },
      { icon: 'logos:python', name: 'Python' },
      { icon: 'logos:gitlab', name: 'Gitlab CI' },
      { icon: 'logos:postgresql', name: 'PostgreSQL' },
      { icon: 'simple-icons:esri', name: 'ArcGIS' },
      { icon: 'simple-icons:qgis', name: 'QGIS' },
      { icon: 'devicon:docker', name: 'Docker' },
    ],
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
    component: 'devicon:vuejs',
    title: 'Vue.js',
  },
  {
    component: 'logos:laravel',
    title: 'Laravel',
  },
  {
    component: 'mdi:language-ruby-on-rails',
    title: 'Ruby on Rails',
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
    component: 'devicon:docker',
    title: 'Docker',
  },
  {
    component: 'logos:kubernetes',
    title: 'Kubernetes',
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
