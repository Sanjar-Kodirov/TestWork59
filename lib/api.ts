import axios from 'axios';
import { LoginResponse, ProductsResponse, User } from './types';

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export async function login(username: string, password: string) {
  const { data } = await api.post<LoginResponse>('/auth/login', { username, password });
  const user: User = {
    id: data.id,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  };
  return { user, token: data.accessToken };
}

export async function getProducts(params: { limit: number }) {
  const { data } = await api.get<ProductsResponse>(`/products`, { params });
  return data;
}
