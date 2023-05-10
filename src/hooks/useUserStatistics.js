import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { getStatistic } from '../api/user';

const notifyError = (err) => toast.error(`This is an error: ${err}!`);

export const useUserStatistics = (id) => {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getStatistic(id).then(response => {
      const { currentScore, pointsToReachFirst, position, tasksDone, userId, title } = response;

      if (userId) {
        setStats({
          currentScore,
          pointsToReachFirst,
          position,
          tasksDone,
        });
      } else {
        notifyError(title);
      }
    }).finally(() => setIsLoading(false));
  }, [id]);

  return { stats, isLoading };
};
