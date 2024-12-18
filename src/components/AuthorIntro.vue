<script>
import authorImage from 'public/images/author.jpg'

export default {
  data: () => {
    return {
      authorImage,
    }
  },
}
</script>

<template>
  <div class="lg:h-screen w-screen h-max section flex justify-center items-center mt-10">
    <div class="container grid grid-cols-1 gap-3 lg:grid-flow-col lg:grid-cols-4">
      <div class="md:col-span-3">
        <div class="items-center">
          <h1 class="text-bold sm-text-3xl w-auto" v-html="$t('header.role')" />
          <div class="pt-5">
            <div class="grid grid-cols-3 font-bold mt-4 items-start">
              <div class="offer-container">
                <Icon class="offer-icons" name="mdi:design" />
                <div class="offer-text">
                  {{ $t("header.services.architecture") }}
                </div>
              </div>
              <div class="offer-container">
                <Icon class="offer-icons" name="carbon:development" />
                <div class="offer-text">
                  {{ $t("header.services.development") }}
                </div>
              </div>
              <div class="offer-container">
                <Icon class="offer-icons" name="carbon:continuous-integration" />
                <div class="offer-text">
                  {{ $t("header.services.devOps") }}
                </div>
              </div>
            </div>
            <hr class="my-1 h-1 bg-blue-700 rounded border-0 md:my-6 dark:bg-gray-700">
            <p class="mb-4 dark:bg-gray-800 dark:text-blue-200 sm:text-justify text-xl" v-html="$t('header.about')" />
          </div>
        </div>
        <div class="rounded-md shadow-sm mt-5 space-x-4 hidden lg:inline-flex" role="group">
          <button class="content_button" @click="$scrollTo('work')">
            Portfolio
          </button>
          <button class="content_button" @click="$scrollTo('expertise')">
            Skills & Tools
          </button>
          <button class="content_button" @click="$scrollTo('contact')">
            Kontakt
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

<style scoped>
.profile-icon {
  @apply w-16 h-16
}
.offer-container {
  @apply block text-center hover:animate-pulse
}
.offer-container .offer-icons {
  @apply text-8xl text-blue-700
}
.offer-container  .offer-text{
  @apply mt-2 md:text-2xl
}
.content_button{
  @apply text-lg
}
</style>
