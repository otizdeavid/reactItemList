// import { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";
import ItemList from "./ItemList";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          >
        </ItemList>
        
      ) : (
        <p style={{marginTop:'2rem',marginBottom:'2rem'}}>Your List is Empty.</p>
      )}
    </main>
  )
}

export default Content;