const persons = [
  {
    id: '1',
    name: 'Harriet Oteng',
    email: 'harriet.oteng@yahoo.com',
    password: '123456',
  },
  {
    id: '2',
    name: 'Kofi Domfeh',
    email: 'harriet.oteng@gmail.com',
    password: '123456',
  },
];

const messages = [
  {
    id: '1',
    person_id: users[0].id,
    text: 'Hello World',
    owner: 'current',
    created_at: '2023-07-27 19:07:11.789635',
  },
  {
    id: '2',
    person_id: users[0].id,
    text: 'Hi Harriet',
    owner: 'future',
    created_at: '2023-07-27 19:07:35.347528',
  }
];

module.exports = {
  persons,
  messages,
};