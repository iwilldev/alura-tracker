<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <label for="project-id">
            <select v-model="projectId" id="project-id" :disabled="!newTaskDescription">
              <option value="">Selecione o projeto</option>
              <option
                :key="project.id"
                v-for="project in projects"
                :value="project.id"
              >
                {{ project.name }}
              </option>
            </select>
          </label>
        </div>
      </div>
      <Timer
        :disabled="!newTaskDescription || !projectId"
        @task-finished="finishTask"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import IProject from '@/interfaces/IProject';
import ITask from '@/interfaces/ITask';
import useStore from '@/store';
import { ref } from 'vue';
import Timer from './Timer.vue';

const { projects, addTask } = useStore();

const newTaskDescription = ref('');
const projectId = ref('');

function finishTask(time: number) {
  const project: IProject | undefined = projects.find(
    (currentProject) => currentProject.id === projectId.value,
  );
  if (project) {
    const task: ITask = {
      description: newTaskDescription.value,
      project,
      time,
    };
    addTask(task);
    newTaskDescription.value = '';
  }
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
