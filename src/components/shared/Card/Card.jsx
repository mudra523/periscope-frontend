import React from "react";
import styles from "./Card.module.css";

// Card component, which will have heading with icon. and then you can pass childern to it.

const Card = ({ title, icon, children }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.headingWrapper}>
          {icon && <img className={styles.headingImage} src={icon} alt="logo" />}
          {title && <h1 className={styles.heading}>{title}</h1>}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
