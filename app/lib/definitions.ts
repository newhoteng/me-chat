export type Message = {
  id: string;
  owner: 'current' | 'future';
  text: string;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
};