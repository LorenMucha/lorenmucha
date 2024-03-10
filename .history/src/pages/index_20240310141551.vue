<script lang="ts" setup> 
const { $bus } = useNuxtApp() 
</script>
<template>
  <div class="dark:bg-gray-900">
    <AuthorIntro />
    <Work />
    <Expertise />
    <!-- <TimeLine/> -->
    <Contact />
  </div>
</template>
