<template>
  <button class="button" @click="click" :disabled="disabled">
    <span class="icon">
      <i :class="`fas fa-${faIcon}`"></i>
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits<{(event: 'click'): void}>();

defineProps({
  label: {
    type: String,
    default: '',
  },
  faIcon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

function click() {
  emit('click');
}
</script>
