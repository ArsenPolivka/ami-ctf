import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { TaskContext } from './context';

import { getTaskCollection } from '../../api/task';

import { Loader } from '../../components/Loader';

export const TaskProvider = ({ children }) => {
  const notifyError = (err) => toast.error(`This is an error: ${err}!`);

	const [taskCollection, setTaskCollection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTaskCollection().then(response => {
      const { title } = response;

      if (!title) {
        setTaskCollection(response);
      } else {
        notifyError(title);
      }
    }).finally(() => setIsLoading(false));
  }, []);

	if (isLoading) {
		return <div style={{ position: 'relative', height: '100%' }}><Loader /></div>;
	}

	return (
    <TaskContext.Provider value={{ taskCollection }}>
      {children}
    </TaskContext.Provider>
	);
};
