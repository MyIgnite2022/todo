import { TasksProps } from "../../App";
import { Checkbox } from "../Checkbox";
import styles from './style.module.scss';

interface TaskProps {
  task: TasksProps;
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function Task({ task, tasks, setTasks }: TaskProps) {
  
  function handleDeleteTask(description: string ) {
    const newTasks = tasks.filter(task => task.description !== description)

    setTasks([
      ...newTasks
    ])
  }

  return (
    <div className={styles.task}>
      <Checkbox task={task} tasks={tasks} setTasks={setTasks} />
      <p>{task.description}</p>
      <button 
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(task.description)}>
      </button>
    </div>
  )
}