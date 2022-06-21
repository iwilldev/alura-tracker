<template>
  <div class="column">
    <div class="is-flex is-align-items-center is-justify-content-space-between">
      <Clock :time-in-seconds="timeInSeconds" />
      <ActionButton
        label="Play"
        faIcon="play"
        :disabled="timerIsActive || disabled"
        @click="startTimer"
      />
      <ActionButton
        label="Stop"
        faIcon="stop"
        :disabled="timerIsInactive || disabled"
        @click="stopTimer"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed, defineEmits, defineProps, ref,
} from 'vue';
import Clock from './Clock.vue';
import ActionButton from './ActionButton.vue';

const timeInSeconds = ref(0);
const cronometro = ref(0);
const timerIsActive = ref(false);
const timerIsInactive = computed(() => !timerIsActive.value);

const emit = defineEmits<{(event: 'taskFinished', time: number): void}>();

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

function startTimer() {
  timerIsActive.value = true;
  cronometro.value = setInterval(() => {
    timeInSeconds.value += 1;
  }, 1000);
}

function stopTimer() {
  clearInterval(cronometro.value);
  emit('taskFinished', timeInSeconds.value);
  timerIsActive.value = false;
  timeInSeconds.value = 0;
}
</script>
