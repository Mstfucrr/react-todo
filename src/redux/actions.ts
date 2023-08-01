// redux/actions.ts
import { ActionTypes } from "./actionTypes";
import Task from "../model/Task";

export interface AddTaskAction {
  type: ActionTypes.ADD_TASK;
  payload: Task;
}

export interface ToggleTaskAction {
  type: ActionTypes.TOGGLE_TASK;
  payload: number; // ID of the task
}

export interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  payload: number; // ID of the task
}

export interface SetTasksAction {
  type: ActionTypes.SET_TASKS;
  payload: Task[];
}

export type TaskAction =
  | AddTaskAction
  | ToggleTaskAction
  | DeleteTaskAction
  | SetTasksAction;

export const addTask = (task: Task): AddTaskAction => ({
  type: ActionTypes.ADD_TASK,
  payload: task,
});

export const toggleTask = (taskId: number): ToggleTaskAction => ({
  type: ActionTypes.TOGGLE_TASK,
  payload: taskId,
});

export const deleteTask = (taskId: number): DeleteTaskAction => ({
  type: ActionTypes.DELETE_TASK,
  payload: taskId,
});

export const setTasks = (tasks: Task[]): SetTasksAction => ({
  type: ActionTypes.SET_TASKS,
  payload: tasks,
});
