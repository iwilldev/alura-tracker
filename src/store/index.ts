import { defineStore } from 'pinia';
import { ref } from 'vue';
import IProject from '@/interfaces/IProject';
import ITask from '@/interfaces/ITask';

const useStore = defineStore('projects-and-tasks', () => {
  const projects = ref<IProject[]>([]);
  const tasks = ref<ITask[]>([]);
  function addProject(project: IProject) {
    projects.value.unshift(project);
  }
  function removeProject(id: string) {
    projects.value = projects.value.filter(
      (project) => project.id !== id,
    );
    tasks.value = tasks.value
      .filter((task) => (task.project.id !== id));
  }
  function editProject(project: IProject) {
    const index = projects.value.findIndex(
      (currentProject) => currentProject.id === project.id,
    );
    projects.value[index] = project;
    tasks.value = tasks.value.map((task) => (
      task.project.id === project.id
        ? { ...task, project }
        : task
    ));
  }
  function addTask(task: ITask) {
    tasks.value.unshift(task);
  }
  function removeTask(index: number) {
    tasks.value.splice(index, 1);
  }
  return {
    projects,
    tasks,
    addProject,
    addTask,
    editProject,
    removeProject,
    removeTask,
  };
});

export default useStore;
