import { BiCart } from "react-icons/bi";
import ItemInfo from "./components/ItemInfo";
import Items from "./components/Items";
import Search from "./components/Search";
import itemsData from "./data.json";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
          <BiCart className="inline-block align-top text-blue-500"/> Your items
      </h1>
      <Items />
      <Search />

      <ul className="divide-y divide-gray-200">
        {
          itemsData.map(item => (
            <ItemInfo key={item.id}
                item={item}
            />
          ))
        }
      </ul>
    </div>
    
  )
}

export default App;