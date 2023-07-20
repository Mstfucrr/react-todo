import { TaskHeader } from "./TaskHeader"
import { TaskList } from "./TaskList"

export const TaskContainer = () => {
  return (
    <div className="flex w-[736px] flex-col items-start gap-[24px] mx-auto mt-[64px]">
      <TaskHeader />
      <TaskList />
    </div>
  )
}
