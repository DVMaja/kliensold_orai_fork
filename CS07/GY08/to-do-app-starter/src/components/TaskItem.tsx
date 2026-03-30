import type { Task } from "../data/tasks";

interface TaskItemProps {
  task: Task;
  onRemoveClick: (id: number) => void;
  onCompletedClick: (id: number) => void;
}

function TaskItem({
  task: { id, title, completed },
  onRemoveClick,
  onCompletedClick,
}: TaskItemProps) {
  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <input
        onChange={() => onCompletedClick(id)}
        type="checkbox"
        checked={completed}
      />
      <span>{title}</span>
      <button onClick={() => onRemoveClick(id)}>✕</button>
    </div>
  );
}

export default TaskItem;
