import classes from "./ItemCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";

const ItemCard = (props) => {
  const { id, name, price, src } = props;

  let quantity = 0;

  const items = useSelector((state) => state.cart.items);

  const exists = items.find((item) => item.id === id);

  if (exists) {
    quantity = exists.quantity;
  }

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      cartActions.add({
        id,
        name,
        price,
        src,
      })
    );
  };

  const removeHandler = () => {
    dispatch(
      cartActions.remove({
        id,
        price,
      })
    );
  };

  return (
    <div className={classes.item}>
      <img className={classes.image} src={src} alt="img" />
      <h4 className={classes.title}>{name}</h4>
      <div className={classes.bottom}>
        <h5 className={classes.price}>
          <span className={classes.symbol}>₹</span> {price}
        </h5>

        {quantity > 0 && (
          <div className={classes.action}>
            <button className={classes.action_item} onClick={removeHandler}>
              -
            </button>
            {quantity}
            <button className={classes.action_item} onClick={addHandler}>
              +
            </button>
          </div>
        )}

        {quantity === 0 && (
          <button className={classes.button} onClick={addHandler}>
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
