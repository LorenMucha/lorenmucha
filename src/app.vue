<script setup lang="ts">
useHead({
  title: 'Loren Mucha',
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: 'https://lorenmucha.de/' }],
  meta: [
    { name: 'description', content: 'Ich bin Full Stack Software-Entwickler, mit einer Passion für kreative Lösungen. Von der Benutzeroberfläche bis zur Backend-Architektur - ich gestalte digitale Welten. Entdecken Sie hier meine Projekte und die Prozesse hinter dem Code.' },
    { property: 'og:title', content: 'Loren Mucha - Fullstack Software Developer' },
    { property: 'og:description', content: 'Ich bin Full Stack Software-Entwickler, mit einer Passion für kreative Lösungen. Von der Benutzeroberfläche bis zur Backend-Architektur - ich gestalte digitale Welten. Entdecken Sie hier meine Projekte und die Prozesse hinter dem Code.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://lorenmucha.de/' },
    { property: 'og:locale', content: 'de' },
    { property: 'og:image', content: 'https://lorenmucha.de/favicon.ico' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <section class="antialiased bg-white">
      <NuxtPage />
    </section>
  </NuxtLayout>
</template>
