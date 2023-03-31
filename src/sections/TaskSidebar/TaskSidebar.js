import { useSidebarConfig } from '../../hooks/useSidebarConfig';

import styles from './TaskSidebar.module.css';

export const TaskSidebar = () => {
  const { showRatingCard } = useSidebarConfig();

  return (
    <aside className={styles.aside}>
      <div className={styles.points}>Your points</div>

      {showRatingCard ? (
        <div className={styles.ratings}>Rating</div>
      ) : null}
    </aside>
  );
}
