export const PERSONAL_INFO = {
  name: "Alfie Wolfenden",
  location: "London, UK",
  email: "alfie.wolfenden@gmail.com",
  linkedIn: "https://www.linkedin.com/in/alfie-wolfenden/",
  github: "https://github.com/awolfen",
  intro:
    "6+ Years Full-Stack Developer with Solutions Engineering experience. Familiar with EdTech, E-Commerce, and delivering B2C and B2B features. Currently expanding skills in Python and preparing for AWS SAA certification.",
  languages: ["English (fluent)", "French (fluent)"],
} as const;

export const SKILLS: readonly string[] = [
  "A/B Testing",
  "API Integration",
  "AWS",
  "Claude AI",
  "Cypress",
  "Data Visualization",
  "Docker",
  "DynamoDB",
  "Express.js",
  "Firebase",
  "Git",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "React.js",
  "Redux.js",
  "Tailwind CSS",
  "TypeScript",
];

export const NAV_LINKS = [
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "NBA Stats Chart", href: "/projects/project-1" },
      { label: "A/B Testing", href: "/projects/project-2" },
      { label: "Carbon Portfolio", href: "/projects/project-3" },
      { label: "Private Markets API", href: "/projects/project-4" },
    ],
  },
  { label: "Log", href: "/log" },
] as const;
