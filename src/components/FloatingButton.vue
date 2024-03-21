<script>
export default {
  data: () => {
    return {
      userMail: process.env.USER_MAIL,
      linkedIn: process.env.LINKEDIN,
    }
  },
  methods: {
    openCalendly() {
      useCalendly().initPopupWidget({ url: useRuntimeConfig().public.calendlyLink })
    },
  },
}
</script>

<template>
  <div class="group fixed bottom-0 right-0 p-5  flex items-end justify-end text-6xl w-32 h-32">
    <!-- main -->
    <div class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-blue-700 z-50 absolute  ">
      <Icon name="material-symbols:mail-outline" />
    </div>
    <!-- sub top -->
    <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-8 group-hover:scale-x-100 group-hover:-translate-y-24 flex p-2 hover:p-3 hover:bg-blue-700 bg-black scale-100 text-white" @click="openCalendly">
      <Icon name="simple-icons:calendly" />
    </div>
    <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16 group-hover:-translate-x-16 flex p-2 hover:p-3 hover:bg-blue-700 bg-black scale-100 text-white">
      <a
        rel="noopener noreferrer"
        :href="linkedIn" target="_blank"
      >
        <Icon name="mdi:linkedin" />
      </a>
    </div>
    <!-- sub middle -->
    <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-0 group-hover:-translate-x-24 flex p-2 hover:p-3 hover:bg-blue-700 bg-black scale-100 text-white">
      <a
        rel="noopener noreferrer"
        :href="`mailto:${userMail}`"
      >
        <Icon name="material-symbols:mail-outline" />
      </a>
    </div>
  </div>
</template>
