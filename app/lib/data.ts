'use server';

import { sql } from '@vercel/postgres';
import { Message, User } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
// import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function fetchMessages() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {

    const data = await sql<Message>`SELECT * FROM messages`;

    console.log(data);

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch messages.');
  }
}