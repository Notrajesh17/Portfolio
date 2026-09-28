export const metrics = [
  { value: 70, suffix: "+", label: "Sellers supported" },
  { value: 10, suffix: "K+", label: "Users" },
  { value: 2, suffix: "K+", label: "Daily Active Users" },
  { value: 40, suffix: "%", label: "Less duplicated implementation" },
  {
    value: 15,
    from: 0,
    display: "0 → 15",
    label: "Engineering team growth",
  },
  {
    value: 5,
    suffix: "%",
    label: "Production traffic during zero-downtime migration",
  },
] as const;

export const coreTechnologies = [
  "Golang",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
  "React Native",
  "Next.js",
] as const;

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  school: "Indian Institute of Technology, Ropar",
  period: "2019 – 2023",
} as const;

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "febstone",
    company: "Febstone Fashion Private Limited",
    role: "Senior Software Engineer",
    period: "Feb 2026 – Present",
    location: "Pune, Maharashtra",
    description:
      "Lead engineering for OQART, a multi-vendor e-commerce platform, owning architecture, technical decisions and release quality across vendor onboarding, catalog, inventory, order lifecycle, coupons and payments.",
    highlights: [
      "Designed scalable backend modules for inventory management, order processing, pricing, promotions, and seller operations.",
      "Supported 70+ sellers.",
      "Used Golang and PostgreSQL.",
      "Designed reusable backend services consumed by multiple business modules.",
      "Reduced duplicated implementation by 40%.",
      "Optimized performance using database design, caching strategies, and asynchronous processing.",
      "Contributed to React Native and Next.js applications.",
      "Collaborated with product, design, and QA teams.",
    ],
  },
  {
    id: "medinos",
    company: "Medino's",
    role: "CTO / Engineering Head",
    period: "Jan 2024 – Jan 2026",
    location: "Delhi",
    description:
      "Took the flagship product from zero to production launch and scaled it to 10K+ users and 2K+ DAU.",
    highlights: [
      "Owned architecture, technology stack, roadmap and release process.",
      "Grew engineering team from 0 to 15.",
      "Hired engineers and established code review and branching standards.",
      "Ran sprints and mentored engineers.",
      "Architected backend using NestJS, Node.js, PostgreSQL and Redis.",
      "Used Clean Architecture, modular design and SOLID principles.",
      "Implemented JWT authentication.",
      "Implemented RBAC.",
      "Built reusable Guards, Pipes and Interceptors.",
      "Implemented centralized exception handling.",
      "Implemented Redis distributed rate limiting.",
      "Created Swagger API documentation.",
      "Improved response time and infrastructure cost through Redis caching, SQL query optimization, Promise.all() and database transactions.",
      "Managed AWS infrastructure including ECS, EC2, RDS, S3, ECR, Lambda and ALB.",
      "Used Docker and CI/CD.",
      "Implemented Grafana monitoring, logging and alerting.",
      "Built WebSocket and asynchronous systems.",
      "Implemented Cron jobs.",
      "Built secure S3 upload workflows.",
      "Generated PDFs using Puppeteer.",
    ],
  },
  {
    id: "1mg",
    company: "Tata 1mg Healthcare Solutions Private Limited",
    role: "Software Engineer",
    period: "Jul 2023 – Dec 2023",
    location: "Gurgaon",
    highlights: [
      "Migrated the login module from monolithic architecture to microservices.",
      "Used the Strangler Fig Pattern.",
      "Routed 5% of production users to the new microservice.",
      "Achieved zero-downtime migration.",
      "Designed and implemented REST APIs using Python.",
      "Worked with Docker, Git and Jira.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  period: string;
  description: string;
  details: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "pehchaan",
    name: "Pehchaan Volunteer Management App",
    period: "Jan 2022 – May 2022",
    description:
      "Developed a volunteer management platform in collaboration with Pehchaan Ek Safar, an IIT Ropar-based NGO. The app helps streamline volunteer coordination and manage educational programs for underprivileged children.",
    details: [
      "Dedicated volunteer module",
      "Dedicated administrator module",
      "Volunteer coordination",
      "Educational program management",
    ],
    tags: ["Product", "Volunteer ops", "Education"],
  },
  {
    id: "fantasy",
    name: "Digital Fantasy League",
    period: "Jun 2021 – Jan 2022",
    description:
      "Co-created an online fantasy cricket platform that gained 12,000+ registered users on the Google Play Store. Led end-to-end development from design to deployment.",
    details: [
      "Product development",
      "User experience",
      "Scalable performance",
      "Deployment",
    ],
    tags: ["Product", "Mobile", "Scale"],
  },
  {
    id: "academic",
    name: "Database for an Academic Portal",
    period: "Nov 2021 – Dec 2021",
    description:
      "Designed and developed an Academic Portal Database Management System for student, faculty and administrative operations.",
    details: [
      "Dedicated login privileges for different user roles",
      "Student enrollment",
      "Course management",
      "Faculty-controlled prerequisites",
      "Ticket generation for unmet prerequisites",
      "Grade management",
      "Automated CGPA calculation",
      "Graduation eligibility checker",
    ],
    tags: ["Databases", "RBAC", "Academic systems"],
  },
  {
    id: "trie",
    name: "Trie Data Structure for Word Predictions",
    period: "Nov 2021",
    description:
      "Implemented a Trie Data Structure supporting insert, delete, search, autocomplete, and autocorrect. Autocomplete returns words matching a given prefix. Autocorrect suggests relevant words for misspelled inputs using string similarity algorithms.",
    details: [
      "Data structures",
      "Search",
      "Text prediction",
      "Performance",
      "Scalability",
    ],
    tags: ["Data structures", "Search", "Performance"],
  },
];

