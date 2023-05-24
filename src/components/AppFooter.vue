<script>
import { siteMetaInfo } from '~/constants'
export default {
  name: 'AppFooter',
  data: () => {
    return {
      siteMetadata: siteMetaInfo,
    }
  },
}
</script>

<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
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
      <div class="flex px-5 sm:mb-2 sm:space-x-2 space-x-0 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }}</div>
      </div>
    </div>
  </footer>
</template>
