import logoImg from '../../assets/Logo.svg';
import styles from './style.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoImg} />
    </header>
  )
}