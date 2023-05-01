import { useState, useEffect, useContext } from 'react';
import { EventContext } from './context';

import { Loader } from '../../components/Loader';

import { AuthContext } from '../auth/context';

import { getEventStatus } from '../../api/event';

export const EventProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const [eventStatus, setEventStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!user) {
			setIsLoading(false);
			return;
		}

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
	}, [user]);

	if (isLoading) {
		return <div style={{ position: 'relative', height: '100%' }}><Loader /></div>;
	}

	return (
			<EventContext.Provider value={{ eventStatus, setEventStatus }}>
				{children}
			</EventContext.Provider>
	);
};
