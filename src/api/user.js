import { HOST } from './constants';

export async function loginUser({ email, password }) {
  const response = await fetch(`${HOST}/auth/login`, {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password }),
  });

  const loginUserResponse = await response.json();

  return loginUserResponse;
};

export async function registerUser({ email, username, password, confirmedPassword }) {
  const response = await fetch(`${HOST}/auth/register`, {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, username, password, confirmedPassword }),
  });

  const registerUserResponse = await response.json();

  return registerUserResponse;
};

export async function getCurrentUser() {
  const response = await fetch(`${HOST}/users/me`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
  });

  const userInfo = await response.json();

  return userInfo;
}
