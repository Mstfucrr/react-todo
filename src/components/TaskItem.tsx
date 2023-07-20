import tick from '../assets/tick.svg'



export const TaskItem = () => {
  return (
    <li className="flex items-start p-[16px] gap-[12px] self-stretch rounded-[8px] border border-solid border-gray-400 bg-gray-500 shadow-sm justify-between">
      {/* uncheck */}
      <span className="w-[20px] h-[20px] rounded-full border-2 border-solid border-blue cursor-pointer hover:border-blue-dark"></span>
      {/* checked */}
      {/* <span className="w-[20px] h-[20px] rounded-full bg-purple-dark cursor-pointer hover:bg-purple">
        <img src={tick} alt="check" className="-translate-x-[11%] -translate-y-[7%]" />
      </span> */}
      {/* unchecked task */}
      <div className="text-gray-100 font-normal text-[14px] leading-[140%] flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
      </div>

      {/* checked task */}
      {/* <div className="text-gray-300 font-normal text-[14px] leading-[140%] line-through flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
        doloremque, voluptatum, quibusdam, quidem quas voluptates
        voluptatibus quae quia quos doloribus voluptatem. Quisquam, voluptatum.
      </div> */}

      {/* delete */}
      <span className="cursor-pointer hover:bg-gray-400 text-center rounded-md ">
        <i className="fa fa-trash-o text-gray-300 hover:text-danger text-[12px] p-[7px] align-middle" aria-hidden="true" />
      </span>



    </li >
  )
}
