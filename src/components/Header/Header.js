import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <span className={classes["text-shadow"]}>Who Are You?</span>
    </div>
  );
};

export default Header;
