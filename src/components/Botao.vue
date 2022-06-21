<template>
  <button class="button" @click="click" :disabled="desabilitado">
    <span class="icon">
      <i :class="`fas fa-${icone}`"></i>
    </span>
    <span>{{ texto }}</span>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits<{(event: 'click'): void}>();

defineProps({
  texto: {
    type: String,
    default: '',
  },
  icone: {
    type: String,
    default: '',
  },
  desabilitado: {
    type: Boolean,
    default: false,
  },
});

function click() {
  emit('click');
}
</script>
