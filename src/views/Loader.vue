<template>
  <div class="loader-main">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
.loader-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
}
</style>