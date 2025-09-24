import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>NexGen</div>

        <button
          className={styles.menuToggle}
          aria-label="Toggle menu"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="10" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : undefined
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : undefined
            }
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : undefined
            }
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : undefined
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : undefined
            }
          >
            CAREERS
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? `${styles.active}` : undefined
            }
          >
            BLOGS
          </NavLink>

   <NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? `${styles.activeContact} ${styles.activeContact}`
      : styles.contact
  }
>
  CONTACT US
</NavLink>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
