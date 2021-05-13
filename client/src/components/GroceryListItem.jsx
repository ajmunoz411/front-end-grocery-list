import React from 'react';

var GroceryListItem = (props) => (
  <li>
    {props.item.name} - {props.item.quantity}
  </li>
);



export default GroceryListItem;