export interface User {
  id: string;
  name: string;
  age: number;
  hasStrava: boolean;
}

const users: User[] = [
  { id: "1", name: "Sanyi", age: 27, hasStrava: false },
  { id: "2", name: "Roli", age: 27, hasStrava: true },
  { id: "3", name: "Kriszta", age: 45, hasStrava: true },
];

export default users;
