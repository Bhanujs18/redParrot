import React from 'react'
import SectionHeading from './SectionHeading'
import ClothCard from './ClothCard'
import {HashLoader} from 'react-spinners';
import {FlexDivWrapper} from "../style"
const NewArrivals = ({products}) => {
  console.log(typeof(products));
  return (
    <div>
        <SectionHeading title={"New Arrivals"} />
        <FlexDivWrapper>
        {products && typeof(products)=='object' ? <div style={{display:'flex'}}>{products.map((cur,index)=>{
          return(
            <ClothCard  cur={cur} key={index}/>
          )
        })} </div> :   <div style={{padding:'2rem'}}> <HashLoader color="#36d7b7" /></div>}
      </FlexDivWrapper>
    </div>
    
  )
}

export default NewArrivals