import { TasksProps } from "../../App";
import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from './style.module.scss';

interface TaskProps {
  task: TasksProps;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox isChecked={task.isChecked}/>
      <p>{task.description}</p>
      <DeleteButton />
    </div>
  )
}