<template>
  <section class="projects">
    <h1 class="title">
      Projetos
    </h1>
    <form @submit.prevent="saveProject" class="is-flex">
      <div class="field mr-2 is-flex-grow-2">
        <label for="projectName" class="label">
          <input
            id="projectName"
            type="text"
            class="input"
            v-model="projectName"
            placeholder="Nome do projeto"
          >
        </label>
      </div>
      <div class="field">
        <button type="submit" class="button" :disabled="!projectName">
          Salvar
        </button>
      </div>
    </form>
    <table class="table is-fullwidth" v-if="thereIsProjects">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="project.id" v-for="project in projects">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts" setup>
import IProject from '@/interfaces/IProject';
import { computed, ref } from 'vue';

const projectName = ref('');
const projects = ref<IProject[]>([]);
const thereIsProjects = computed(() => projects.value.length > 0);

function saveProject() {
  const project: IProject = {
    name: projectName.value,
    id: new Date().getTime().toString(),
  };
  projects.value.unshift(project);
  projectName.value = '';
}
</script>

<style scoped>
.projects {
  padding: 1.25rem;
  background-color: var(--primary-bg);
  color: var(--primary-color);
}
.button {
  background-color: var(--primary-bg);
  color: var(--primary-color);
  border-color: var(--primary-bg-darker);
  transition: all 0.2s ease-in-out;
}
.table {
  background-color: var(--primary-bg-dark);
  color: var(--primary-color);
}
.table th {
  background-color: var(--primary-bg-darker);
  color: var(--primary-color-dark);
}
</style>
