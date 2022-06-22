<template>
  <Form />
  <div class="lista">
    <Box v-if="emptyList">
      <p class="has-text-centered">
        Nenhuma tarefa finalizada.
      </p>
    </Box>
    <Box v-else class="task-header">
      <div class="columns">
        <div class="column is-3">
          Projeto
        </div>
        <div class="column is-4">
          Descrição da tarefa
        </div>
        <div class="column">
          Tempo
        </div>
        <div class="column is-2">
          Remover
        </div>
      </div>
    </Box>
    <task
      :key="index"
      v-for="(task, index) in tasks"
      :task="task"
      :index="index"
      @remove-task="removeTask"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import Box from '@/components/Box.vue';
import Form from '@/components/Form.vue';
import Task from '@/components/Task.vue';
import useStore from '@/store';

const store = useStore();
const { removeTask } = store;
const { tasks } = storeToRefs(store);
const emptyList = computed(() => tasks.value.length === 0);
</script>

<style>
.lista {
  padding: 1.25rem;
}
.box.task-header {
  background-color: var(--primary-color);
  color: var(--primary-bg-dark);
}
</style>
