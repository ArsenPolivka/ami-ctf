import { HOST } from "./constants";

export async function getEventStatus() {
	const response = await fetch(`${HOST}/events/1`, {
		credentials: 'include',
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	const eventStatus = await response.json();

	return eventStatus;
}
