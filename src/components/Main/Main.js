import classes from "./Main.module.scss";
import { data } from "../../utils/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className={classes["card-container"]}>
      {data.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
};

export default Main;
