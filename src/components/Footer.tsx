import SocialLinks from "@/components/ui/Divider/SocialLinks";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left side - Name & Copyright */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="text-lg font-semibold text-zinc-900 dark:text-zinc-50"
            >
              {PERSONAL_INFO.name}
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>

          {/* Center - Quick Links */}
          <nav className="flex flex-wrap gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Social Links */}
          <SocialLinks showEmail />
        </div>
      </div>
    </footer>
  );
}
