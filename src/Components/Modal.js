import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';

const Modal = props => {
  console.log(props);
  //FIX FORM STYLING!

  //props is coming from our 'addItemForm' component.
   return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <h3 className="modal-title">
          {props.title}
        </h3>
        <div className="modal-form">
          {props.children}
        </div>
        <button className="close-btn" onClick={props.hideModal}>x</button>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;