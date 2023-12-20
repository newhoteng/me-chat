const persons = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Harriet Oteng',
    email: 'harriet.oteng@yahoo.com',
    password: '123456',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Kofi Domfeh',
    email: 'harriet.oteng@gmail.com',
    password: '123456',
  },
];

const messages = [
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    person_id: persons[0].id,
    text: 'Hello World',
    owner: 'current',
    created_at: '2023-07-27 19:07:11.789635',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    person_id: persons[0].id,
    text: 'Hi Harriet',
    owner: 'future',
    created_at: '2023-07-27 19:07:35.347528',
  }
];

module.exports = {
  persons,
  messages,
};