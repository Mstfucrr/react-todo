import tick from '../assets/tick.svg'
import { motion } from 'framer-motion';
import Task from '../model/Task';



export const TaskItem = ({ setTasks, task, tasks }: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  , task: Task, tasks: Task[]
}) => {

  function toggleTask() {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(t => t.id === task.id);
    newTasks[taskIndex].status = !newTasks[taskIndex].status;
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function deleteTask() {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(t => t.id === task.id);
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  


  return (
    <motion.li className="flex items-start p-[16px] gap-[12px] self-stretch rounded-[8px] border border-solid border-gray-400 bg-gray-500 shadow-sm justify-between"
      initial={{ opacity: 0, translateY: 100, scale: 1.7 }}
      animate={{ opacity: 1, translateY: 0, scale: 1 }}
      exit={{ opacity: 0, translateX: 100 }}
      transition={{ duration: 0.5 }}

    >
      {
        task.status ?
          <>
            <button className="w-[20px] h-[20px] rounded-full bg-purple-dark cursor-pointer hover:bg-purple"
              onClick={toggleTask}>
              <img src={tick} alt="check" className="-translate-x-[11%] -translate-y-[7%]" />
            </button>
            <motion.div className="text-gray-300 font-normal text-[14px] leading-[140%] line-through flex-1">
              {task.title}
            </motion.div>
          </>
          :
          <>
            <button className="w-[20px] h-[20px] rounded-full border-2 border-solid border-blue cursor-pointer hover:border-blue-dark"
              onClick={toggleTask}></button>

            <motion.div className="text-gray-100 font-normal text-[14px] leading-[140%] flex-1">
              {task.title}
            </motion.div>
          </>
      }

      {/* delete */}
      <button className="cursor-pointer hover:bg-gray-400 text-center rounded-md "
        onClick={deleteTask}
      >
        <i className="fa fa-trash-o text-gray-300 hover:text-danger text-[12px] p-[7px] align-middle" aria-hidden="true" />
      </button>



    </motion.li >
  )
}
