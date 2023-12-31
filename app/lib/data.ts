'use server';

import { sql } from '@vercel/postgres';
import { Message } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { auth } from '@/auth';
// import { User } from './definitions';
import type { User } from '@/app/lib/definitions';

export async function getUserInfo(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM persons WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function fetchMessages() {
  noStore();

  const userData = await auth();
  const id = userData?.user.id;

  try {

    const data = await sql<Message>`SELECT * FROM messages WHERE person_id=${id}`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch messages.');
  }
}
