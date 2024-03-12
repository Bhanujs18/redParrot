import Button from 'react-bootstrap/Button';
import { CartImage , CartName , CartPrice , CartItem } from '../style';
import { removeCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

const CartCard = ({cur}) => {

    const dispatch = useDispatch();

    const removeItem = (cur) => {
        dispatch(removeCart(cur))
    }

  return (
   <CartItem>
    <CartImage src={cur.image} />
    <div className='cartprice'>
    <CartName>{cur.name}</CartName>
    <CartPrice>${cur.price}</CartPrice>
    </div>
    <Button variant='danger' onClick={()=>removeItem(cur)}>Remove</Button>
   </CartItem>
  );
}

export default CartCard;