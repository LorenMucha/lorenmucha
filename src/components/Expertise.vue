<script lang="ts">
import { frameWorks, languages, tools } from '~/constants'

export default {
  data() {
    return {
      id: 'expertise',
      skillList: languages,
      frameWorks,
      languages,
      tools,
    }
  },
}
</script>

<template>
  <!-- TODO: translation -->
  <div :id="id" class="section sm:h-screen">
    <div class="header">
      <div class="max-w-3xl mx-auto py-5">
        <h2>
          Skills &amp; Tools
        </h2>
      </div>
      <div class="container">
        <h3>{{ $t("tools.languages") }}</h3>
        <ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal">
          <li
            v-for="(item, index) in languages" :key="index" class="p-4 rounded-lg flex items-end justify-center m-2"
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
      <div class="container">
        <h3>Frameworks</h3>
        <ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal">
          <li
            v-for="(item, index) in frameWorks" :key="index" class="p-4 rounded-lg flex items-end justify-center m-2"
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
      <div class="container">
        <h3>Tools</h3>
        <ul class="flex flex-wrap items-center justify-center skill-list load-hidden v-scroll-reveal">
          <li
            v-for="(item, index) in tools" :key="index" class="p-4 rounded-lg flex items-end justify-center m-2"
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
    </div>
  </div>
</template>

<style scoped>
#expertise .skill-list{
  @apply py-5
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
#expertise h3{
  @apply text-2xl mt-5 underline decoration-auto
}
</style>
