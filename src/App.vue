<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <barra-lateral />
    </div>
    <div class="column is-three-quarter">
      <formulario @saveTask="saveTask" />
      <div class="lista">
        <task
          :key="index"
          v-for="(task, index) of taskList"
          :description="task.description"
          :time="task.time"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Task from './components/Task.vue';

interface ITask {
  description: string;
  time: number;
}
const taskList = ref<ITask[]>([]);

function saveTask(description: string, time: number) {
  taskList.value.push({
    description,
    time,
  });
}
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
