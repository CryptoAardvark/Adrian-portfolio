export type ProjectCategory = "AI/ML" | "Backend" | "DataScience" | "Full-Stack";

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
  "AI/ML",
  "Backend",
  "DataScience",
  "Full-Stack",
] as const;

export const projects: Project[] = [
  {
    id: "datahaven",
    title: "DataHaven – AI Data Visualization Platform (MVP)",
    summary: "AI-driven analytics platform enabling real-time, data-driven Q&A across large economic datasets. Built with a Go microservices backend, FastAPI AI services, and a React-based visualization layer using D3.js and Chart.js. Frontend is fully operational; backend and AI pipelines (Pinecone, OpenAI) were migrated toward production architecture.",
    description: "AI Data Visualization Platform",
    category: "AI/ML",
    tags: ["React", "Python", "Go", "FastAPI", "PostgreSQL", "LLMs", "Redis", "Docker", "AWS", "Vercel", "D3.js", "Chart.js"],
    media: {
      type: "video",
      src: "image/projects/1/1.mp4",
      poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
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
    id: "company-analytics",
    title: "Company Data Analytics – End-to-End Predictive Modeling Pipeline",
    summary:
      "Full-stack data analytics pipeline built with Python, FastAPI, Airflow, and Ollama embeddings. Scrapes and cleans company data (Glassdoor + corporate sites), orchestrates ML workflows, and produces automated predictive insights via Jupyter/Quarto. Deployed semantic embeddings and models exposing predictions via typed APIs.",
    description: "End-to-End Data Analytics & Predictive Modeling Pipeline",
    category: "DataScience",
    tags: [
      "Python",
      "FastAPI",
      "Airflow",
      "Scraping",
      "ETL",
      "Ollama",
      "ML",
      "Logistic Regression",
      "Gradient Boosting",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Quarto",
      "Jupyter"
    ],
    media: {
      type: "video",
      src: "image/projects/data/data.mp4",
      poster: "image/projects/data/data.png",
      alt: "Company Data Analytics Pipeline"
    },
    details: {
      longDescription:
        "End-to-end analytics platform that scrapes, cleans, and processes company data from Glassdoor and corporate websites, generating embeddings and ML predictions for company stability, growth potential, and investment risk. Powered by a Python/FastAPI backend, semantic embedding generation with Ollama LLM, and Airflow DAGs that orchestrate robust ETL + ML workflows with validation, retries, alerts, and schema checks.",
      highlights: [
        "Developed a Python/FastAPI backend to scrape, clean, normalize, and transform company datasets for downstream ML workflows.",
        "Orchestrated ETL/ML pipelines using Airflow DAGs with task dependencies, retries, alerting, SLAs, and self-healing for failed embedding tasks.",
        "Generated semantic embeddings using Ollama LLM models, integrating hybrid similarity search and caching layers.",
        "Built predictive models using Logistic Regression and Gradient-Boosted Trees to evaluate company stability, growth potential, and investment risk.",
        "Automated reporting workflows with Jupyter/Quarto notebooks, producing reproducible insights, visualizations, and explainability reports.",
        "Designed typed APIs allowing external analytics tools to consume embeddings, features, and ML predictions.",
        "Ensured strong data quality with deduplication, validation rules, schema checks, and versioned transformations."
      ],
      techStack: [
        "Python",
        "FastAPI",
        "Airflow",
        "Ollama",
        "Scraping",
        "BeautifulSoup",
        "Selenium",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Scikit-learn",
        "Jupyter",
        "Quarto"
      ],
      links: {
        repo: "https://github.com/adrianegraphene/company-analytics"
      },
      gallery: [
        {
          src: "image/projects/data/data.png",
          alt: "Data Pipeline Architecture"
        },
        {
          src: "image/projects/data/data.png",
          alt: "Predictive Modeling Outputs"
        }
      ]
    }
  },
  {
    id: "multi-orchestrator",
    title: "Multi-Orchestrator – Async Multi-Agent Pipeline Engine",
    summary:
      "FastAPI + asyncio orchestration engine for multi-agent pipelines expressed as DAGs. Supports parallel execution, conditional routing, verification, and fault-tolerant recovery. Includes monitoring, metrics evaluation, and CI-driven regression testing.",
    description: "Async Multi-Agent Orchestration Pipeline",
    category: "Backend",
    tags: [
      "Python",
      "FastAPI",
      "Asyncio",
      "DAG Orchestration",
      "Multi-Agent Systems",
      "SSE",
      "Docker",
      "CI/CD",
      "Structured Logging",
      "Observability",
      "Metrics",
      "Concurrency"
    ],
    media: {
      type: "video",
      src: "image/projects/multi/multi.mp4",
      poster: "image/projects/multi/multi.png",
      alt: "Async Multi-Orchestrator Pipeline"
    },
    details: {
      longDescription:
        "Built an asynchronous multi-agent orchestration system using FastAPI and asyncio, enabling execution of complex pipelines defined as DAGs. Added support for parallel task execution, conditional edges, retries with exponential backoff, and fault-tolerant recovery. Integrated structured logging, SSE-based monitoring, and a metrics evaluation harness for operational observability and output reliability.",
      highlights: [
        "Developed a FastAPI backend using asyncio to orchestrate multi-agent pipelines expressed as DAGs with parallelism and conditional routing.",
        "Implemented an async DAG engine with task routing, bounded concurrency, retries, exponential backoff, and fault-tolerant execution.",
        "Added a cross-output verifier to validate consistency across agent outputs, improving reliability for complex workflows.",
        "Built an evaluation harness to track precision/recall, latency distributions, and task completion metrics with structured logging.",
        "Implemented SSE-based live monitoring and introspection of agent state, progress, failures, and recovery paths.",
        "Packaged services in Docker with reproducible builds and environment-agnostic deployment for dev, staging, and production.",
        "Integrated CI-driven regression tests validating orchestration logic, agent outputs, and routing conditions.",
        "Exposed APIs for orchestrating agents, submitting DAGs, and powering monitoring dashboards supporting operational transparency.",
        "Optimized async concurrency and resource utilization to support large-scale, high-throughput multi-agent pipelines."
      ],
      techStack: [
        "Python",
        "FastAPI",
        "Asyncio",
        "Uvicorn",
        "Docker",
        "CI/CD",
        "PyTest",
        "Grafana",
        "SSE",
        "Redis (optional state caching)",
        "PostgreSQL (optional persistence)"
      ],
      links: {
        repo: "https://github.com/adrianegraphene/multi-orchestrator"
      },
      gallery: [
        {
          src: "image/projects/multi/multi.png",
          alt: "DAG Execution Graph"
        },
        {
          src: "image/projects/multi/multi.png",
          alt: "Monitoring Dashboard"
        }
      ]
    }
  },
  {
    id: "laboro",
    title: "AI-Driven Job Search Platform",
    summary: "Intelligent job search platform leveraging LLMs, NLP pipelines, and OCR to deliver highly accurate job-matching experiences. Improved frontend performance by 30% and implemented advanced SEO optimization to boost organic visibility. Built with a modern, scalable architecture integrating vector search, ML workflows, and cloud-native infrastructure.",
    description: "AI-Driven Job Search Platform",
    category: "AI/ML",
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

