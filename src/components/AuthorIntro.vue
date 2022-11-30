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
  data: () => {
    return {
      siteMetadata: siteMetaInfo,
    }
  },
}
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <div class="container grid grid-cols-3 grid-flow-col">
      <div class="col-span-3">
        <div class="pl-5 items-center">
          <h1 class="font-bold text-4xl">
            Loren Mucha
          </h1>
          <div>Fullstack Software Developer</div>
          <hr class="my-1 w-2/3 h-1 bg-blue-500 rounded border-0 md:my-6 dark:bg-gray-700">
          <div class="flex mb-3 space-x-4 w-fit">
            <a
              class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
              :href="siteMetadata.github"
            ><span class="sr-only">github</span>
              <img class="w-8 h-8" src="~assets/icon/github_new.svg"> </a><a
              class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
              :href="siteMetadata.linkedin"
            ><span class="sr-only">Linkedin</span>
              <img class="w-8 h-8" src="~assets/icon/linkeding.svg"> </a><a
              class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
              :href="`mailto:${siteMetadata.email}`"
            ><span class="sr-only">mail</span>
              <img class="w-8 h-8" src="~assets/icon/mail.svg"></a>
          </div>
        </div>
      </div>
      <div>
        <img
          src="~assets/author.png" loading="lazy" alt="me"
          class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hidden sm:block"
        >
      </div>
    </div>
  </div>
</template>
