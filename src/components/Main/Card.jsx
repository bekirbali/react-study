import classes from "./Card.module.scss";

const Card = ({ id, title, date, desc, image }) => {
  return (
    <div key={id} className={classes.cards}>
      <div className={classes.title}>
        <h1>{title}</h1>
      </div>
      <div className={classes.date}>
        <h3>{date}</h3>
      </div>
      <img src={image} alt="" />
      <div className={classes["card-over"]}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
