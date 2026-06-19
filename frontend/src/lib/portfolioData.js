export const profile = {
  name: "Moh Shahrukh Khan",
  role: "Software Engineer · Java Backend Developer",
  location: "India",
  tagline:
    "Building scalable backend systems, high-performance APIs, microservices, and data-intensive enterprise applications.",
  email: "shahrukhturk9@gmail.com",
  linkedin: "https://www.linkedin.com/in/moh-shahrukh-khan",
  github: "https://github.com/MohShahrukhKhan",
  githubUsername: "mohShahrukhKhan",
  resumeUrl: "/resume.pdf",
};

export const experience = [
  {
    company: "Mobioffice",
    role: "Software Engineer — Java Backend",
    period: "Present",
    location: "India",
    points: [
      "Architect and ship Spring Boot microservices powering enterprise inventory & sales platforms used by hundreds of business users.",
      "Designed normalized PostgreSQL schemas and tuned slow queries with composite indexes, partitioning, and CTE rewrites — cutting heavy report latency by ~70%.",
      "Built secured REST APIs with JWT, role-based access, and granular auditing; documented contracts with OpenAPI.",
      "Led performance optimization sprints: connection pool tuning (HikariCP), N+1 elimination via JPA fetch graphs, and caching at the query and HTTP layer.",
      "Integrated AI-assisted workflows (Claude Code, OpenCode, MCP) into daily engineering — accelerating reviews, test scaffolding, and refactors.",
    ],
  },
];

export const projects = [
  {
    id: "wip-stock",
    title: "Real-time Stock Reporting System",
    tagline: "Real-time stock visibility for multi-stage operations.",
    overview:
      "An enterprise reporting engine that aggregates inventory data across multiple stages and surfaces real-time positions, aged stock, and bottleneck signals for operations teams.",
    architecture:
      "Spring Boot service layer with a read-optimized PostgreSQL schema, scheduled aggregation jobs, and a thin REST facade feeding the operations dashboard. Heavy reports use materialized views and pagination cursors.",
    technologies: ["Java 17", "Spring Boot", "JPA / Hibernate", "PostgreSQL", "REST", "Docker"],
    challenges: [
      "Multi-million row aggregations were timing out — solved with materialized views + incremental refresh.",
      "Cross-warehouse joins produced N+1 patterns — replaced with entity graphs and projection DTOs.",
    ],
    impact: [
      "Report generation time reduced from ~38s to ~5s on peak datasets.",
      "Operations team now closes daily review in minutes instead of hours.",
    ],
    image: "https://images.unsplash.com/photo-1506399309177-3b43e99fead2",
    accent: "from-blue-500/30 to-blue-900/0",
  },
  {
    id: "sales-return",
    title: "Returns Lifecycle Management",
    tagline: "Closed-loop reverse logistics with auditable workflows.",
    overview:
      "A returns workflow service modelling the full lifecycle — request, approval, pickup, QC, restocking, and refund — with strict auditability and role-based controls.",
    architecture:
      "Domain-driven service split into request, fulfilment, and finance modules. Spring State Machine enforces transitions; events are emitted for downstream stock and finance services.",
    technologies: ["Java", "Spring Boot", "Spring State Machine", "PostgreSQL", "REST", "Maven"],
    challenges: [
      "Concurrent updates created inconsistent return states — solved with optimistic locking + state-machine guards.",
      "Compliance required immutable audit trail — added append-only event log with cryptographic chain.",
    ],
    impact: [
      "Eliminated reconciliation errors between returns and finance ledgers.",
      "Cut average return processing cycle by ~40% across regions.",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    accent: "from-emerald-500/30 to-emerald-900/0",
  },
  {
    id: "inventory",
    title: "Multi-warehouse Inventory Platform",
    tagline: "High-throughput stock engine with predictable APIs.",
    overview:
      "A multi-warehouse inventory platform handling stock movements, transfers, adjustments, and reservations with strict consistency guarantees and a clean REST contract.",
    architecture:
      "Spring Boot core with transactional service boundaries, JPA repositories, and a write-ahead movement ledger. Heavy read paths served via projection DTOs and Redis-backed caches.",
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "PostgreSQL", "Docker", "Microservices"],
    challenges: [
      "Race conditions on reservations under load — solved with row-level locks + retry with backoff.",
      "Bulk imports stressed the DB — introduced batched JDBC + chunked transactions.",
    ],
    impact: [
      "Sustains 3× previous throughput on stock movements with stable p95 latency.",
      "API contracts now power 4 downstream products without breaking changes.",
    ],
    image: "https://images.pexels.com/photos/17483874/pexels-photo-17483874.png",
    accent: "from-violet-500/30 to-violet-900/0",
  },
];

