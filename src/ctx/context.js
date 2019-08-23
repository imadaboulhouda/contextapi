import React, {
    createContext,
    useReducer
} from 'react';
 import {
    imadReducer,
    ADD_PRODUCT
 } from './reducer'; 
export const ImadContext = createContext();
const ImadProvider = (props) =>{
    const initialState = [{
            id: 1,
            name: 'Iphone x',
            price: 74.500
        },
        {
            id: 2,
            name: 'Iphone xR',
            price: 74.500
        },
        {
            id: 3,
            name: 'Iphone xMax',
            price: 74.500
        },
    ];
    const [statex, dispatch] = useReducer(imadReducer,initialState);
  
    const addProduct = (name,price)=>{
      console.log(name,price);
        const product = { id:10,name:name,price:price};
        console.log("product",product);
        dispatch({
            product,
           type:ADD_PRODUCT,
        });
        
    }

    return (
        < ImadContext.Provider value = {
            {
                statex,
                
                addProduct
            }
        } >
            { props.children }
        </ImadContext.Provider>
    );
};


export default ImadProvider;