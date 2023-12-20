-- Create persons table
CREATE TABLE persons (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  person_id UUID REFERENCES persons(id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
  text VARCHAR(2000) NOT NULL,
  owner VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL,
);

-- {
--   id: '2',
--   user_id: users[0].id,
--   text: 'Hi Harriet',
--   owner: 'future',
--   created_at: '2023-07-27 19:07:35.347528',
-- }