import { FunctionComponent, useState } from "react";
import styles from "./n7-navbar.module.css";

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip-chev)">
        <path d="M0.79712 3.8305L6.86407 9.89745L12.931 3.8305" stroke="#E9F4F9" strokeWidth="1.144" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip-chev">
          <rect width="13.728" height="13.728" fill="white" transform="translate(6.00068e-07 13.728) rotate(-90)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

const N7Navbar: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <button className={styles.logo}>N7</button>

        {/* Desktop links */}
        <div className={styles.desktopLinks}>
          <div className={styles.navItems}>
            <button className={styles.navBtn}>
              Solutions <ChevronDown />
            </button>
            <button className={styles.navBtn}>
              Resources <ChevronDown />
            </button>
            <button className={styles.navBtn}>About Us</button>
          </div>
          <button className={styles.requestDemoBtn}>Request Demo</button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.navBtn}>Solutions <ChevronDown /></button>
          <button className={styles.navBtn}>Resources <ChevronDown /></button>
          <button className={styles.navBtn}>About Us</button>
          <button className={styles.requestDemoBtn}>Request Demo</button>
        </div>
      )}
    </header>
  );
};

export default N7Navbar;
