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
    location: "NY, NY",
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
    company: "Harvest LLC",
    role: "Lead Backend Engineer",
    period: "Apr 2025 – Aug 2025 · Contract · Remote",
    location: "Wimington, DE",
    highlights: [
      "Architected Go and Python/FastAPI microservices for real-time querying and ingestion with OAuth2/JWT auth, idempotency, rate limits, retries/timeouts, and correlation IDs.",
      "Exposed typed REST/gRPC APIs with OpenAPI contracts and added pagination, backpressure, Redis caching, and connection pooling to improve throughput and p95 latency.",
      "Built scheduled ETL/ELT pipelines over WDI/Eurostat/IMF with normalization, checksum/dedup, schema-drift detection, and reproducible S3/Parquet snapshots.",
      "Deployed containerized services to AWS (ECS/EKS + ALB) with autoscaling, blue-green/canary rollouts, modern CI/CD, and full OpenTelemetry observability.",
      "Integrated LangChain + Pinecone for internal RAG/semantic search with hybrid retrieval, reranking, prompt-safety checks, and cost-controlled inference routing.",
    ],
  },
  {
    company: "Convoy Inc",
    role: "Senior AI & GenAI Engineer",
    period: "Oct 2022 – Nov 2024 · Full-time · Remote",
    location: "Seattle, WA",
    highlights: [
      "Architected Go and Python/FastAPI microservices for real-time querying and ingestion with OAuth2/JWT, RBAC, idempotency, rate limits, and retries/timeouts.",
      "Delivered typed REST/gRPC APIs with OpenAPI contracts, adding pagination, backpressure, Redis caching, and connection pooling to improve throughput and p95 latency.",
      "Built ETL/ELT pipelines over WDI/Eurostat/IMF with normalization, checksum/dedup, schema-drift detection, and reproducible S3/Parquet snapshots.",
      "Deployed Dockerized services to AWS ECS/EKS with autoscaling, blue-green/canary rollouts, modern CI/CD, and full OpenTelemetry tracing/metrics/logs.",
      "Integrated LangChain + Pinecone for internal RAG/semantic search with hybrid retrieval, reranking, prompt-safety checks, and cost-optimized inference routing.",
    ],
  },
  {
    company: "Zillow",
    role: "AI/ML Engineer",
    period: "Jun 2020 – Oct 2022 · Full-time · Remote",
    location: "Seattle, WA",
    highlights: [
      "Designed and operated Go microservices (REST/gRPC) for forex trading platforms—order routing, positions/PnL, risk checks, balances, and audit trails with idempotent handlers, rate limits, and schema-validated I/O.",
      "Integrated broker/exchange FIX/REST/WebSocket feeds for quotes and executions; added Redis hot-path caching, connection pooling, and backpressure to maintain low p95 latency during volatile market conditions.",
      "Built ingestion for multi-GB market/analytics feeds with batching, exponential backoff, dedup/schema-drift checks, and lineage tracking stored in PostgreSQL and S3/Parquet snapshots.",
      "Deployed services on AWS (ECS/EKS, API Gateway/ALB, Lambda, S3, RDS/DynamoDB) using Docker/Kubernetes/Terraform, with blue-green/canary rollouts, CI/CD, and full OpenTelemetry observability.",
      "Developed a production-grade Rust Solana trading bot with async execution, DEX/aggregator routing, backtesting, and sub-second decision-to-order latency under load.",
    ],
  },
  {
    company: "Twills",
    role: "Full Stack Engineer",
    period: "Nov 2017 – Oct 2019 · Full-time · Remote",
    location: "NY, NY",
    highlights: [
      "Rebuilt and scaled the auto-parts e-commerce backend using Node.js/Express and PHP/Laravel, delivering reliable ordering, accounts, and catalog APIs for 1,000+ daily users.",
      "Implemented JWT/OAuth2 auth, rate-limiting, idempotent webhooks, request validation, RBAC, and audit trails for secure and predictable operations.",
      "Developed reusable adapters and webhooks integrating payment, shipping, and inventory providers; standardized partner integrations with OpenAPI contracts.",
      "Optimized MySQL performance through indexing, query tuning, connection pooling, and read/write segregation; added background workers for imports, reconciliation, and emails to improve responsiveness.",
      "Migrated on-prem workloads toward cloud-ready Docker-based architecture with CI/CD, centralized logs/metrics, health checks, and disaster-recovery workflows.",
    ],
  },
];

