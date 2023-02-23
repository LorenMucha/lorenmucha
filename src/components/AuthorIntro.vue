<script>
import { siteMetaInfo } from '../constants'

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
      <div class="col-span-2">
        <div class="pl-5 items-center">
          <p class="text-3xl text-gray-500">{{ $t("header.greet")}} <Icon name="twemoji:clapping-hands"></Icon></p>
          <h1 class="text-bold text-5xl" v-html="$t('header.role')"></h1>
          <hr class="my-1 h-1 bg-blue-500 rounded border-0 md:my-6 dark:bg-gray-700">
          <p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify" v-html="$t('header.about')" />
          <div class="flex items-center justify-left">
            <button class="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Meine Arbeit
            </button>
            <a class="text-lg ml-8 active-link text-blue-500">Mehr über mich</a>
          </div>
        </div>
      </div>
      <div>
        <img
            src="~assets/images/author.png" loading="lazy" alt="me"
            class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hidden sm:block"
        >
      </div>
    </div>
  </div>
</template>
