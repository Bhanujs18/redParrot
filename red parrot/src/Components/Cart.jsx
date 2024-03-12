import React from 'react'
import CartCard from './CartCard';

const Cart = ({products}) => {
  return (
    <div>
        Items
    <div className='items'>
        {products && products.map((cur, index)=>{
            return(
              <CartCard cur={cur} />
            )
        })}
    </div>
    </div>
  )
}

export default Cart