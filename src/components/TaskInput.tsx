import Task from '@/model/Task';
import { PlusCircleIcon } from '@heroicons/react/24/solid';

export const TaskInput = ({ setTasks, tasks }: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  , tasks: Task[]
}) => {

  const parseDate = (dateString: string) => {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('.');
    const [hours, minutes, seconds] = timePart.split(':');

    return new Date(`${year}-${month}-${day}T${hours}:${minutes}:${seconds}`);
  };


  async function addTask() {
    const input = document.querySelector("input");
    if (input) {
      const newTask = input.value;
      if (newTask) {
        const newTask = new Task(
          Math.floor(Math.random() * 1000)
          , input.value, false, parseDate(new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }))
        )
        setTasks([...tasks, newTask])
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        input.value = "";
      }
    }
  }


  return (
    <div className="flex w-[736px] items-center gap-[8px] relative -top-5 mx-auto">
      <input type="text" className="rounded-[8px] border border-solid border-gray-700 bg-gray-500 p-[16px] flex-1 gap-[8px] items-center
        focus:border-purple-dark focus:text-gray-100 focus-visible:outline-none
      " placeholder="Yeni görev" />
      <button type="submit" className="flex p-[16px] justify-center items-center
       gap-[8px] rounded-[8px] bg-blue-dark text-gray-100
      hover:bg-blue transition-all duration-300
      active:scale-100 active:bg-blue-dark active:translate-y-[2px]
      " onClick={addTask}


      >
        Ekle <PlusCircleIcon className="w-[24px] h-[24px]" />
      </button>
    </div>
  )
}
