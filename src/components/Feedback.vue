<script>
export default {
  setup() {
    const texts = [
      {
        author: 'Mark Eckert, Deutscher Tele Markt Gmbh',
        text: 'Loren hat unsere neue Addigo-Generation als Senior Software-Architekt begleitet. Sein breites IT-Wissen war für Architektur, Umsetzung und Teamabstimmung eine enorme Hilfe.',
      },
      {
        author: 'Benjamin Becker FSD Gmbh',
        text: 'Im Automotive-Projekt hat Loren komplexe Aufgaben schnell durchdrungen und skalierbare Lösungen gebaut. Fachlich stark, kommunikativ klar und immer teamorientiert.',
      },
      {
        author: 'Mirko Oberkirchner, No-Q Gmbh',
        text: 'Loren hat mit Anpassungsfähigkeit, Drive und Qualitätsfokus überzeugt. Er hat Feedback schnell umgesetzt und damit die Produktqualität sichtbar gesteigert.',
      },
    ]
    return { texts }
  },
}
</script>

<template>
  <section id="feedback" class="section reveal-section flex flex-col justify-center" data-reveal>
    <div class="section-header text-center mx-auto">
      <h2>{{ $t('feedback.title') }}</h2>
      <p>{{ $t('feedback.subtitle') }}</p>
    </div>
    <div class="mx-auto max-w-5xl text-center">
      <Swiper
        class="feedback-swiper text-left"
        :loop="true"
        :centered-slides="true"
        :slides-per-view="1.15"
        :space-between="24"
        :effect="'coverflow'"
        :coverflow-effect="{
          rotate: 0,
          stretch: 24,
          depth: 180,
          modifier: 1.2,
          slideShadows: false,
        }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          768: { slidesPerView: 1.4, spaceBetween: 28 },
          1024: { slidesPerView: 1.8, spaceBetween: 32 },
        }"
        :modules="[
          SwiperAutoplay,
          SwiperEffectCoverflow,
          SwiperPagination,
        ]"
        :autoplay="{
          delay: 9000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(text, idx) in texts" :key="idx">
          <div class="card card-interactive feedback-card text-center">
            <div class="flex items-center justify-center gap-3 text-brand-700">
              <Icon name="material-symbols:format-quote" size="2rem" />
              <span class="card-label">Feedback</span>
            </div>
            <p class="mt-4 text-base leading-relaxed text-ink-700">
              {{ text.text }}
            </p>
            <div class="mt-6 text-sm font-semibold text-ink-600">
              {{ text.author }}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
