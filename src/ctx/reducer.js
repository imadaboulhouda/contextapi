export const ADD_PRODUCT = 'add_produit';


export const imadReducer = (state,action)=>{
    switch(action.type)
    {
        case ADD_PRODUCT:
            
            return [...state,{
                id:10,
                name:action.name,
                price:action.price,
            }];
        default:
            return state;
            

    }
}