import styles from './TaskSidebar.module.css';

export const TaskSidebar = ({ rating }) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.points}>Your points</div>

      {rating ? (
        <div className={styles.ratings}>Rating</div>
      ) : null}
    </aside>
  );
}
