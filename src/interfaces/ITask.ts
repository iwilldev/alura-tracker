import IProject from './IProject';

interface ITask {
  description: string;
  time: number;
  project: IProject;
}

export default ITask;
