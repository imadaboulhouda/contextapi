import React, {
    useContext,
} from 'react';
import {
    ImadContext
} from '../ctx/context';
const Home =(props)=>{
      const
          {
              products,
              addProduct
          } = useContext(ImadContext);
   const addNew = (e)=>{
    e.preventDefault();
   addProduct("imadox",1500);
   };
    return(<React.Fragment>
        { products.map((v,key)=>{
           return (<p key={key}>{v.name} <b>{v.price } MAD</b></p>);
        })}

        <button onClick={addNew}>Add</button>
            
    </React.Fragment>);
};
export default Home;