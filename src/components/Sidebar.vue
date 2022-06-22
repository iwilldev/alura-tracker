<template>
  <header class="is-flex">
    <h1 class="has-text-centered">
      <img src="../assets/logo.png" alt="Logo Alura Tracker">
    </h1>
    <div class="is-flex is-flex-direction-column">
      <router-link
        :key="route.name"
        v-for="route in routes"
        :to="route.path"
        class="mt-2"
      >
        <button class="button is-fullwidth is-outlined is-link">
          {{ route.name }}
        </button>
      </router-link>
    </div>
    <label class="theme-switch" for="theme-switch">
      <input
        id="theme-switch"
        class="is-hidden"
        type="checkbox"
        :value="isDarkMode"
        @change="changeTheme"
      >
      <span class="theme-switch__control"></span>
    </label>
  </header>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const { options: { routes } } = useRouter();

defineProps({
  isDarkMode: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{(event: 'change-theme'): void}>();

function changeTheme() {
  emit('change-theme');
}
</script>

<style scoped>
header {
  position: relative;
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  background-color: var(--primary-bg-dark);
  color: var(--primary-color);
  flex-direction: column;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.theme-switch {
  background: var(--primary-color);
  border-radius: 2rem;
  width: 4.5rem;
  height: 2.5rem;
  padding: 0.25rem;
  position: absolute;
  cursor: pointer;
  bottom: 1rem;
  right: 1rem;
}

.theme-switch__control {
  display: block;
  background: var(--primary-bg);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: 3px dotted var(--primary-color);
  transition: transform 0.3s;
}

.theme-switch__control::after {
  position: absolute;
  width: 80%;
  height: 80%;
  content: "";
  background: var(--primary-color);
  border-radius: 50%;
  opacity: 0;
}
#theme-switch:checked + .theme-switch__control {
    transform: translateX(100%);
    border: none;
}
#theme-switch:checked + .theme-switch__control::after {
  opacity: 1;
}
</style>
