
import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
const cardRedState = useSelector(state => state.cardReducer.cardRedState)
const total = useSelector(state => state.cardReducer.totalAmount)


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {cardRedState.map((e)=>(<CartItem  item={{ title: e.title, quantity: e.quantity, total: total, price: e.price }}/>))}
        
      </ul>
    </Card>
  );
};

export default Cart;
