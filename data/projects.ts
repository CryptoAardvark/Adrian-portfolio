export type ProjectCategory = "Frontend" | "Backend" | "Full-Stack" | "AI";

export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster: string;
      alt: string;
    };

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  media: ProjectMedia;
  details: {
    longDescription: string;
    highlights: string[];
    techStack: string[];
    links: {
      demo?: string;
      repo?: string;
    };
    gallery: Array<{ src: string; alt: string }>;
  };
};

const gradientImage = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
  <defs>
    <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
      <stop stop-color='#3fe9c5' offset='0%'/>
      <stop stop-color='#1dd5a8' offset='35%'/>
      <stop stop-color='#151829' offset='100%'/>
    </linearGradient>
  </defs>
  <rect width='800' height='600' fill='url(#g)'/>
  <circle cx='200' cy='180' r='120' fill='rgba(255,255,255,0.1)'/>
  <circle cx='570' cy='400' r='160' fill='rgba(255,255,255,0.16)'/>
</svg>`);

export const projectFilters = [
  "All",
  "Frontend",
  "Backend",
  "Full-Stack",
  "AI",
] as const;

export const projects: Project[] = [
  {
    id: "resume-analyzer",
    title: "AI Resume Analyzer",
    summary: "AI assistant that extracts skills and builds job-ready summaries.",
    description: "AI-powered workflow for recruiting teams.",
    category: "AI",
    tags: ["Next.js", "OpenAI", "Supabase", "Vercel"],
    media: {
      type: "video",
      src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
      poster: `data:image/svg+xml;utf8,${gradientImage}`,
      alt: "AI resume analyzer demo",
    },
    details: {
      longDescription:
        "Resume Analyzer ingests PDF/Doc resumes, extracts structured data, and generates tailored summaries per role. Built with streaming AI responses, extensive validation, and human override workflows to keep recruiters in control.",
      highlights: [
        "Cut candidate screening time by 55%.",
        "Integrated semantic search across 40k+ resumes.",
        "Role-specific prompts with guardrails and audit logs.",
      ],
      techStack: [
        "Next.js 14",
        "LangChain",
        "Supabase",
        "PostgreSQL",
        "Tailwind",
        "Vercel AI SDK",
      ],
      links: {
        demo: "https://example.com/resume",
        repo: "https://github.com/example/resume",
      },
      gallery: [
        {
          src: `data:image/svg+xml;utf8,${gradientImage}`,
          alt: "resume analyzer dashboard",
        },
      ],
    },
  },
  {
    id: "quantum-insights",
    title: "Quantum Insights",
    summary: "Executive dashboards powering live SaaS KPIs.",
    description: "Multi-tenant analytics platform.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "ClickHouse", "Tailwind"],
    media: {
      type: "image",
      src: `data:image/svg+xml;utf8,${gradientImage}`,
      alt: "Analytics UI",
    },
    details: {
      longDescription:
        "Built real-time KPI monitoring for SaaS companies with data ingestion, columnar storage, and adaptive query caching. Delivered responsive dashboards, alerting, and workspace collaboration features.",
      highlights: [
        "Processed 2B events/day with <2s query latency.",
        "Role-based views and white-label theming.",
        "Live anomaly detection with notifications.",
      ],
      techStack: ["React 19", "Node.js", "ClickHouse", "Redis", "Tailwind"],
      links: {
        demo: "https://example.com/quantum",
      },
      gallery: [
        {
          src: `data:image/svg+xml;utf8,${gradientImage}`,
          alt: "quantum insight charts",
        },
      ],
    },
  },
  {
    id: "vector-hub",
    title: "Vector Hub",
    summary: "Semantic search toolkit for product support teams.",
    description: "LLM-enhanced knowledge discovery.",
    category: "Backend",
    tags: ["Go", "gRPC", "Pinecone", "Next.js"],
    media: {
      type: "image",
      src: `data:image/svg+xml;utf8,${gradientImage}`,
      alt: "Vector search UI",
    },
    details: {
      longDescription:
        "Vector Hub centralizes support content, embeddings, and evaluation pipelines. Live agents can query natural language, orchestrating retrieval-augmented responses with guardrails and audit trails.",
      highlights: [
        "Reduced ticket resolution time by 40%.",
        "Hybrid vector + keyword ranking for precision.",
        "Ops dashboard for model quality metrics.",
      ],
      techStack: ["Go", "Pinecone", "Next.js", "tRPC", "Azure Functions"],
      links: {
        demo: "https://example.com/vector",
      },
      gallery: [
        {
          src: `data:image/svg+xml;utf8,${gradientImage}`,
          alt: "vector hub pipeline",
        },
      ],
    },
  },
  {
    id: "relay-os",
    title: "Relay OS",
    summary: "Automation platform orchestrating back-office workflows.",
    description: "Low-code ops toolkit.",
    category: "Full-Stack",
    tags: ["Next.js", "tRPC", "PostgreSQL", "Temporal"],
    media: {
      type: "video",
      src: "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
      poster: `data:image/svg+xml;utf8,${gradientImage}`,
      alt: "Relay OS flow builder",
    },
    details: {
      longDescription:
        "Relay OS connects systems via event streams, offering a visual flow builder plus code extensibility. Includes granular permissions, environment promotion, and observability baked-in.",
      highlights: [
        "Cut manual ops steps by 70%.",
        "Modular workflow engine with Temporal.",
        "End-user previews with replayable sessions.",
      ],
      techStack: ["Next.js", "tRPC", "Temporal", "PostgreSQL", "Tailwind"],
      links: {
        demo: "https://example.com/relay",
        repo: "https://github.com/example/relay",
      },
      gallery: [
        {
          src: `data:image/svg+xml;utf8,${gradientImage}`,
          alt: "relay os builder",
        },
      ],
    },
  },
  {
    id: "aerial",
    title: "Aerial Demand Forecasting",
    summary: "Machine learning forecasts for supply chain teams.",
    description: "AI-powered forecasting app.",
    category: "AI",
    tags: ["Python", "FastAPI", "Next.js", "AWS"],
    media: {
      type: "image",
      src: `data:image/svg+xml;utf8,${gradientImage}`,
      alt: "Forecasting UI",
    },
    details: {
      longDescription:
        "Implemented probabilistic forecasting models, scenario planning, and reporting. Productized the stack with API gateways, authentication, and team collaboration features.",
      highlights: [
        "Improved inventory planning accuracy by 18%.",
        "Scenario sandbox with CSV/Excel exports.",
        "Automated retraining and drift monitoring.",
      ],
      techStack: ["Python", "FastAPI", "Next.js", "AWS Lambda", "DynamoDB"],
      links: {
        demo: "https://example.com/aerial",
      },
      gallery: [
        {
          src: `data:image/svg+xml;utf8,${gradientImage}`,
          alt: "aerial scenario planner",
        },
      ],
    },
  },
  {
    id: "glimmer",
    title: "Glimmer Marketing Studio",
    summary: "Frontend kit for marketing teams to ship pages quickly.",
    description: "Component-driven web builder.",
    category: "Frontend",
    tags: ["Next.js", "Tailwind", "MDX", "Vercel"],
    media: {
      type: "image",
      src: `data:image/svg+xml;utf8,${gradientImage}`,
      alt: "Glimmer components",
    },
    details: {
      longDescription:
        "Built a block-based site builder with MDX, theme tokens, and optimized publishing pipeline. Provided design system governance plus analytics integrations for marketing teams.",
      highlights: [
        "Launched 40+ landing pages with shared components.",
        "Drag-and-drop editor with real-time preview.",
        "Localization pipeline for 6 languages.",
      ],
      techStack: ["Next.js", "MDX", "Tailwind", "Vercel", "Cloudflare Images"],
      links: {
        demo: "https://example.com/glimmer",
      },
      gallery: [
        {
          src: `data:image/svg+xml;utf8,${gradientImage}`,
          alt: "glimmer editor view",
        },
      ],
    },
  },
];

