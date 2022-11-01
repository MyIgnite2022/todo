import { TasksProps } from '../../App';
import styles from './style.module.scss';

interface CheckboxProps {
  task: TasksProps;
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function Checkbox({ task, tasks, setTasks }: CheckboxProps) {

  function handeCheckbox() {
    tasks.find(taskFinded => {
      if(taskFinded.description === task.description) {
        task.isChecked = !task.isChecked
      }
    })

    setTasks([
      ...tasks
    ])
  }

  return (
    <label className={styles.groupCheckbox}>
      <input 
        type="checkbox"
        checked={task.isChecked} 
        onChange={() => handeCheckbox()}
        />
    </label>
  )
}