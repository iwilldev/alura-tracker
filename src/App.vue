<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkMode }">
    <div class="column is-one-quarter">
      <Sidebar @change-theme="toggleDarkMode" :is-dark-mode="darkMode" />
    </div>
    <div class="column is-three-quarter content">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue';

const darkMode = ref(false);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}
</script>

<style>
main {
  height: 100vh;
  --primary-bg: #eaeaea;
  --primary-bg-dark: #dadada;
  --primary-bg-darker: #bababa;
  --primary-color: #161616;
  --primary-color-dark: #080808;
  --primary-color-darker: #000000;
}
main.dark-mode {
  --primary-bg: #323232;
  --primary-bg-dark: #242424;
  --primary-bg-darker: #161616;
  --primary-color: #fafafa;
  --primary-color-dark: #cacaca;
  --primary-color-darker: #9a9a9a;
}
.content {
  background-color: var(--primary-bg);
  color: var(--primary-color);
  height: 100%;
}
</style>
