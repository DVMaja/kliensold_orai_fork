import type { Task } from "../data/tasks";

interface TaskItemProps {
  task: Task;
  onClick: (id: number) => void;
  onComplete: (id: number) => void;
}

function TaskItem({
  task: { id, title, completed },
  onClick,
  onComplete,
}: TaskItemProps) {
  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <input
        onChange={() => onComplete(id)}
        type="checkbox"
        checked={completed}
      />
      <span>{title}</span>
      <button onClick={() => onClick(id)}>✕</button>
    </div>
  );
}

export default TaskItem;
