<template>
  <div class="box has-text-weight-bold">
    <slot />
  </div>
</template>

<style scoped>
.box {
  background-color: var(--primary-bg-darker);
  color: var(--primary-color);
}
</style>
