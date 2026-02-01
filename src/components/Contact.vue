<script>
import Modal from './Modal.vue'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      modalState: { show: false, type: 'error' },
      calendlyLink: useRuntimeConfig().public.calendlyLink,
      emailActive: true,
      scheduleActive: false,
      nameMsg: '',
      emailMsg: '',
      messageMsg: '',
    }
  },
  computed: {
    modal() {
      return this.modalState
    },
  },
  mounted() {
    this.$bus.$on('success', () => {
      this.cleanMailForm()
    })

    useCalendly().initInlineWidget()
  },
  methods: {
    async sendEmail() {
      await $fetch(useRuntimeConfig().public.formspree, {
        method: 'post',
        headers: {
          Accept: 'application/json',
        },
        body: {
          name: this.nameMsg,
          from: this.emailMsg,
          _subject: `${this.nameMsg} | Nachricht von lorenmucha.de`,
          message: this.messageMsg,
        },
      }).then((request) => {
        if (request.ok)
          this.modalState = { show: true, type: 'sucess' }
      }).catch(() => {
        this.modalState = { show: true, type: 'error' }
      })
    },
    toggleEmail() {
      this.scheduleActive = false
      this.emailActive = true
    },
    toggleSchedule() {
      this.emailActive = false
      this.scheduleActive = true
    },
    cleanMailForm() {
      this.nameMsg = ''
      this.emailMsg = ''
      this.messageMsg = ''
    },
  },
}
</script>

<template>
  <section id="contact" class="section">
    <div class="section-header text-left">
      <h2>{{ $t('contact.title') }}</h2>
      <p>{{ $t('contact.subtitle') }}</p>
    </div>
    <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="card card-interactive">
        <div class="flex flex-wrap items-center gap-3">
          <span class="chip">{{ $t('contact.note') }}</span>
          <span class="chip">{{ $t('contact.response') }}</span>
        </div>
        <h3 class="card-title mt-5">{{ $t('contact.heading') }}</h3>
        <p class="mt-4 text-ink-600">{{ $t('contact.detail') }}</p>
        <div class="mt-6 flex flex-wrap gap-3">
          <button class="btn-primary" @click="toggleEmail()">
            {{ $t('contact.emailCta') }}
          </button>
          <button class="btn-tonal" @click="toggleSchedule()">
            {{ $t('contact.callCta') }}
          </button>
        </div>
        <div class="mt-6 grid gap-4">
          <div class="surface-muted rounded-[22px] p-4">
            <p class="card-label">{{ $t('contact.scopeLabel') }}</p>
            <p class="mt-2 text-sm text-ink-600">{{ $t('contact.scopeText') }}</p>
          </div>
          <div class="surface-muted rounded-[22px] p-4">
            <p class="card-label">{{ $t('contact.stackLabel') }}</p>
            <p class="mt-2 text-sm text-ink-600">{{ $t('contact.stackText') }}</p>
          </div>
        </div>
      </div>
      <div class="card card-interactive">
        <div class="flex items-center gap-3">
          <button :class="emailActive ? 'btn-primary' : 'btn-ghost'" @click="toggleEmail()">
            {{ $t('contact.formTab') }}
          </button>
          <button :class="scheduleActive ? 'btn-primary' : 'btn-ghost'" @click="toggleSchedule()">
            {{ $t('contact.scheduleTab') }}
          </button>
        </div>
        <div v-if="emailActive" class="mt-6">
          <div class="grid gap-4">
            <input
              v-model="nameMsg" type="text" class="w-full rounded-[18px] border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
              :placeholder="$t('contact.formName')"
            >
            <div>
              <input
                id="email" v-model="emailMsg" type="email" name="email" required
                class="w-full rounded-[18px] border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-brand-500 focus:outline-none"
                :placeholder="$t('contact.formEmail')"
              >
              <p class="mt-2 text-xs text-red-600">
                {{ $t('contact.formEmailHint') }}
              </p>
            </div>
            <textarea
              v-model="messageMsg" class="w-full rounded-[18px] border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-brand-500 focus:outline-none" rows="4"
              :placeholder="$t('contact.formMessage')"
            />
          </div>
          <button class="btn-primary mt-6" @click="sendEmail">
            {{ $t('contact.formSubmit') }}
          </button>
        </div>
        <div v-else class="mt-6">
          <div class="surface-muted rounded-[22px] p-4">
            <p class="text-sm text-ink-600">{{ $t('contact.scheduleInfo') }}</p>
          </div>
          <div class="calendly-inline-widget mt-4" :data-url="calendlyLink" style="min-width: 320px; height: 630px;" />
        </div>
      </div>
    </div>
    <Modal :modal-state="modal" />
  </section>
</template>
