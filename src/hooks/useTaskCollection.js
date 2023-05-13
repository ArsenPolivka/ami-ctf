import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { getTaskCollection } from '../api/task';

const notifyError = (err) => toast.error(`This is an error: ${err}!`);

export const useTaskCollection = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTaskCollection().then(response => {
      const { title } = response;

      if (!title) {
        setData(response);
      } else {
        notifyError(title);
      }
    }).finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};
