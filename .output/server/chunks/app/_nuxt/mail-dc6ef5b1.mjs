import { b as buildAssetsURL } from '../../handlers/renderer.mjs';

const siteMetaInfo = {
  title: "Loren Mucha",
  author: "Loren Mucha",
  author_image: "/author.png",
  position: "Full Stack Developer",
  location: "N\xFCrnberg, Germany",
  headerTitle: "Md Rathik",
  slogan: "always stay in the moment",
  description: "A tech enthusiast & self taught learner. Love to talk the way of tech.",
  language: "en-us",
  theme: "system",
  // system, dark or light
  siteUrl: "https://lorenmucha.de",
  siteRepo: "#",
  siteLogo: "../assets/author.png",
  image: "~/assets/author.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "lorenmucha@gmail.com",
  github: "https://github.com/lorenmucha",
  githubUser: "lorenmucha",
  twitter: "#",
  twitter_user: "MDRT83716131",
  stackoverflow: "#",
  youtube: "#",
  linkedin: "https://www.linkedin.com/in/lorenmucha/"
};
const projects = [
  {
    header: "work.ioer_monitor.header",
    imageSrc: "/images/monitor/monitor.jpg",
    intro: "work.ioer_monitor.intro",
    link: "https://monitor.ioer.de/",
    linkText: "Website"
  },
  {
    header: "work.climbing_diary.header",
    imageSrc: "/images/climbing_diary/climbing_diary.png",
    intro: "work.climbing_diary.intro",
    // TODO: link: '/ClimbingDiary',
    link: "https://github.com/LorenMucha/Climbing-Diary-App",
    linkText: "Git Repository"
  },
  {
    header: "work.monitor_api.header",
    intro: "work.monitor_api.intro",
    imageSrc: "/images/monitor/rest_api.png",
    link: "https://ioer-dresden.github.io/monitor-api-doku/",
    linkText: "Doku"
  },
  {
    header: "work.land_use_monitor.header",
    intro: "work.land_use_monitor.intro",
    imageSrc: "/images/monitor/land_use_monitor.png",
    link: "https://github.com/LorenMucha/IOER-Monitor-App",
    linkText: "Git Repository"
  },
  {
    header: "work.max_jacob_theater.header",
    imageSrc: "/images/max_jacob_theater/max_jacob_theater.png",
    intro: "work.max_jacob_theater.intro",
    link: "https://www.max-jacob-theater.de/",
    linkText: "Website"
  }
];
const languages = [
  {
    component: "logos:java",
    title: "Java"
  },
  {
    component: "logos:kotlin-icon",
    title: "Kotlin"
  },
  {
    component: "logos:python",
    title: "Python"
  },
  {
    component: "logos:typescript-icon",
    title: "Typescript"
  },
  {
    component: "bi:filetype-sql",
    title: "SQL"
  },
  {
    component: "logos:ruby",
    title: "Ruby"
  }
];
const frameWorks = [
  {
    component: "logos:angular-icon",
    title: "Angular"
  },
  {
    component: "logos:spring-icon",
    title: "Spring"
  },
  {
    component: "logos:flask",
    title: "Flask"
  },
  {
    component: "logos:vue",
    title: "Vuejs"
  },
  {
    component: "logos:tailwindcss-icon",
    title: "TailwindCss"
  },
  {
    component: "logos:nuxt-icon",
    title: "Nuxt.js"
  }
];
const tools = [
  {
    component: "logos:postgresql",
    title: "PostgreSQL"
  },
  {
    component: "logos:mysql",
    title: "MySQL"
  },
  {
    component: "simple-icons:esri",
    title: "ArcGIS"
  },
  {
    component: "simple-icons:qgis",
    title: "QGIS"
  },
  {
    component: "skill-icons:git",
    title: "GIT"
  }
];
const _imports_0 = "" + buildAssetsURL("github_new.4e3fe23c.svg");
const _imports_1 = "" + buildAssetsURL("linkeding.34c3bc6d.svg");
const _imports_2 = "" + buildAssetsURL("mail.7542c5e6.svg");

export { _imports_0 as _, _imports_1 as a, _imports_2 as b, frameWorks as f, languages as l, projects as p, siteMetaInfo as s, tools as t };
//# sourceMappingURL=mail-dc6ef5b1.mjs.map
