import { TasksProps } from "../../App";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from './style.module.scss';

interface TaskProps {
  task: TasksProps;
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function Task({ task, tasks, setTasks }: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox task={task} tasks={tasks} setTasks={setTasks} />
      <p>{task.description}</p>
      <DeleteButton />
    </div>
  )
}