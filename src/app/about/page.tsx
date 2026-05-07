import LinkButton from "@/components/molecules/LinkButton/LinkButton";
import styles from "./about.module.scss";

import { FaShoppingCart } from "react-icons/fa";

export default function About() {
  return (
    <div className={styles.about}>
      <button className={styles.button}>
        <div className={styles.button__icon}>
          <FaShoppingCart />
        </div>
        <div className={styles.button__text}>
          <LinkButton text={"Add to cart"} />
        </div>
      </button>
    </div>
  );
}
