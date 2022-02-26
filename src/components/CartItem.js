import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={classes.item}>
      <img className={classes.image} src={props.src} alt="img" />
      <div>
        <p className={classes.title}>{props.name}</p>
        <p className={classes.quantity}>
          <span className={classes.symbol}>x</span>
          {props.quantity}
        </p>
      </div>
      <p className={classes.price}>
        <span className={classes.symbol}>₹</span>
        {props.price.toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
