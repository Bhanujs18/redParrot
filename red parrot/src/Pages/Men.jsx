import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sale from "../Components/Sale";
import axios  from "axios";

const Wrapper = styled.section`
  .suit {
    z-index: 0;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  height: 25rem;
  position: relative;
  :nth-child(1) {
    width: 60%;
  }
  h1 {
    position: absolute;
    left: 60%;
    z-index: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 9rem;
  }
  :nth-child(3) {
    height: 25rem;
    display: flex;
    justify-content: left;
  }
`;
const Men = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    try {
      axios
        .get("https://bhanujs18.github.io/red-parrot-data/data.json")
        .then((res) => {
          const data = res.data;
          const filtereddata = data.filter((cur) => cur.gender==="male");
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
        <img src="https://reebok.bynder.com/transform/41aa5c49-b967-4bd6-bc6e-7ae5a15adeed/23SS_Men-Shoes_FD_IWP-Tile-BB_MB" />
        <h1>
          <span style={{ color: "white" }}>M</span>en
        </h1>
        <img src="https://i.pinimg.com/736x/7f/dd/a2/7fdda279d5ae1280bb106cec1e7acd74.jpg" />
      </Container>
      <Sale products={products} />

      <img
        className="suit"
        src="https://cache.tradeinn.com/images/brand-page/banner_1577.jpg"
      />
    </Wrapper>
  );
};

export default Men;
