import React, {Component} from 'react';
import axios from '../../axios-order';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    modalMessage: null
  }

  componentDidMount(){
    axios.get('/ingredients.json')
      .then(response => {
        const ingredients = {...response.data};
        let price = this.state.totalPrice;
        for (let ingredient in ingredients){
          price += INGREDIENT_PRICES[ingredient]*ingredients[ingredient];
        }
        const purchasable = price > this.state.totalPrice;
        this.setState({ingredients:ingredients, totalPrice:price,purchasable:purchasable});
      })
      .catch(error => {
        this.setState({modalMessage:error.message});
      });
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  };
  purchaseCancelHandler = () => {
    this.setState({purchasing:false});
  };
  purchaseContinueHandler = () => {
    this.setState({loading:true});
    const order = {
      ingredients : {...this.state.ingredients},
      customer: {
        name: 'Fakeson',
        email: 'boogus@bugger.bug',
        address: 'Fake street 123',
        zipCode: '42069'
      },
      delivery: 'fastest'
    }
    axios.post('/orders.json',order)
      .then(response => {
        console.log(response);
        this.setState({purchasing:false, loading:false, modalMessage:'Order placed!'});
      })
      .catch(error => {
        console.log(error);
        this.setState({purchasing:false, loading:false, modalMessage:error.message});
      })

  };

  popUpCloseHandler = () => {
    this.setState({modalMessage:null})
  }

  updatePurchaseState = (ingredients) => {
    let purchasable = false;
    for (let ingredient in ingredients){
      if (ingredients[ingredient]>0){
        purchasable = true;
        break;
      }
    }
    this.setState({purchasable:purchasable})
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0)
      return;
    const updatedCount =oldCount -1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition =INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  };

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let modalContent = null;
    

    let burger = <Spinner />
    if (this.state.ingredients){
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}/>
        </Aux>        
      )
      modalContent = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.state.totalPrice} />
      )
    }
    if (this.state.loading){
      modalContent = <Spinner /> //There is no answer yet, the page is loading
    }
    let popUpMessage = null;
    if (this.state.modalMessage){
      popUpMessage = <Modal show modalClosed={this.popUpCloseHandler}>
        <p> {this.state.modalMessage} </p>
      </Modal>
    }
    
    return (
      <Aux>
        {popUpMessage}
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {modalContent}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default  BurgerBuilder;
