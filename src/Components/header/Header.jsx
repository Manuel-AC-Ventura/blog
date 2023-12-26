import { FaMagnifyingGlass } from "react-icons/fa6";

export const Header = ()=>{
  return(
    <div className="w-full h-18 bg-[#17171A] grid gap-4 place-items-center py-6 box-content">
      <h1 className="text-white text-2xl font-space-grotesk"><span className="text-[#E07B67]">Code</span>lândia</h1>
      
      <div className="max-sm:w-11/12 sm:w-11/12 md:w-11/12 lg:w-7/12 h-10 rounded bg-[#252529] flex gap-3 items-center px-4">
        <FaMagnifyingGlass className="cursor-pointer text-[#E07B67] "/>
        <input className=' w-11/12 h-full bg-transparent text-white px-2 outline-none' type="text" placeholder='Pesquisar no blog'/>
      </div>
    </div>
  )
}