import { useState } from "react";
import Hello from "./components/Hello";
import UserList from "./components/UserList.tsx";
import users, { type User } from "./data/users.ts";

// const users: User[] = [
//   { id: "1", name: "Barna", age: 24, hasStrava: true },
//   { id: "2", name: "Matyi", age: 25, hasStrava: false },
//   { id: "3", name: "Eszter", age: 21, hasStrava: true },
// ];

function App() {
  // let clickCount = 0;
  const [clickCount, setClickCount] = useState(0);
  const [user, setUser] = useState(users[0]);
  
  const [userList, setUserList] = useState(users);
  const userCount = userList.length;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // setUser({ ...user, name: "Pista", age: 30 });
    const newUsers = [
      ...userList,
      { id: "4", name: "Károly", age: 30, hasStrava: false },
    ];
    setUserList(newUsers);
  };

  return (
    <>
      <h1>KATTINTÁSOK SZÁMA: {clickCount}</h1>
      <h2>FELHASZNÁLOK SZÁMA: {userCount}</h2>
      <Hello
        name={user.name}
        age={user.age}
        onClick={handleButtonClick}
        sex="male"
      />
      <UserList users={userList} />
    </>
  );
}

export default App;
