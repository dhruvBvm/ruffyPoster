"use client";

import React, { useCallback, useRef } from "react";
import styles from "./IconButton.module.scss";
import { IconType } from "react-icons";
import { useGSAP } from "@gsap/react";
import { initSplitText } from "./animations/animation.splitTextInit";
import { animateMouseEnter } from "./animations/animation.mouseEnter";
import { animateMouseLeave } from "./animations/animation.mouseLeave";

interface props {
  icon: IconType;
  size: number;
  hoverElement?: HTMLElement | null;
}

const IconButton = ({ icon: Icon, hoverElement, size = 16 }: props) => {
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const divRef = useRef<HTMLDivElement>(null);

  const addToRef = useCallback((el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);

  useGSAP(() => {
    let currentElement: HTMLElement | HTMLDivElement | null = divRef.current;
    if (hoverElement) currentElement = hoverElement;

    if (!currentElement || elementsRef.current.length !== 2) return;

    const upperElement = elementsRef.current[0];
    const lowerElement = elementsRef.current[1];

    console.log(upperElement);
    console.log(lowerElement);

    if (upperElement && lowerElement) {
      initSplitText(upperElement, lowerElement);
    }

    const onMouseEnter = () => {
      if (upperElement && lowerElement) {
        animateMouseEnter(upperElement, lowerElement);
      }
    };
    const onMouseLeave = () => {
      if (upperElement && lowerElement) {
        animateMouseLeave(upperElement, lowerElement);
      }
    };

    currentElement.addEventListener("mouseenter", onMouseEnter);
    currentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      currentElement.removeEventListener("mouseenter", onMouseEnter);
      currentElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [hoverElement]);

  return (
    <div className={styles.icon} ref={divRef}>
      <div
        className={styles.icon__placeholder}
        style={{ "--i": `${size}px` } as React.CSSProperties}
      >
        {Icon && <Icon />}
      </div>
      <div
        className={styles.icon__upperIcon}
        ref={addToRef}
        style={{ "--i": `${size}px` } as React.CSSProperties}
      >
        {Icon && <Icon />}
      </div>
      <div
        className={styles.icon__lowerIcon}
        ref={addToRef}
        style={{ "--i": `${size}px` } as React.CSSProperties}
      >
        {Icon && <Icon />}
      </div>
    </div>
  );
};

export default IconButton;
