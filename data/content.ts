export const heroContent = {
  badge: "Full-Stack Engineer",
  title: "I build modern products that scale from prototype to production.",
  subtitle:
    "Partnering with startups to ship performant web apps, AI experiences, and cloud-native platforms.",
  highlight: "React · Next.js · Node.js · AI/LLMs · Cloud",
  primaryCta: {
    label: "Explore Portfolio",
    href: "/portfolio",
  },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume.pdf",
  },
};

export const metrics = [
  {
    value: "10+",
    label: "Years Experience",
    detail: "Hands-on building SaaS & AI products.",
  },
  {
    value: "25",
    label: "Products Delivered",
    detail: "Fintech, analytics, internal tools.",
  },
  {
    value: "30+",
    label: "Production Launches",
    detail: "From MVP to hypergrowth scale.",
  },
  {
    value: "12",
    label: "Tech Specialties",
    detail: "Frontend, backend, AI/ML, DevOps.",
  },
];

export const featuredProjects = [
  {
    id: "atlas",
    title: "Atlas Command",
    description: "AI-powered operations console for logistics teams.",
    outcome: "Reduced manual triage time by 60% through real-time insights.",
    tags: ["Next.js", "LangChain", "Supabase"],
    image: "/images/projects/atlas.png",
    link: "#",
  },
  {
    id: "pulse",
    title: "Pulse Metrics",
    description: "Self-serve analytics toolkit for SaaS founders.",
    outcome: "Unlocked 99.9% uptime dashboards with streaming events.",
    tags: ["React", "Node.js", "ClickHouse"],
    image: "/images/projects/pulse.png",
    link: "#",
  },
  {
    id: "cobalt",
    title: "Cobalt Automations",
    description: "Workflow automation platform for fintech ops.",
    outcome: "Saved ops teams 20+ hours weekly through automation.",
    tags: ["Next.js", "tRPC", "PostgreSQL"],
    image: "/images/projects/cobalt.png",
    link: "#",
  },
];

export const skillStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Supabase",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "LangChain",
  "Vector DBs",
  "Tailwind CSS",
];

export const testimonials = [
  {
    quote:
      "Partnering with Aardvark gave us product velocity. He translated vague requirements into polished releases every sprint.",
    author: "Elena Kapoor",
    role: "Head of Product, Nimbus",
  },
  {
    quote:
      "He built our AI-powered workflows end-to-end—architecture, delivery, and observability were world-class.",
    author: "Marcus Chen",
    role: "CTO, Harbor Analytics",
  },
  {
    quote:
      "The collaboration felt like an embedded teammate. Strategic thinking plus the ability to ship quickly.",
    author: "Priya Raman",
    role: "Founder, Lumen Health",
  },
];

export const contactCta = {
  heading: "Let’s build something ambitious.",
  body: "I collaborate with product teams and founders to launch modern experiences across web, AI, and cloud.",
  buttonLabel: "Get in touch",
  buttonHref: "mailto:hello@example.com",
};

export const experienceTimeline = [
  {
    company: "FynCom",
    role: "Lead AI & Backend Engineer",
    period: "Nov 2023 - Oct 2025 · Part-time · Remote",
    location: "NY, NY, US",
    highlights: [
      "Designed Python (FastAPI/Flask) microservices with typed REST/GraphQL schemas, rate-limits, idempotency, retries/timeouts, and RBAC.",
      "Rebuilt the GraphQL data layer with field-level auth, batching, and caching to reduce P95 latency across large catalogs.",
      "Engineered high-throughput ingestion pipelines (Kafka/SQS + workers) processing 150M+ artifacts with checksum/dedup and schema validation.",
      "Optimized PostgreSQL/Redis/S3 (Parquet) storage and implemented Elasticsearch/OpenSearch search for enterprise-scale discovery.",
      "Deployed services on AWS (ECS/EKS) with Docker/Kubernetes/Terraform and modernized CI/CD with image scanning and blue-green/canary rollouts.",
    ],
  }
  ,
  {
    company: "Laboro",
    role: "Senior Full-Stack Engineer",
    period: "2023 – 2024 · Hybrid",
    location: "San Francisco, CA",
    highlights: [
      "Led performance-focused frontend revamp, improving FCP by 42%.",
      "Implemented AI job-matching pipelines with Kubernetes + Supabase.",
      "Built analytics suite enabling product managers to track hiring funnel health.",
    ],
  },
  {
    company: "Atlas Cloud",
    role: "Founding Engineer",
    period: "2020 – 2023 · Startup",
    location: "New York, NY",
    highlights: [
      "Owned architecture across Next.js, tRPC APIs, and multi-region PostgreSQL.",
      "Launched no-code automation builder used by 200+ internal teams.",
      "Stood up CI/CD, observability, and security guardrails for rapid releases.",
    ],
  },
];

export const educationHistory = [
  {
    school: "Belgrade Shukhov State Tech University",
    degree: "Master’s — Automotive Engineering Technology",
    period: "1997 – 2003",
    summary:
      "U.S. equivalency approved (Bachelor’s + Master’s). Focus on control systems, computational mechanics, and applied math.",
  },
  {
    school: "Stanford Continuing Studies",
    degree: "Certificate — Product Strategy for Engineers",
    period: "2022",
    summary:
      "Blended user research, experimentation frameworks, and financial modeling to guide technical decisions.",
  },
];

