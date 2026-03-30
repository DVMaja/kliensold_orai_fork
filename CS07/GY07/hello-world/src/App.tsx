import { useState } from "react";
import Hello from "./components/Hello";
import UserList from "./components/UserList.tsx";
import users from "./data/users.ts";

function App() {
  // let clickCount = 0;
  const [clickCount, setClickCount] = useState(0);
  const [userList, setUserList] = useState(users);
  const [user, setUser] = useState(users[0]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUser({ ...user, age: 34 });
  };

  console.log(clickCount);

  return (
    <>
      <h1>KATTINTÁSOK SZÁMA: {clickCount}</h1>
      <Hello
        name={user.name}
        age={user.age}
        onClick={handleButtonClick}
        sex="male"
      />
      {/* <UserList users={users} /> */}
    </>
  );
}

export default App;
