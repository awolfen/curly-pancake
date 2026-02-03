import { ICONS } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/constants";
import { SocialLinksProps } from "../SocialLinks";

export default function SocialLinksDefault({
  className = "",
  showEmail = false,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={PERSONAL_INFO.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
      >
        <ICONS.LinkedIn />
      </a>
      <a
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
      >
        <ICONS.GitHub />
      </a>
      {showEmail && (
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          aria-label="Email"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
        >
          <ICONS.Email />
        </a>
      )}
    </div>
  );
}
