import styles from './style.module.scss'

export function StatusTasks() {
  return (
    <div className={styles.statusTasks}>
      <p>Tarefas criadas <span>5</span></p>
      <p>Concluídas <span>2 de 5</span></p>
    </div>
  )
}