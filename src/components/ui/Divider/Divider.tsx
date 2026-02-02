interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({
  orientation = "vertical",
  className = "",
}: DividerProps) {
  if (orientation === "horizontal") {
    return (
      <div
        className={`w-full h-px bg-zinc-200 dark:bg-zinc-700 ${className}`}
        role="separator"
        aria-orientation="horizontal"
      />
    );
  }

  return (
    <div
      className={`w-px self-stretch bg-zinc-200 dark:bg-zinc-700 ${className}`}
      role="separator"
      aria-orientation="vertical"
    />
  );
}
