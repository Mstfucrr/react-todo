import { useSelector } from "react-redux";
import { TaskHeader } from "./TaskHeader"
import { TaskList } from "./TaskList"

export const TaskContainer: React.FC = () => {

  const tasks = useSelector((state: any) => state.tasks);


  return (
    <div className="flex w-full md:w-[736px] flex-col items-start gap-[24px] mx-auto mt-[64px]">
      <TaskHeader tasks={tasks} />
      <TaskList />
    </div>
  )
}
