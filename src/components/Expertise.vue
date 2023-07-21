<script>
import { frameWorks, languages } from '~/constants'

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
      <div class="container">
        <h3>Programmiersprachen</h3>
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
    </div>
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
