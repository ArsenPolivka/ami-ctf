import classNames from "classnames";

import { Button } from '../Button';
import { Loader } from "../Loader";

import { useSingleTask } from "../../hooks/useSingleTask";

import styles from './TaskCard.module.css';

export const TaskCard = ({ name, description, id, itemIndex }) => {
  const { data, isLoading } = useSingleTask(id);

  return (
    <div className={classNames(styles.card, {[styles.completion] : data?.completionStatus === 'COMPLETED'})}>
      {isLoading ? <Loader /> : null}

      <h3 className={styles.title}>{itemIndex}. {name}</h3>

      <p className={styles.text}>{description}</p>
      {data?.completionStatus === 'COMPLETED' ? (
          <div className={styles['completion-label']}>
            Task completed
          </div>
      ) : (
          <Button
              to={`/tasks/${id}`}
              variant="primary"
              className={styles.btn}
          >
            Open task
          </Button>
      )}
    </div>
  );
};
