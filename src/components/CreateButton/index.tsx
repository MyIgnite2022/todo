import plusImg from '../../assets/plus.svg';
import styles from './style.module.scss';

export function CreateButton() {
  return (
    <button className={styles.createButton}>
      Criar <img src={plusImg} />
    </button>
  )
}