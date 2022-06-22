<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ task.description }}
      </div>
      <div class="column">
        <Clock :time-in-seconds="task.time" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
import ITask from '@/interfaces/ITask';
import Clock from './Clock.vue';
import Box from './Box.vue';

defineProps({
  task: {
    type: Object as PropType<ITask>,
    required: true,
  },
});
</script>
