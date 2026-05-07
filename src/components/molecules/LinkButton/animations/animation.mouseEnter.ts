import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { config } from "../types/config.interface";

export const animateMouseEnter = (
  upperSplit: SplitText,
  lowerSplit: SplitText,
  config: config,
) => {
  if (!upperSplit.chars?.length || !lowerSplit.chars?.length) return;

  gsap.to(upperSplit.chars, {
    yPercent: -100,
    stagger: {
      amount: config.stagger,
    },
    ease: "power2.inOut",
    duration: 0.3,
  });
  gsap.to(lowerSplit.chars, {
    yPercent: 0,
    stagger: {
      amount: config.stagger,
    },
    ease: "power2.inOut",
    duration: 0.3,
  });
};
