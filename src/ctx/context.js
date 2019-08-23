import React,{createContext,useState} from 'react';
/* import {
    imadReducer,
    ADD_PRODUCT
 } from './reducer'; */
export const ImadContext = createContext();
const ImadProvider = (props) =>{
    const [products,setProduct] = useState([
        {id:1,name:'Iphone x',price:74.500},
        {id:2,name:'Iphone xR',price:74.500},
        {id:3,name:'Iphone xMax',price:74.500},
    ]);
    const addProduct = (name,price)=>{
        const product = [...products,{ id:10,name:name,price:price}];
        setProduct(product);
    }

    return (
        < ImadContext.Provider value = {
            {
                products,
                setProduct,
                addProduct
            }
        } >
            { props.children }
        </ImadContext.Provider>
    );
};


export default ImadProvider;