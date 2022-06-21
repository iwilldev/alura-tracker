<template>
  <section>
    <strong> {{ formattedTime }} </strong>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  timeInSeconds: {
    type: Number,
    default: 0,
  },
});

const formattedTime = computed(
  () => new Date(props.timeInSeconds * 1000)
    .toISOString()
    .substring(11, 19),
);
</script>
