import { useState, useCallback, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import ItemInfo from "./components/ItemInfo";
import Items from "./components/Items";
import Search from "./components/Search";

function App() {

  let [itemList, setItemList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json') // Anything in the public folder will appear at the same level of your application once it has been pushed up into a server.
      .then(response => response.json())
      .then(data => {
        setItemList(data)
      })
  }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);


  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
          <BiCart className="inline-block align-top text-blue-500"/> Your items
      </h1>
      <Items />
      <Search />

      <ul className="divide-y divide-gray-200">
        {
          itemList.map(item => (
            <ItemInfo key={item.id}
                item={item}
                onDeleteItem = {
                  itemId => setItemList(itemList.filter(item => item.id != itemId))
                }
            />
          ))
        }
      </ul>
    </div>
    
  )
}

export default App;