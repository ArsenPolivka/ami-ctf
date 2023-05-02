export async function loginUser(body) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
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
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
  });

  const userInfo = await response.json();

  return userInfo;
};

export async function logoutUser() {
  await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
    credentials: 'include',
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
}

export async function updateUser(body, id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const userInfo = await response.json();

  return userInfo;
};

export async function updatePassword(body, id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}/reset-password`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const userInfo = await response.json();

  return userInfo;
};

export async function getAvatarSASLink(body, id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}/add-avatar`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return response;
}

export async function addAvatar(link, type, binary) {
  const response = await fetch(link, {
    method: "PUT",
    headers: {
      "Content-Type": `${type}`,
      "x-ms-blob-type": "BlockBlob"
    },
    body: binary
  });

  return response;
}
