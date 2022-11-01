import { TasksProps } from '../../App';
import styles from './style.module.scss';

interface StatusTasksProps {
  tasks: TasksProps[];
}

export function StatusTasks({ tasks }: StatusTasksProps) {
  const numberOfTasks = tasks.length

  const tasksTrue = tasks.reduce((acc, task) => {
    if(task.isChecked) {
      acc += 1
    }

    return acc
  }, 0)

  return (
    <div className={styles.statusTasks}>
      <p>Tarefas criadas <span>{numberOfTasks}</span></p>
      <p>Concluídas <span>{tasksTrue} de {numberOfTasks}</span></p>
    </div>
  )
}

