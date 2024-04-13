import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sale from "../Components/Sale";
import axios  from "axios";

const Trending = () => {
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
    } catch {
      alert("api error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='trending'>
        <div className='trend-design1'>
        <img src='https://i0.wp.com/hqmanila.com/wp-content/uploads/2023/06/2024-mens-fashion-trends.png' />
        <h1><span style={{color:'white'}}>Tren</span>ding</h1>
        <img src='./imgs/messi.png' />
        </div>
        <Sale products={products} />

        <img className='suit'  src='https://www.politix.com.au/on/demandware.static/-/Library-Sites-PolitixSharedLibrary/default/dw66dc7993/images/New%20Homepage/Promotional%20Tiles/2024/March/SLDMarch_PLP_Long_Desktop.jpg' />
    </div>
  )
}

export default Trending