import { useReducer, useEffect, useCallback } from 'react';
import axios from '../axios-order';

const isPurchasable = (ingredients) => {
    for (let ingredient in ingredients){
        if (ingredients[ingredient].ammount > 0) return true;
    }
    return false;
}
const addToIngredients = (order, ingredient, add) => {
    const newOrder = {...order};
    const newIngredients = {...newOrder.ingredients};
    const newIngredient = {...newIngredients[ingredient]};

    newIngredient.ammount += add;
    if (newIngredient.ammount < 0) return order;
    else {
        newOrder["ingredients"] = newIngredients;
        newOrder.totalPrice += newIngredient.price*add;
        newIngredients[ingredient] = newIngredient;
        newOrder.purchasable = isPurchasable(newIngredients);
        return newOrder;
    }

}
const orderReducer = (currentOrder, action) => {

    switch (action.type) {
        case 'SET':
            return action.order;
        case 'ADD':
            return addToIngredients(currentOrder,action.ingredient,1);
        case 'REMOVE':
            return addToIngredients(currentOrder,action.ingredient,-1);
        case 'ERROR':
            return {...currentOrder, error:action.error};
        case 'LOADING':
            return {...currentOrder, loading:action.loading};
        default:
            throw new Error('You should not be here');
    }

}

const useIngredients = () => {
    const [userOrder, dispatch] = useReducer(orderReducer, {
        ingredients: {
            cheese:{ammount:0,price:1},
            salad:{ammount:0,price:1},
            meat:{ammount:0,price:1},
            bacon:{ammount:0,price:1}
        },
        purchasable: false,
        totalPrice: 4,
        error: null,
        loading:false
    })

    //const getOrder = () => {
    //    axios.get('/ingredients.json')
    //      .then(response => {
    //        const ingredients = {...response.data};
    //        let price = 0;
    //        for (let ingredient in ingredients){
    //          price += ingredients[ingredient].ammount * ingredients[ingredient].price;
    //        }
    //        const purchasable = isPurchasable(ingredients);
    //        const order = {
    //            ...userOrder,
    //            ingredients : ingredients,
    //            purchasable : purchasable,
    //            totalPrice : price
    //        }
    //        dispatch({type:'SET',order:order,loading:false})
    //      })
    //      .catch(error => {
    //        dispatch({type:'ERROR', error:"Couldn't get the ingredients!"});
    //        dispatch({type:'LOADING',loading:false});
    //      });
    //}

    //useEffect(() => {
    //    dispatch({type:'LOADING', loading:true});
    //    getOrder();
    //}, []);

    const add = useCallback(ingredient => {
        dispatch({type:'ADD',ingredient:ingredient});
    },[])
    const remove = useCallback(ingredient => {
        dispatch({type:'REMOVE',ingredient:ingredient});
    },[])
    const clearError = useCallback(() => {
        dispatch({type:'ERROR', error:null});
    },[])

    return {
        order: userOrder,
        addIngredientHandler: add,
        removeIngredientHandler: remove,
        clearErrorHandler: clearError
    }
}

export default useIngredients