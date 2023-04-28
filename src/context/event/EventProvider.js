import { useState, useEffect } from 'react';
import { EventContext } from './context';

import { getEventStatus } from '../../api/event';

export const EventProvider = ({ children }) => {
	const [eventStatus, setEventStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchEventStatus() {
			const eventStatusResponse = await getEventStatus();

			if (eventStatusResponse.id) {
				setEventStatus(eventStatusResponse.status);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				// TODO: Throw error here or in api. Should discuss
			}
		}
		fetchEventStatus();
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
			<EventContext.Provider value={{ eventStatus, setEventStatus }}>
				{children}
			</EventContext.Provider>
	);
};
