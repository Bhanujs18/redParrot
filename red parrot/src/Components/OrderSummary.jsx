import React from 'react'

const OrderSummary = ({price}) => {
  return (
    <div className='orderSummary' style={{display:'flex' , alignItems:'center'}}>
        <div>
        <p>OrderSummary</p>
        <p>Total Amount :${price}</p>
        <p>Tax : ${Math.floor(price*0.18)}  (18%)</p>
        <p>Total Amount : ${price + Math.floor(price*0.18)}</p>
        </div>
    </div>
  )
}

export default OrderSummary