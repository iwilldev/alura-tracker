<template>
  <section>
    <strong> {{ tempoDecorrido }} </strong>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  tempoEmSegundos: {
    type: Number,
    default: 0,
  },
});

const tempoDecorrido = computed(
  () => new Date(props.tempoEmSegundos * 1000)
    .toISOString()
    .substring(11, 19),
);
</script>
