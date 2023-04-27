import { useState, useEffect } from 'react';
import { EventContext } from './context';

import { getEventLockedStatus, getEventStatus } from '../../api/event';

export const EventProvider = ({ children }) => {
	const [eventStatus, setEventStatus] = useState(false);
	const [eventLockedStatus, setEventLockedStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchEventStatus() {
			const eventStatusResponse = await getEventStatus();

			if (eventStatusResponse.id) {
				setEventStatus(eventStatusResponse);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				// TODO: Throw error here or in api. Should discuss
			}
		}
		fetchEventStatus();
	}, []);

	useEffect(() => {
		async function fetchLockedEventStatus() {
			const eventLockedResponse = await getEventLockedStatus();

			if (eventLockedResponse.id) {
				setEventLockedStatus(eventLockedResponse);
				setIsLoading(false);
			} else {
				setIsLoading(false);
			}
		}
		fetchLockedEventStatus();
	})

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
			<EventContext.Provider value={{ eventStatus, setEventStatus, eventLockedStatus }}>
				{children}
			</EventContext.Provider>
	);
};
