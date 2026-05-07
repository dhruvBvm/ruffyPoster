import styles from "./Navbar.module.scss";
import LinkButton from "@/components/molecules/LinkButton/LinkButton";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <h1>Ruffy Poster</h1>
      </div>
      <div className={styles.navbar__links}>
        <LinkButton text="home" href="/" isLink={true} />
        <LinkButton text="about us" href="/about" isLink={true} />
        <LinkButton text="contact" href="/contact" isLink={true} />
        <LinkButton text="add product" href="/contact" isLink={true} />
      </div>
    </nav>
  );
};
