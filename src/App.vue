<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkMode }">
    <div class="column is-one-quarter">
      <Sidebar @change-theme="toggleDarkMode" :is-dark-mode="darkMode" />
    </div>
    <div class="column is-three-quarter content">
      <Form @save-task="saveTask" />
      <div class="lista">
        <task
          :key="index"
          v-for="(task, index) of taskList"
          :task="task"
        />
        <Box v-if="emptyList">
          <p class="has-text-centered">
            Nenhuma tarefa finalizada.
          </p>
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Box from './components/Box.vue';
import Form from './components/Form.vue';
import Sidebar from './components/Sidebar.vue';
import Task from './components/Task.vue';
import ITask from './interfaces/ITask';

const darkMode = ref(false);
const taskList = ref<ITask[]>([]);
const emptyList = computed(() => taskList.value.length === 0);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}

function saveTask(description: string, time: number) {
  taskList.value.unshift({
    description,
    time,
  });
}
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  height: 100vh;
  --primary-bg: #eaeaea;
  --primary-bg-dark: #dadada;
  --primary-bg-darker: #bababa;
  --primary-color: #161616;
  --primary-color-dark: #080808;
  --primary-color-darker: #000000;
}
main.dark-mode {
  --primary-bg: #323232;
  --primary-bg-dark: #242424;
  --primary-bg-darker: #161616;
  --primary-color: #fafafa;
  --primary-color-dark: #cacaca;
  --primary-color-darker: #9a9a9a;
}
.content {
  background-color: var(--primary-bg);
  color: var(--primary-color);
  height: 100%;
}
</style>
