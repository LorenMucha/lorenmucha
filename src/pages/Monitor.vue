<script>
import PageSwiper from '../components/PageSwiper.vue'

export default {
  name: 'Monitor',
  components: { PageSwiper },
  setup() {
    const slides = [
      {
        url: '/images/monitor/responsive.jpeg',
        text: 'Todo',
      },
      {
        url: '/images/monitor/raster_slider.jpg',
        text: 'Todo',
      },
    ]
    return { slides }
  },
}
</script>

<template>
  <div class="page pt-20 bg-slate-100">
    <section class="bg-slate-100">
      <div class="section">
        <h1>Monitor der Siedlungs- und Freiraumentwicklung <br> (IÖR-Monitor)</h1>
        <PageSwiper :input-data="slides" />
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
