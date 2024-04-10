import React from 'react'
import SectionHeading from './SectionHeading'
import ClothCard from './ClothCard'
import Spinner from 'react-bootstrap/Spinner';
import {HashLoader} from "react-spinners";
import {FlexDivWrapper } from "../style"
const Sale = ({products}) => {
  return (
    <div style={{padding: "1rem 0rem"}}>
        <SectionHeading title={"Upto 70% Off Sale"} />
        <FlexDivWrapper>
        {products && typeof(products)=='object' ? <div style={{display:'flex'}}>{products.map((cur,index)=>{
          return(
            <ClothCard  cur={cur} key={index}/>
          )
        })} </div> :  <div style={{padding:'2rem'}}> <HashLoader color="#36d7b7" /></div>}
      </FlexDivWrapper>
    </div>
    
  )
}

export default Sale