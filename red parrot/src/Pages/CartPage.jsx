import React from 'react'
import Cart from '../Components/Cart'
import OrderSummary from '../Components/OrderSummary'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { NavLink, redirect } from 'react-router-dom';
import Address from '../Components/Address';

const CartPage = () => {
    const products = useSelector((state)=>state.cart.products);
    const price = products.reduce((acc , cur)=>acc+cur.price , 0)
    console.log(price)
  return (
    <div  style={{width : "100%"}}> 
     <div style={{display:'flex' , flexDirection:'column' , flexWrap:'wrap' , width:'100%'}}> 
    {products && price ? <div style={{width : "100%" }}>
    <div className='container' style={{width : "100%"}}> 
        <Cart products={products} />
        <OrderSummary price={price} />
        </div>

        <div className='shipping'>
     <Address />
     <img className='girl' src='./imgs/girl.png' />
     </div>
        </div>
        :
        <div className="emptyCart">
            <img src='./imgs/cart.png' />
            <p style={{textAlign:'center'}}>Cart Is Empty!</p>
            <NavLink to="/"><Button variant="danger">Go To Homepage</Button></NavLink>
        </div>
        }
      
    </div>
  
    </div>
  )
}

export default CartPage