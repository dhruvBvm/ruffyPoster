import gsap from "gsap";

export const initSplitText = (
  upperElement: HTMLDivElement,
  lowerElement: HTMLDivElement,
) => {
  // Set initial positions
  gsap.set(upperElement, {
    yPercent: -50,
  });
  gsap.set(lowerElement, {
    yPercent: 50,
  });

  return;
};
