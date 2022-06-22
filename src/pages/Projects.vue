<template>
  <section class="projects">
    <h1 class="title">
      Projetos
    </h1>
    <router-view />
  </section>
</template>

<style>
.projects {
  padding: 1.25rem;
  background-color: var(--primary-bg);
  color: var(--primary-color);
}
.projects .table {
  background-color: var(--primary-bg-dark);
  color: var(--primary-color);
}
.projects .table th {
  background-color: var(--primary-bg-darker);
  color: var(--primary-color-dark);
}
</style>
