import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../model/Task';
import {toggleTask,deleteTask} from '@/redux/actions';



export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {

  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);

  const tasks = useSelector((state: any) => state.tasks);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id) as any);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id) as any);
  };
  

  useEffect(() => {
    const date = new Date(task.createdAt);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor(diff / (1000 * 60 * 60));
    const minute = Math.floor(diff / (1000 * 60));
    setDay(day);
    setHour(hour);
    setMinute(minute);
  }, [task.createdAt]);





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
                    onClick={handleToggle}>
                    <CheckIcon className="text-white w-4 mx-auto" />
                  </button>
                  <motion.div className="text-gray-300 font-normal text-[14px] leading-[140%] line-through flex-1">
                    {task.title}
                  </motion.div>
                </>
                :
                <>
                  <button className="w-[20px] h-[20px] rounded-full border-2 border-solid border-blue cursor-pointer hover:border-blue-dark"
                    onClick={handleToggle}></button>

                  <motion.div className="text-gray-100 font-normal text-[14px] leading-[140%] flex-1">
                    {task.title}
                  </motion.div>
                </>
            }

            {/* delete */}
            <button className="cursor-pointer hover:bg-gray-400 text-center rounded-md "
              onClick={handleDelete}
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
              {day > 0 ? day + " gün önce" : hour > 0 ? hour + " saat önce" : minute > 0 ? minute + " dakika önce" : "az önce"}
            </div>

          </div>
        </>

      }

    </motion.li >
  )
}
