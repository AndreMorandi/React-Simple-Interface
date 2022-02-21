import { BiCart, BiTrash } from "react-icons/bi";
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
            <li className="px-3 py-3 flex items-start">
            <button type="button"
              className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <BiTrash /></button>
            <div className="flex-grow">
              <div className="flex items-center">
                <span className="flex-none font-medium text-2xl text-blue-500">{item.productName}</span>
                <span className="flex-grow text-right">{item.date}</span>
              </div>
              <div><b className="font-bold text-blue-500">Company: </b>{item.companyName}</div>
              <div className="leading-tight">{item.description}</div>
            </div>
          </li>
          ))
        }
      </ul>
    </div>
    
  )
}

export default App;