'use server';

import { sql } from '@vercel/postgres';
import { Message } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { auth } from '@/auth';

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
