<script lang="ts">
import GooglePlayBtn from '../components/button/GooglePlayBtn.vue'
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
        <h1>Climbing-Diary</h1>
        <div>
          Schöne & umfangreiche Tracking-App deiner Erfolge beim Klettern und
          Bouldern.
        </div>
        <button class="btn" href="#" title="Google Play">
          <img class="h-24 w-48 object-cover" src="~assets/images/google_play.png">
        </button>
        <PageSwiper :input-data="slides"/>
      </div>
    </section>
    <section class="bg-orange-100">
      <div class="section container">
        <h2>Umfangreiche Funktionen</h2>
        <div class="inline-flex">
          <div class="float-left w-1/2">
            <img class="h-24 rounded-lg object-cover" src="~assets/images/climbing.png">
            <p>Klettern</p>
          </div>
          <div class="float-left w-1/2">
            <img class="h-24 rounded-lg object-cover" src="~assets/images/bouldering.png">
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
