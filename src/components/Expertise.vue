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
  <section :id="id" class="section">
    <div class="section-header text-left">
      <h2>{{ $t('expertise.title') }}</h2>
      <p>{{ $t('expertise.subtitle') }}</p>
    </div>
    <div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.languagesTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.languagesHint') }}</p>
        <ul class="mt-5 flex flex-wrap gap-3">
          <li v-for="(item, index) in languages" :key="index" class="surface-muted flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-700" :title="item.title">
            <Icon :name="item.component" size="1.4rem" />
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.frameworksTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.frameworksHint') }}</p>
        <ul class="mt-5 flex flex-wrap gap-3">
          <li v-for="(item, index) in frameWorks" :key="index" class="surface-muted flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-700" :title="item.title">
            <Icon :name="item.component" size="1.4rem" />
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="card-title">{{ $t('expertise.toolsTitle') }}</h3>
        <p class="mt-2 text-sm text-ink-600">{{ $t('expertise.toolsHint') }}</p>
        <ul class="mt-5 flex flex-wrap gap-3">
          <li v-for="(item, index) in tools" :key="index" class="surface-muted flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink-700" :title="item.title">
            <Icon :name="item.component" size="1.4rem" />
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
