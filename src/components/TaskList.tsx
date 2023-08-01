import { TaskItem } from "./TaskItem"
import { AnimatePresence } from 'framer-motion';
import { useSelector } from "react-redux";
import Task from "@/model/Task";

export const TaskList: React.FC= () => {
  const tasks = useSelector((state: any) => state.tasks);
  return (
    <ul className="flex flex-col items-center gap-[12px] self-stretch max-h-[500px] overflow-y-auto overflow-x-hidden">
      <AnimatePresence>
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} />
        ))}

      </AnimatePresence>
    </ul>
  )
}
