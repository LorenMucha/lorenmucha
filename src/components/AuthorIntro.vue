<script>
import { siteMetaInfo } from '~/constants'

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
    <div class="container grid md:grid-cols-3 grid-flow-col">
      <div class="col-span-2">
        <div class="pl-5 items-center">
          <p class="text-3xl text-gray-500">
            {{ $t("header.greet") }} <Icon name="twemoji:clapping-hands" />
          </p>
          <h1 class="text-bold text-5xl" v-html="$t('header.role')" />
          <div class="xl:mr-10 lg:mr-10 sm:mr-0">
            <hr class="my-1 h-1 bg-blue-500 rounded border-0 md:my-6 dark:bg-gray-700">
            <p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify" v-html="$t('header.about')" />
          </div>
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
          src="~assets/images/author.png" loading="lazy" alt="me"
          class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full hidden sm:block"
        >
      </div>
    </div>
  </div>
</template>
