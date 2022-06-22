<template>
  <tr>
    <td>{{ project.id }}</td>
    <td>
      <span>{{ project.name }}</span>
    </td>
    <td>
      <router-link :to="`/projetos/${project.id}/remover`">
        <button class="button is-danger">
          <span class="icon is-small mt-1 mr-1">
            <i class="fas fa-trash-alt"></i>
          </span> Remover
        </button>
      </router-link>
    </td>
    <td>
      <router-link :to="`/projetos/${project.id}/editar`">
        <button class="button is-info is-flex is-justify-content-space-between">
          <span class="icon is-small mt-1 mr-1">
            <i class="fas fa-pencil-alt"></i>
          </span> Editar
        </button>
      </router-link>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import IProject from '@/interfaces/IProject';
import { defineProps, PropType } from 'vue';

defineProps({
  project: {
    type: Object as PropType<IProject>,
    required: true,
  },
});
</script>
