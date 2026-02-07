<script>
import { frameWorks, languages, tools } from '~/constants'

export default {
  data() {
    return {
      id: 'expertise',
      frameWorks,
      languages,
      tools,
    }
  },
}
</script>

<template>
  <section :id="id" class="section reveal-section" data-reveal>
    <div class="section-header text-left">
      <h2>{{ $t('expertise.title') }}</h2>
      <p>{{ $t('expertise.subtitle') }}</p>
    </div>
    <div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-4">
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.languagesTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.languagesHint') }}</p>
        <ul class="mt-5 grid gap-3">
          <li v-for="(item, index) in languages" :key="index" class="surface-muted flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-700" :title="item.title">
            <Icon :name="item.component" size="1.4rem" />
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.frameworksTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.frameworksHint') }}</p>
        <ul class="mt-5 grid gap-3">
          <li v-for="(item, index) in frameWorks" :key="index" class="surface-muted flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-700" :title="item.title">
            <Icon :name="item.component" size="1.4rem" />
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.toolsTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.toolsHint') }}</p>
        <ul class="mt-5 grid gap-3">
          <li v-for="(item, index) in tools" :key="index" class="surface-muted flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-700" :title="item.title">
            <Icon :name="item.component" size="1.4rem" />
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.certificationsTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.certificationsHint') }}</p>
        <a
          class="mt-5 inline-flex items-center gap-3 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:bg-ink-50"
          href="https://www.certible.com/badge/f486e814-9c64-4418-af6d-8c0f745bf22c/"
          target="_blank"
          rel="noopener"
          aria-label="iSAQB badge"
        >
          <img
            src="https://assets.badges.certible.com/badge-classes/certible/CPSAF.png"
            alt="iSAQB badge"
            class="h-7 w-7"
            loading="lazy"
          >
          <span>iSAQB CPSA-F</span>
        </a>
      </div>
    </div>
  </section>
</template>
