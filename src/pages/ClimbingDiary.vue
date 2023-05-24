<script>
export default {
  name: 'ClimbingDiary',
}
</script>

<template>
  <div class="page">
    <h1>
      Climbing-Diary
    </h1>
    <ContentDoc :path="`/climbing_diary_${$i18n.locale}`" />
  </div>
</template>

<style scoped>

</style>
