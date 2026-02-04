import { LinkButton } from "../ui/LinkButton";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          About This Site
        </h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
            This website serves as both a portfolio and a playground for
            exploring modern web technologies. It is built with Next.js
            TypeScript, and Tailwind CSS, and is hosted on Vercel. It showcases
            interactive projects that demonstrate real-world skills in data
            visualization, API integration, and user experience design.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
            Each project is planned first with pen and paper, then developed
            with best practices, maintainability, and performance in mind. Key
            features include: responsive design, query caching, and intentional
            analytics.
          </p>
          <LinkButton href="/projects">Explore the projects</LinkButton>
        </div>
      </div>
    </section>
  );
}
