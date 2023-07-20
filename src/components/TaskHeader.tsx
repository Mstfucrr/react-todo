
export const TaskHeader = () => {
  return (
    <div className="flex justify-between items-end self-stretch">
    {/* created */}
    <div className="flex items-center gap-[8px]">
      <div className="text-blue font-bold leading-normal text-[14px]">
        Created on
      </div>
      <div className="flex py-[2px] px-[8px] flex-col justify-center items-center gap-[10px] rounded-full bg-gray-400">
        <div className="text-gray-200 font-bold leading-normal text-[12px]">
          5
        </div>
      </div>
    </div>
    {/* done */}
    <div className="flex items-center gap-[8px]">
      <div className="text-purple font-bold leading-normal text-[14px]">
        Done
      </div>
      <div className="flex py-[2px] px-[8px] flex-col justify-center items-center gap-[10px] rounded-full bg-gray-400">
        <div className="text-gray-200 font-bold leading-normal text-[12px]">
          2 / 5
        </div>
      </div>
    </div>
  </div>
  )
}
