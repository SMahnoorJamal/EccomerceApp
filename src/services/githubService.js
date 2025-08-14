import axios from 'axios';
import { GITHUB_TOKEN } from '../config'


const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github+json',
    ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
  },
});

export async function searchUsersApi(query) {
   try {
    const res = await api.get('/search/users', { params: { q: query, per_page: 30 } });
    return res.data;
  } catch (error) {
    console.error('searchUsersApi error:', error);
    throw error;
  }
}

export async function getUserDetailsApi(login) {
  try {
  const res = await api.get(`/users/${login}`);
  return res.data;
  } catch (error) {
    console.error('getUserDetailsApi error:', error);
    throw error;
  }
}