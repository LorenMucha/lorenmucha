<script>
const languages = [
  {
    component: 'logos:typescript-icon',
    title: 'Typescript',
  },
  {
    component: 'logos:java',
    title: 'Java',
  },
  {
    component: 'logos:python',
    title: 'Python',
  },
  {
    component: 'logos:ruby',
    title: 'Ruby',
  },
  {
    component: 'logos:kotlin-icon',
    title: 'Kotlin',
  },
]
const frameWorks = [
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

export default {
  data() {
    return {
      skillList: languages,
      frameWorks,
      languages,
    }
  },
}
</script>

<template>
  <div id="expertise" class="section">
    <div class="header">
      <div class="max-w-3xl mx-auto">
        <h2>
          Skills &amp; Tools
        </h2>
      </div>
      <div class="inline-flex rounded-md shadow-sm">
        <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
        @click="skillList = languages">
          Languages
        </button>
        <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
                @click="skillList = frameWorks">
          Frameworks
        </button>
      </div>
    </div>

    <ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal">
      <li
        v-for="(item, index) in skillList" :key="index" class="p-4 rounded-lg flex items-end justify-center m-2"
        :title="item.title"
      >
        <div>
          <Icon :key="item.title" :name="item.component" size="3rem" class="w-auto mx-auto h-auto block" />
          <span class="font-bold block mt-3 mb-1">
            {{ item.title }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
