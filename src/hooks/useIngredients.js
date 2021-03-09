import { useEffect, useCallback } from 'react';
import { useDispatch,  } from 'react-redux'
import axios from '../axios-order';

const useIngredients = () => {
    const dispatch = useDispatch();


    const getIngredients = () => {
        axios.get('/ingredients.json')
            .then(response => {
                const ingredients = {...response.data};
                dispatch({type:'SET_INGREDIENTS', ingredients:ingredients})
                dispatch({type:'LOADING', loading:false})
            })
    }

    useEffect(() => {
        dispatch({type:'LOADING', loading:true})
        getIngredients();
    }, [])

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