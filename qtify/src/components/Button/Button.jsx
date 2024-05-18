import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./Button.module.css";


function Button({children}){
    return <button className="={styles.button}">{children}</button>
}
export default Button;