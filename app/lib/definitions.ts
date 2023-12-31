export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  persona: string;
};

export type Message = {
  id: string;
  person_id: string;
  text: string;
  owner: 'current' | 'future';
  date: string;
};