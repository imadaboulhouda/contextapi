export const ADD_PRODUCT = 'add_produit';


export const imadReducer = (state , action) => {
    console.log(state)
    switch(action.type)
    {
        case ADD_PRODUCT:
            console.log(action.product);
            return [...state,action.product];
            break;
        default:
            return state;
            break;
            

    }
}