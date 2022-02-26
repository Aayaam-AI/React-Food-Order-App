import { useDispatch } from "react-redux";
import classes from "./CatagoryCard.module.css";
import { itemActions } from "../store";

const CatagoryCard = (props) => {
  const name = props.name.toLowerCase();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(itemActions.toggle({ category: name }));
  };

  return (
    <div
      onClick={clickHandler}
      className={`${classes.card} ${props.active ? classes.active : ""}`}
    >
      <div className={classes.img}>
        <img src={props.src} alt="" />
      </div>
      <h4>{props.name}</h4>
    </div>
  );
};

export default CatagoryCard;
