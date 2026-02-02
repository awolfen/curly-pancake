"use client";

import { ICONS } from "@/components/Icons";
import SocialLinks from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeMobileMenu, toggleMobileMenu } from "@/store/slices/uiSlice";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const dispatch = useAppDispatch();
  const mobileMenuOpen = useAppSelector((state) => state.ui.mobileMenuOpen);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
      <nav className="mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
          >
            {PERSONAL_INFO.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              "children" in link ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProjectsDropdownOpen(true)}
                  onMouseLeave={() => setProjectsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${projectsDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {projectsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="w-40 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-zinc-200 dark:border-zinc-700 py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Social Links */}
            <SocialLinks className="pl-4 border-l border-zinc-200 dark:border-zinc-700" />

            {/* Theme Toggle */}
            <div className="pl-4 border-l border-zinc-200 dark:border-zinc-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
            onClick={() => dispatch(toggleMobileMenu())}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <ICONS.Close /> : <ICONS.Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-zinc-200 dark:border-zinc-700 pt-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) =>
                "children" in link ? (
                  <div key={link.href} className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {link.label}
                    </span>
                    <div className="flex flex-col gap-2 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => dispatch(closeMobileMenu())}
                          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => dispatch(closeMobileMenu())}
                    className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <SocialLinks className="pt-4 border-t border-zinc-200 dark:border-zinc-700" />
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
