import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
gap: 1rem;
width: 100%;
margin:0;
height: max-content;
padding:0;
align-items:Center;
justify-content:Center;
`
const Card = styled.div`
display: flex;
align-items: center;
background-color: ${({theme})=>theme.colors.mainColor};
color: white;
gap: 0.5rem;
border-radius: 15px;
height: 6rem;
padding: 1rem;
width: 25%;
p{
  margin:0%;
  font-size: 1.1rem;
}
`

const UpdateAccount = () => {
  return (
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , width:'65%'}}>
    <Wrapper>
                    <Card>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/user.png" alt="user"/>
        <p>Update Account</p>
        </Card>
        <Card>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/user.png" alt="user"/>
        <p>Fun Zone</p>
        </Card>
        <Card>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/user.png" alt="user"/>
        <p>Customer Service</p>
        </Card>
        <Card>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/user.png" alt="user"/>
        <p>Returns</p>
        </Card>
        <Card>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/user.png" alt="user"/>
        <p>Call Us</p>
        </Card>
        <Card>
        <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/user.png" alt="user"/>
        <p>Wallet</p>
        </Card>
     

    </Wrapper>
    </div>
  )
}

export default UpdateAccount