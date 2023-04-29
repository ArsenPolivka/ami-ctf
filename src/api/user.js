import { HOST } from './constants';

export async function loginUser(body) {
  const response = await fetch(`${HOST}/auth/login`, {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });

  const loginUserResponse = await response.json();

  return loginUserResponse;
};

export async function registerUser(body) {
  const response = await fetch(`${HOST}/auth/register`, {
    credentials: 'include',
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
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
};

export async function logoutUser() {
  await fetch(`${HOST}/auth/logout`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
}

export async function updateUser(body, id) {
  const response = await fetch(`${HOST}/users/${id}`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (response.ok) {
    return response.json();
  } else {
    return {
      error: true,
      message: `Failed to update user: ${response.title}`,
    };
  }
};

export async function updatePassword(body, id) {
  const response = await fetch(`${HOST}/users/${id}/reset-password`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (response.ok) {
    return response.json();
  } else {
    return {
      error: true,
      message: `Failed to update password: ${response.title}`,
    };
  }
};
