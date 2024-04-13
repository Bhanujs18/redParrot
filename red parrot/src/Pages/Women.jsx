import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sale from "../Components/Sale";
import axios  from "axios";


const Wrapper = styled.section`


    .suit{
      z-index: 0;
      width: 100%;
    }

    .imgText{
      position: absolute;
      z-index: 1;
      left: 40%;
      font-size: 6rem;
      color: white;
      top: 20%; 
      transform: translate(0%, 0%)
    }
  
`

const Container = styled.div`
    display: flex;
    height: 25rem;
    position: relative;
    :nth-child(1){
      width: 60%;
    }
    h1{
      position: absolute;
      left: 60%;
      z-index: 0;
      top: 50%;
      transform: translate(-50%,-50%);
      font-size: 9rem;
    }
    :nth-child(3){
     height: 40rem;
     z-index: 2;
    }
  
    
`

const Women = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    try {
      axios
        .get("https://bhanujs18.github.io/red-parrot-data/data.json")
        .then((res) => {
          const data = res.data;
          const filtereddata = data.filter((cur) => cur.gender==="female");
          setProducts(filtereddata);
        })
        .catch((err) => console.log(err));
    } catch {
      alert("api error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <Wrapper>
        <Container>
        <img src='https://pbs.twimg.com/media/Exff3JWUUAcwTAK.jpg' />
        <h1><span style={{color:'white'}}>Wo</span>men</h1>
        <img src='./imgs/women.png' />
        </Container>
        <div style={{position:'relative'}}>
        <img className='suit'  src='https://t3.ftcdn.net/jpg/03/67/56/64/360_F_367566423_XT7p8nSweLhTPMBZkqaDmQXhXujeS4Gq.jpg' />
        <h1 className='imgText'>Feel trendy and authentic.</h1>
        </div>
        <Sale products={products} />

    </Wrapper>
  )
}

export default Women