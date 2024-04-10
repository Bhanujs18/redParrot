import { CartImage , CartName , CartPrice , CartItem } from '../style';


const OrdersCard = ({cur}) => {

  return (
   <CartItem style={{width:'100%' , background:'white' , borderRadius:'15px' , overflow:'hidden' , color:'black'}}>
    <CartImage src={cur.image} />
    <div className='cartprice'>
    <CartName>{cur.name}</CartName>
    <CartPrice>${cur.price}</CartPrice>
    </div>

   </CartItem>
  );
}

export default OrdersCard;