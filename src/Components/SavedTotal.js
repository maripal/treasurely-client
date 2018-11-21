import React from 'react';
//import AddItem from './AddItem';

import './SavedTotal.css';

const savedTotal = (props) => {
    let total = 0;

    return (
        <main>
            <div className="totalSavedSection">
                <h1 className="totalAmount">$ {total}</h1>
                <button className="addMoney">Add $</button>
                <button className="addItemButton">Add Item</button>
            </div>
        </main>
    )
}

export default savedTotal;