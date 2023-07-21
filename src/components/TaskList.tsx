import { TaskItem } from "./TaskItem"
import { AnimatePresence } from 'framer-motion';
import Task from "../model/Task";

export const TaskList = ({ setTasks, tasks }: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  , tasks: Task[]
}) => {
  
  return (
    <ul className="flex flex-col items-center gap-[12px] self-stretch max-h-[500px] overflow-y-auto overflow-x-hidden">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem key={task.id} setTasks={setTasks} task={task} tasks={tasks} />
        ))}

      </AnimatePresence>
    </ul>
  )
}
