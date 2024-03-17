import React from 'react'

const MyOrders = ({myOrders}) => {
    console.log("myOrders" + cur)
  return (
    <div className='myOrders'>
      My Orders
{myOrders && myOrders.map((curr, index)=>{
	return(
	curr.items.map((cur)=>{
		return(
			<div className='myOrders'>
              <CartCard cur={cur} />
			  </div>
		)
	})
	)
})}
      </div>

  )
}

export default MyOrders