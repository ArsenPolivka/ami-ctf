import {HOST} from "./constants";

export async function getEventStatus() {
	const response = await fetch(`${HOST}/events/1`, {
		credentials: 'include',
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	const eventStatus = await response.json();

	return eventStatus.status;
}

export async function getEventLockedStatus() {
	const response = await fetch(`${HOST}/events/1`, {
		credentials: 'include',
		headers: {
			"Content-Type": "application/json"
		},
	});

	const eventLockedStatus = await response.json();

	return eventLockedStatus;
}

