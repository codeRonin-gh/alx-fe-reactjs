import axios from "axios";

export async function fetchUserData(username) {
  try {
    const url = `https://api.github.com/users/${username}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "GitHub API error");
  }
}
