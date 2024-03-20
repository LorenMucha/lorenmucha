<script>
export default {
  data: () => {
    return {
      userMail: process.env.USER_MAIL,
      github: process.env.GITHUB,
      linkedin: process.env.LINKEDIN,
    }
  },
}
</script>

<template>
  <div class="group fixed bottom-0 right-0 p-5  flex items-end justify-end text-6xl w-32 h-32">
    <!-- main -->
    <div class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-blue-700 z-50 absolute  ">
      <Icon name="material-symbols:mail-outline" />
    </div>
    <!-- sub left -->
    <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-24 flex p-2 hover:p-3 hover:bg-blue-700 bg-black scale-100 text-white">
      <a :href="github" target="_blank">
        <Icon name="mdi:github" />
      </a>
    </div>
    <!-- sub top -->
    <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-24 flex p-2 hover:p-3 hover:bg-blue-700 bg-black scale-100 text-white">
      <a :href="linkedin" target="_blank">
        <Icon name="mdi:linkedin" />
      </a>
    </div>
    <!-- sub middle -->
    <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 hover:bg-blue-700 bg-black scale-100 text-white">
      <a
        rel="noopener noreferrer"
        :href="`mailto:${userMail}`"
      >
        <Icon name="material-symbols:mail-outline" />
      </a>
    </div>
  </div>
</template>
