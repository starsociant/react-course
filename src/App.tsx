import TaskList from "./TaskList/TaskList";
import { TaskListProps } from "./TaskList/TaskList";

function App() {
  const props: TaskListProps = {
    owner: "Saulo",
    tasks: [
      {
        description: "Add changes",
        done: true,
      },
      {
        description: "Commit",
        done: false,
      },
      {
        description: "Push",
        done: false,
      },
      {
        description: "Push",
        done: false,
      },
    ],
  };

  return (
    <div className="App">
      <TaskList {...props} />
    </div>
  );
}

export default App;
