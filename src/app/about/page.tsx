"use client";
import { FaAddressCard } from "react-icons/fa6";
import styles from "./about.module.scss";
import RoundedButton from "@/components/organism/RoundedButton/RoundedButton";
import { BiCartAdd } from "react-icons/bi";

export default function page() {
  return (
    <div className={styles.about}>
      {/* <RoundedButton text={"See All Posters"} icon={FaAddressCard} />
      <RoundedButton text={"Add To Cart"} icon={BiCartAdd} /> */}
    </div>
  );
}
