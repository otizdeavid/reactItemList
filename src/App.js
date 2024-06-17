import Header from './Header';
import AddItems from './AddItems';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    // the naming convention to usestate is camelcase
    // const [items, setItems] = useState([
    //   {
    //     id: 1,
    //     checked: false,
    //     item: 'A half bag of rice'
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: 'Garri and Sugar'
    //   },
    //   {
    //     id:3,
    //     checked:false,
    //     item: 'Bread and groundnut'
    //   },
    //   {
    //     id:4,
    //     checked:false,
    //     item:'salt and pepper'
    //   }
    // ]);
    
    const [items, setItems] = useState (JSON.parse(localStorage.getItem("shopping")));
    const [newItem, setNewItem] = useState ("")
    const [search, setSearch] = useState ("")
   

    const setAndSaveItems =(newItems)=> {
      setItems(newItems);
      localStorage.setItem('shopping',JSON.stringify(newItems));
    }

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1]. id + 1 : 1;
      const myItems = {id, checked:false, item};
      const listItem = [...items, myItems];
      setAndSaveItems(listItem);
      // setItems(handleItems);
      // localStorage.setItem('shopping',JSON.stringify(handleItems));
    }
    
    const handleCheck = (id) => {
      const handleItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setAndSaveItems(handleItems)
      // setItems(handleItems);
      // localStorage.setItem('shopping',JSON.stringify(handleItems));
      // console.log(`key:${id}`) to know the list click on the browser
    }
    const handleDelete = (id) => {
      // console.log (id)
      const listDelete = items.filter((item) => item.id !== id);
      setAndSaveItems(listDelete)
      // setItems(listDelete);
      // localStorage.setItem("shoppingList", JSON.stringify(listDelete));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      setNewItem('')
      addItem(newItem);
      console.log(newItem);
    }

  return (
    <div className="App">
      <Header name="Groceries List"></Header>
      <AddItems 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
        >
      </AddItems>

      <SearchItem 
        search = {search}
        setSearch = {setSearch}
        >
      </SearchItem>

      <Content
        items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}>
      </Content>

      <Footer title = {items.length}></Footer>
    </div>
  );
}

export default App;
