import { TaskItem } from "./TaskItem"

export const TaskList = () => {
  return (
    <ul className="flex flex-col items-center gap-[12px] self-stretch">
        <TaskItem />
        <TaskItem />
    </ul>
  )
}
