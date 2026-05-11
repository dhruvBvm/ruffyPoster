"use client";

import Link from "next/link";
import styles from "./LinkButton.module.scss";
import { useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { animateMouseEnter } from "./animations/animation.mouseEnter";
import { animateMouseLeave } from "./animations/animation.mouseLeave";
import { initSplitText } from "./animations/animation.splitTextInit";
import { config } from "./types/config.interface";

gsap.registerPlugin(SplitText);

interface Props {
  text: string;
  href?: string | null;
  size?: number;
  isLink?: boolean;
  hoverElement?: HTMLElement | null;
  fontFamilyUpper?: string;
  fontFamilyLower?: string;
  fontWight?: number;
  fontStyleUpper?: "normal" | "italic";
  fontStyleLower?: "normal" | "italic";
  lineHight?: number;
}

const LinkButton = ({
  text,
  href,
  size = 16,
  isLink = false,
  hoverElement,
  fontFamilyUpper = "Roboto Mono",
  fontFamilyLower = "Roboto Mono",
  fontWight = 300,
  fontStyleUpper = "normal",
  fontStyleLower = "normal",
}: Props) => {
  const elementsRef = useRef<HTMLDivElement[]>([]);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const upperSplitRef = useRef<SplitText | null>(null);
  const lowerSplitRef = useRef<SplitText | null>(null);

  const addToRef = useCallback((el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  }, []);

  const buttonContent = (
    <>
      <div
        className={styles.linkButton__placeholder}
        style={{ "--i": `${size}px` } as React.CSSProperties}
      >
        {text}
      </div>
      <div
        className={styles.linkButton__upperText}
        ref={addToRef}
        style={
          {
            "--i": `${size}px`,
            "--font-family": fontFamilyUpper,
            "--font-wight": fontWight,
            "--font-style": fontStyleUpper,
          } as React.CSSProperties
        }
      >
        {text}
      </div>
      <div
        className={styles.linkButton__lowerText}
        ref={addToRef}
        style={
          {
            "--i": `${size}px`,
            "--font-family": fontFamilyLower,
            "--font-wight": fontWight,
            "--font-style": fontStyleLower,
          } as React.CSSProperties
        }
      >
        {text}
      </div>
    </>
  );

  useGSAP(() => {
    let currentElement:
      | HTMLElement
      | HTMLDivElement
      | HTMLAnchorElement
      | null = isLink ? linkRef.current : divRef.current;
    if (hoverElement) currentElement = hoverElement;
    if (!currentElement || elementsRef.current.length !== 2) return;

    const upperElement = elementsRef.current[0];
    const lowerElement = elementsRef.current[1];

    if (upperElement && lowerElement) {
      const { upperSplit, lowerSplit } = initSplitText(
        upperElement,
        lowerElement,
      );
      upperSplitRef.current = upperSplit;
      lowerSplitRef.current = lowerSplit;
    }

    const textLength = upperElement?.textContent?.length ?? 0;
    const staggerValue = Math.min(textLength * 0.03, 0.5);
    const animationConfig: config = { stagger: staggerValue };

    const onMouseEnter = () => {
      if (upperSplitRef.current && lowerSplitRef.current) {
        animateMouseEnter(
          upperSplitRef.current,
          lowerSplitRef.current,
          animationConfig,
        );
      }
    };
    const onMouseLeave = () => {
      if (upperSplitRef.current && lowerSplitRef.current) {
        animateMouseLeave(
          upperSplitRef.current,
          lowerSplitRef.current,
          animationConfig,
        );
      }
    };

    currentElement.addEventListener("mouseenter", onMouseEnter);
    currentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      currentElement.removeEventListener("mouseenter", onMouseEnter);
      currentElement.removeEventListener("mouseleave", onMouseLeave);
      upperSplitRef.current?.revert();
      lowerSplitRef.current?.revert();
    };
  }, [isLink, text, hoverElement]); // hoverElement triggers re‑run when it becomes available

  return (
    <>
      {isLink ? (
        <Link className={styles.linkButton} href={href || "/"} ref={linkRef}>
          {buttonContent}
        </Link>
      ) : (
        <div className={styles.linkButton} ref={divRef}>
          {buttonContent}
        </div>
      )}
    </>
  );
};

export default LinkButton;
