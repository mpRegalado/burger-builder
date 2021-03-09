import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { connect } from 'react-redux'
import useIngredients from '../../hooks/useIngredients'

const BurgerBuilder = (props) => {
  const {
    addIngredientHandler,
    removeIngredientHandler
  } = useIngredients();

  const purchaseHandler = () => {
    alert('You did the thing')
  }
  return (
    <Aux>
      <Burger ingredients={props.ingredients} />
      <BuildControls 
        ingredients={props.ingredients}
        disabled={!props.purchasable} 
        add={addIngredientHandler}
        substract={removeIngredientHandler}
        purchase={purchaseHandler}
        price={props.totalPrice}
      />
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    ingredients:state.ingredients,
    purchasable:state.purchasable,
    totalPrice: state.totalPrice
  }
}
export default  connect(mapStateToProps)(BurgerBuilder);
