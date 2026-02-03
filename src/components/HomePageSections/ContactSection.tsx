"use client";

import SocialLinks from "@/components/ui/Divider/SocialLinks";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
          I&apos;m always open to discussing new opportunities and interesting
          projects.
        </p>
        <SocialLinks variant="buttons" />
      </div>
    </section>
  );
}