export const skillMap = [
  {
    group: "Backend",
    items: ["Golang", "Node.js", "NestJS", "REST APIs", "Microservices"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "Redis", "SQL"],
  },
  {
    group: "Cloud",
    items: ["AWS", "ECS", "EC2", "Lambda", "RDS", "S3", "ECR"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Nginx", "CI/CD"],
  },
  {
    group: "System Design",
    items: ["Caching", "Load Balancing", "Scaling", "Performance Optimization"],
  },
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "C++", "Java", "Go"],
  },
  {
    group: "Frameworks",
    items: [
      "Golang",
      "Node.js",
      "NestJS",
      "Express.js",
      "React.js",
      "Next.js",
      "React Native",
    ],
  },
  {
    group: "Realtime & Auth",
    items: ["JWT", "RBAC", "WebSockets", "WebRTC"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "Swagger", "Grafana", "Puppeteer"],
  },
] as const;

export const competitiveProgramming = [
  {
    platform: "LeetCode",
    rank: "Knight",
    rating: 1942,
    label: "Peak Rating",
    href: "https://leetcode.com/u/algo-ra/",
  },
  {
    platform: "CodeChef",
    rank: "5 Star",
    rating: 2059,
    label: "Peak Rating",
    href: "https://www.codechef.com/users/algora17",
  },
  {
    platform: "Codeforces",
    rank: "Expert",
    rating: 1746,
    label: "Peak Rating",
    href: "https://codeforces.com/profile/algo-ra",
  },
] as const;

export const buildingInterests = [
  {
    title: "Scalable backend systems",
    line: "Services designed to hold as sellers, users, and traffic grow.",
  },
  {
    title: "Microservices",
    line: "Extracting modules from monoliths without taking production down.",
  },
  {
    title: "Distributed systems",
    line: "Coordinating services, state, and traffic across live infrastructure.",
  },
  {
    title: "Caching systems",
    line: "Redis-backed paths that cut latency and infrastructure cost.",
  },
  {
    title: "Database optimization",
    line: "Schema, queries, and transactions that stay correct under load.",
  },
  {
    title: "Async processing",
    line: "Moving heavy work off the request path with queues and jobs.",
  },
  {
    title: "API design",
    line: "Clear REST contracts, auth, RBAC, and documented surfaces.",
  },
  {
    title: "Cloud infrastructure",
    line: "AWS services wired for deployability, isolation, and scale.",
  },
  {
    title: "CI/CD",
    line: "Repeatable Dockerized releases instead of fragile handoffs.",
  },
  {
    title: "Observability",
    line: "Grafana monitoring, logging, and alerting on production systems.",
  },
  {
    title: "Real-time systems",
    line: "WebSockets and asynchronous flows for live product behavior.",
  },
  {
    title: "Performance optimization",
    line: "Caching, query work, and concurrent I/O where it actually matters.",
  },
] as const;

export const systemFlow = [
  { id: "req", label: "Request", note: "Ingress" },
  { id: "api", label: "API", note: "Contract" },
  { id: "svc", label: "Service", note: "Domain" },
  { id: "store", label: "Cache / Database", note: "State" },
  { id: "infra", label: "Infrastructure", note: "AWS" },
  { id: "prod", label: "Production", note: "Live traffic" },
] as const;
