import React from 'react';
import './Item.css';

export const Item = props => {
  return (
    <div className="item-content">
      <div className="item-details">
        <h4 className="item-name">{props.name}</h4>
        <p className="price">${props.price.toFixed(2)}</p>
      </div>
      <button className={`item-action-button buy-button ${props.className}`} onClick={() => props.buyClick(props.price, props.id)}>Buy</button>
      <button className="item-action-button edit-button" onClick={() => props.editClick(props.id)}>Edit</button>
      <button className="item-action-button delete-button" onClick={() => props.clickDelete(props.id)}>Delete</button>
    </div>
  );
};

export default Item;