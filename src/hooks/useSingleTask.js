import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import { getSingleTask } from '../api/task';

const notifyError = (err) => toast.error(`This is an error: ${err}!`);

export const useSingleTask = (id) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getSingleTask(id).then(response => {
			const { title } = response;

			if (!title) {
				setData(response);
			} else {
				notifyError(title);
			}
		}).finally(() => setIsLoading(false));
	}, [id]);

	return { data, isLoading };
};
