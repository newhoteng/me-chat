'use server';

import { sql } from '@vercel/postgres';
import { Message, User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchMessages() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {

    const data = await sql<Message>`SELECT * FROM messages`;

    // const data = await sql `SELECT * FROM persons WHERE email=${email}`;

    // const data = await sql<Message>`
    // SELECT messages.id, messages.person_id, messages.text, messages.owner, messages.created_at
    // FROM messages
    // JOIN persons ON messages.person_id = persons.id
    // WHERE persons.email = ${email}`;

    // console.log(data.rows);

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch messages.');
  }
}
