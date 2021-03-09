import React from 'react';

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

  let content = <p>Something is Really Wrong</p>
  if (props.loading){
    content = <p>Loading</p>
  } else if(props.error) {
    content = <p>{props.error}</p>
  } else {
    content = (
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
    )
  }
  return content;
}

const mapStateToProps = state => {
  return {
    ingredients:state.ingredients,
    purchasable:state.purchasable,
    totalPrice: state.totalPrice,
    error: state.error,
    loading: state.loading
  }
}
export default  connect(mapStateToProps)(BurgerBuilder);
