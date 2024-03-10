<script>
export default {
  name: 'PageSlider',
  props: { inputData: Object },
}
</script>

<template>
  <div>
    <Swiper
      class="mt-10" :loop="true" :navigation="true" :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperScrollbar,
        SwiperNavigation,
      ]"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(image, idx) in inputData" :key="idx">
        <div class="center">
          <div v-html="image.img" />
          <p class="mt-5 text-base">
            {{ image.text }}
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
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

.swiper-cards {
  width: 240px;
  height: 240px;
}

.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
