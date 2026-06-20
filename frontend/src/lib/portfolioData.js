export const profile = {
  name: "Moh Shahrukh Khan",
  role: "Software Engineer — Java Backend",
  location: "India",
  tagline:
    "I build the backend systems enterprise software runs on — production Spring Boot services, optimized PostgreSQL, and APIs that don't break at 3 PM on a Tuesday.",
  email: "shahrukhturk9@gmail.com",
  linkedin: "https://www.linkedin.com/in/moh-shahrukh-khan",
  github: "https://github.com/MohShahrukhKhan",
  githubUsername: "MohShahrukhKhan",
  resumeUrl: "/resume.pdf",
};

export const heroMetrics = [
  { value: "74", suffix: "%", label: "p95 Latency Reduction", context: "110ms vs 420ms baseline" },
  { value: "87", suffix: "%", label: "Report Generation Faster", context: "5s vs 38s before optimization" },
  { value: "3.2", suffix: "x", label: "Throughput Increase", context: "sustained under production load" },
];

export const experience = [
  {
    company: "MobiOffice",
    role: "Software Engineer — Java Backend",
    period: "Present",
    location: "India",
    summary:
      "The primary environment where I design, build, and optimize the backend systems that power enterprise inventory, sales, and operations platforms used by real businesses daily.",
    points: [
      "Architect Spring Boot microservices with domain-driven boundaries — inventory, sales returns, order fulfilment — each with its own schema, API contract, and deployment pipeline.",
      "Design normalized PostgreSQL schemas for multi-warehouse stock tracking. Optimize query performance through composite indexing, partial indexes, CTE rewrites, and materialized views for heavy aggregation paths.",
      "Build REST APIs with JWT authentication, role-based access control, request validation, pagination cursors, and OpenAPI documentation — consumed by 4+ internal products.",
      "Resolve production incidents involving race conditions on concurrent stock reservations (row-level locks + retry with backoff), N+1 query cascades (entity graphs + DTO projections), and connection pool starvation (Hikari tuning + monitoring).",
      "Integrate AI-assisted engineering workflows — Claude Code for pair-programming and refactoring, OpenCode for repo-wide migrations, custom MCP servers for internal docs and DB schema access.",
    ],
  },
];

