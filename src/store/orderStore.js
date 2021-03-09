const innitialState = {
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
}

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
const orderReducer = (currentOrder = innitialState, action) => {

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
            console.log('[Unhandled type]: ' + action.type);
            return currentOrder;
    }

}

export default orderReducer;