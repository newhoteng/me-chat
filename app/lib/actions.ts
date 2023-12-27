'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
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


export const createUser = async () => {

}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


export const createMessage = async (owner: string, text: string) => {

  const userData = await auth();
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