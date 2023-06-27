<script lang="ts">
definePageMeta({
  layout: false,
})

export default {
  name: 'Climbing diary',

  setup() {
    const slides = [
      '/images/climbing_diary/barchart.png', '/images/climbing_diary/tabelle.png', '/images/climbing_diary/linechart.png',
      '/images/climbing_diary/routen.png', '/images/climbing_diary/projects.png', '/images/climbing_diary/filter.png',
    ]
    return { slides }
  },
}
</script>

<template>
  <div class="page m-0 bg-slate-100">
    <section class="container">
      <h1>Climbing-Diary</h1>
      <div>Schöne & umfangreiche Tracking-App deiner Erfolge beim Klettern und Bouldern.</div>
      <Swiper
        class="mt-10"
        :pagination="true"
        :navigation="true"
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperScrollbar, SwiperNavigation, SwiperPagination]"
      >
        <SwiperSlide v-for="image in slides" :key="image">
          <img class="object-cover w-96 rounded-t-lg object-scale-down row-span-3" :src="image">
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
  font-family: 'Roboto', sans-serif;
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
