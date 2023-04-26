import {HOST} from "./constants";

export async function getEventStatus() {
	const response = await fetch(`${HOST}/users/me`, {
		credentials: 'include',
		headers: {
			"Content-Type": "application/json"
		},
	});

	const eventStatus = await response.json();

	return eventStatus;
}
