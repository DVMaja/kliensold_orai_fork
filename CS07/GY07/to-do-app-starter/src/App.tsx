import TaskList from "./components/TaskList";
import "./App.css";
import tasks from "./data/tasks";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const handleRemoveClick = (id: number) => {
    setTaskList((t) => t.filter((task) => task.id !== id));
  };

  const handleCompletedClick = (id: number) => {
    setTaskList((t) =>
      t.map((task) =>
        task.id !== id ? task : { ...task, completed: !task.completed },
      ),
    );
  };

  return (
    <div className="container">
      <h1>📝 Tennivalók</h1>
      <TaskList
        tasks={taskList}
        onClick={handleRemoveClick}
        onComplete={handleCompletedClick}
      />
    </div>
  );
}

export default App;
