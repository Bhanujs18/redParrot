import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'


const Wrapper = styled.section`
display: flex;
width:100%;
justify-content: space-around;
flex-wrap: wrap;
`
const Card = styled.div`
height: 6rem;
width: 22rem;
background-size: cover;
display: flex;
justify-content:Center;
background-image: url('https://www.hoodyworld.co.uk/files/files/hoodyworld%20homepage%20banner(1).png');
align-items: center;
`
const Image = styled.img`
width: 100%;
display: flex;
height: 8rem;
object-fit : cover;
`
const Cards = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
`
const Box = styled.div`
display: flex;
position: relative;
width: 100%;
justify-content: space-around;
h1{
  position: absolute;
  left: 10%;
  bottom: 10%;
  height: max-content;
  border-left : 15px #A11122 solid;
  padding-left: 0.5rem;
  background: rgb(0,0,0,0.3);
  color: white;
}
`


const Categories = () => {

  return (
    <Wrapper>
        <Cards>
          <NavLink style={{width:'100%'}}   to={"/products/hoodies"}>
          <Box>
        <Image src='https://mensflair.com/wp-content/uploads/2023/01/heavyweight-hoodies-men.jpg' />
        <h1>Hoodiz</h1>
        </Box>
        </NavLink>
        <NavLink  style={{width:'100%'}}  to={"/products/tshirts"}>
        <Box>
        <Image src='https://media.glamourmagazine.co.uk/photos/6138abea86dcf24018f4b8e0/16:9/w_320%2Cc_limit/slogan-t-shirts_sf.jpg' />
        <h1>T-shirts</h1>
        </Box>
        </NavLink>
        <NavLink style={{width:'100%'}}  to={"/products/wrapper"}>
        <Box>
        <Image src='https://prod-cdn-07.storenvy.com/product_photos/104935403/file_b189cc391a_original.jpg' />
        <h1>Wrapper</h1>
        </Box>
        </NavLink>
        </Cards>
    </Wrapper>
  )
}

export default Categories