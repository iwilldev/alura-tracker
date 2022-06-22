<template>
  <h3>Deseja remover o projeto "{{ project.name }}"?</h3>
  <button class="button mr-2" @click="push('/projetos')">
    Cancelar
  </button>
  <button class="button is-danger" @click="removeCurrentProject">
    Remover
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue';
import useStore from '@/store';
import { useRouter } from 'vue-router';
import IProject from '@/interfaces/IProject';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const { push } = useRouter();
const { projects, removeProject } = useStore();
const project = computed(() => (
  projects.find((currentProject) => currentProject.id === props.id) as IProject
));

function removeCurrentProject() {
  removeProject(project.value.id);
  push('/projetos');
}
</script>
