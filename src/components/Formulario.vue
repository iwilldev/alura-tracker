<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
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
import { ref } from 'vue';
import Timer from './Timer.vue';

const newTaskDescription = ref('');

function finishTask(time: number) {
  console.log(`Tarefa (${newTaskDescription.value}) finalizada com ${time} segundos`);
  newTaskDescription.value = '';
}
</script>
