<template>
  <router-link to="/projetos/novo">
    <button class="button is-success">
      <span class="icon is-small mt-1 mr-1">
        <i class="fas fa-plus"></i>
      </span> Novo Projeto
    </button>
  </router-link>
  <table class="table is-fullwidth mt-5" v-if="thereIsProjects">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Remover</th>
        <th>Editar</th>
      </tr>
    </thead>
    <tbody>
      <Project
        :key="project.id"
        v-for="project in projects"
        :project="project"
      />
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import useStore from '@/store';
import Project from '@/components/Project.vue';

const store = useStore();
const { projects } = storeToRefs(store);
const thereIsProjects = computed(() => projects.value.length > 0);
</script>
