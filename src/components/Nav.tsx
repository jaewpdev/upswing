"use client";

import { useEffect, useState } from "react";
import useResponsive from "../hooks/useResponsive";
import { navItems } from "../static/navItems";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import MobileNavigationSlider from "./MobileNavigationSlider";
import useSmoothNavigate from "../hooks/useSmoothNavigate";

export default function Nav() {
  const handleSmoothScroll = useSmoothNavigate();

  const [mobileNavigationSliderIsOpen, setMobileNavigationSliderIsOpen] =
    useState(false);

  const breakpoint = useResponsive();

  // Prevents mobile nav visibility on tablet >
  useEffect(() => {
    if (breakpoint > 1 && mobileNavigationSliderIsOpen) {
      setMobileNavigationSliderIsOpen(false);
    }
  }, [breakpoint, mobileNavigationSliderIsOpen]);

  // Disables scrolling when mobile nav is open
  useEffect(() => {
    if (mobileNavigationSliderIsOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileNavigationSliderIsOpen]);

  return (
    <>
      <div className="w-screen py-4 lg:py-8 bg-white fixed top-0 left-0 z-[51]">
        <div className="container mx-auto relative flex justify-between items-center">
          <Logo className="z-10" />
          <nav className="absolute inset-0  hidden md:flex justify-center items-center gap-2  ">
            {navItems.map(({ text, href }) => (
              <a
                key={href}
                href={href}
                className="px-2 py-2  hover:text-brand-green"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(e, href);
                }}
              >
                {text}
              </a>
            ))}
          </nav>
          <Button
            variant="secondary"
            className="z-10 hidden md:flex"
            href="/contact"
          >
            Get Started
          </Button>

          <HamburgerMenu
            isOpen={mobileNavigationSliderIsOpen}
            setIsOpen={setMobileNavigationSliderIsOpen}
          />
        </div>
      </div>
      <MobileNavigationSlider
        isOpen={mobileNavigationSliderIsOpen}
        setIsOpen={setMobileNavigationSliderIsOpen}
      />
    </>
  );
}
