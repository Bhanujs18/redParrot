import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { updateCart } from '../features/cartSlice';

const ClothCard = ({cur}) => {

  const dispatch = useDispatch();
  const buyNow = (cur) => {
    console.log(cur)
  dispatch(updateCart(cur));
  }

  return (
    <Card style={{ width: '13rem' , marginRight:'0.5rem' }}>
      <Card.Img style={{height:'15rem' , width:'13rem'}} variant="top" src={cur.image} />
      <Card.Body>
        <Card.Title>{cur.name}</Card.Title>
        <Card.Text>
        ${cur.price}
        </Card.Text>
        <Button style={{background:"#A11122" , border:'none'}} onClick={()=>buyNow(cur)}>Add to cart</Button>
      </Card.Body>
    </Card>
    
  );
}

export default ClothCard;