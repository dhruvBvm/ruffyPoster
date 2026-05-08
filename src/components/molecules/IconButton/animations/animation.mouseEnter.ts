import gsap from "gsap";

export const animateMouseEnter = (
  upperElement: HTMLDivElement,
  lowerElement: HTMLDivElement,
) => {
  gsap.to(upperElement, {
    yPercent: -150,
    ease: "power2.inOut",
    duration: 0.3,
  });
  gsap.to(lowerElement, {
    yPercent: -50,
    ease: "power2.inOut",
    duration: 0.3,
  });
};
