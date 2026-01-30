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
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "AWS",
  "DynamoDB",
  "Git",
  "REST APIs",
  "Data Visualization",
  "Claude AI",
  "Cypress",
  "Redux.js",
  "Express.js",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
