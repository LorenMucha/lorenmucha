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
  <section class="section pt-28 md:pt-32">
    <div class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="motion-item" style="animation-delay: 60ms;">
        <div class="flex flex-wrap items-center gap-3">
          <span class="chip">{{ $t('header.availability') }}</span>
          <span class="chip">{{ $t('header.focus') }}</span>
          <span class="pill">{{ $t('header.location') }}</span>
        </div>
        <h2 class="mt-4 text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
          <span class="relative inline-block">
            <span class="relative z-10">{{ $t('header.role') }}</span>
            <span
              class="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-accent-100/80"
              aria-hidden="true"
            />
          </span>
        </h2>
        <p class="mt-6 text-lg text-ink-600" v-html="$t('header.about')" />
        <div class="mt-8 flex flex-wrap gap-4">
          <button class="btn-primary" @click="$scrollTo('contact')">
            {{ $t('header.primaryCta') }}
            <Icon name="material-symbols:arrow-forward" />
          </button>
          <button class="btn-tonal" @click="$scrollTo('work')">
            {{ $t('header.secondaryCta') }}
          </button>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <div class="surface-muted rounded-[22px] p-4">
            <p class="card-label">{{ $t('header.highlights.scopeTitle') }}</p>
            <p class="mt-2 text-sm text-ink-600">{{ $t('header.highlights.scopeText') }}</p>
          </div>
          <div class="surface-muted rounded-[22px] p-4">
            <p class="card-label">{{ $t('header.highlights.capacityTitle') }}</p>
            <p class="mt-2 text-sm text-ink-600">{{ $t('header.highlights.capacityText') }}</p>
          </div>
        </div>
        <div class="mt-10 grid gap-4 sm:grid-cols-3">
          <div class="surface-strong rounded-[22px] p-4">
            <Icon class="text-brand-700" name="mdi:design" size="2rem" />
            <div class="mt-3 font-semibold text-ink-800">{{ $t('header.services.architecture') }}</div>
            <p class="mt-1 text-sm text-ink-600">{{ $t('header.services.architectureDesc') }}</p>
          </div>
          <div class="surface-strong rounded-[22px] p-4">
            <Icon class="text-brand-700" name="carbon:development" size="2rem" />
            <div class="mt-3 font-semibold text-ink-800">{{ $t('header.services.development') }}</div>
            <p class="mt-1 text-sm text-ink-600">{{ $t('header.services.developmentDesc') }}</p>
          </div>
          <div class="surface-strong rounded-[22px] p-4">
            <Icon class="text-brand-700" name="carbon:continuous-integration" size="2rem" />
            <div class="mt-3 font-semibold text-ink-800">{{ $t('header.services.devOps') }}</div>
            <p class="mt-1 text-sm text-ink-600">{{ $t('header.services.devOpsDesc') }}</p>
          </div>
        </div>
      </div>
      <div class="motion-item" style="animation-delay: 140ms;">
        <div class="card relative overflow-hidden">
          <div class="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-100/80 blur-3xl" />
          <div class="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-accent-100/80 blur-3xl" />
          <img
            :src="authorImage" alt="Loren Mucha"
            class="image-float h-80 w-full rounded-[26px] object-cover object-top shadow-soft md:h-[420px]"
          >
        </div>
      </div>
    </div>
  </section>
</template>
