'use server';
import { signIn } from '@/auth';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { sql } from '@vercel/postgres';


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}

export const createMessage = async (owner: string, formData: FormData) => {

  const text = String(formData.get('text'));

  const userData = await auth();
  const user_id = userData?.user.id;
  const date = new Date().toISOString();

  try {
    await sql`
      INSERT INTO messages (person_id, text, owner, created_at )
      VALUES (${user_id}, ${text}, ${owner}, ${date})
    `;
  } catch(error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Message.',
    };
  }

  revalidatePath('/chat');
}