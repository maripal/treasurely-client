import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  const modalStyle =  {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  //Fix the styling here so the title is placed correctly above item name & price when modal opens.

  //props is coming from our 'addItemForm' component.
  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div>
        {props.title}
      </div>
      <div>
        {props.content}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;