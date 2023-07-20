import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskContainer } from "./components/TaskContainer";

function App() {

  return (
    <div className="app">
      <Header />
      <TaskInput />
      <TaskContainer />
    </div>
  )
}

export default App
