<script type="ts">
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      show: this.showModal,
    }
  },
  methods: {
    toggleModal() {
      this.show = !this.show
    },
  },
}
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-[1000] outline-none focus:outline-none justify-center items-center flex !overflow-hidden"
  >
    <div>
      <!-- content -->
      <div
        class="border border-green-900 w-[900px] rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none !overflow-auto"
      >
        <div class="flex justify-center p-5" />
        <div class="flex items-center justify-end p-6">
          <button
            type="button" class="g-transparent hover:bg-green-100 text-blue-600 font-semibold hover:text-black py-2 px-4 border border-blue-600 hover:border-transparent rounded"
            @click="toggleModal"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
