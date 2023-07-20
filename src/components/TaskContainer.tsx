import Task from "../model/Task";
import { TaskHeader } from "./TaskHeader"
import { TaskList } from "./TaskList"

export const TaskContainer = ({ setTasks, tasks }: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  , tasks: Task[]
}) => {

  return (
    <div className="flex w-[736px] flex-col items-start gap-[24px] mx-auto mt-[64px]">
      <TaskHeader tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}
