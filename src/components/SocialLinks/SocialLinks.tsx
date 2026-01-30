import SocialLinksButtons from "./components/SocialLinksButtons";
import SocialLinksDefault from "./components/SocialLinksDefault";

export interface SocialLinksProps {
  showEmail?: boolean;
  className?: string;
}

interface SocialLinksComponentProps extends SocialLinksProps {
  variant?: "icons" | "buttons";
}

export default function SocialLinks({
  variant = "icons",
  showEmail = false,
  className = "",
}: SocialLinksComponentProps) {
  if (variant === "buttons") {
    return <SocialLinksButtons className={className} showEmail={showEmail} />;
  }

  return <SocialLinksDefault className={className} showEmail={showEmail} />;
}
