import gsap from "gsap";

export const animateMouseLeave = (
  upperElement: HTMLDivElement,
  lowerElement: HTMLDivElement,
) => {
  gsap.to(upperElement, {
    yPercent: -50,
    ease: "power2.inOut",
    duration: 0.3,
  });
  gsap.to(lowerElement, {
    yPercent: 50,
    ease: "power2.inOut",
    duration: 0.3,
  });
};
