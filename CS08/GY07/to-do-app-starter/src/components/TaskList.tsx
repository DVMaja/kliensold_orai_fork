import type { Task } from "../data/tasks";
import TaskItem from "./TaskItem";

interface TaskListProps {
  taskList: Task[];
  onRemoveClick: (id: number) => void;
  onCompletedClick: (id: number) => void;
}

function TaskList({
  taskList,
  onRemoveClick,
  onCompletedClick,
}: TaskListProps) {
  return (
    <div className="task-list">
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onRemoveClick={onRemoveClick}
          onCompletedClick={onCompletedClick}
        />
      ))}
    </div>
  );
}

export default TaskList;
