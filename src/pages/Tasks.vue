<template>
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
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Box from '@/components/Box.vue';
import Form from '@/components/Form.vue';
import Task from '@/components/Task.vue';
import ITask from '@/interfaces/ITask';

const taskList = ref<ITask[]>([]);
const emptyList = computed(() => taskList.value.length === 0);

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
</style>
