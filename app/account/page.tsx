"use client";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "./constants";
import { NavKey } from "./types";
import { PersonalInfo } from "./Personalinfo";
import { About, Addresses, Favorites, MyOrders, MyShop } from "./sections";
import { Sidebar } from "./sidebar";
import { BottomSheet } from "./bottomsheet";

const SECTION_MAP: Record<NavKey, React.ReactNode> = {
  personal:  <PersonalInfo />,
  shop:      <MyShop />,
  orders:    <MyOrders />,
  addresses: <Addresses />,
  favorites: <Favorites />,
  about:     <About />,
};

function Account() {
  const [activeNav, setActiveNav]   = useState<NavKey>("personal");
  const [sheetNav, setSheetNav]     = useState<NavKey | null>(null);
  const [sheetOpen, setSheetOpen]   = useState(false);
  const [isMobile, setIsMobile]     = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNavClick = (key: NavKey): void => {
    if (isMobile) {
      // Mount content first, then animate open
      setSheetNav(key);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setSheetOpen(true))
      );
    } else {
      setActiveNav(key);
    }
  };

  const handleClose = (): void => {
    setSheetOpen(false);
    setTimeout(() => setSheetNav(null), 400);
  };

  const sheetTitle = sheetNav
    ? NAV_ITEMS.find((n) => n.key === sheetNav)?.label ?? ""
    : "";

  return (
    <section>
      <div className="container">
        <div className="w-full flex gap-5">

          {/* Sidebar — full width on mobile, fixed width on desktop */}
          <Sidebar
            activeNav={activeNav}
            onNavClick={handleNavClick}
          />

          {/* Desktop main content */}
          {!isMobile && (
            <div className="w-5/7">
              {SECTION_MAP[activeNav]}
            </div>
          )}

        </div>
      </div>

      {/* Mobile bottom sheet */}
      {isMobile && (
        <BottomSheet title={sheetTitle} open={sheetOpen} onClose={handleClose}>
          {sheetNav && SECTION_MAP[sheetNav]}
        </BottomSheet>
      )}
    </section>
  );
}

export default Account;