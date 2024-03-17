import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const Wallet = () => {
  return (
    <div className='wallet'>
         <img style={{borderRight:'5px #ce3345 solid'}} width="350" height="350" src="./imgs/wallet.png" alt="wallet--v1"/>' 
         <div >
        <p className='redText' style={{fontSize:'3rem'}}> $654</p>
        <Button variant='danger'>Wallet Balance</Button>
        </div>
    </div>
  )
}

export default Wallet