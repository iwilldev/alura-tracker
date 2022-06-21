<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <label for="new-task">
          <input
            id="new-task"
            name="new-task"
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="novaTarefa"
          />
        </label>
      </div>
      <Temporizador
        :desabilitado="!novaTarefa"
        @tarefa-finalizada="finalizarTarefa"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Temporizador from './Temporizador.vue';

const novaTarefa = ref('');

function finalizarTarefa(time: number) {
  console.log(`Tarefa (${novaTarefa.value}) finalizada com ${time} segundos`);
  novaTarefa.value = '';
}
</script>
