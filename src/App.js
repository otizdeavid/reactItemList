import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    // the naming convention to usestate is camelcase
    const [items, setItems] = useState([
      {
        id: 1,
        checked: false,
        item: 'A half bag of rice'
      },
      {
        id: 2,
        checked: false,
        item: 'Garri and Sugar'
      },
      {
        id:3,
        checked:false,
        item: 'Bread and groundnut'
      },
      {
        id:4,
        checked:false,
        item:'salt and pepper'
      }
    ]);
    
    const handleCheck = (id) => {
      const handleItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
      setItems(handleItems);
      localStorage.setItem('shopping',JSON.stringify(handleItems));
      // console.log(`key:${id}`) to know the list click on the browser
    }
    const handleDelete = (id) => {
      // console.log (id)
      const listDelete = items.filter((item) => item.id !== id);
      setItems(listDelete);
      localStorage.setItem("shoppingList", JSON.stringify(listDelete));
    }

  return (
    <div className="App">
      <Header name="Groceries List"></Header>
      <Content
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}>
      </Content>
      <Footer title = {items.length}></Footer>
    </div>
  );
}

export default App;
