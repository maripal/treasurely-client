import React from 'react';
import './Item.css';

const Item = props => {
  console.log(props);

  return (
    <div>
      <h4 className="item-name">{props.item.name}</h4>
      <p className="price">${props.item.price.toFixed(2)}</p>
      <button className={`item-action-button ${props.className}`} onClick={() => props.buyClick(props.item.price, props.id)}>Buy</button>
      <button className="item-action-button" onClick={() => props.editClick(props.id)}>Edit</button>
      <button className="item-action-button" onClick={() => props.clickDelete(props.id)}>Delete</button>
    </div>
  );
};

export default Item;