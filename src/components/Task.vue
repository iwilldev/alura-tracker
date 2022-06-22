<template>
  <Box>
    <div class="columns">
      <div class="column is-3">
        {{ task.project.name }}
      </div>
      <div class="column is-4">
        {{ task.description }}
      </div>
      <div class="column">
        <Clock :time-in-seconds="task.time" />
      </div>
      <div class="column is-2">
        <button
          v-if="removingTask"
          class="button is-danger"
          @click="removeTask"
        >
          Confirma?
        </button>
        <button
          v-else
          class="button is-danger"
          @click="removingTask = true"
        >
          Remover
        </button>
      </div>
    </div>
  </Box>
</template>

<script lang="ts" setup>
import {
  defineEmits, defineProps, PropType, ref,
} from 'vue';
import ITask from '@/interfaces/ITask';
import Clock from './Clock.vue';
import Box from './Box.vue';

const emit = defineEmits<{(event: 'remove-task', index: number): void}>();

const props = defineProps({
  task: {
    type: Object as PropType<ITask>,
    required: true,
  },
  index: {
    type: Number as PropType<number>,
    required: true,
  },
});

const removingTask = ref(false);

function removeTask() {
  emit('remove-task', props.index);
}
</script>
