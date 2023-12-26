import { Header } from "./Components/header/Header"
import { Container } from "./Components/container/Container"

export const App = () => {
  return(
    <div className="w-full h-full bg-[#121214] flex flex-col items-center">
      <Header/>
      <Container/>
    </div>
  )
}