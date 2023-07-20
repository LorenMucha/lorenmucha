<script>
const projects = [
  {
    header: 'work.ioer_monitor.header',
    imageSrc: '/images/monitor/monitor.jpg',
    intro: 'work.ioer_monitor.intro',
    link: 'https://monitor.ioer.de/',
    linkText: 'Website',
  },
  {
    header: 'work.climbing_diary.header',
    imageSrc: '/images/climbing_diary/climbing_diary.png',
    intro: 'work.climbing_diary.intro',
    link: '/ClimbingDiary',
  },
  {
    header: 'work.max_jacob_theater.header',
    imageSrc: '/images/max_jacob_theater/max_jacob_theater.png',
    intro: 'work.max_jacob_theater.intro',
    link: 'https://www.max-jacob-theater.de/',
    linkText: 'Website',
  },
  {
    header: 'work.monitor_api.header',
    intro: 'work.monitor_api.intro',
    imageSrc: '/images/monitor/rest_api.png',
    link: 'https://ioer-dresden.github.io/monitor-api-doku/',
    linkText: 'Doku',
  },
  {
    header: 'work.land_use_monitor.header',
    intro: 'work.land_use_monitor.intro',
    imageSrc: '/images/monitor/land_use_monitor.png',
    link: 'https://github.com/LorenMucha/IOER-Monitor-App',
    linkText: 'Git Repository',
  },
]

export default {
  name: 'Work',
  data() {
    return { workList: projects }
  },
}
</script>

<template>
  <div id="work" class="section">
    <div class="header">
      <div class="max-w-3xl mx-auto">
        <h2>
          {{ $t("work.header") }}
        </h2>
      </div>
    </div>
    <div class="mx-auto content-center">
      <div class="grid grid-col-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 place-items-center">
        <ClientOnly placeholder="Loading...">
          <div v-for="(item, index) in workList" :key="index" class="flex flex-wrap items-center justify-center">
            <NuxtLink :to="item.link" target="_blank">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
                <img
                  class="mx-auto rounded-t-lg object-cover h-32 sm:h-48 md:h-64 pb-5" :src="item.imageSrc" loading="lazy"
                  alt=""
                >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ $t(item.header) }}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="$t(item.intro)" />
                <button
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ item.linkText ? item.linkText : 'Read More' }}
                  <svg
                    aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </NuxtLink>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
