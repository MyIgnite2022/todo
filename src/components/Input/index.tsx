 import styles from './style.module.scss';


 interface InputProps {
  placeholder?: string;
  boderColor?: string;
  value?: string;
  bg?: string;
 }

export function Input(props: InputProps) {
  return (
    <input 
      className={styles.input} 
      placeholder="Adicione uma nova tarefa"
    />
  )
}