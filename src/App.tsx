import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskContainer } from "./components/TaskContainer";
import { useEffect, useState } from "react";
import Task  from "./model/Task";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // setTasks çalıştığında tasks'ı localStorage'a kaydet
  
  useEffect(() => {
    const jsTasks = localStorage.getItem("tasks");
    if (jsTasks) {
      const storedTasks = JSON.parse(jsTasks) as Task[];
      if (storedTasks) {
        setTasks(storedTasks);
      }
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskContainer setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App
