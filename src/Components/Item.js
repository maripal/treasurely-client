import React from 'react';

//Is it ok I pass down props to this component, or should I reach out to state using Redux here(?)

const Item = props => {
  console.log(props);
  // const itemStyle = {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   backgroundColor: 'aquamarine'
  // };

  return (
    <div>
      <h4>{props.item.itemName}</h4>
      <p>${props.item.price.toFixed(2)}</p>
      <button onClick={() => props.buyClick(props.item.price, props.id)}>BUY</button>
      <button onClick={() => props.editClick(props.id)}>EDIT</button>
      <button onClick={() => props.clickDelete(props.id)}>DELETE</button>
    </div>
  );
};

export default Item;