import { TasksProps } from "../../App";
import { CreateButton } from "../CreateButton";
import { Input } from "../Input";
import styles from './style.module.scss';

interface NewtaskProps {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function Newtask({tasks, setTasks}: NewtaskProps) {

  // NOTE tipar event

  function handleCreateNewTask(event: any) {
    event.preventDefault()
    const newTask = event.target.task.value
    const newTaskEmpty = !newTask

    if(newTaskEmpty) {
      return
    }

    const checkIfTaskExists = tasks.find(task => task.description === newTask)

    if(checkIfTaskExists) {
      alert('A task já existe!')
      return
    }

    setTasks([
      ...tasks,
      {
        description: newTask,
        isChecked: false
      }
    ]);

    event.target.task.value = ''
  }

  return (
    <form onSubmit={handleCreateNewTask}
      className={styles.newtask} 
      style={{marginTop: '-1.625rem'}}
    >
      <Input name="task"/>
      <CreateButton />
    </form>
  )
}