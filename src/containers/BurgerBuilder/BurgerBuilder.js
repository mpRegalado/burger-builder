import React, {Component} from 'react';
import axios from '../../axios-order';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import useIngredients from '../../hooks/useIngredients'

const BurgerBuilder = props => {
  const {
    order,
    addIngredientHandler,
    removeIngredientHandler
  } = useIngredients();

  const purchaseHandler = () => {
    alert('You did the thing')
  }
  return (
    <Aux>
      <Burger ingredients={order.ingredients} />
      <BuildControls 
        ingredients={order.ingredients}
        disabled={!order.purchasable} 
        add={addIngredientHandler}
        substract={removeIngredientHandler}
        purchase={purchaseHandler}
      />
    </Aux>
  );
}

export default  BurgerBuilder;
