"use client";
import React, { useCallback, useRef, useState } from "react";
import styles from "./NavbarSlider.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import IconButton from "@/components/molecules/IconButton/IconButton";
import { toggleNavbarSlider } from "@/store/slices/uiSlice";
import { IoCloseSharp } from "react-icons/io5";
import { navLinks } from "./../../../lib/constansts/navLink";
import { socialLinks } from "./../../../lib/constansts/socialLinks";
import LinkButton from "@/components/molecules/LinkButton/LinkButton";
import Link from "next/link";

const NavbarSlider = () => {
  const isMenuOpen = useSelector(
    (state: RootState) => state.ui.isNavbarSliderOpen,
  );
  const dispatch = useDispatch();

  const navSliderRef = useRef<HTMLDivElement | null>(null);

  const handleNavBar = useCallback(() => {
    dispatch(toggleNavbarSlider());
  }, []);

  const [closeButtonElement, setCloseButtonElement] =
    useState<HTMLDivElement | null>(null);
  const handleSetCloseButton = useCallback((el: HTMLDivElement | null) => {
    setCloseButtonElement(el);
  }, []);

  const [hoverLinkElements, setHoverLinksElements] = useState<
    (HTMLDivElement | null)[]
  >([]);
  const setHoverLinksElementsRef = useCallback((el: HTMLDivElement | null) => {
    setHoverLinksElements((prev) => [...prev, el]);
  }, []);
  const [socialHoverElements, setSocialHoverElements] = useState<
    (HTMLAnchorElement | null)[]
  >([]);
  const setSocialHoverElementsRef = useCallback(
    (el: HTMLAnchorElement | null) => {
      setSocialHoverElements((prev) => [...prev, el]);
    },
    [],
  );

  useGSAP(() => {
    if (navSliderRef?.current) {
      console.log(navSliderRef.current);
      gsap.set(navSliderRef.current, {
        xPercent: -100,
      });
    }
  }, [navSliderRef]);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(navSliderRef.current, {
        xPercent: 0,
        ease: "back.inOut",
        opacity: 1,
      });
    }
    if (!isMenuOpen) {
      gsap.to(navSliderRef.current, {
        xPercent: -100,
        ease: "back.inOut",
      });
    }
  }, [isMenuOpen]);
  return (
    <div className={styles.navbarSlider} ref={navSliderRef}>
      <div className={styles.navbarSlider__left}>
        {/* Nav links */}
        <div className={styles.navbarSlider__left__navLinks}>
          {navLinks.map((navItem, index) => {
            return (
              <div
                key={index}
                className={styles.navbarSlider__left__navLinks__link}
                ref={setHoverLinksElementsRef}
              >
                <LinkButton
                  text={navItem.name}
                  href={navItem.href}
                  isLink={true}
                  hoverElement={hoverLinkElements[index]}
                  size={48}
                  fontWight={700}
                  fontStyleLower="italic"
                />
              </div>
            );
          })}
        </div>

        <div className={styles.navbarSlider__left__socialLinks}>
          {socialLinks.map((socialItem, index) => {
            return (
              <Link
                key={index}
                className={styles.navbarSlider__left__socialLinks__icon}
                ref={setSocialHoverElementsRef}
                href={socialItem.href}
                target="_blank"
              >
                <IconButton
                  icon={socialItem.icon}
                  size={40}
                  hoverElement={socialHoverElements[index]}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.navbarSlider__right}>
        <div className={styles.navbarSlider__right__categorySection}>
          <div
            className={styles.navbarSlider__right__categorySection__category}
          >
            <LinkButton
              text={"Anime"}
              size={48}
              fontWight={700}
              fontStyleLower="italic"
            />
          </div>
          <div
            className={styles.navbarSlider__right__categorySection__category}
          >
            <LinkButton
              text={"Movies"}
              size={48}
              fontWight={700}
              fontStyleLower="italic"
            />
          </div>
          <div
            className={styles.navbarSlider__right__categorySection__category}
          >
            <LinkButton
              text={"Tech"}
              size={48}
              fontWight={700}
              fontStyleLower="italic"
            />
          </div>
          <div
            className={styles.navbarSlider__right__categorySection__category}
          >
            <LinkButton
              text={"Novels"}
              size={48}
              fontWight={700}
              fontStyleLower="italic"
            />
          </div>
          <div
            className={styles.navbarSlider__right__categorySection__category}
          >
            <LinkButton
              text={"Novels"}
              size={48}
              fontWight={700}
              fontStyleLower="italic"
            />
          </div>
          <div
            className={styles.navbarSlider__right__categorySection__category}
          >
            <LinkButton
              text={"Novels"}
              size={48}
              fontWight={700}
              fontStyleLower="italic"
            />
          </div>
        </div>
      </div>

      {/* close Button */}
      <div
        className={styles.navbarSlider__closeButton}
        onClick={handleNavBar}
        ref={handleSetCloseButton}
      >
        <IconButton
          icon={IoCloseSharp}
          size={32}
          hoverElement={closeButtonElement}
        />
      </div>
    </div>
  );
};

export default NavbarSlider;
