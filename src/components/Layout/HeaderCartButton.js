import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "src/store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsBump, setBtnIsBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumb, item) => {
    return curNumb + item.amount;
  }, 0);

  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsBump(true);
    const timer = setTimeout(() => {
      setBtnIsBump(false);
    }, 300);

    return () => {
      // cleanput function, izvrsava se kad se hook sljedeci put okida
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${styles.button} ${btnIsBump ? styles.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your art</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
