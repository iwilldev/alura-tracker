<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo Alura Tracker">
    </h1>
  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
