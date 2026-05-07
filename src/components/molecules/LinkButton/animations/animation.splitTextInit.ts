import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

export const initSplitText = (
  upperElement: HTMLDivElement,
  lowerElement: HTMLDivElement,
) => {
  const upperSplit = SplitText.create(upperElement, { type: "chars" });
  const lowerSplit = SplitText.create(lowerElement, { type: "chars" });

  // Set initial positions
  gsap.set(upperSplit.chars, { yPercent: 0 });
  gsap.set(lowerSplit.chars, { yPercent: 100 });

  return { upperSplit, lowerSplit };
};
