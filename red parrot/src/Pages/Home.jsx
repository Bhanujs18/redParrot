import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner/Banner'
import NewArrivals from '../Components/NewArrivals'
import Categories from '../Components/Categories'

import axios from 'axios';
import Sale from '../Components/Sale';
const Home = () => {
  
  const [products , setProducts] = useState([]);
  console.log(typeof(products) + "Homepage")

  const fetchData = () =>{
    try{
   axios.get("https://bhanujs18.github.io/red-parrot-data/data.json").then((res)=>{
    const data = res.data;
   setProducts(data);
    }).catch((err)=>console.log(err))}
    catch{
    alert("api error")
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Banner />
      <Categories />
      <NewArrivals products={products} />
      <Sale products={products} />
    </div>
  )
}

export default Home