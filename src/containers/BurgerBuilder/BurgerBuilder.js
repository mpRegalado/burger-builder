import React from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { connect } from 'react-redux'
import useIngredients from '../../hooks/useIngredients'
import ErrorPrompt from '../../components/ErrorPrompt/ErrorPrompt'
import { EuiLoadingSpinner } from '@elastic/eui'

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
    content = <EuiLoadingSpinner size="xl"/>
  } else if(props.error) {
    content = (<ErrorPrompt errorTitle="Error on loading ingredients">
      <p>{props.error.message}</p>
    </ErrorPrompt>)
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
