// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Normalize both paths for matching
  const linkClasses = (path: string) =>
    pathname.toLowerCase() === path.toLowerCase()
      ? "text-green-200 font-semibold underline"
      : "hover:underline";

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className={`text-2xl font-bold ${
            pathname === "/" ? "text-green-200" : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          AgriConnect
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link href="/Market-Price" className={linkClasses("/Market-Price")}>
            Market Prices
          </Link>

          <Link
            href="/Crop-Management"
            className={linkClasses("/Crop-Management")}
          >
            Crop Management
          </Link>

          <Link
            href="/Livestock-Management"
            className={linkClasses("/Livestock-Management")}
          >
            Livestock Management
          </Link>

          <Link href="/Market" className={linkClasses("/Market")}>
            Marketplace
          </Link>

          <Link href="/Dashboard" className={linkClasses("/Dashboard")}>
            Dashboard
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((s) => !s)}
          className="md:hidden focus:outline-none p-2 rounded-md hover:bg-green-600/70"
        >
          {menuOpen ? (
            <svg
              className="w-8 h-8 transition-transform duration-150"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 transition-transform duration-150"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      {/* MOBILE NAV PANEL */}
      <div
        className={`fixed left-4 right-4 top-16 z-50 md:hidden transform transition-all duration-250 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="bg-green-600 rounded-xl shadow-lg overflow-hidden border border-green-500">
          <nav className="flex flex-col">
            {[
              { href: "/Market-Price", label: "Market Prices" },
              { href: "/Crop-Management", label: "Crop Management" },
              { href: "/Livestock-Management", label: "Livestock Management" },
              { href: "/Market", label: "Marketplace" },
              { href: "/Dashboard", label: "Dashboard" },
            ].map((item) => {
              const active =
                pathname.toLowerCase() === item.href.toLowerCase();
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "px-4 py-4 text-lg transition-colors flex items-center gap-3 " +
                    (active
                      ? "bg-green-700 text-green-100 font-semibold"
                      : "text-white hover:bg-green-500/80 hover:text-white")
                  }
                >
                  <span className="ml-1">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
