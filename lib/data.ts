// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: "Mathan M",
  firstName: "Mathan",
  role: "Full Stack Developer",
  tagline: "Progress, not Perfection.",
  location: "India · Working with US clients",
  email: "mathan44862@gmail.com",
  phone: "+91 94432 44862",
  linkedin: "https://www.linkedin.com/in/mathan-m-7a9740230/",
  github: "https://github.com/mathan44862",
  resume: "/Mathan_M_Full_Stack_Developer_Resume.docx", // swap for a PDF later if you like
  photo: "/mathan.png",
  summary:
    "Full Stack Developer with 2+ years of experience shipping web applications, dashboards, API integrations and interactive 3D/GIS experiences. I work directly with US-based clients — from requirement calls to production releases — using React, Next.js, TypeScript, FastAPI and PostgreSQL.",
};

export const heroRoles = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "FastAPI Backend Builder",
  "3D & GIS Visualization Dev",
];

export const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "4", label: "College tech prizes" },
  { value: "US", label: "Clients worked with directly" },
  { value: "Q1 '25", label: "Best Performer award" },
];

export const highlights = [
  {
    title: "Direct US client collaboration",
    text: "Join client calls, clarify requirements, demo features and own delivery end-to-end for US-based product teams.",
  },
  {
    title: "Full stack ownership",
    text: "From pixel-perfect Next.js UIs to FastAPI services, SQLAlchemy models and PostgreSQL queries.",
  },
  {
    title: "Performance mindset",
    text: "Lazy loading, code splitting, memoization, API caching and lean bundles — speed is a feature.",
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "SoftSuave",
    period: "Aug 2024 – Present",
    points: [
      "Work directly with US-based clients on requirements, demos and release sign-offs across multiple product engagements.",
      "Build and maintain features in React.js, Next.js and TypeScript with a focus on reusable components and responsive UI.",
      "Manage server state, caching and data sync with TanStack Query and Redux Toolkit; integrate REST APIs end-to-end.",
      "Contribute to backend workflows with FastAPI, request validation, error handling and PostgreSQL-backed features.",
      "Recognised as Quarterly Best Performer (Q1 2025).",
    ],
  },
];

export const projects = [
  {
    title: "Route Visualization & Analytics Platform",
    category: "3D · GIS · Analytics",
    description:
      "Interactive GIS-based route visualization with 3D experiences, measurement records, dashboards and reporting for operational data.",
    impact: [
      "3D route rendering with CesiumJS, Three.js & ArcGIS",
      "Real-time updates via Socket.IO",
      "Faster UI through API caching & lazy loading",
    ],
    stack: ["React", "Next.js", "TypeScript", "CesiumJS", "Three.js", "ArcGIS", "Node.js", "PostgreSQL", "Socket.IO"],
    gradient: "from-sky-500/30 via-cyan-400/10 to-transparent",
  },
  {
    title: "Global Consumer E-Commerce Platform",
    category: "E-Commerce · Multi-brand",
    description:
      "Customer-facing modules for a global consumer brand — product info, support pages, ratings & reviews and cookie consent — across locales and brands.",
    impact: [
      "Multi-brand theme migration & UI modernization",
      "A/B testing and feature-flagged locale releases with Optimizely",
      "Component reliability with Vitest & Storybook",
    ],
    stack: ["Next.js", "Tailwind CSS", "Contentful", "commercetools", "Bazaarvoice", "Optimizely", "Vitest", "Storybook"],
    gradient: "from-rose-500/30 via-orange-400/10 to-transparent",
  },
  {
    title: "Enterprise AI Knowledge Workspace",
    category: "AI · Enterprise SaaS",
    description:
      "Dashboard and workflow features for an enterprise AI workspace, including authentication, protected routes and role-based access control.",
    impact: [
      "RBAC, protected routes & auth flows",
      "Third-party service integrations",
      "Production debugging & performance fixes",
    ],
    stack: ["React", "Next.js", "TypeScript", "FastAPI", "React Query", "Redux Toolkit", "PostgreSQL", "Docker"],
    gradient: "from-violet-500/30 via-fuchsia-400/10 to-transparent",
  },
  {
    title: "BD Automation Dashboard",
    category: "Full Stack · Internal tool",
    description:
      "A full stack dashboard that lets the business development team search and review client requirements quickly.",
    impact: [
      "End-to-end: UI, API and database",
      "Data-fetching workflows with TanStack Query",
      "FastAPI + SQLAlchemy + PostgreSQL backend",
    ],
    stack: ["Next.js", "TanStack Query", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
    gradient: "from-emerald-500/30 via-teal-400/10 to-transparent",
  },
  {
    title: "Interactive Business Website",
    category: "Marketing · Motion",
    description:
      "A responsive, motion-rich landing experience with animated transitions and polished interactive sections.",
    impact: ["Framer Motion page & scroll animations", "Fully responsive across breakpoints"],
    stack: ["Next.js", "React", "Framer Motion", "TypeScript", "Tailwind CSS"],
    gradient: "from-amber-500/30 via-yellow-400/10 to-transparent",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI", "Material UI", "Framer Motion"],
  },
  {
    group: "Backend & APIs",
    items: ["Python", "FastAPI", "Node.js", "Next.js API Routes", "REST APIs", "WebSockets", "Socket.IO"],
  },
  {
    group: "Data & State",
    items: ["PostgreSQL", "MySQL", "SQLAlchemy", "Redis", "TanStack Query", "Redux Toolkit", "Context API"],
  },
  {
    group: "Security & Architecture",
    items: ["JWT", "RBAC", "Protected routes", "Micro frontends", "Monorepos", "Code splitting"],
  },
  {
    group: "3D & Visualization",
    items: ["CesiumJS", "Three.js", "ArcGIS APIs", "ECharts"],
  },
  {
    group: "Testing & Delivery",
    items: ["Vitest", "React Testing Library", "Storybook", "Docker", "GitHub Actions", "Azure DevOps", "CI/CD"],
  },
  {
    group: "Platforms",
    items: ["Contentful CMS", "commercetools", "Bazaarvoice", "Optimizely"],
  },
];

export const achievements = [
  {
    title: "Quarterly Best Performer",
    meta: "Q1 2025 · SoftSuave",
    text: "Awarded for delivery quality, ownership and client impact within my first year.",
  },
  {
    title: "Trusted by US clients",
    meta: "2024 – Present",
    text: "Work directly with US-based stakeholders — requirement calls, demos and production releases.",
  },
  {
    title: "8.7 CGPA",
    meta: "B.Tech IT · 2021 – 2025",
    text: "Graduated from Nandha Engineering College, Erode while already shipping production code.",
  },
];

export const collegeAwards = [
  {
    place: "1st",
    title: "TechNeds — Coding Competition",
    venue: "Nandha Engineering College",
    text: "First prize in the college coding competition.",
  },
  {
    place: "2nd",
    title: "Hackathon",
    venue: "Nandha Engineering College",
    text: "Awarded for successfully building a dynamic website.",
  },
  {
    place: "3rd",
    title: "Project Presentation — Find My Bus",
    venue: "Kongu Engineering College",
    text: "Awarded for presenting our project, “Find My Bus”.",
  },
  {
    place: "3rd",
    title: "Code Red — Debugging",
    venue: "Nandha Engineering College",
    text: "Awarded for identifying and debugging the errors.",
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "Nandha Engineering College, Erode",
  period: "2021 – 2025",
  score: "CGPA 8.7 / 10",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Awards", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];
