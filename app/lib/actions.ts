'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
const bcrypt = require('bcrypt');

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, { message: "Must be 6 or more characters long" }),
  // can i use zod to check if two fields match?
  confirm_password: z.string()
});

const CreateNewUser = UserSchema.omit({ id: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirm_password?: string[];
  };
  message?: string | null;
};

export const createUser = async (prevState: State, formData: FormData) => {

  const validatedFields = CreateNewUser.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert data into the database
  try {
    await sql`
      INSERT INTO persons (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
    `;
  } catch(error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }

  redirect('/');
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
      message: 'Database Error: Failed to add Message.',
    };
  }

  revalidatePath('/chat');
}