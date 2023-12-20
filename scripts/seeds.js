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

    // CREATE TABLE persons (
    //   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //   name VARCHAR(255) NOT NULL,
    //   email TEXT NOT NULL UNIQUE,
    //   password TEXT NOT NULL
    // );

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
    console.error('Error seeding users:', error);
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
        created_at TIMESTAMP NOT NULL,
      );
    `;

    // CREATE TABLE messages (
    //   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //   person_id UUID REFERENCES persons(id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
    //   text VARCHAR(2000) NOT NULL,
    //   owner VARCHAR(255) NOT NULL,
    //   created_at TIMESTAMP NOT NULL,
    // );

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
    console.error('Error seeding invoices:', error);
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