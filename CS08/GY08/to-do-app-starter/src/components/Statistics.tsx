interface StatisticsProps {
  taskCount: number;
  completedCount: number;
}

const Statistics = ({ taskCount, completedCount }: StatisticsProps) => {
  return (
    <h1>
      {taskCount} / {completedCount}
    </h1>
  );
};

export default Statistics;
