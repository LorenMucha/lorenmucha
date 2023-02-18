<script>
export default {
  data() {
    return {
      frontend: [
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
      ],
      frameworks: [
        /*         { component: shallowRef(Springboot), title: 'Spring Boot' },
, */
      ],
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
    </div>
    <ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal">
      <li
        v-for="(item, index) in frontend" :key="index" class="p-4 rounded-lg flex items-end justify-center m-2"
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
