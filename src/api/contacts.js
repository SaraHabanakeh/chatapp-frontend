// src/api/contacts.js

const API_URL = "http://localhost:8080/contacts";
const token = sessionStorage.getItem('authToken');

export async function getAllContacts() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Failed to fetch contacts:", error.message);
    return { error: error.message };
  }
}
