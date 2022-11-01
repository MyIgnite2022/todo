 import styles from './style.module.scss';


 interface InputProps {
  value?: string;
  name: string;
 }

export function Input({name, value}: InputProps) {
  return (
    <input 
      className={styles.input} 
      placeholder="Adicione uma nova tarefa"
      name={name}
    />
  )
}