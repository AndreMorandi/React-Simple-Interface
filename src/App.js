import { BiCart } from "react-icons/bi";
import Items from "./components/Items";
import Search from "./components/Search";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
          <BiCart className="inline-block align-top text-blue-500"/> Your items
      </h1>
      <Items />
      <Search />
    </div>
    
  )
}

export default App;