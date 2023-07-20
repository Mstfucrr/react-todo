import plus from '../assets/plus.svg';
import Task from '../model/Task';

export const TaskInput = ({ setTasks, tasks }: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
  , tasks: Task[]
}) => {

  async function addTask() {
    const input = document.querySelector("input");
    if (input) {
      const newTask = input.value;
      if (newTask) {
        const newTask = new Task(
          tasks.length + 1,input.value, false , new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()

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
        Ekle <img src={plus} alt="ekle" />
      </button>
    </div>
  )
}
