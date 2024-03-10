<script lang="ts">
import PageSwiper from '../components/PageSwiper.vue'

definePageMeta({
  layout: false,
})
/*

*/
export default {
  name: 'ClimbingDiary',
  components: { PageSwiper },
  setup() {
    const slides = [
      {
        img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/barchart.png"/>',
        text: 'Statistische Auswertung deiner Erfolge in Balken Diagramm',
      },
      {
        img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/tabelle.png"/>',
        text: 'Statistische Auswertung deiner Erfolge in einer Tabellarischen Ansicht',
      },
      {
        img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/linechart.png"/>',
        text: 'Statistische Auswertung deiner Erfolge in einer Linearen Ansicht',
      },
      { img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/routen.png"/>' },
      { img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/projects.png"/>' },
      { img: '<img class="mx-auto w-96 rounded-t-lg object-cover object-scale-down" src="/images/climbing_diary/filter.png"/>' },
    ]
    return { slides }
  },
}
</script>

<template>
  <div class="page">
    <section class="bg-slate-100">
      <div class="section">
        <div class="inline-flex items-baseline">
          <h1>Climbing-Diary</h1>
          <img class="h-12 w-12 ml-10" src="/images/climbing_diary_launcher.png">
        </div>
        <div>
          Schöne & umfangreiche Tracking-App deiner Erfolge beim Klettern und
          Bouldern.
        </div>
        <button class="btn" href="#" title="Google Play">
          <img class="h-24 w-48 object-cover" src="/images/google_play.png">
        </button>
        <PageSwiper :input-data="slides" />
      </div>
    </section>
    <section class="bg-orange-100">
      <div class="section container">
        <h2>Umfangreiche Funktionen</h2>
        <div class="grid grid-cols-2">
          <div class="container">
            <img class="mx-auto h-24 rounded-lg object-cover" src="/images/climbing.png">
            <p>Klettern</p>
          </div>
          <div class="container">
            <img class="mx-auto h-24 rounded-lg object-cover" src="/images/bouldering.png">
            <p>Bouldern</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-red-100">
      <div class="section">
        <h2>Deine Daten deine Kontrolle</h2>
      </div>>
    </section>
  </div>
</template>

<style scoped></style>
