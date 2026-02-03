import { ICONS } from "@/components/Icons";
import { PERSONAL_INFO } from "@/lib/constants";
import { SocialLinksProps } from "../SocialLinks";

const SocialLinksButtons = ({
  className = "",
  showEmail = false,
}: SocialLinksProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
    >
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
      >
        <ICONS.Email />
        Email Me
      </a>
      <a
        href={PERSONAL_INFO.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <ICONS.LinkedIn />
        LinkedIn
      </a>
      <a
        href={PERSONAL_INFO.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      >
        <ICONS.GitHub />
        GitHub
      </a>
    </div>
  );
};

export default SocialLinksButtons;
