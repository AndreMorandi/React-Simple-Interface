import { useState, useCallback, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import ItemInfo from "./components/ItemInfo";
import Items from "./components/Items";
import Search from "./components/Search";

function App() {

  let [itemList, setItemList] = useState([]);
  let [query, setQuery] = useState(""); 
  let [sortBy, setSortBy] = useState("productName");
  let [orderBy, setOrderBy] = useState("asc");

  const filteredItems = itemList.filter(
    item => {
      return (
        item.productName.toLowerCase().includes(query.toLowerCase()) ||
        item.companyName.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    }
  ).sort((a,b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
    )
  })

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
      <Items onSendItem={myItem => setItemList([...itemList, myItem])} lastId={itemList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}/>
      <Search query={query} onQueryChange={myQuery => setQuery(myQuery)} 
        orderBy={orderBy} onOrderByChange={myOrder => setOrderBy(myOrder)} 
        sortBy={sortBy} onSortByChange={mySort => setSortBy(mySort)}/>

      <ul className="divide-y divide-gray-200">
        {
          filteredItems.map(item => (
            <ItemInfo key={item.id}
                item={item}
                onDeleteItem = {
                  itemId => setItemList(itemList.filter(item => item.id !== itemId))
                }
            />
          ))
        }
      </ul>
    </div>
    
  )
}

export default App;