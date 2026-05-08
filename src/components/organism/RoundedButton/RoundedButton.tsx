"use client";

import { useCallback, useState } from "react";
import styles from "./RoundedButton.module.scss";
import LinkButton from "@/components/molecules/LinkButton/LinkButton";
import IconButton from "@/components/molecules/IconButton/IconButton";
import { IconType } from "react-icons";

interface props {
  text: string;
  icon: IconType;
  iconSize?: number;
  fontSize?: number;
}

const RoundedButton = ({
  text,
  icon: Icon,
  iconSize = 18,
  fontSize = 16,
}: props) => {
  const [buttonElement, setButtonElement] = useState<HTMLButtonElement | null>(
    null,
  );
  const setButtonRef = useCallback((el: HTMLButtonElement | null) => {
    setButtonElement(el);
  }, []);
  return (
    <>
      <button className={styles.roundedButton} ref={setButtonRef}>
        <div className={styles.roundedButton__iconContainer}>
          <IconButton
            icon={Icon}
            hoverElement={buttonElement}
            size={iconSize}
          />
        </div>
        <div className={styles.roundedButton__textContainer}>
          <LinkButton
            text={text}
            hoverElement={buttonElement}
            size={fontSize}
          />
        </div>
      </button>
    </>
  );
};

export default RoundedButton;
