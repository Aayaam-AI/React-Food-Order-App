import { Fragment } from "react";
import { useSelector } from "react-redux";
import CatagoryCard from "./CatagoryCard";
import ItemCard from "./ItemCard";
import classes from "./Menu.module.css";
import Title from "./Title";

const data = require("./catagory.json");
const categories = data.catagories;

const Menu = (props) => {
  const category = useSelector((state) => state.item.category);
  const items = data[category];
  let active = false;
  return (
    <Fragment>
      <Title />
      <img className={classes.image} src="./images/banner.jpeg" alt="banner" />
      <div className={classes.container}>
        <h3 className={classes.menu}>Menu Category</h3>
        <div className={classes.catagories}>
          {categories.map((foodCategory) => {
            if (foodCategory.name.toLowerCase() === category) {
              active = true;
            } else {
              active = false;
            }
            return (
              <CatagoryCard
                key={foodCategory.id}
                name={foodCategory.name}
                src={foodCategory.img}
                active={active}
              />
            );
          })}
        </div>
        <div className={classes.items}>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              src={item.img}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
