import React from 'react'

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
`
const Cards = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
`


const Categories = () => {

  return (
    <Wrapper>
        <Cards>
        <Image src='./imgs/Hoodiz.png' />
        <Image src='./imgs/Pullover.png' />
        <Image src='./imgs/wrapper.png' />
        </Cards>
    </Wrapper>
  )
}

export default Categories