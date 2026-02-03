import { AnimalImage } from "../types";

interface AnimalImageDisplayProps {
  image: AnimalImage | null;
  isLoading: boolean;
}

export default function AnimalImageDisplay({
  image,
  isLoading,
}: AnimalImageDisplayProps) {
  if (isLoading || !image) {
    return (
      <div className="w-full aspect-square max-w-md mx-auto bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-zinc-300 dark:bg-zinc-600 rounded-full" />
          <div className="h-4 w-32 bg-zinc-300 dark:bg-zinc-600 rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={`A ${image.type}`}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <p className="text-center mt-2 text-sm text-zinc-500 dark:text-zinc-400 capitalize">
        {image.type === "cat" ? "🐱" : "🐶"} {image.type}
      </p>
    </div>
  );
}
