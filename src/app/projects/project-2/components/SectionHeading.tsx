import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
      {children}
    </h2>
  );
}
