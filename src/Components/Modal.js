import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  console.log(props);
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

  const innerElementStyle = {
    backgroundColor: 'white',
    width: '100%',
    height: '60vh',
    padding: '15px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }

  const formTitleStyle = {
    textAlign: 'center',
  };

  const closeButton = {
    position: 'absolute',
    top: '10px',
    right: '5px',
    fontSize: '18px',
    fontWeight: '700'
  }

  //FIX FORM STYLING!

  //props is coming from our 'addItemForm' component.
   return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div style={innerElementStyle}>
        <div style={formTitleStyle}>
          {props.title}
        </div>
        <div>
          {props.children}
        </div>
        <button style={closeButton} onClick={props.hideModal}>x</button>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;