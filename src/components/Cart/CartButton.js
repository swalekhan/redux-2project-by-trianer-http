import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { cardActions } from '../../store/cardReducer';
const CartButton = (props) => {
  const dispatch = useDispatch()
    
  const cardTogleHandler = () =>{
    dispatch(cardActions.cardHandler())
  }

  return (
    <button onClick={cardTogleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
