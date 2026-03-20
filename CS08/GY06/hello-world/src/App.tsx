import { useState } from "react";
import Hello from "./components/Hello";
import UserList from "./components/UserList";
import users from "./data/users";

function App() {
  // let clickCount = 0;
  const [clickCount, setClickCount] = useState(0);

  const handleIncrementClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1>Template</h1>
      <Hello name="Ádám" age={17} onCompanyClick={handleIncrementClick}>
        <p>Kis üzi!</p>
      </Hello>
      <p>Click Count: {clickCount}</p>

      <UserList users={users} />
    </div>
  );
}

export default App;
