import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div>
      <div>
        {props.title}
      </div>
      <div>
        {props.content}
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;