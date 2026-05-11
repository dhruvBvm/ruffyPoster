"use client";

import IconButton from "@/components/molecules/IconButton/IconButton";
import styles from "./Navbar.module.scss";
import LinkButton from "@/components/molecules/LinkButton/LinkButton";
import { useCallback, useState } from "react";
import { LuHeart } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleNavbarSlider } from "@/store/slices/uiSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(
    (state: RootState) => state.ui.isNavbarSliderOpen,
  );
  const [hoverElements, setHoverElements] = useState<(HTMLDivElement | null)[]>(
    [],
  );
  const setHoverElementsRef = useCallback((el: HTMLDivElement | null) => {
    setHoverElements((prev) => [...prev, el]);
  }, []);
  const [hoverLinkElements, setHoverLinksElements] = useState<
    (HTMLDivElement | null)[]
  >([]);
  const setHoverLinksElementsRef = useCallback((el: HTMLDivElement | null) => {
    setHoverLinksElements((prev) => [...prev, el]);
  }, []);
  const handleNavBar = useCallback((el: React.MouseEvent | null) => {
    dispatch(toggleNavbarSlider());
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <LinkButton text="r" href={"/"} />
      </div>
      <div className={styles.navbar__links}>
        <div
          className={styles.navbar__links__link}
          ref={setHoverLinksElementsRef}
        >
          <LinkButton
            text="Home"
            href={"/"}
            isLink={true}
            hoverElement={hoverLinkElements[0]}
          />
        </div>
        <div
          className={styles.navbar__links__link}
          ref={setHoverLinksElementsRef}
        >
          <LinkButton
            text="About"
            href={"/about"}
            isLink={true}
            hoverElement={hoverLinkElements[1]}
          />
        </div>
        <div
          className={styles.navbar__links__link}
          ref={setHoverLinksElementsRef}
        >
          <LinkButton
            text="Posters"
            href={"/posters"}
            isLink={true}
            hoverElement={hoverLinkElements[2]}
          />
        </div>
        <div
          className={styles.navbar__links__link}
          ref={setHoverLinksElementsRef}
        >
          <LinkButton
            text="Category"
            href={"/category"}
            isLink={true}
            hoverElement={hoverLinkElements[3]}
          />
        </div>
      </div>
      <div className={styles.navbar__menu}>
        <div className={styles.navbar__menu__icon} ref={setHoverElementsRef}>
          <IconButton
            icon={LuHeart}
            hoverElement={hoverElements[0]}
            size={16}
          />
        </div>
        <div className={styles.navbar__menu__icon} ref={setHoverElementsRef}>
          <IconButton
            icon={BsCart3}
            hoverElement={hoverElements[1]}
            size={16}
          />
        </div>
        <div className={styles.navbar__menu__icon} ref={setHoverElementsRef}>
          <IconButton
            icon={FaRegUser}
            hoverElement={hoverElements[2]}
            size={16}
          />
        </div>
        <div
          className={styles.navbar__menu__icon}
          ref={setHoverElementsRef}
          onClick={handleNavBar}
        >
          <IconButton icon={IoMenu} hoverElement={hoverElements[3]} size={16} />
        </div>
      </div>
    </nav>
  );
};
