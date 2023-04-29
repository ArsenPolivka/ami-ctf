import { HOST } from "./constants";

export async function sendContactUsRequest(body) {
  const response = await fetch(`${HOST}/messages`, {
      credentials: 'include',
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
  });

  return response;
}
