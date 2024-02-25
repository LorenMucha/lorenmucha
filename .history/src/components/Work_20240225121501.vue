<script>
import { projects } from '~/constants'

export default {
  name: 'Work',
  data() {
    return {
      id: 'work',
      workList: projects,
    }
  },
}
</script>

<template>
  <div :id="id" :ref="id" class="section">
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
                  :alt="$t(item.header)"
                >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {{ $t(item.header) }}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="$t(item.intro)" />
                <p>{{ item.description ? $titem.description : '' }}</p>
                <button>
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
