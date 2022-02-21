import { BiCart } from "react-icons/bi";
import Search from "./components/Search";



function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">
          <BiCart className="inline-block align-top text-blue-500"/> Your cart
      </h1>
      <Search />
    </div>
    
  )
}

export default App;