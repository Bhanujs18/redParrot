import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import MyOrders from "../Components/MyOrders";
import CartCard from "../Components/CartCard";
import OrdersCard from "../Components/OrdersCard";
import UpdateAccount from "../Components/UpdateAccount";

const Wrapper = styled.section`
  display: flex;
  flex-direction : column;
  padding-top: 1rem;
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Montserrat, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    margin: 0;
  }

  h3 {
    margin: 10px 0;
  }

  h6 {
    margin: 5px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 21px;
  }

  .card-container {
    padding: 2rem 0rem;
    border-radius: 15px;
    color: black;
    width: 20%;
    // background-color: #c6c6c6;
    padding-top: 30px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;    width: 350px;
    max-width: 100%;
    text-align: center;
  }

  .card-container .pro {
    color: white;
    background-color: #ce3345;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 7px;
    position: absolute;
    top: 30px;
    left: 30px;
  }

  .card-container .round {
    border: 5px solid #ce3345;
    border-radius: 50%;
    padding: 0px;
    height: 9rem;
  }

  button.primary {
    background-color: #ce3345;
    border: 1px solid #ce3345;
    border-radius: 3px;
    color: white;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
  }

  button.primary.ghost {
    background-color: transparent;
    color: #ce3345;
  }
`;

const Profile = () => {
  const [myOrders, setMyOrders] = useState([]);

  const orders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/order/orderDetails"
      );
      console.log(res.data);
      setMyOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    orders();
  }, []);

  return (
    <Wrapper>
		<div style={{display:'flex' , justifyContent:'center'}}>
      <div className="card-container" style={{width: '25%'}}>
        <span className="pro">pro+</span>
        <img
          className="round"
          src="https://cdn.hero.page/pfp/723e650f-63ed-4352-942c-47433f05b22a-l-in-monochrome-best-anime-guys-pfp-2.png"
          alt="user"
        />
        <h3>Bhanu Js</h3>
        <h6>New Delhi</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div className="buttons">
          <button className="primary">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-filled/50/ffffff/phone-disconnected.png"
              alt="phone-disconnected"
            />
          </button>
          <button className="primary ghost">+91 9834354745</button>
        </div>
      </div>

	  {/* account update options */}

	  <UpdateAccount />
	  </div>

	  {/* My orders */}
    <div style={{display:'flex' , justifyContent:'center'}}>
	<div style={{width:'95%' , padding:'1rem 0rem'}} >
        <p style={{fontSize: '1.3rem'}}>My Orders</p>
        <div className="myOrders">
          {myOrders && myOrders.map((curr, index) => {
              return (
				<div className="orderDetailsDiv">
					<div className="orderDetails">
					<p>{curr.status}</p>
					<p>${curr.price}</p>
					</div>
					{curr.items.map((cur) => {
							return (
							  <div className="myOrdersCardDiv">
								<OrdersCard cur={cur} />
							  </div>
							);
						  })
					}
				</div>
			  )
            })}
        </div>
      </div>
	  </div>

    </Wrapper>
  );
};

export default Profile;
