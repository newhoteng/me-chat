'use server';
import { signIn } from '@/auth';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { sql } from '@vercel/postgres';

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, { message: "Must be 6 or more characters long" }),
});


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
    console.log('through: try')
  } catch (error) {
    console.log('through: catch')
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}

export const createUser = async () => {

}


export const createMessage = async (owner: string, text: string) => {

  // const { user } = await auth();
  const user_id = '410544b2-4001-4271-9855-fec4b6a6442a';
  const date = new Date().toISOString();

  try {
    await sql`
      INSERT INTO messages (person_id, text, owner, created_at )
      VALUES (${user_id}, ${text}, ${owner}, ${date})
    `;
  } catch(error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to add Message.',
    };
  }

  revalidatePath('/chat');
}