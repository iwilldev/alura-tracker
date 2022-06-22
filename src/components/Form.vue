<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <label for="new-task">
          <input
            id="new-task"
            name="new-task"
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="newTaskDescription"
          />
        </label>
      </div>
      <Timer
        :disabled="!newTaskDescription"
        @task-finished="finishTask"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from 'vue';
import Timer from './Timer.vue';

type EventsTyping = {
  (event: 'saveTask', description: string, time: number): void
}

const emit = defineEmits<EventsTyping>();

const newTaskDescription = ref('');

function finishTask(time: number) {
  emit('saveTask', newTaskDescription.value, time);
  newTaskDescription.value = '';
}
</script>

<style scoped>
.box {
  background-color: var(--primary-bg);
  color: var(--primary-color);
}
.input {
  background-color: var(--primary-bg-dark);
  color: var(--primary-color);
}
.input::placeholder {
  color: var(--primary-color);
  opacity: 0.75;
}
</style>
