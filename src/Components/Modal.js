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
    width: '500px',
    height: '50vh',
    padding: '15px',
  }

  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '25px'
  };

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
        <button onClick={props.hideModal}>Hide</button>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;