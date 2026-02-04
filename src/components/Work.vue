<script>
import { projects } from '~/constants'

export default {
  name: 'Work',
  data() {
    return {
      id: 'work',
      workList: projects,
    }
  },
}
</script>

<template>
  <section :id="id" class="section reveal-section" data-reveal>
    <div class="section-header text-left">
      <h2>{{ $t('work.header') }}</h2>
      <p>{{ $t('work.subheader') }}</p>
    </div>
    <div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
      <ClientOnly placeholder="Loading...">
        <article
          v-for="(item, index) in workList"
          :key="index"
          class="card card-interactive motion-item"
          :style="{ animationDelay: `${index * 80 + 60}ms` }"
        >
          <div class="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div class="rounded-[22px] bg-ink-50/70 p-3" :class="item.imageWrapClass ? item.imageWrapClass : ''">
              <img
                class="media-hover h-48 w-full rounded-[18px] object-cover md:h-56"
                :class="item.imageClass ? item.imageClass : ''"
                :src="item.imageSrc" loading="lazy"
                :alt="$t(item.header)"
              >
            </div>
            <div class="flex h-full flex-col">
              <div>
                <p class="card-label">{{ item.customer }}</p>
                <h3 class="card-title mt-2">{{ $t(item.header) }}</h3>
                <p class="mt-3 text-sm text-ink-600" v-html="$t(item.intro)" />
                <div v-if="item.description" class="mt-4 rounded-[18px] bg-ink-50 px-4 py-3 text-sm text-ink-600">
                  <p class="card-label">{{ $t('work.impactLabel') }}</p>
                  <p class="mt-2" v-html="$t(item.description)" />
                </div>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">
                <div v-for="(ob, _index) in item.technology" :key="_index" class="surface-muted rounded-full px-3 py-1 text-xs font-semibold text-ink-600" :title="ob.name">
                  <span class="inline-flex items-center gap-2">
                    <Icon :name="ob.icon" size="1rem" />
                    {{ ob.name }}
                  </span>
                </div>
              </div>
              <div class="mt-6">
                <a class="btn-ghost" :href="item.link" target="_blank" rel="noopener">
                  {{ item.linkText ? item.linkText : 'Mehr erfahren' }}
                  <Icon name="material-symbols:arrow-forward" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </ClientOnly>
    </div>
  </section>
</template>
