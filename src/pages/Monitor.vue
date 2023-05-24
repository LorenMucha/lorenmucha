<script>
export default {
  name: 'Monitor',
}
</script>

<template>
  <div class="page">
    <h1>Monitor</h1>
    <ContentDoc :path="`/monitor_${$i18n.locale}`" />
  </div>
</template>

<style scoped>

</style>
