<script>
export default {
  setup() {
    const texts = [
      {
        author: 'Mark Eckert, Deutscher Tele Markt Gmbh',
        text: 'Loren, hat uns als Senior Software Architekt auf dem Weg zur neuen Generation von unserer Softwarelösung ADDIGO (Flutter APP / Laravel Backend) unterstützt. Dabei war sein umfassendes Fachwissen aus dem kompletten IT Bereich eine sehr große Unterstützung. Wenn es hier Sterne gäbe wären es fünf Sterne. Vielen Dank',
      },
      {
        author: 'Benjamin Becker FSD Gmbh',
        text: 'Ich hatte das Vergnügen, mit Loren an einem Projekt in der Automobilbranche zusammenzuarbeiten, und ich kann ohne Zweifel sagen, dass er eine außergewöhnliche Bereicherung für jedes Team ist.Loren bringt nicht nur technische Fähigkeiten mit – darunter Kenntnisse in Python, React sowie beim Umgang mit Geodaten –, sondern auch die Fähigkeit, komplexe Probleme zu analysieren und effiziente, skalierbare Lösungen zu entwickeln. Seine Fähigkeit, technische Herausforderungen schnell zu durchdringen und innovative Ansätze zu finden, hat maßgeblich dazu beigetragen, dass wir wichtige Projektziele erreicht haben.Was Loren auszeichnet, ist seine Teamfähigkeit und sein Engagement. Er ist stets bereit, Wissen mit anderen zu teilen und Unterstützung zu leisten, wenn es nötig ist. Die Zusammenarbeit mit ihm war geprägt von Offenheit, Kreativität und einem hohen Maß an Professionalität. Ich kann Loren uneingeschränkt jedem empfehlen, der einen talentierten und engagierten Software-Entwickler sucht.',
      },
      {
        author: 'Mirko Oberkirchner, No-Q Gmbh',
        text: 'Ich hatte das Vergnügen, eine Reihe von Projekten zu leiten und Loren als Teil meines Teams zu managen. Während seiner Zeit bei No-Q war es inspirierend, seine Entwicklung mitzuerleben. Obwohl es anfängliche Anpassungsherausforderungen aufgrund seiner Vergangenheit in größeren Unternehmen gab, waren Lorens unerschütterlicher Ehrgeiz und seine Bereitschaft zur Anpassung bemerkenswert. Sein Engagement für das Erreichen unserer gemeinsamen Ziele blieb konstant, und er zeigte stets einen Hunger sich weiterzuentwickeln. Lorens Fähigkeit, Feedback anzunehmen und aktiv an Bereichen des Wachstums zu arbeiten, war ein Beweis für seine Widerstandsfähigkeit und seinen Antrieb und half uns, hochwertige Produkte zu entwickeln, die heute Kernstück unseres aktuellen Produktangebots sind. Mit seiner positiven Einstellung und Hingabe habe ich keinen Zweifel daran, dass Loren weiterhin erfolgreich sein und bedeutende Beiträge zu seiner Karriere leisten wird. Ich empfehle Loren für seine Qualitäten und sein Potenzial für anhaltenden Erfolg.',
      },
    ]
    return { texts }
  },
}
</script>

<template>
  <div id="feedback" class="section">
    <div class="header">
      <div class="max-w-3xl mx-auto">
        <h2>
          Kundenstimmen
        </h2>
      </div>
    </div>
    <div class="w-auto mx-auto align-middle">
      <Swiper
        :loop="true" :navigation="true" :modules="[
          SwiperAutoplay,
          SwiperEffectCreative,
          SwiperNavigation,
        ]"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(text, idx) in texts" :key="idx">
          <div class="w-3/4 mx-auto">
            <i class="text-base">
              " {{ text.text }} "
            </i>
            <hr class="my-2">
            <div class="font-bold float-right">
              {{ text.author }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
