const persons = [
  {
    id: '1',
    name: 'Harriet Oteng',
    email: 'harriet.oteng@yahoo.com',
    password: '123456',
  },
];

const messages = [
  {
    id: '1',
    user_id: users[0].id,
    text: 'Hello World',
    owner: 'current',
    // timestamp without time zone
    created_at: '2023-07-27 19:07:11.789635',
  },
  {
    id: '2',
    user_id: users[0].id,
    text: 'Hi Harriet',
    // timestamp without time zone
    owner: 'future',
    created_at: '2023-07-27 19:07:35.347528',
  }
]