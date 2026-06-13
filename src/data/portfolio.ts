export const personalInfo = {
  name: "Racheal Joseph",
  firstName: "Racheal",
  lastName: "Joseph",
  initials: "Racheal J.",
  title: "Senior Full Stack Developer",
  tagline:
    "Full stack engineer building scalable APIs, Next.js frontends, and content-driven platforms — from auth and engagement to edge-ready delivery.",
  email: "rachealjoseph902@gmail.com",
  phone: "09032405968",
  location: "Lagos, Nigeria",
  linkedin: "https://www.linkedin.com/in/racheal-joseph-9b6450297",
  github: "https://github.com/racheal-stack",
  profile:
    "Senior Full Stack Developer with 7+ years building end-to-end products using Node.js, TypeScript, React, and Next.js. Strong across RESTful API design, OAuth 2.0 / JWT authentication, headless CMS integrations, and reader engagement features — comments, likes, bookmarks, and user preferences.",
  profileExtended:
    "Experienced with serverless and edge-style architectures (Cloudflare Workers, R2, KV, D1 patterns), Redis and HTTP caching strategies, API middleware for rate limiting and security headers, and OpenAPI-documented endpoints. Comfortable owning features from database to UI — collaborating on TanStack Query data contracts, NextAuth-style multi-provider auth, webhook-driven CMS workflows, and production reliability with Docker, CI/CD, and monitoring.",
};

export const stats = [
  { value: "7+", label: "Years full stack experience" },
  { value: "Full", label: "Stack ownership" },
  { value: "API", label: "First architecture" },
];

export const coreCompetencies = [
  "Node.js & TypeScript",
  "Next.js App Router & API routes",
  "RESTful APIs at scale",
  "NextAuth.js / OAuth 2.0 / JWT",
  "Strapi & headless CMS integrations",
  "Cloudflare Workers, R2, KV & D1",
  "TanStack Query data fetching",
  "Redis, ETag & edge caching",
  "Reader engagement features",
  "Webhooks & event-driven workflows",
  "OpenAPI / Swagger documentation",
  "PostgreSQL, MongoDB & MySQL",
];

export const featureCards = [
  {
    title: "Backend & Content APIs",
    description:
      "RESTful APIs on Node.js/NestJS, Strapi-style headless CMS integrations, content fetching and transformation pipelines, webhooks, and OpenAPI-documented contracts for high read throughput.",
    icon: "server",
  },
  {
    title: "Frontend & Auth",
    description:
      "Next.js and React with TypeScript, NextAuth-compatible OAuth flows (Google, credentials), TanStack Query patterns, and engagement UIs for comments, likes, bookmarks, and preferences.",
    icon: "layers",
  },
  {
    title: "Edge, Caching & DevOps",
    description:
      "Cloudflare Workers/R2/KV/D1-style storage, Redis caching, rate-limiting middleware, Docker deployments, CI/CD, and Prometheus/Grafana monitoring for reliable production systems.",
    icon: "cloud",
  },
];

export const skillProgress = [
  { name: "Node.js / TypeScript", level: 95 },
  { name: "React / Next.js", level: 92 },
  { name: "RESTful APIs & OpenAPI", level: 94 },
  { name: "OAuth 2.0 / JWT / NextAuth", level: 90 },
  { name: "Caching & Rate Limiting", level: 88 },
  { name: "PostgreSQL / Redis / KV stores", level: 86 },
];

