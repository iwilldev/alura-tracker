<template>
  <h3>{{ formTitle }}</h3>
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
      <button type="submit" class="button is-success" :disabled="!projectName">
        Salvar
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import {
  computed, defineProps, onMounted, ref,
} from 'vue';
import useStore from '@/store';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
});

const { push } = useRouter();
const { projects, addProject, editProject } = useStore();
const projectName = ref('');
const formTitle = computed(
  () => (props.id ? 'Editar projeto' : 'Novo projeto'),
);

onMounted(() => {
  if (props.id) {
    const project = projects
      .find((currentProject) => currentProject.id === props.id);
    projectName.value = project?.name || '';
  }
});

function saveProject() {
  if (props.id) {
    editProject({
      id: props.id,
      name: projectName.value,
    });
  } else {
    addProject({
      name: projectName.value,
      id: new Date().getTime().toString(),
    });
  }
  push('/projetos');
}
</script>
