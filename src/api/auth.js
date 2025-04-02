// Login and Register

const API_URL = "http://localhost:8080/auth";

export async function registerUser({ email, username, password }) {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });

    const result = await response.json();

    if (result.errors) {
      return { error: result.errors.detail };
    }

    return {
      message: result.data.message,
      user: result.data.user,
    };
  } catch (err) {
    console.error("Register error:", err);
    return { error: "Something went wrong while registering." };
  }
}

export async function loginUser({ email, password }) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.errors) {
      return { error: result.errors.detail };
    }

    const { token, user } = result.data;

    return {
      token,
      email: user.email,
      username: user.username,
    };
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Something went wrong while logging in." };
  }
}
