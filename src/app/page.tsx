import LinkButton from "@/components/molecules/LinkButton/LinkButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <LinkButton
        text={"Hello, World! This is the home page."}
        href={"/"}
        size={48}
      />
    </div>
  );
}
