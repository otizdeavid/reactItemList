import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItems = ({newItem, setNewItem, handleSubmit}) => {
  const refInput = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor="addItem"> Add Item</label>
      <input 
        autoFocus
        ref={refInput}
        type="text"
        id='addItem'
        placeholder='Add Item'
        required
        value = {newItem}
        onChange = {(e) => setNewItem (e.target.value)}
      />
      <button                               
        type='submit'
        aria-label='Add Item'
        onClick={() => refInput.current.focus()}
      >
        <FaPlus/>
       </button>
    </form>
  )
}

export default AddItems