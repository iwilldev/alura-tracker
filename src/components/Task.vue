<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        {{ description }}
      </div>
      <div class="column">
        <Clock :tempo-em-segundos="time" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import Clock from './Clock.vue';

defineProps({
  description: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.box {
  background-color: #FAF0CA;
}
</style>
