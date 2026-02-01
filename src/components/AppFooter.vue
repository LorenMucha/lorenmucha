<script>
export default {
  name: 'AppFooter',
  data: () => {
    return {
      github: process.env.GITHUB,
      userMail: process.env.USER_MAIL,
      linkedin: process.env.LINKEDIN,
    }
  },
}
</script>

<template>
  <footer class="section pt-10">
    <div class="mx-auto max-w-6xl">
      <div class="surface rounded-[28px] px-6 py-8">
        <div class="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p class="font-display text-lg font-semibold text-ink-900">Loren Mucha</p>
            <p class="text-sm text-ink-600">{{ $t('footer.tagline') }}</p>
          </div>
          <div class="flex items-center gap-4">
            <a
              class="btn-ghost" target="_blank" rel="noopener noreferrer"
              :href="github"
            >
              <Icon name="mdi:github" size="1.2rem" />
              GitHub
            </a>
            <a
              class="btn-ghost" target="_blank" rel="noopener noreferrer"
              :href="linkedin"
            >
              <Icon name="skill-icons:linkedin" size="1.2rem" />
              LinkedIn
            </a>
            <a
              class="btn-ghost" target="_blank" rel="noopener noreferrer"
              :href="`mailto:${userMail}`"
            >
              <Icon name="material-symbols:mail-outline" size="1.2rem" />
              Mail
            </a>
          </div>
        </div>
        <div class="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-500">
          <div>Copyright © {{ new Date().getFullYear() }}</div>
          <NuxtLink to="/Impressum" class="hover:text-ink-700">Impressum</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
