import { FaHeart } from "react-icons/fa6"


export const Card = (props)=>{
  return(
    <div className="w-full p-6 bg-[#17171A] cursor-pointer rounded border border-[#252529] hover:border-[#E07B67]">
      <div className="flex justify-between">
        <span className="text-[#E07B67] font-inter font-medium">{props.dateAdded}</span>
        <FaHeart size={20} className="hover:text-[#E07B67]"/>
      </div>
      <h3 className="font-semibold text-lg mt-3 mb-2 font-space-grotesk">{props.author}</h3>
      <p className="font-inter  text-[#AFABB6]">{props.content}</p>
    </div>
  )
}