export const educationHistory = [
  {
    school: "University of California, Irvine",
    degree: "PhD — Materials Science (Computational Science & Data Science)",
    period: "2014 – 2019",
    summary:
      "Research focused on simulation and large-scale data analysis using Python, C/C++, NumPy/Pandas, ML/statistics, and HPC environments (MPI/SLURM).",
  },
  {
    school: "University of California, Irvine",
    degree: "MS — Materials Science & Engineering (Scientific Computing)",
    period: "2012 – 2014",
    summary:
      "Graduate work in scientific computing, numerical methods, data processing, and visualization.",
  },
  {
    school: "University of California, Merced",
    degree: "BS — Mechanical Engineering (Programming & Modeling)",
    period: "2008 – 2012",
    summary:
      "Focused on computational modeling, simulation, and programming with MATLAB, Python, and C++.",
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
  headline: "Senior AI Infrastructure & Distributed Backend Engineer.",
  description:
    "I design and operate high-performance backend systems, data pipelines, and production AI/LLM infrastructure. Skilled across microservices, cloud platforms, and large-scale ingestion with a deep focus on reliability, performance, and observability.",
  stack:
    "Go • Python • Tensorflow/PyTorch • AWS/Kubernetes • REST/gRPC • RAG & Vector Search (Pinecone/FAISS/pgvector) • LangChain/LangGraph • MLOps (SageMaker/Vertex, MLflow, CI/CD)",
  achievements: [
    {
      title: "Production LLM & AI Systems",
      description:
        "Designed and deployed real-time LLM inference services, function-calling pipelines, JSON-schema guards, and multi-model routing with cost/latency SLOs.",
    },
    {
      title: "Advanced RAG Architectures",
      description:
        "Built hybrid retrieval systems (BM25 + embeddings), rerankers, expandable vector stores, semantic search APIs, and automated document chunking/metadata pipelines.",
    },
    {
      title: "Data & Vector Infrastructure",
      description:
        "Implemented ingestion and preprocessing pipelines for embeddings, pgvector/Pinecone indexing, schema-drift detection, dedup, and lineage tracking for auditability.",
    },
    {
      title: "AI Safety, Evaluation & Monitoring",
      description:
        "Added prompt-injection defenses, role/intent validation, guardrails, redaction, and continuous eval loops (Ragas/TruLens) with telemetry for drift, cost, and hallucinations.",
    },
    {
      title: "Distributed Systems for AI",
      description:
        "Architected scalable Go/Python microservices with REST/gRPC APIs, concurrency tuning, caching, and backpressure — supporting high-throughput AI workloads.",
    },
  ],
};

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "laptop",
    bullets: [
      "TypeScript / JavaScript (Expert)",
      "Python (Expert)",
      "Go/Golang (Expert)",
      "Rust (for perf-sensitive services)",
      "C++ (Advanced)",
      "Java (Advanced)",
    ],
  },
  {
    title: "Backend & Distributed",
    icon: "network",
    bullets: [
      "Domain modeling, Clean Architecture, DDD, CQRS, and service orchestration",
      "High-throughput APIs (REST/gRPC) with OpenAPI contracts and schema validation",
      "Concurrency, backpressure, rate limiting, retries/timeouts, and circuit breaker patterns",
      "Event-driven systems and streaming pipelines (Kafka, RabbitMQ, SQS/SNS)",
      "Caching strategies with Redis, Saga patterns, and distributed coordination",
      "ETL/Batch + real-time pipelines using Airflow, Dagster, and custom workers",
      "Performance tuning (profiling, p95/p99), capacity planning, and load optimization",
      "Security: OAuth2/OIDC, JWT, mTLS, signed webhooks, and least-privilege access",
    ],
  },
  {
    title: "AI / ML & Data",
    icon: "ai",
    bullets: [
      "LLM integration: RAG pipelines, retrieval orchestration, hybrid search, and reranking",
      "Model serving & inference APIs with function calling, JSON-schema guards, and cost/latency SLOs",
      "Vector search with pgvector, FAISS, Pinecone, Redis Vector; embeddings and metadata pipelines",
      "LangChain, LangGraph, LlamaIndex for semantic search, routing, and multi-step workflows",
      "Feature stores, dataset preprocessing, and data validation for high-quality embeddings",
      "Data engineering: streaming/ETL with Kafka, Airflow, Dagster; schema-drift detection and lineage",
      "Classical ML foundations with PyTorch, TensorFlow, and scikit-learn where appropriate",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "library",
    bullets: [
      "Python: FastAPI, Django/DRF, Flask, Pydantic, SQLAlchemy, PyTorch, TensorFlow, scikit-learn",
      "Go: chi, Gin, gRPC, grpc-gateway, sqlc, GORM, ent",
      "Node.js: NestJS, Express, GraphQL (Apollo)",
      "Data & Streaming: Kafka, RabbitMQ, Celery, Airflow, Dagster",
      "Search & Embeddings: Elasticsearch / OpenSearch, Meilisearch, FAISS, Pinecone",
      "Observability & Monitoring: OpenTelemetry, Prometheus client, Jaeger",
    ],
  },
  {
    title: "Datastores & Search",
    icon: "database",
    bullets: [
      "Relational DBs: PostgreSQL, MySQL; schema design, sharding/partitioning, replication",
      "Migrations: Flyway, Liquibase",
      "NoSQL & Caching: MongoDB, Redis (cache, queues, timeseries)",
      "Search & Analytics: Elasticsearch / OpenSearch (full-text, aggregations)",
      "Vector & AI Databases: pgvector, FAISS, Pinecone, Chroma",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    bullets: [
      "Docker, Kubernetes, Helm",
      "AWS & GCP (compute, storage, networking)",
      "IaC: Terraform; GitOps: Argo CD",
      "CI/CD: GitHub Actions, Jenkins",
      "Serverless (AWS Lambda), Edge/Vercel/Netlify",
      "Networking: Ingress, Service Mesh, API Gateways",
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
      "Microservices & Modular Monoliths",
      "Code Review, TDD/Contract Testing",
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

