import React from 'react';
import './Item.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Item = props => {
  return (
    <div className="item-content">
      <div className="item-details">
        <h2 className="item-name">{props.name}</h2>
        <p className="price">${props.price.toFixed(2)}</p>
      </div>
      <div className="buttons-container">
        <button className={`item-action-button buy-button ${props.className}`} onClick={() => props.buyClick(props.price, props.id)}>
          {props.innerText}
        </button>
        <button className="item-action-button edit-button" aria-label="Edit item" title="Edit item" onClick={() => props.editClick(props.id)}>
          <FontAwesomeIcon icon="pencil-alt" />
        </button>
        <button className="item-action-button delete-button" aria-label="Delete item" title="Delete item" onClick={() => props.clickDelete(props.id)}>
          <FontAwesomeIcon icon="trash-alt" />
        </button>
      </div>
    </div>
  );
};

export default Item;