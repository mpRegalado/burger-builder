import React from 'react';

const OrderSummary = props => {
  const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>
            {igKey}</span>: {props.ingredients[igKey].ammount}
        </li>
      );
    });

  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Your total is <strong>{props.price.toFixed(2)}</strong></p>
    </>
  );
};


export default OrderSummary;
