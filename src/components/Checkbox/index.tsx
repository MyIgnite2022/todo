import styles from './style.module.scss'

export function Checkbox() {
  return (
    <label className={styles.groupCheckbox}>
      <input type="checkbox" />
    </label>
  )
}