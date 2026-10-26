
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  UserRound,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="site-logo">
          <span className="logo-mark">G</span>
          <span>GlobeTrek</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className={`nav-link ${
                item.label === "Home" ? "is-active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              {item.label === "Pages" && (
                <ChevronDown size={14} />
              )}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="header-icon"
            type="button"
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <Link href="/login" className="login-link">
            <UserRound size={18} />
            <span>Login</span>
          </Link>

          <Link href="/tours" className="header-cta">
            Explore Tours
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
