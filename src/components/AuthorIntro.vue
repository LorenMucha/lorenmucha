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
  <section class="section reveal-section flex items-center" data-reveal>
    <div class="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="motion-item" style="animation-delay: 60ms;">
        <div class="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-ink-400">
          <span>{{ $t('header.availability') }}</span>
          <span class="text-ink-300">·</span>
          <span>{{ $t('header.location') }}</span>
        </div>
        <h2 class="mt-5 text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
          {{ $t('header.role') }}
        </h2>
        <p class="mt-6 max-w-2xl text-lg text-ink-600" v-html="$t('header.about')" />
        <div class="mt-8 flex flex-wrap gap-3">
          <button class="btn-primary" @click="$scrollTo('contact')">
            {{ $t('header.primaryCta') }}
            <Icon name="material-symbols:arrow-forward" />
          </button>
          <button class="btn-ghost" @click="$scrollTo('work')">
            {{ $t('header.secondaryCta') }}
          </button>
        </div>
      </div>
      <div class="motion-item flex justify-center lg:justify-end" style="animation-delay: 140ms;">
        <div class="aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-[24px] border border-ink-200/70 bg-white md:max-w-[380px]">
          <img
            :src="authorImage" alt="Loren Mucha"
            class="h-full w-full object-cover object-top"
          >
        </div>
      </div>
    </div>
  </section>
</template>
