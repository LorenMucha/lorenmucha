<template>
  <section id="about" class="section reveal-section" data-reveal>
    <div class="section-header text-left">
      <h2>{{ $t('about.title') }}</h2>
      <p>{{ $t('about.subtitle') }}</p>
    </div>
    <div class="mx-auto max-w-4xl">
      <p class="text-lg leading-relaxed text-ink-700" v-html="$t('about.body1')" />
      <p class="mt-5 text-lg leading-relaxed text-ink-700" v-html="$t('about.body2')" />
      <p class="mt-5 text-lg leading-relaxed text-ink-700" v-html="$t('about.body3')" />
    </div>
  </section>
</template>
