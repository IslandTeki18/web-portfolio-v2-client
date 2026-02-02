import { Experience, Skills } from "../types";

export const experiences: Experience[] = [
  {
    period: "2022 — Present",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    description: "Leading the frontend architecture and implementing modern React applications with TypeScript. Mentoring junior developers and establishing best practices for component design and state management."
  },
  {
    period: "2019 — 2022",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    description: "Built and shipped multiple products from concept to production. Developed RESTful APIs, implemented responsive UIs, and optimized database performance for high-traffic applications."
  }
];

export const skills: Skills = {
  frontend: "React · TypeScript · Next.js · Vue.js\nTailwind CSS · Framer Motion",
  backend: "Node.js · Python · PostgreSQL\nGraphQL · REST APIs · AWS",
  tools: "Git · Docker · Figma · Storybook\nJest · Cypress · CI/CD"
};