export const experience = [
  {
    role: "Backend Engineer",
    company: "Xanadu Digital",
    period: "Mar 2026 – Present",
    location: "Lagos, Nigeria",
    highlights: [
      "Design and maintain Node.js RESTful APIs powering core business logic, content-serving endpoints, and secure integrations.",
      "Architect Redis and MongoDB/MySQL caching layers with HTTP-friendly response patterns to minimize latency under growing traffic.",
      "Build API middleware for input validation, rate limiting, structured errors, and consistent endpoint contracts.",
      "Implement microservices communication with graceful failure handling, observability, and production incident response.",
      "Collaborate with frontend engineers on API shapes optimized for efficient client-side data fetching.",
      "Own services end-to-end — requirements, design, implementation, deployment, and monitoring.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "FraudWatch360",
    period: "Sep 2024 – Feb 2026",
    location: "UK",
    highlights: [
      "Built scalable RESTful APIs with NestJS, TypeScript, and PostgreSQL for multi-channel content scanning (URLs, SMS, emails, documents).",
      "Implemented multi-provider authentication with JWT (RS256 rotation), bcrypt credentials, email verification, and Google OAuth 2.0 — aligned with NextAuth.js patterns.",
      "Shipped reader engagement features: scam reporting, user stories, quizzes, likes, comments, bookmarks, and user preference management.",
      "Integrated third-party content APIs (OpenAI, Google Safe Browsing, Truecaller) with fetching, filtering, and transformation pipelines.",
      "Added Redis rate-limiting middleware, input validation, error handling, and security-conscious API design.",
      "Documented all endpoints with Swagger/OpenAPI; deployed with Docker and monitored via Prometheus/Grafana.",
      "Delivered real-time notifications via WebSockets, Firebase Cloud Messaging, and Twilio SMS.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "G-Tateth CRM",
    period: "Apr 2023 – Jun 2025",
    location: "US",
    highlights: [
      "Architected multi-tenant full stack platform with WebSocket messaging, AWS SES email, SMS, and WebRTC voice channels.",
      "Built event-driven workflow engine with webhook triggers, conditional logic, and scheduled publishing-style automation.",
      "Integrated Paystack billing for subscriptions, trials, and usage-based metering across frontend and backend.",
      "Partnered with frontend team on API contracts and dashboard data fetching to reduce over-fetching and improve UX.",
      "Implemented analytics with GA4 for funnel metrics, engagement insights, and conversion tracking.",
      "Created chatbot builder with visual flow editor and AI-assisted content suggestions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Golivwell",
    period: "Jun 2022 – Apr 2024",
    location: "Saudi Arabia",
    highlights: [
      "Developed responsive Next.js and React applications with TypeScript and efficient state management.",
      "Integrated backend APIs with cache-aware data fetching, auth flows, and dashboard features.",
      "Collaborated with backend engineers to define scalable API contracts and TanStack Query-friendly response shapes.",
      "Optimized performance via lazy loading, code splitting, and client-side caching strategies.",
      "Improved accessibility and maintainability across a high-traffic health and wellness platform.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Listoglobal",
    period: "Jun 2020 – Mar 2023",
    location: "US",
    highlights: [
      "Built modular React/TypeScript component libraries and Node.js RESTful APIs, cutting new feature delivery time by ~25%.",
      "Delivered full stack features with responsive UI, backend integrations, and consistent validation across layers.",
      "Contributed to API endpoint design, error handling, and response optimization for faster frontend rendering.",
      "Participated in Agile delivery with sprint planning, code reviews, and cross-functional collaboration.",
    ],
  },
];

export const education = [
  {
    degree: "Business Administration Management",
    school: "Henley Business School",
    period: "Apr 2023",
    location: "Lagos, Nigeria",
  },
  {
    degree: "National Diploma",
    school: "Kwara State Polytechnic",
    period: "Sep 2017 – Aug 2019",
    location: "Kwara State, Nigeria",
  },
];

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "Express.js",
      "React.js",
      "Next.js",
      "App Router",
    ],
  },
  {
    title: "APIs, CMS & Auth",
    skills: [
      "RESTful APIs",
      "Strapi",
      "Headless CMS",
      "NextAuth.js",
      "OAuth 2.0",
      "JWT (RS256)",
      "OpenAPI / Swagger",
      "Webhooks",
    ],
  },
  {
    title: "Cloudflare & Serverless",
    skills: [
      "Cloudflare Workers",
      "Cloudflare R2",
      "Cloudflare KV",
      "Cloudflare D1",
      "Edge Computing",
      "AWS Lambda",
      "Cloudflare Pages",
    ],
  },
  {
    title: "Data, Caching & Frontend",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "ETag / HTTP Caching",
      "TanStack Query",
      "Docker",
      "CI/CD",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const headerLinks = [
  { href: "#", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
];
