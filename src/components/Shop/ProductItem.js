import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cardRedActions } from '../../store/cardReducer';
const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description } = props;

  const addItemHandler =() => {
      dispatch(cardRedActions.addItem({title:title,price:price,quantity:1}))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
