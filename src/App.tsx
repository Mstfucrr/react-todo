import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { TaskContainer } from "./components/TaskContainer";
import { Provider } from "react-redux";
import { setTasks } from "@/redux/actions";
import store from "./redux/store";
import { useEffect } from "react";
import Task from "./model/Task";


function App() {

  useEffect(() => {
    // Load data from localStorage and initialize the Redux store with it
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {  
      store.dispatch(setTasks(JSON.parse(storedTasks) as Task[]) as any);
    }

  }, []);


  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <TaskInput />
        <TaskContainer />
      </div>
    </Provider>
  )
}

export default App
