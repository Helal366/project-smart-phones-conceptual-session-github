import React, { useContext, useEffect } from 'react';
import { getCartFromLS, removeCartFromLS } from '../utilities/localStorage';
import PhoneCard from '../components/PhoneCard';
import Empty from './Empty';
import { CartContext } from '../useContexts/CartContext';


const Cart = () => {
    const {cart, setCart}=useContext(CartContext);
    useEffect(()=>{
        const cartListFromLS=getCartFromLS();
        setCart(cartListFromLS);
    },[setCart]);
    const handleDeleteCart=(id)=>{
        removeCartFromLS(id);
        setCart(getCartFromLS);
    }
    if(cart.length<1){
        return <Empty label='Cart is empty'></Empty> 
    }
    return (
        <>
            <div className='pt-12 '>
            <div className='grid grid-cols-1 md:grid-cols-2 
            lg:grid-cols-3 gap-8 -mb-8'>
                
                 {
                    cart.map(phone=><PhoneCard 
                        key={phone.id} phone={phone} deletable={true} handleDelete={handleDeleteCart}>
                        </PhoneCard>)
                 }   

            </div>
        </div>
        </>
    );
};

export default Cart;