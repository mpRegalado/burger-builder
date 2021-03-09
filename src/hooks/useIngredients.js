import { /*useEffect,*/ useCallback } from 'react';
import { useDispatch } from 'react-redux'
//import axios from '../axios-order';

const useIngredients = () => {
    const dispatch = useDispatch()

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
    },[dispatch])
    const remove = useCallback(ingredient => {
        dispatch({type:'REMOVE',ingredient:ingredient});
    },[dispatch])
    const clearError = useCallback(() => {
        dispatch({type:'ERROR', error:null});
    },[dispatch])

    return {
        addIngredientHandler: add,
        removeIngredientHandler: remove,
        clearErrorHandler: clearError
    }
}

export default useIngredients