export const caseStudies = [
  {
    id: "stock-reporting",
    title: "Real-time Stock Reporting Engine",
    tagline: "From 38-second reports to 5-second answers.",
    context:
      "Operations teams needed daily stock positions across multiple warehouses. The existing report query ran multi-million row aggregations against the production OLTP database, timing out during peak hours.",
    approach: [
      "Designed a read-optimized PostgreSQL schema with materialized views for pre-computed aggregations, refreshed incrementally via scheduled batch jobs.",
      "Replaced JPA entity graph traversal with hand-written projection DTOs and JDBC template for the heaviest read paths.",
      "Added pagination cursors and connection-pool isolation for reporting queries to prevent interference with transactional traffic.",
    ],
    results: [
      "Report generation dropped from ~38s to ~5s on peak datasets — 87% reduction.",
      "Operations team closes daily review in minutes instead of hours.",
      "Reporting queries zero-impact on OLTP p95 latency.",
    ],
    technologies: ["Java 17", "Spring Boot", "JPA / Hibernate", "PostgreSQL", "REST", "Docker"],
    accent: "from-indigo-500/20 to-indigo-900/0",
  },
  {
    id: "returns-lifecycle",
    title: "Returns Lifecycle Management System",
    tagline: "Closed-loop reverse logistics with full auditability.",
    context:
      "The returns process spanned request → approval → pickup → QC → restocking → refund, with multiple teams touching the same data. Concurrent updates caused inconsistent state, and compliance required an immutable audit trail.",
    approach: [
      "Split the domain into three bounded modules — request, fulfilment, finance — each with its own database schema and API boundary.",
      "Used Spring State Machine to enforce valid state transitions with guard conditions. Applied optimistic locking with retry for concurrent access.",
      "Built an append-only event log with cryptographic chaining (SHA-256 of previous entry) to satisfy compliance audit requirements.",
    ],
    results: [
      "Eliminated reconciliation errors between returns and finance ledgers.",
      "Reduced average return processing cycle by ~40% across regions.",
      "Audit trail passed external compliance review on first pass.",
    ],
    technologies: ["Java", "Spring Boot", "Spring State Machine", "PostgreSQL", "REST", "Maven"],
    accent: "from-emerald-500/20 to-emerald-900/0",
  },
  {
    id: "inventory-platform",
    title: "Multi-warehouse Inventory Platform",
    tagline: "3x throughput with predictable latency.",
    context:
      "A centralized inventory platform handling stock movements, transfers, adjustments, and reservations across multiple warehouses. Race conditions under concurrent load and bulk import performance were the critical problems.",
    approach: [
      "Designed transactional service boundaries with write-ahead movement ledger. Used PostgreSQL row-level locks (`SELECT ... FOR UPDATE`) with exponential backoff for reservation contention.",
      "Replaced bulk JPA saves with batched JDBC inserts and chunked transaction windows for import performance.",
      "Added Redis caching for read-heavy stock-summary queries with TTL-based invalidation tied to write events.",
    ],
    results: [
      "Sustains 3x previous throughput on stock movements with stable p95 latency under 200ms.",
      "Bulk import processing time reduced from 12 minutes to 2 minutes for 50k-line files.",
      "API contracts now power 4 downstream products without breaking changes in 8 months.",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Redis", "Docker", "Microservices"],
    accent: "from-violet-500/20 to-violet-900/0",
  },
];

export const bugsFixed = [
  {
    title: "Race Condition — Concurrent Stock Reservations",
    symptom: "Two warehouse transfers would reserve the same stock units simultaneously, causing negative inventory in the ledger.",
    diagnosis: "Traced via thread dump analysis — multiple threads reading the same stock row before any held a lock. SELECT followed by application-level check then UPDATE created a classic TOCTOU race.",
    fix: "Replaced read-then-write with atomic `UPDATE inventory SET reserved = reserved + ? WHERE id = ? AND available >= ?` returning the actual result. Added pessimistic row lock for multi-statement reservation flows.",
  },
  {
    title: "N+1 Query Cascade — Return History API",
    symptom: "A returns list endpoint serving 200 items triggered 3,200+ SQL queries and took 14 seconds.",
    diagnosis: "JPA `@OneToMany` lazy loading cascaded through return → line items → QC checks → images. Hibernate's n+1 multiplied across all levels.",
    fix: "Replaced lazy entity traversal with `@EntityGraph` for 2-level eager fetching. For deeper paths, wrote projection DTOs with `JOIN FETCH` in JPQL. Queries dropped to 4. Latency went from 14s to 180ms.",
  },
  {
    title: "Connection Pool Starvation — Reporting Workload",
    symptom: "Transactional APIs started timing out during report generation windows. Hikari pool metrics showed all 20 connections active.",
    diagnosis: "Report queries ran inside the same Hikari pool as transactional traffic. A single slow report would occupy a connection for 30-40s, starving transaction paths.",
    fix: "Split into two Hikari pools — primary (transactions, max 15) and reporting (max 5, 30s timeout). Added connection timeout monitoring and alerting. Transaction p95 immediately recovered.",
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

export const skills = {
  Backend: ["Java 17", "Spring Boot", "Spring Security", "Spring State Machine", "Hibernate / JPA", "REST APIs", "Microservices"],
  Database: ["PostgreSQL", "MySQL", "Query Optimization", "Indexing Strategy", "Materialized Views", "Redis", "Connection Pooling"],
  "Performance": ["p95 Latency Analysis", "Query Profiling", "Thread Dump Analysis", "GC Tuning", "Load Testing", "Caching Strategy"],
  DevOps: ["Docker", "Git", "Maven", "Linux", "CI/CD", "GitHub Actions"],
  Tools: ["IntelliJ IDEA", "Postman", "OpenAPI / Swagger", "JUnit", "Mockito", "AI-assisted Engineering"],
};

export const systemDesign = [
  { title: "REST API Design", desc: "Resource modelling, versioning, idempotency, pagination cursors, and contract testing.", icon: "Network" },
  { title: "Microservices", desc: "Bounded contexts, service contracts, resilience patterns, and observability.", icon: "Boxes" },
  { title: "Event-driven", desc: "Async messaging, outbox pattern, eventual consistency, and replay strategies.", icon: "Radio" },
  { title: "Database Design", desc: "Normalization, indexing strategy, partitioning, and read/write path separation.", icon: "Database" },
  { title: "Performance Engineering", desc: "Profiling, query tuning, GC analysis, and end-to-end latency budgets.", icon: "Gauge" },
  { title: "Production Debugging", desc: "Thread dump analysis, slow query triage, connection pool diagnosis, heap profiling.", icon: "Bug" },
];
