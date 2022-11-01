import { FormEvent } from "react";
import { TasksProps } from "../../App";
import { CreateButton } from "../CreateButton";
import { Input } from "../Input";
import styles from './style.module.scss';

interface NewtaskProps {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function Newtask({tasks, setTasks}: NewtaskProps) {

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // NOTE Capturar valores

    setTasks([
      ...tasks,
      {
        description: `${new Date().getTime()}`,
        isChecked: false
      }
    ]);
  }

  return (
    <form onSubmit={handleSubmit} 
      className={styles.newtask} 
      style={{marginTop: '-1.625rem'}}
    >
      <Input />
      <CreateButton />
    </form>
  )
}