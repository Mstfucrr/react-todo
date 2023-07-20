import logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <div className="bg-gray-700 h-[200px] w-full flex flex-shrink-0 items-center justify-center">
      <img src={logo} alt="logo" width={22} height={36} className="flex-shrink-0" />
      <div className="flex ml-1">
        <h1 className="text-blue text-3xl inline font-black">to</h1>
        <h1 className="text-purple-dark text-3xl inline font-black">do</h1>
      </div>
    </div>
  )
}
