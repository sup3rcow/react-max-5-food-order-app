import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your art</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
