import styles from './style.module.scss';

interface CheckboxProps {
  isChecked: boolean;
}

export function Checkbox({ isChecked }: CheckboxProps) {
  return (
    <label className={styles.groupCheckbox}>
      <input type="checkbox" defaultChecked={isChecked}/>
    </label>
  )
}