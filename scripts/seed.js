const { db } = require('@vercel/postgres');
const {
  persons,
  messages,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedPersons(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "persons" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS persons (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "persons" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      persons.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO persons (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding persons:', error);
    throw error;
  }
}

async function seedMessages(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "messages" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS messages (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        person_id UUID REFERENCES persons(id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
        text VARCHAR(2000) NOT NULL,
        owner VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL
      );
    `;

    console.log(`Created "messages" table`);

    // Insert data into the "messages" table
    const insertedMessages = await Promise.all(
      messages.map(
        (message) => client.sql`
        INSERT INTO messages (person_id, text, owner, created_at)
        VALUES (${message.person_id}, ${message.text}, ${message.owner}, ${message.created_at})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedMessages.length} messages`);

    return {
      createTable,
      messages: insertedMessages,
    };
  } catch (error) {
    console.error('Error seeding messages:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedPersons(client);
  await seedMessages(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

// DELETE FROM persons WHERE id = '76f09b6b-362e-4d06-a82e-9b4024ed8ec7';
// DELETE FROM persons WHERE id = 'ac1cdb02-3313-40d6-b6be-799d134705f7';
// DELETE FROM persons WHERE id = 'c1af307f-6854-422f-9337-850db77618e2';


// DELETE FROM messages WHERE id = 'b82e23af-042f-400c-bb63-3d5af650753d';
// DELETE FROM messages WHERE id = '6fd1f905-5f68-4b92-8df2-c0dd7be98264';
// DELETE FROM messages WHERE id = 'c57b563e-5a51-4a95-a82e-3547cdaddf3b';
// DELETE FROM messages WHERE id = 'a6af9f48-1051-4962-bd69-cb114c154c0a';
// DELETE FROM messages WHERE id = '94a4774f-e249-48ba-8c5e-5003c7f9a534';
// DELETE FROM messages WHERE id = 'f2bc0dc8-3ac5-4c56-bd6b-c45bdf13a4f8';

// ALTER TABLE persons ADD COLUMN persona text NOT NULL DEFAULT "current"; DID NOT WORK

// ALTER TABLE persons ADD persona text NOT NULL CONSTRAINT store_persona DEFAULT 'current';

// ALTER TABLE persons ADD isFutureSelf BOOLEAN NOT NULL CONSTRAINT store_persona DEFAULT false;

// ALTER TABLE persons DROP COLUMN persona;