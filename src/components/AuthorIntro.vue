<script>
import authorImage from 'public/images/author.jpg'
import { siteMetaInfo } from '~/constants'

export default {
  data: () => {
    return {
      authorImage,
      siteMetadata: siteMetaInfo,
    }
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id)
      element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    },
  },
}
</script>

<template>
  <div class="lg:h-screen w-screen h-max section flex justify-center items-center mt-10">
    <div class="container grid grid-cols-1 gap-3 lg:grid-flow-col lg:grid-cols-4">
      <div class="md:col-span-3">
        <div class="items-center">
          <p class="text-3xl text-gray-500">
            {{ $t("header.greet") }}
            <Icon name="twemoji:clapping-hands" />
          </p>
          <h1 class="text-bold text-5xl" v-html="$t('header.role')" />
          <div class="xl:mr-10 lg:mr-10 sm:mr-0">
            <hr class="my-1 h-1 bg-blue-700 rounded border-0 md:my-6 dark:bg-gray-700">
            <div class="flex space-x-10 w-full mx-5">
              <div class="block text-center">
                <Icon class="text-6xl text-blue-700" name="mdi:design" />
                <h3 class="mt-2">
                  {{ $t("header.services.architecture") }}
                </h3>
              </div>
              <div class="block text-center">
                <Icon class="text-6xl text-blue-700" name="carbon:development" />
                <h3 class="mt-2">
                  {{ $t("header.services.development") }}
                </h3>
              </div>
              <div class="block text-center">
                <Icon class="text-6xl text-blue-700" name="nonicons:tmux-16" />
                <h3 class="mt-2">
                  {{ $t("header.services.ux") }}
                </h3>
              </div>
            </div>
            <p class="mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify text-xl" v-html="$t('header.about')" />
          </div>
          <div class="flex mb-3 space-x-4 w-fit">
            <a
              class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
              :href="siteMetadata.github"
            ><span class="sr-only">github</span>
              <img class="profile-icon" src="~assets/icon/github_new.svg"> </a><a
              class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
              :href="siteMetadata.linkedin"
            ><span class="sr-only">Linkedin</span>
              <img class="profile-icon" src="~assets/icon/linkeding.svg"> </a><a
              class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"
              :href="`mailto:${siteMetadata.email}`"
            ><span class="sr-only">mail</span>
              <img class="profile-icon" src="~assets/icon/mail.svg"></a>
          </div>
        </div>
        <div class="rounded-md shadow-sm mt-5 space-x-4 hidden lg:inline-flex" role="group">
          <button @click="scrollTo('work')">
            Projekte
          </button>
          <button @click="scrollTo('expertise')">
            Skills & Tools
          </button>
        </div>
      </div>
      <div class="row-start-1 p-5">
        <img
          :src="authorImage" alt="Author"
          class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full block object-cover"
        >
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.profile-icon {
  @apply w-16 h-16
}
</style>
