import type { User } from "../data/users";

interface UserCardProps {
  user: User;
}

// props: {
//     user: {
//         id;
//         name;
//         age;
//         hasStrava
//     }
// }

const UserCard = ({ user: { name, age, hasStrava } }: UserCardProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <p>{hasStrava ? "Sportos" : "Nem"}</p>
    </div>
  );
};

export default UserCard;
