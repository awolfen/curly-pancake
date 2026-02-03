interface PageHeaderProps {
  title: string;
  description: string[];
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
        {title}
      </h1>
      {description.map((text, index) => (
        <p
          key={index}
          className="text-lg text-zinc-600 dark:text-zinc-300 mb-6"
        >
          {text}
        </p>
      ))}
    </>
  );
}
