import classes from "./Navbar.module.scss";
import logo from "../../utils/logo.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.links}>
        <a href="#horoscope">Horoscope</a>
        <a href="#daily">Daily</a>
        <a href="#tarot">Tarot</a>
        <a href="#article">Article</a>
        <a href="#content">Content</a>
      </div>
    </div>
  );
};

export default Navbar;
