export async function sendContactUsRequest(body) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
      credentials: 'include',
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
  });

  return response;
}
