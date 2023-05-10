import { useContext, useEffect, useState } from "react";
import classNames from 'classnames';

import { Loader } from '../../../components/Loader';

import { useSidebarConfig } from '../../../hooks/useSidebarConfig';
import { EventContext } from "../../../context/event/context";

import styles from './TaskSidebar.module.css';

const defaultPoints = {
  position: 1,
  currentScore: 0,
  maxPoints: 2200,
  pointsToReachFirst: 0,
  nextRating: 1,
  tasksDone: 0,
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

const generateTimeString = (millisec) => {
  const days = Math.floor(millisec / (1000 * 60 * 60 * 24));
  const hours = Math.floor((millisec / (1000 * 60 * 60)) % 24);
  const fHours = hours > 9 ? hours : `0${hours}`;
  const minutes = Math.floor((millisec / 1000 / 60) % 60);
  const fMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const seconds = Math.floor((millisec / 1000) % 60);
  const fSeconds = seconds > 9 ? seconds : `0${seconds}`;

  return days > 0 ? `${days}d ${fHours}:${fMinutes}:${fSeconds}` : `${fHours}:${fMinutes}:${fSeconds}`;
};

export const TaskSidebar = ({ ratingList, points, isLoading }) => {
  const { showRatingCard } = useSidebarConfig();
  const [date, setDate] = useState(Date.now());
  const [timePassed, setTimePassed] = useState("00:00:00");
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const { eventDetails } = useContext(EventContext);

  const {
    position,
    currentScore,
    pointsToReachFirst,
    tasksDone
  } = points ?? defaultPoints;

  useEffect(() => {
    const timer = setInterval(() => setDate(Date.now()), 1000);

    const passedTime = date - Date.parse(eventDetails?.startTime) > 0 ? date - Date.parse(eventDetails?.startTime) : 0;
    const leftTime = Date.parse(eventDetails?.endTime) - date > 0 ? Date.parse(eventDetails?.endTime) - date : 0;

    setTimePassed(generateTimeString(passedTime));
    setTimeLeft(generateTimeString(leftTime));

    return function cleanup() {
      clearInterval(timer);
    }
  }, [date, eventDetails?.endTime, eventDetails?.startTime]);

  return (
    <aside className={styles.aside}>
      <div className={styles.points}>
        {isLoading && <Loader />}

        <div className={styles.inner}>
          <h2 className={styles.title}>Your points</h2>

          <ul className={styles.pointsList}>
            <li className={styles.pointsItem}>
              <div className={styles.value}>#{position}</div>

              &nbsp;place in rating
            </li>

            <li className={styles.pointsItem}>
              <div className={styles.value}>{pointsToReachFirst}</div>

              &nbsp;points to reach #1
            </li>

            <li className={styles.pointsItem}>
              <div className={styles.value}>{tasksDone}/{eventDetails?.totalNumberOfTasks}</div>

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
              style={{'--percent': `${(currentScore / eventDetails?.maxPoints * 100)}`}}
            />
          </svg>

          <div className={styles.score}>{currentScore}</div>
        </div>
      </div>

      {showRatingCard ? (
        <div className={styles.ratings}>
          {isLoading && <Loader />}

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
