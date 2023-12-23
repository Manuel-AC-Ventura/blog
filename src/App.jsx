import { Header } from "./components/header/Header"
import { Container } from "./components/container/Container"


export const App = ()=>{
  return(
    <div className="w-full h-full bg-[#121214]">
      <Header/>
      <Container />
    </div>
  )
}