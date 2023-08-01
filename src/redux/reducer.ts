// redux/reducer.ts
import Task from "../model/Task";
import { ActionTypes } from "./actionTypes";
import { TaskAction } from "./actions";

interface State {
  tasks: Task[];
}

const initialState: State = {
  tasks: [],
};

const taskReducer = (state = initialState, action: TaskAction): State => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      const addedTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(addedTasks));
      return {
        ...state,
        tasks: addedTasks,
      };
    case ActionTypes.TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, status: !task.status } : task
      );
      localStorage.setItem("tasks", JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
    case ActionTypes.DELETE_TASK:
      const deletedTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(deletedTasks));
      return {
        ...state,
        tasks: deletedTasks,
      };
    case ActionTypes.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
