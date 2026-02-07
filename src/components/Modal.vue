<script>
export default {
  props: {
    modalState: {
      type: Object,
      required: true,
    },
  },
  emit: ['success'],
  data() {
    return {
      state: this.modalState,
    }
  },
  watch: {
    modalState(newType) {
      this.state = newType
    },
  },
  methods: {
    toggleModal() {
      this.state.show = false
      this.$bus.$emit('success')
    },
  },
}
</script>

<template>
  <div
    v-if="state.show"
    class="fixed inset-0 z-[1000] flex items-center justify-center bg-ink-900/40 px-4 backdrop-blur"
  >
    <div class="surface-strong w-full max-w-md rounded-[28px] p-8 text-center">
      <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ink-100">
        <Icon
          v-if="state.type === 'sucess'"
          name="ooui:success"
          size="3.5rem"
          class="text-brand-700"
        />
        <Icon
          v-else
          name="mdi:error"
          size="3.5rem"
          class="text-accent-600"
        />
      </div>
      <p class="mt-6 font-display text-xl font-semibold text-ink-900">
        {{ state.type === 'sucess' ? 'Nachricht gesendet' : 'Da ist etwas schiefgelaufen' }}
      </p>
      <p class="mt-3 text-sm text-ink-600">
        {{ state.type === 'sucess' ? 'Danke! Ich melde mich zeitnah zurück.' : 'Bitte versuche es später erneut oder nutze die E-Mail-Adresse.' }}
      </p>
      <button type="button" class="btn-primary mt-8 w-full justify-center" @click="toggleModal">
        Schließen
      </button>
    </div>
  </div>
</template>
