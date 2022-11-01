import { CreateButton } from "../CreateButton";
import { Input } from "../Input";
import styles from './style.module.scss';

export function Newtask() {
  return (
    <div className={styles.newtask} style={{marginTop: '-1.625rem'}}>
      <Input />
      <CreateButton />
    </div>
  )
}