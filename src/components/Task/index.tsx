import { Checkbox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import styles from './style.module.scss';

export function Task() {
  return (
    <div className={styles.task}>
      <Checkbox />
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <DeleteButton />
    </div>
  )
}