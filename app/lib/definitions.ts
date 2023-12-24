export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Message = {
  id: string;
  person_id: string;
  text: string;
  owner: 'current' | 'future';
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
};