export const performanceMetrics = [
  { label: "API p95 latency", from: 420, to: 110, unit: "ms", delta: "-74%", note: "Query rewrites + caching" },
  { label: "Report generation", from: 38, to: 5, unit: "s", delta: "-87%", note: "Materialized views" },
  { label: "DB throughput", from: 1.0, to: 3.2, unit: "x", delta: "+220%", note: "Indexes + batching" },
  { label: "Memory footprint", from: 1.8, to: 1.1, unit: "GB", delta: "-39%", note: "Pool & fetch tuning" },
];

export const apiLatencyChart = [
  { stage: "Baseline", before: 420, after: 420 },
  { stage: "Indexes", before: 420, after: 310 },
  { stage: "Fetch graphs", before: 420, after: 220 },
  { stage: "Caching", before: 420, after: 160 },
  { stage: "Pool tune", before: 420, after: 110 },
];

export const aiWorkflow = [
  {
    title: "Claude Code",
    desc: "Pair-programs across large Spring codebases — refactors services, writes JPA queries, and explains failing tests.",
    icon: "Sparkles",
  },
  {
    title: "OpenCode",
    desc: "Local agentic coding for repo-wide changes — migrations, dependency upgrades, and scripted refactors.",
    icon: "Terminal",
  },
  {
    title: "MCP Servers",
    desc: "Custom Model Context Protocol servers expose internal docs, DB schemas, and runbooks to AI tools.",
    icon: "Server",
  },
  {
    title: "AI-assisted Dev",
    desc: "Spec → scaffold → tests → review. Every layer of the dev loop accelerated without sacrificing rigor.",
    icon: "Cpu",
  },
  {
    title: "AI Debugging",
    desc: "Stack traces, slow-query plans, and thread dumps interpreted with AI — narrowing root causes faster.",
    icon: "Bug",
  },
  {
    title: "AI Code Reviews",
    desc: "Automated PR critiques surface security smells, missing tests, and architectural drift before merge.",
    icon: "GitPullRequest",
  },
];

export const skills = {
  Backend: ["Java 17", "Spring Boot", "Spring Security", "Hibernate", "JPA", "REST APIs", "Microservices"],
  Database: ["PostgreSQL", "MySQL", "Query Optimization", "Indexing", "Materialized Views", "Redis"],
  DevOps: ["Docker", "Git", "Maven", "Linux", "CI/CD", "GitHub Actions"],
  "AI Tools": ["Claude Code", "OpenCode", "MCP Servers", "AI Reviews", "AI Debugging"],
  "Dev Tools": ["IntelliJ IDEA", "Postman", "OpenAPI / Swagger", "JUnit", "Mockito"],
};

export const systemDesign = [
  { title: "REST API Design", desc: "Resource modelling, versioning, idempotency, pagination, and contract testing.", icon: "Network" },
  { title: "Microservices", desc: "Bounded contexts, service contracts, resilience patterns, and observability.", icon: "Boxes" },
  { title: "Event-driven", desc: "Async messaging, outbox pattern, eventual consistency, and replay strategies.", icon: "Radio" },
  { title: "Database Design", desc: "Normalization, indexing strategy, partitioning, and read/write path separation.", icon: "Database" },
  { title: "Scalability", desc: "Horizontal scale-out, caching tiers, connection pooling, and load shedding.", icon: "TrendingUp" },
  { title: "Performance", desc: "Profiling, query tuning, GC analysis, and end-to-end latency budgets.", icon: "Gauge" },
];

export const testimonials = [
  {
    quote: "Reserved for a future tech lead testimonial — a placeholder card for now.",
    name: "Tech Lead",
    role: "Senior Engineering",
  },
  {
    quote: "Reserved for a future hiring manager testimonial — a placeholder card for now.",
    name: "Hiring Manager",
    role: "Engineering Leadership",
  },
  {
    quote: "Reserved for a future founder testimonial — a placeholder card for now.",
    name: "Founder",
    role: "Startup",
  },
];
