import { useState, useEffect, useContext } from 'react';
import { EventContext } from './context';

import { Loader } from '../../components/Loader';

import { AuthContext } from '../auth/context';

import { getEvent } from '../../api/event';

export const EventProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const [isStarted, setIsStarted] = useState(localStorage.getItem('isStarted') ?? false);
	const [eventDetails, setEventDetails] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!user) {
			setIsLoading(false);
			return;
		}

		async function fetchEventStatus() {
			const eventResponse = await getEvent();

			if (eventResponse.id) {
				setEventDetails(eventResponse);

				setIsLoading(false);
			} else {
				setIsLoading(false);
				// TODO: Throw error here or in api. Should discuss
			}
		}
		fetchEventStatus();
	}, [user]);

	if (isLoading) {
		return <div style={{ position: 'relative', height: '100%' }}><Loader /></div>;
	}

	return (
			<EventContext.Provider value={{ eventDetails, isStarted, setIsStarted, setEventDetails }}>
				{children}
			</EventContext.Provider>
	);
};
