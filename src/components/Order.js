import CartItem from "./CartItem";
import classes from "./Order.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/index";

const Order = (props) => {
  const itemList = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const userName = useSelector((state) => state.user.firstName);
  const dispatch = useDispatch();
  const checkout = () => {
    if (totalPrice === 0) {
      return window.alert("Add items in Cart");
    }
    dispatch(cartActions.clear());
    return window.alert("Your total amount is ₹" + totalPrice.toFixed(2));
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Your Cart</h3>
        <div className={classes.user}>
          <img className={classes.img} src="/images/user.jpeg" alt="user" />
          <h4 className={classes.username}>{userName}</h4>
        </div>
      </div>
      <div className={classes.cart}>
        {itemList.length === 0 && <p>No items added to Cart</p>}
        {itemList.length > 0 &&
          itemList.map((item) => (
            <CartItem
              key={item.id}
              src={item.src}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
      </div>
      <button onClick={checkout} className={classes.action}>
        Checkout
      </button>
    </div>
  );
};

export default Order;
