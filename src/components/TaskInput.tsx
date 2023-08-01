import Task from '@/model/Task';
import { addTask } from '@/redux/actions';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState<string>("");

  const parseDate = (dateString: string) => {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('.');
    const [hours, minutes, seconds] = timePart.split(':');

    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
  };


  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      const task = new Task(
        Math.floor(Math.random() * 100000),
        newTaskText,
        false,
        parseDate(new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })),
      );
      dispatch(addTask(task) as any);
      setNewTaskText("");
      
    }
  }




  return (
    <div className="flex w-full md:w-[736px] items-center gap-[8px] relative -top-5 mx-auto">
      <input type="text" className="rounded-[8px] border border-solid border-gray-700 bg-gray-500 p-[16px] flex-1 gap-[8px] items-center
        focus:border-purple-dark focus:text-gray-100 focus-visible:outline-none
      " placeholder="Yeni görev"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button type="submit" className="flex p-[16px] justify-center items-center
       gap-[8px] rounded-[8px] bg-blue-dark text-gray-100
      hover:bg-blue transition-all duration-300
      active:scale-100 active:bg-blue-dark active:translate-y-[2px]
      " onClick={handleAddTask}


      >
        Ekle <PlusCircleIcon className="w-[24px] h-[24px]" />
      </button>
    </div>
  )
}
