import classes from "./Title.module.css";

const Title = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Reacted</h1>
      <input className={classes.input} placeholder="Search by food name" />
    </div>
  );
};

export default Title;
