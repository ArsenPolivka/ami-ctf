import { useState, useEffect, useContext } from 'react';
import { EventContext } from './context';

import { Loader } from '../../components/Loader';

import { AuthContext } from '../auth/context';

import { getEvent } from '../../api/event';

export const EventProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const [eventStatus, setEventStatus] = useState(false);
	const [eventStartTime, setEventStartTime] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!user) {
			setIsLoading(false);
			return;
		}

		async function fetchEventStatus() {
			const eventResponse = await getEvent();

			if (eventResponse.id) {
				setEventStatus(eventResponse.status);
				setEventStartTime(eventResponse.startTime);

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
			<EventContext.Provider value={{ eventStatus, setEventStatus, eventStartTime }}>
				{children}
			</EventContext.Provider>
	);
};
