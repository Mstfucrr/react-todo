import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
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
    <motion.li className="flex items-start flex-col p-[16px] gap-[12px] self-stretch rounded-[8px] border border-solid border-gray-400 bg-gray-500 shadow-sm justify-between"
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 100 }}
      transition={{ duration: 0.5, delay: 0.1 * tasks.indexOf(task) }}>
      {
        task &&
        <>
          <div className="flex items-center gap-[12px] self-stretch">
            {
              task.status ?
                <>
                  <button className="w-[20px] h-[20px] rounded-full bg-purple-dark cursor-pointer hover:bg-purple"
                    onClick={toggleTask}>
                    <CheckIcon className="text-white w-4 mx-auto" />
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
              <TrashIcon className="text-gray-300 hover:text-danger w-[30px] p-[7px] align-middle" />
            </button>
          </div>

          <div className='flex items-start justify-between w-full'>

            {/* date */}
            <div className="text-gray-300 font-normal text-[12px] leading-[140%] flex">
              {task.createdAt && new Date(task.createdAt).toLocaleDateString("tr-TR") + " " + new Date(task.createdAt).toLocaleTimeString("tr-TR")}

            </div>
            <div className="text-gray-300 font-normal text-[12px] leading-[140%] flex">
              {Math.floor((new Date().getTime() - new Date(task.createdAt).getTime()) / (1000 * 3600 * 24)) + " "} gün &nbsp;
              {/* saat önce */}
              {Math.floor((new Date().getTime() - new Date(task.createdAt).getTime()) / (1000 * 3600)) + " "} saat &nbsp;
              {/* dakika önce */}
              {Math.floor((new Date().getTime() - new Date(task.createdAt).getTime()) / (1000 * 60)) + " "} dakika önce

            </div>

          </div>
        </>

      }

    </motion.li >
  )
}