export const certifications = [
  {
    title: "C++ Certification",
    issuer: "Coding Game",
    year: "2025",
  },
  {
    title: "Node.js Certification",
    issuer: "IBM",
    year: "2023",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "AWS",
    year: "2023",
  },
  {
    title: "AWS Fundamentals",
    issuer: "AWS",
    year: "2022",
  },
];

export const skillsSummary = {
  headline: "Product-Focused Full-Stack & AI Engineer",
  description:
    "I help founders and product teams ship reliable, elegant experiences across web, data, and AI. Comfortable operating from architecture through polished UI.",
  stack:
    "React · Next.js · TypeScript · Node.js · Go · Python · LangChain · AWS · Supabase · PostgreSQL",
  achievements: [
    {
      title: "Shipped complex AI workflows",
      description: "Built RAG assistants, semantic search, and eval loops with safety guardrails.",
    },
    {
      title: "Scaled cloud platforms",
      description: "Delivered multi-region infra with Kubernetes, tRPC APIs, and observability baked-in.",
    },
    {
      title: "Partnered from 0 → 1",
      description: "Worked with founders to translate vision into shipping roadmaps and GTM-ready MVPs.",
    },
    {
      title: "Champion developer experience",
      description: "Defined design systems, docs, and testing pipelines that keep teams moving fast.",
    },
  ],
};

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "laptop",
    bullets: [
      "TypeScript / JavaScript (Expert)",
      "Go + Python for backend & AI systems",
      "Rust (for perf-sensitive services)",
      "SQL (PostgreSQL, ClickHouse) & GraphQL",
    ],
  },
  {
    title: "Backend & Distributed",
    icon: "network",
    bullets: [
      "Event-driven microservices, CQRS, clean architecture",
      "REST/gRPC, tRPC, GraphQL gateways",
      "Caching, rate limiting, resiliency patterns",
      "Observability: OpenTelemetry, Grafana, Datadog",
    ],
  },
  {
    title: "AI / ML & Data",
    icon: "ai",
    bullets: [
      "RAG pipelines with LangChain/LangGraph, Pinecone, pgvector",
      "Model serving & evaluation with Vercel AI SDK, Modal, SageMaker",
      "Feature stores, embeddings, semantic search",
      "Data engineering with Kafka, Airflow, dbt",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    bullets: [
      "AWS, GCP, Vercel, Fly.io",
      "Kubernetes, Docker, Terraform, Pulumi",
      "CI/CD with GitHub Actions, Argo, Temporal workflows",
      "Security/Compliance: SOC2, secret management, SBOM",
    ],
  },
  {
    title: "Frontend Collaboration",
    icon: "palette",
    bullets: [
      "React/Next.js SSR, streaming, app router",
      "Design systems, responsive UI, accessibility",
      "Figma-to-production workflows",
      "Animation & interactions with Framer Motion",
    ],
  },
  {
    title: "Architecture & Leadership",
    icon: "compass",
    bullets: [
      "Technical strategy, RFCs, ADRs",
      "Agile product planning, backlog shaping",
      "Mentoring, pairing, hiring loops",
      "Cross-functional collaboration w/ product & design",
    ],
  },
];

export const skillHighlights = [
  {
    icon: "stack",
    title: "Backend Engineering",
    description:
      "Design and ship highly-performant services using Go, Node.js, and TypeScript with clean contracts and robust testing.",
  },
  {
    icon: "spark",
    title: "AI/ML Engineering",
    description:
      "Translate business workflows into LLM-powered assistants, retrieval systems, and automation with observability and evals.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Scale infrastructure with Kubernetes, Terraform, and automated pipelines to keep deployments safe and frequent.",
  },
  {
    icon: "brush",
    title: "Frontend Craft",
    description:
      "Deliver polished interfaces with React/Next.js, modern visual systems, and pixel-level attention to UX details.",
  },
  {
    icon: "data",
    title: "Data & Integrations",
    description:
      "Build analytics layers, ETL jobs, and integrations across CRMs, billing, and internal services with clear ownership.",
  },
  {
    icon: "compass",
    title: "Product Leadership",
    description:
      "Partner with stakeholders, shape roadmaps, and ensure technical decisions align with business outcomes.",
  },
];

export const contactInfo = {
  subtitle: "Let's connect and discuss potential opportunities",
  details: [
    { type: "country", label: "Country", value: "United States", icon: "location" },
    { type: "city", label: "City", value: "Merced, CA", icon: "location" },
    { type: "email", label: "Email", value: "AdrianEG2026@gmail.com", icon: "email", href: "mailto:AdrianEG2026@gmail.com" },
    { type: "phone", label: "Phone", value: "+1 (777) 777-7777", icon: "phone", href: "tel:+17777777777" },
  ],
  socialLinks: [
    { name: "GitHub", href: "https://github.com/AdrianEGraphene", icon: "github" },
    { name: "LinkedIn", href: "https://linkedin.com/in/adrian-garcia-80718b391/", icon: "linkedin" },
    { name: "Email", href: "mailto:AdrianEG2026@gmail.com", icon: "email" },
  ],
};

export const contactForm = {
  title: "Get In Touch",
  subtitle: "Send me a message and I'll get back to you as soon as possible.",
};

