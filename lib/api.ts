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
  const token = (data as any).token ?? (data as any).accessToken;
  return { user, token };
}

export async function getMe(token: string): Promise<User> {
  const { data } = await api.get<LoginResponse>('/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const user: User = {
    id: data.id,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  };
  return user;
}

export async function getProducts(params: { limit: number }) {
  const { data } = await api.get<ProductsResponse>(`/products`, { params });
  return data;
}
