export async function getEvent() {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/events/1`, {
		credentials: 'include',
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	const event = await response.json();

	return event;
}
