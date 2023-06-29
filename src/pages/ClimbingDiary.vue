<script lang="ts">
import GooglePlayBtn from '../components/button/GooglePlayBtn.vue'

definePageMeta({
  layout: false,
})

export default {
  name: 'Climbing Diary',
  setup() {
    const slides = [
      {
        url: '/images/climbing_diary/barchart.png',
        text: 'Statistische Auswertung deiner Erfolge',
      },
      { url: '/images/climbing_diary/tabelle.png' },
      { url: '/images/climbing_diary/linechart.png' },
      { url: '/images/climbing_diary/routen.png' },
      { url: '/images/climbing_diary/projects.png' },
      { url: '/images/climbing_diary/filter.png' },
    ]
    return { slides }
  },
}
</script>

<template>
  <div class="page m-0 bg-slate-100">
    <section class="container text-center">
      <h1>Climbing-Diary</h1>
      <div>
        Schöne & umfangreiche Tracking-App deiner Erfolge beim Klettern und
        Bouldern.
      </div>
      <button class="btn" href="#" title="Google Play">
        <img
          class="h-24 w-48 object-cover"
          src="~assets/images/google_play.png"
        >
      </button>
      <Swiper
        class="mt-10"
        :navigation="true"
        :modules="[
          SwiperAutoplay,
          SwiperEffectCreative,
          SwiperScrollbar,
          SwiperNavigation,
        ]"
      >
        <SwiperSlide v-for="(image, idx) in slides" :key="idx">
          <div class="center">
            <img
              class="mx-auto w-96 rounded-t-lg object-cover object-scale-down"
              :src="image.url"
            >
            <p class="mt-5 text-base">
              {{ image.text }}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
