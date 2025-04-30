// import { User, CreateUserDto, UpdateUserDto } from './types';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export async function getAllUsers(): Promise<User[]> {
//   const res = await fetch(`${API_URL}/user`);
//   if (!res.ok) throw new Error('Ошибка при получении списка пользователей');
//   return res.json();
// }

// export async function getUserById(id: number): Promise<User> {
//   const res = await fetch(`${API_URL}/user/${id}`);
//   if (!res.ok) throw new Error('Ошибка при получении пользователя');
//   return res.json();
// }

// export async function createUser(data: CreateUserDto): Promise<User> {
//   const res = await fetch(`${API_URL}/user`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error('Ошибка при создании пользователя');
//   return res.json();
// }

// export async function updateUser(id: number, data: UpdateUserDto): Promise<User> {
//   const res = await fetch(`${API_URL}/user/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error('Ошибка при обновлении пользователя');
//   return res.json();
// }
