<template>
  <div class="column">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <Cronometro :tempo-em-segundos="tempoEmSegundos" />
      <ActionButton
        label="Play"
        faIcon="play"
        :disabled="cronometroRodando || desabilitado"
        @click="iniciarContagem"
      />
      <ActionButton
        label="Stop"
        faIcon="stop"
        :disabled="cronometroParado || desabilitado"
        @click="pararContagem"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, defineEmits, defineProps, ref,
} from 'vue';
import Cronometro from './Cronometro.vue';
import ActionButton from './ActionButton.vue';

const tempoEmSegundos = ref(0);
const cronometro = ref(0);
const cronometroRodando = ref(false);
const cronometroParado = computed(() => !cronometroRodando.value);

const emit = defineEmits<{(event: 'tarefaFinalizada', time: number): void}>();

defineProps({
  desabilitado: {
    type: Boolean,
    default: false,
  },
});

function iniciarContagem() {
  cronometroRodando.value = true;
  cronometro.value = setInterval(() => {
    tempoEmSegundos.value += 1;
  }, 1000);
}

function pararContagem() {
  clearInterval(cronometro.value);
  emit('tarefaFinalizada', tempoEmSegundos.value);
  cronometroRodando.value = false;
  tempoEmSegundos.value = 0;
}
</script>
