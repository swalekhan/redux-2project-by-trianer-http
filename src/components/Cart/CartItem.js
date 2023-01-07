import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cardRedActions } from '../../store/cardReducer';

const CartItem = (props) => {
  const dispatch = useDispatch()
  const { title, quantity, total, price } = props.item;

  const removeItemHandler = () =>{
        dispatch(cardRedActions.removeItem(title))  // we set tilte in place of id for now;
  }
  const addItemHandler = () => {
    dispatch(cardRedActions.addItem({title:title,quantity:1,price:price}))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
