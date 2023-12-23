import { FaMagnifyingGlass } from "react-icons/fa6";

export const Header = ()=>{
  return(
    <header className='w-full h-18 bg-[#17171A] grid gap-4 place-items-center py-6 box-content'>
      <h1 className="text-white text-2xl font-space-grotesk"><span className="text-[#E07B67]">Code</span>lândia</h1>
      <form className='sm:w-11/12 lg:w-2/4 h-10 rounded bg-[#252529] flex gap-3 items-center px-4 ' action="">
        <FaMagnifyingGlass className="text-[#E07B67] "/>
        <input className=' w-11/12 h-full bg-transparent text-white px-2 outline-none' type="text" placeholder='Pesquisar no blog'/>
      </form>
    </header>
  )
}