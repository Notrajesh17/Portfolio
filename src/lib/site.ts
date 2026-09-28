export const site = {
  name: "Rajesh Runiwal",
  role: "Senior Software Engineer",
  email: "rajeshjobcareer@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajesh-runiwal-59b8a0215/",
  instagram: "https://www.instagram.com/notrajeshhh/",
  github: "https://github.com/Notrajesh17",
  profiles: {
    leetcode: "https://leetcode.com/u/algo-ra/",
    codeforces: "https://codeforces.com/profile/algo-ra",
    codechef: "https://www.codechef.com/users/algora17",
  },
  seo: {
    title: "Rajesh Runiwal — Senior Software Engineer",
    description:
      "Rajesh Runiwal is a Senior Software Engineer focused on scalable backend systems, distributed systems, cloud infrastructure, and performance.",
  },
} as const;

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
] as const;

export function githubHref(): string | null {
  return site.github.trim() ? site.github : null;
}
