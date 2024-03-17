import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
gap: 1rem;
margin:0;
padding:0;
align-items:Center;
justify-content:Center;
`
const Card = styled.div`
display: flex;
align-items: center;
background: #ce3345;
color: white;
border-radius: 15px;
height: 6rem;
justify-content:Center;
padding: 1rem;
width: 30%;
`

const UpdateAccount = () => {
  return (
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
  )
}

export default UpdateAccount