import React from 'react';

const addItem = (props) => {
   return (
       <form>
           <legend>Add Item</legend>
           <label>
               <input 
                type="text"
                placeholder="Item Name" />
           </label>
           <label>
               <input 
                type="number" 
                placeholder="Price" />
           </label>
       </form>
   )
}

export default addItem;