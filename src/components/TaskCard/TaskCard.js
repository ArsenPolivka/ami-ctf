import { Button } from '../Button';

import styles from './TaskCard.module.css';

export const TaskCard = ({ name, description, id }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>

      <p className={styles.text}>{description}</p>

      <Button to={`/tasks/${id}`} variant="primary" className={styles.btn}>
        Open task
      </Button>
    </div>
  );
};
