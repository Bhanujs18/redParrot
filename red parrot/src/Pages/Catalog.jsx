import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import ClothCard from '../Components/ClothCard';

const BlackStrip = styled.div`
// background-color: black;
// color: white;
padding: 0.5rem 1rem;
`
const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
`

const LeftSection = styled.div`
width: 25%;
border-radius: 15px;
background-color: white;
padding: 1rem 1rem;
display: flex;
gap: 1rem;
height: 100%;
flex-direction: column;
div{
    display: flex;
    border-bottom: 1px grey solid;
    padding: 0.5rem 0rem;
    gap: 0.5rem;
flex-direction: column;
}
`

const RightSection = styled.div`
width: 70%;
border-radius: 15px;
height: 100vh;
overflow-Y: scroll;
background-color: white;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 1rem;
gap: 1rem;

`


const Catalog = () => {
    const category = useParams().category;
    const [products, setProducts] = useState([]);

    const fetchData = () => {
      try {
        axios
          .get("https://bhanujs18.github.io/red-parrot-data/data.json")
          .then((res) => {
            const data = res.data;
            setProducts(data);
          })
          .catch((err) => console.log(err));
      } catch(err) {
        console.log(err)
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div>    
         <BlackStrip>
                Home / Cloths / <b>{category}</b>
         </BlackStrip>
         <Container>
        
            <LeftSection>
            <h6><b>Filters</b></h6>
          <div>
               <h6><b>Gender</b></h6>
                               <label htmlFor='men'>                         
                     <input id='men' name='gender' type='radio'  className='radiobutton'  />
                     &nbsp;   Men
                </label>
                <label htmlFor='women'>                         
                     <input id='women' name='gender' type='radio'   className='radiobutton' />
                   &nbsp;  Women
                </label>
                </div>



                
                <div>
                <h6><b>Categories</b></h6>
                <label htmlFor='tshirts'>                         
                     <input id='tshirts' name='categories' type='radio'  className='radiobutton' />
                     &nbsp;   Tshirts
                </label>
                <label htmlFor='hoodies'>                         
                     <input  id='hoodies' name='categories' type='radio'    className='radiobutton' />
                   &nbsp;  Hoodies
                </label>
                </div>


                <h6><b>Price</b></h6>
                <div style={{display:'flex' , flexDirection:"row" , border:'none'}}>                 
               <input id='tshirts' name='categories' type='input'  placeholder='Min' className='radiobutton' style={{width:"30%"}}/> to
                <input  id='hoodies' name='categories' type='input'  placeholder='Max'   className='radiobutton' style={{width:"30%"}}/>
                </div>
            </LeftSection>
            <RightSection className='rsection'>
                {products && products.map((cur , index)=>{
                    return(
                        <ClothCard  cur={cur} key={index}/>
                    )
                })}
            </RightSection>
         </Container>

    </div>

  )
}

export default Catalog