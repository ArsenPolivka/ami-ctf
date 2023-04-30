export async function getEventStatus() {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/events/1`, {
		credentials: 'include',
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	const eventStatus = await response.json();

	return eventStatus;
}
