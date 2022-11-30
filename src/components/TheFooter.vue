<script>
const siteMetaInfo = {
  title: 'Loren Mucha | Full Stack Software Developer',
  author: 'Loren Mucha',
  author_image: '/author.png',
  position: 'Full Stack Developer',
  location: 'Nürnberg, Germany',
  headerTitle: 'Md Rathik',
  slogan: 'always stay in the moment',
  description:
    'A tech enthusiast & self taught learner. Love to talk the way of tech.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://lorenmucha.de',
  siteRepo: '#',
  siteLogo: '../assets/author.png',
  image: '~/assets/author.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'lorenmucha@gmail.com',
  github: 'https://github.com/lorenmucha',
  githubUser: 'lorenmucha',
  twitter: '#',
  twitter_user: 'MDRT83716131',
  stackoverflow: '#',
  youtube: '#',
  linkedin: 'https://www.linkedin.com/in/lorenmucha/',
}

export default {
  data() {
    return {
      siteMetadata: siteMetaInfo,
    }
  },
}
</script>

<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.github"
        ><span class="sr-only">github</span>
          <img class="w-8 h-8" src="~assets/icon/github_new.svg"> </a><a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.linkedin"
        ><span class="sr-only">Linkedin</span>
          <img class="w-8 h-8" src="~assets/icon/linkeding.svg"> </a><a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${siteMetadata.email}`"
        ><span class="sr-only">mail</span>
          <img class="w-8 h-8" src="~assets/icon/mail.svg"></a>
      </div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <a href="/">{{ siteMetadata.author }}'s blog - {{ siteMetadata.slogan }}</a>
      </div>
      <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mdrathik/tailwind-nuxtjs-starter-blog"
        />
      </div>
    </div>
  </footer>
</template>
