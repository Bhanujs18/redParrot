import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from '../Components/Header/Header';
import Error from '../Components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import CartPage from './CartPage';
import Footer from '../Components/Footer/Footer';
import Wallet from '../Components/Wallet';
import Profile from './Profile';
import OrderPlaced from '../Components/OrderPlaced';

const App = () => {
  const theme =  {
  colors : {
    mainColor: "#CE3345"
  }
}
  return (
    <ThemeProvider theme = {theme}>
    <div style={{padding:0, margin:0}}>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/orderPlaced' element={<OrderPlaced />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
      <Footer />
      <div className='copyright'>© 2024 www.redparrot.com. All rights reserved.</div>
    </div>
    </ThemeProvider>

  )
}

export default App