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
    class="fixed inset-0 z-[1000] outline-none focus:outline-none justify-center items-center flex !overflow-hidden"
  >
    <div>
      <!-- content -->
      <div
        class="border w-auto rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none pl-10 pr-10 pt-10"
      >
        <div class="flex justify-center p-5 flex-col items-center">
          <div v-if="state.type === 'sucess'">
            <Icon name="ooui:success" size="8rem" class="animate-bounce w-auto mx-auto h-auto block text-blue-600" />
          </div>
          <div v-else>
            <Icon name="mdi:error" size="8rem" class="animate-bounce w-auto mx-auto h-auto block text-red-600" />
          </div>
          <div v-if="state.type === 'sucess'" class="font-bold">
            Email versendet
          </div>
          <div v-else class="font-bold text-red-600">
            Uups.....es ist ein Fehler aufgetreten
          </div>
        </div>
        <div class="flex items-center justify-end p-6">
          <button
            v-if="state.type === 'sucess'"
            type="button" class="g-transparent hover:bg-green-100 text-blue-600 font-semibold hover:text-black py-2 px-4 border border-blue-600 hover:border-transparent rounded"
            @click="toggleModal"
          >
            Schließen
          </button>
          <button
            v-else
            type="button" class="g-transparent hover:bg-green-100 text-red-600 font-semibold hover:text-black py-2 px-4 border border-red-600 hover:border-transparent rounded !bg-red-600"
            @click="toggleModal"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
