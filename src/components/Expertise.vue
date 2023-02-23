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
      <div class="inline-flex rounded-full shadow-sm p-3">
        <button
          type="button"
          :class="{ highlighted: skillList === languages }" @click="skillList = languages">
          Languages
        </button>
        <button
          type="button"
          :class="{ highlighted: skillList === frameWorks }" @click="skillList = frameWorks">
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

<style scoped>
#expertise .header button.highlighted{
  @apply text-white bg-blue-500
}

#expertise .header button{
  @apply py-4 px-5 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-full first:ml-0 last:rounded-r-full border font-medium bg-white text-gray-800 align-middle;
}
#expertise .skill-list li{
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  width: 120px;
  height: 120px;
  transition: all .6s;
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 5%), 0 0 3px 0 rgb(0 0 0 / 10%);
}
#expertise .skill-list svg{
  max-width: 3rem;
  max-height: 3rem;
}
</style>
