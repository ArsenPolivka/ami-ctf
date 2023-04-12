import classNames from 'classnames';

import { useSidebarConfig } from '../../hooks/useSidebarConfig';

import styles from './TaskSidebar.module.css';

const defaultPoints = {
  rating: 1,
  currentPoints: 25,
  maxPoints: 150,
  pointToNext: 0,
  nextRating: 1,
  completedTasks: 0,
  allTasks: 25,
  timePassed: '00:00:00',
  timeLeft: '00:00:00'
};

const defaultRatingList = [
  {
    isCurrentUser: true,
    name: 'Me',
    score: 25,
  },
  {
    name: 'Student name',
    score: 23,
  },
  {
    name: 'Student name',
    score: 22,
  },
  {
    name: 'Student name',
    score: 21,
  },
  {
    name: 'Student name',
    score: 14,
  },
];

export const TaskSidebar = ({ ratingList, points = defaultPoints }) => {
  const { showRatingCard } = useSidebarConfig();

  const {
    rating,
    currentPoints,
    maxPoints,
    pointToNext,
    nextRating,
    completedTasks,
    allTasks,
    timePassed,
    timeLeft,
  } = points;

  return (
    <aside className={styles.aside}>
      <div className={styles.points}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Your points</h2>

          <ul className={styles.pointsList}>
            <li className={styles.pointsItem}>
              <div className={styles.value}>#{rating}</div>

              &nbsp;place in rating
            </li>

            <li className={styles.pointsItem}>
              <div className={styles.value}>{pointToNext}</div>

              &nbsp;points to reach #{nextRating}
            </li>

            <li className={styles.pointsItem}>
              <div className={styles.value}>{completedTasks}/{allTasks}</div>

              &nbsp;tasks done
            </li>

            <li className={styles.pointsItem}>
              <div className={styles.value}>{timePassed}</div>

              &nbsp;time have passed
            </li>

            <li className={styles.pointsItem}>
              <div className={styles.value}>{timeLeft}</div>

              &nbsp;time left
            </li>
          </ul>
        </div>

        <div className={styles.circle}>
          <svg viewBox="0 0 210 210">
            <circle cx="105" cy="105" r="100" />
            <circle
              className={styles.progressCircle}
              cx="105"
              cy="105"
              r="100"
              style={{'--percent': `${(currentPoints / maxPoints * 100)}`}}
            />
          </svg>

          <div className={styles.score}>{currentPoints}</div>
        </div>
      </div>

      {showRatingCard ? (
        <div className={styles.ratings}>
          <h2 className={styles.title}>Rating</h2>

          <div className={styles.cardDivider} />

          <ul className={styles.ratingList}>
            {defaultRatingList.map(({ name, score, isCurrentUser }, index) => {
              return (
                <li key={index} className={classNames(styles.ratingListItem, isCurrentUser && styles.current)}>
                  <div>{index}.</div>

                  <div>{name}</div>

                  <div className={styles.ratingScore}>{score}</div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}
