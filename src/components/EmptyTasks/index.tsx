import emptyTasksImg from '../../assets/emptyTasks.svg'
import styles from './style.module.scss'

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <img src={emptyTasksImg} />
      <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}