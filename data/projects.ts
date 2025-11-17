export type ProjectCategory = "AI" | "Backend" | "Full-Stack";

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
    id: "datahaven",
    title: "DataHaven – AI Data Visualization Platform (MVP)",
    summary: "AI-driven analytics platform enabling real-time, data-driven Q&A across large economic datasets. Built with a Go microservices backend, FastAPI AI services, and a React-based visualization layer using D3.js and Chart.js. Frontend is fully operational; backend and AI pipelines (Pinecone, OpenAI) were migrated toward production architecture.",
    description: "AI Data Visualization Platform",
    category: "AI",
    tags: ["React", "Python", "Go", "FastAPI", "PostgreSQL", "LLMs", "Redis", "Docker", "AWS", "Vercel", "D3.js", "Chart.js"],
    media: {
      type: "video",
      src: "image/projects/1/1.mp4",
      poster: "image/projects/1/1.jpg",
      alt: "AI Data Visualization Platform (MVP)",
    },
    details: {
      longDescription:
        "AI-driven analytics platform enabling real-time, data-driven Q&A across large economic datasets. Built with a Go microservices backend, FastAPI AI services, and a React-based visualization layer using D3.js and Chart.js. Frontend is fully operational; backend and AI pipelines (Pinecone, OpenAI) were migrated toward production architecture.",
      highlights: [
        "Architected Go and Python/FastAPI microservices for real-time querying and ingestion with OAuth2/JWT auth, idempotency, rate limits, retries/timeouts, and correlation IDs.",
        "Exposed typed REST/gRPC APIs with OpenAPI contracts and added pagination, backpressure, Redis caching, and connection pooling to improve throughput and p95 latency.",
        "Built scheduled ETL/ELT pipelines over WDI/Eurostat/IMF with normalization, checksum/dedup, schema-drift detection, and reproducible S3/Parquet snapshots.",
        "Deployed containerized services to AWS (ECS/EKS + ALB) with autoscaling, blue-green/canary rollouts, modern CI/CD, and full OpenTelemetry observability.",
        "Integrated LangChain + Pinecone for internal RAG/semantic search with hybrid retrieval, reranking, prompt-safety checks, and cost-controlled inference routing.",
      ],
      techStack: [
        "React", "Python", "Go", "FastAPI", "PostgreSQL", "LLMs", "Redis", "Docker", "AWS", "Vercel", "D3.js", "Chart.js",
      ],
      links: {
        demo: "https://datahaven.tech",
      },
      gallery: [
        {
          src: "image/projects/1/2.jpg",
          alt: "AI Data Visualization Platform",
        },
      ],
    },
  },
  {
    id: "laboro",
    title: "AI-Driven Job Search Platform",
    summary: "Intelligent job search platform leveraging LLMs, NLP pipelines, and OCR to deliver highly accurate job-matching experiences. Improved frontend performance by 30% and implemented advanced SEO optimization to boost organic visibility. Built with a modern, scalable architecture integrating vector search, ML workflows, and cloud-native infrastructure.",
    description: "AI-Driven Job Search Platform",
    category: "AI",
    tags: ["LLMs", "NLP", "OCR", "Vector Databases", "PostgreSQL", "Redis", "Kubernetes", "MLflow"],
    media: {
      type: "image",
      src: "image/projects/2/2.jpg",
      alt: "AI-Driven Job Search Platform",
    },
    details: {
      longDescription:
        "Intelligent job search platform leveraging LLMs, NLP pipelines, and OCR to deliver highly accurate job-matching experiences. Improved frontend performance by 30% and implemented advanced SEO optimization to boost organic visibility. Built with a modern, scalable architecture integrating vector search, ML workflows, and cloud-native infrastructure.",
      highlights: [
        "Built an intelligent job-search platform using LLMs, NLP pipelines, and OCR for highly accurate job–candidate matching.",
        "Improved frontend performance by 30% and delivered advanced SEO optimizations to increase organic traffic.",
        "Designed a modern, scalable architecture with vector search, ML workflows, and cloud-native infrastructure.",
      ],
      techStack: ["LLMs", "NLP", "OCR", "Vector Databases", "PostgreSQL", "Redis", "Kubernetes", "MLflow"],
      links: {
        demo: "https://laboro.co/",
      },
      gallery: [
        {
          src: `image/projects/2/4.jpg`,
          alt: "AI-Driven Job Search Platform",
        },
      ],
    },
  },
  {
    id: "trading",
    title: "Trading Platform – Real-Time Trade Analysis & Backtesting",
    summary: "End-to-end Trading platform for systematic trading research: real-time market data ingestion, feature engineering, strategy backtesting, and risk analytics. Includes multi-asset dashboards, PnL/Sharpe tracking, and alerting. Built with event-driven services, low-latency data stores, and an interactive React UI.",
    description: "Trading Platform – Real-Time Trade Analysis & Backtesting",
    category: "Full-Stack",
    tags: ["Python", "Go", "FastAPI", "React.js", "TypeScript", "WebSockets", "PostgreSQL/TimescaleDB", "Redis", "Docker", "AWS", "TA-Lib"],
    media: {
      type: "video",
      src: "image/projects/3/3.mp4",
      poster: `image/projects/3/3.jpg`,
      alt: "Trading Platform – Real-Time Trade Analysis & Backtesting",
    },
    details: {
      longDescription:
        "End-to-end Trading platform for systematic trading research: real-time market data ingestion, feature engineering, strategy backtesting, and risk analytics. Includes multi-asset dashboards, PnL/Sharpe tracking, and alerting. Built with event-driven services, low-latency data stores, and an interactive React UI.",
      highlights: [
        "Developed a full trading research platform supporting live data streaming, strategy simulation, and quantitative analytics.",
        "Delivered multi-asset dashboards with real-time PnL, Sharpe ratios, alerts, and risk metrics.",
        "Architected with event-driven microservices, high-performance storage, and a responsive React interface.",
      ],
      techStack: [
        "Python", "Go", "FastAPI", "React.js", "TypeScript", "WebSockets", "PostgreSQL/TimescaleDB", "Redis", "Docker", "AWS", "TA-Lib",
      ],
      links: {

      },
      gallery: [
        {
          src: "image/projects/3/4.jpg",
          alt: "Trading Platform – Real-Time Trade Analysis & Backtesting",
        },
      ],
    },
  },
];

