import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.section`
display: flex;
width: 100%;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
background-color: #F7F7F7;
justify-content: space-between;
`

const Image = styled.img`
height: 5rem;
width: 13rem;
`

const Linker = styled.div`
color: ${({theme})=>theme.colors.mainColor};
text-underline:none;
font-size: 1.2rem;
font-weight : 600;
`

const Links = styled.div`

height: 4rem;
display: flex;
align-items: center;
padding: 0.5rem 2rem;
gap: 3rem;
text-decoration: none;

`
const RightSection = styled.div`
display: flex;
align-items: center;
justify-content:space-around;
width: 15rem;
background-color: ${({theme})=>theme.colors.mainColor};
padding: 0rem 1rem;
`

const Header = () => {
  const [page, setPage] = useState("home")
  const quantity =  useSelector((state)=>state.cart.quantity);

  return (
    <Container>
       <Link to="/"> <Image src='https://res.cloudinary.com/dyqynjew8/image/upload/v1705066915/redparrot-removebg-preview_lliopi.png' /></Link>
        <div style={{height:'5rem' , display:'flex' , alignItems:'center'}}>
            <Links>
               <Link onClick={()=>setPage("home")}  className={page === "home" ? "links select" : "links"} to="/" ><Linker>New Arrivals</Linker></Link>
               <Link onClick={()=>setPage("trending")} className={page === "trending" ? "links select" : "links"} to="/trending"><Linker>Trending</Linker></Link>
               <Link  onClick={()=>setPage("men")} className={page === "men" ? "links select" : "links"} to="/men"><Linker>Men</Linker></Link>
               <Link  onClick={()=>setPage("women")} className={page === "women" ? "links select" : "links"} to="/women"><Linker>Women</Linker></Link>
            </Links>
        </div>
     
        <RightSection style={{display:'flex'}}> 
            <Link to="/wallet" className='links' ><Linker style={{color:"white"}}><img width="24" height="24" src="https://img.icons8.com/ios-filled/50/ffffff/wallet.png" alt="wallet"/>$0</Linker></Link>
            <Link to='/profile' className='links' ><Linker style={{color:"white"}}><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/ffffff/gender-neutral-user.png" alt="gender-neutral-user"/></Linker></Link>
            <Link className='links' to="/cart" ><Linker style={{color:"white"}}><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/ffffff/shopping-cart.png" alt="shopping-cart"/>{quantity}</Linker></Link>
        </RightSection>
    </Container>
  )
}

export default Header