import styles from './style.module.scss';

interface DeleteButtonProps {
  onClick: () => void;
}

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button className={styles.deleteButton}></button>
  )
}