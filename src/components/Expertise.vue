<script>
import Nuxt from '../assets/devicon/nuxt.svg?component'
import Bootstrap from '../assets/devicon/bootstrap.svg?component'
import Node from '../assets/devicon/node.svg?component'
import Angular from '../assets/devicon/angular.svg?component'
import Javascript from '../assets/devicon/javascript.svg?component'
import Java from '../assets/devicon/java.svg?component'
import Python from '../assets/devicon/python.svg?component'
import Springboot from '../assets/devicon/springboot.svg?component'
import Flask from '../assets/devicon/flask.svg?component'
import Ruby from '../assets/devicon/ruby.svg?component'
import Kotlin from '../assets/devicon/kotlin.svg?component'
import TailwindCss from '../assets/devicon/tailwindcss.svg?component'
import Vuejs from '../assets/devicon/vuejs.svg?component'
import Typescript from '../assets/devicon/typescript.svg?component'
export default {
  data() {
    return {
      frontend: [
        { component: shallowRef(Typescript), title: 'Typescript' },
        { component: shallowRef(Javascript), title: 'Javascript' },
        { component: shallowRef(Bootstrap), title: 'Bootstrap' },
        { component: shallowRef(Vuejs), title: 'Vuejs' },
        { component: shallowRef(TailwindCss), title: 'TailwindCss' },
        { component: shallowRef(Nuxt), title: 'Nuxt' },
        { component: shallowRef(Node), title: 'Node' },
        { component: shallowRef(Angular), title: 'Angular' },
      ],
      backend: [
        { component: shallowRef(Java), title: 'Java' },
        { component: shallowRef(Python), title: 'Python' },
        { component: shallowRef(Springboot), title: 'Spring Boot' },
        { component: shallowRef(Flask), title: 'Flask' },
        { component: shallowRef(Ruby), title: 'Ruby' },
        { component: shallowRef(Kotlin), title: 'Kotlin' },
      ],
    }
  },
}
</script>

<template>
  <div id="expertise" class="section">
    <div class="w-1/2">
      <div>
        <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
          Frontend
        </h2>

        <ul class="flex flex-wrap gap-4 items-center">
          <li v-for="(item, index) in frontend" :key="index" class="flex items-center" :title="item.title">
            <component :is="item.component" :key="item.title" class="h-20 w-20" />
          </li>
        </ul>
      </div>
      <div class="mt-4">
        <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
          Backend
        </h2>
        <ul class="mb-6 flex flex-wrap gap-4">
          <li v-for="(item, index) in backend" :key="index" class="flex items-center" :title="item.title">
            <component :is="item.component" :key="item.title" class="h-20 w-20" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
