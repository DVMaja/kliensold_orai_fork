import type { Task } from "../data/tasks";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onClick: (id: number) => void;
  onComplete: (id: number) => void;
}

function TaskList({ tasks, onClick, onComplete }: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onClick={onClick}
          onComplete={onComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
