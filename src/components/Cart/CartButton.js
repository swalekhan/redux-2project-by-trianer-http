import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cardActions } from '../../store/cardTogle';
const CartButton = (props) => {
  const dispatch = useDispatch()
  const cardItemLength = useSelector(state => state.cardReducer.totalQuantity)
    
  const cardTogleHandler = () =>{
    dispatch(cardActions.cardHandler())
  }


  return (
    <button onClick={cardTogleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cardItemLength}</span>
    </button>
  );
};

export default CartButton;
