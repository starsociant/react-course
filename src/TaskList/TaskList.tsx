export interface TaskItemInterface {
  description: string;
  done: boolean;
}

export interface TaskListProps {
  owner: string;
  tasks: Array<TaskItemInterface>;
}

export default function TaskList({ owner, tasks }: TaskListProps) {
  return (
    <>
      <h4>{owner}</h4>
      <ul>
        {tasks.map(({ description, done }, i) =>
          done ? (
            <del key={description}>
              <li>{description}</li>
            </del>
          ) : (
            <li key={i}>{description}</li>
          )
        )}
      </ul>
    </>
  );
}
