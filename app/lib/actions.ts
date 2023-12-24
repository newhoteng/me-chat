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

const MessageSchema = z.object({
  // id: z.string(),
  // person_id: z.string(),
  text: z.string({
    invalid_type_error: 'Please type a message'
  }),
  // owner: z.enum(['current', 'future']),
  // created_at: z.string(),
});

// const CreateMessage = MessageSchema.omit({ id: true, person_id: true, owner: true, created_at: true })

export type State = {
  errors?: {
    text?: string[];
  };
  message?: string | null;
};

export const createMessage = async (owner: string, formData: FormData) => {

  const validatedFields = MessageSchema.safeParse({
    text: formData.get('text'),
  });

  // console.log(validatedFields.data)

  const { text }  = validatedFields.data;
  console.log(text)
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
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  revalidatePath('/chat');
}