export async function getTaskCollection() {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
		credentials: 'include',
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	const taskCollection = await response.json();

	return taskCollection;
}

export async function getSingleTask(id) {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
		credentials: 'include',
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		},
	});

	const task = await response.json();

	return task;
}
