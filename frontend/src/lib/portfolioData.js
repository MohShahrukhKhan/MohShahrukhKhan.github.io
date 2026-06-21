export const profile = {
  name: "Moh Shahrukh Khan",
  role: "Software Engineer — Java Backend",
  location: "India",
  tagline:
    "Backend Engineer with 3.5+ years of experience building production Spring Boot systems, optimizing PostgreSQL workloads, and solving complex business problems through scalable backend architecture.",
  email: "shahrukhturk9@gmail.com",
  linkedin: "https://www.linkedin.com/in/moh-shahrukh-khan",
  github: "https://github.com/MohShahrukhKhan",
  githubUsername: "MohShahrukhKhan",
  resumeUrl: null,
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
    period: "2023 — Present",
    location: "India",
    summary:
      "Design, build, and optimize production backend systems — Spring Boot microservices, PostgreSQL at scale, REST APIs, and performance-critical query paths — powering enterprise inventory, sales, and operations platforms used by real businesses daily.",
    points: [
      "Architect Spring Boot microservices with domain-driven boundaries — inventory, sales returns, order fulfilment — each with its own schema, API contract, and deployment pipeline.",
      "Design normalized PostgreSQL schemas for multi-warehouse stock tracking. Optimize query performance through composite indexing, partial indexes, CTE rewrites, and materialized views for heavy aggregation paths.",
      "Build REST APIs with JWT authentication, role-based access control, request validation, pagination cursors, and OpenAPI documentation — consumed by 4+ internal products.",
      "Resolve production incidents involving race conditions on concurrent stock reservations (row-level locks + retry with backoff), N+1 query cascades (entity graphs + DTO projections), and connection pool starvation (Hikari tuning + monitoring).",
    ],
  },
  {
    company: "ATISHAE WEB",
    role: "Software Engineer",
    period: "2022 — 2023",
    location: "Surat, India",
    summary:
      "Built enterprise backend systems for the jewelry manufacturing domain — production tracking, material traceability, and inventory management at scale.",
    points: [
      "Built a Manufacturing Execution System (MES) for jewelry production — tracked material movement, inventory, and production lifecycle end-to-end using Java, Spring Boot, and MySQL.",
      "Developed REST APIs for warehouse management, goods receipt (GRN), inter-warehouse transfers, and returns processing with audit history.",
      "Integrated Elasticsearch for fast search across inventory catalogs and external pricing APIs for real-time valuation.",
    ],
  },
];

export const caseStudies = [
  {
    id: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    tagline: "Full-stack finance platform with UUID-secured APIs, native SQL aggregations, and Docker Compose deployment.",
    context:
      "Built a personal finance management application as a full-stack architecture showcase — Spring Boot 3 backend, React frontend, and PostgreSQL database. Users can register, log in, manage categories (income/expense), record transactions with soft-delete, view real-time dashboard summaries, set monthly budgets, and export data as CSV. The project demonstrates production-grade patterns: stateless JWT auth, UUID-based resource identifiers, dynamic query specifications, native SQL for OLAP-style aggregations, lazy-loading prevention, and containerized deployment.",
    approach: [
      "Designed the PostgreSQL schema with BigSerial internal PKs for join performance and UUID public identifiers for all API resources — preventing ID enumeration while maintaining fast FK joins.",
      "Built a dynamic transaction search layer using Spring Data JPA Specifications — composable predicates for date range, amount bounds, category filter, soft-delete exclusion, sort direction, and pagination — all without inline JPQL.",
      "Computed dashboard summary, monthly trend, and category breakdown via hand-written native SQL instead of ORM — 4 aggregate queries across 2 tables with COALESCE guards, no N+1 risk, no lazy-loading pitfalls.",
      "Implemented stateless JWT authentication (HMAC-SHA512, 24h expiry), user-scoped resource isolation via Principal injection at the controller level, soft-delete with query-level filtering, and DTO projections throughout.",
    ],
    results: [
      "All 7 integration test suites pass: auth flows (register/login/duplicate/invalid/unauthenticated), category CRUD with user isolation, transaction filters (date/amount/category/sort/pagination), dashboard (I=$10k, E=$6k, B=$4k), budget (60% spent on $10k limit), CSV export, and soft-delete verified via direct DB check.",
      "Docker Compose orchestration — single docker compose up starts PostgreSQL 16, Spring Boot backend (port 8081), and React frontend served by nginx (port 5174) with API proxy configured.",
      "Zero ORM-induced N+1 queries across the 3 heaviest read paths — dashboard aggregations, budget spent tracking, and CSV export — all use native SQL or direct JDBC.",
    ],
    technologies: ["Java 17", "Spring Boot 3", "Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL", "React", "Vite", "Tailwind CSS", "Docker", "Maven"],
    accent: "from-amber-500/20 to-amber-900/0",
  },
  {
    id: "wip-stock-report",
    title: "WIP Stock Report Optimization",
    tagline: "38-second reports to 5-second answers. Without touching the frontend.",
    context:
      "Operations ran a daily WIP stock position report that queried millions of rows across the production OLTP database. The query would timeout during peak hours, leaving teams with stale data or no report at all. Adding indexes wasn't enough — the aggregation pattern itself was fighting the row-store design.",
    approach: [
      "Designed a read-optimized PostgreSQL schema with materialized views for pre-computed aggregations, refreshed incrementally via scheduled batch jobs.",
      "Replaced JPA entity graph traversal with hand-written projection DTOs using JDBC template for the heaviest read paths.",
      "Added pagination cursors and isolated the reporting workload to a dedicated Hikari connection pool to prevent interference with transactional traffic.",
    ],
    results: [
      "Report generation dropped from ~38s to ~5s on peak datasets — 87% reduction.",
      "Operations team closes daily review in minutes instead of hours.",
      "Zero impact on OLTP p95 latency during reporting windows.",
    ],
    technologies: ["Java 17", "Spring Boot", "JPA / Hibernate", "PostgreSQL", "REST", "Docker"],
    accent: "from-indigo-500/20 to-indigo-900/0",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    tagline: "3x throughput with predictable latency under production load.",
    context:
      "A centralized inventory platform managing stock movements, transfers, adjustments, and reservations across multiple warehouses. Race conditions under concurrent load would corrupt stock ledgers, and bulk imports of 50k-line files took 12 minutes — blocking the import pipeline.",
    approach: [
      "Designed transactional service boundaries with a write-ahead movement ledger. Used PostgreSQL row-level locks (`SELECT ... FOR UPDATE`) with exponential backoff for reservation contention.",
      "Replaced bulk JPA saves with batched JDBC inserts and chunked transaction windows, reducing lock duration on the inventory tables.",
      "Added Redis caching for read-heavy stock-summary queries with TTL-based invalidation triggered by write events.",
    ],
    results: [
      "Sustains 3x previous throughput on stock movements with stable p95 latency under 200ms.",
      "Bulk import processing time reduced from 12 minutes to 2 minutes for 50k-line files.",
      "API contracts now power 4 downstream products without a breaking change in 8 months.",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Redis", "Docker", "Microservices"],
    accent: "from-emerald-500/20 to-emerald-900/0",
  },
  {
    id: "postgres-query-optimization",
    title: "PostgreSQL Query Optimization",
    tagline: "N+1 cascades, connection pool starvation, and query plans that don't scale.",
    context:
      "Three separate production incidents traced back to the database layer: a returns list endpoint triggering 3,200+ SQL queries, connection pool exhaustion during report generation windows, and slow-growing query times on tables crossing 10M rows. Each required a different diagnostic approach and a different fix.",
    approach: [
      "Diagnosed N+1 via Hibernate SQL logging — JPA `@OneToMany` lazy loading cascaded through return → line items → QC checks → images. Fixed with `@EntityGraph` and `JOIN FETCH` JPQL projections, dropping 3,200 queries to 4.",
      "Resolved connection pool starvation by splitting into two Hikari pools — transactional (max 15) and reporting (max 5, 30s timeout) — with monitoring alerts on pool exhaustion.",
      "Rewrote slow aggregation queries using composite indexes, partial indexes on soft-delete filters, and CTE-based pagination to keep query plans stable as data grew.",
    ],
    results: [
      "Returns API latency dropped from 14s to 180ms — a 98% reduction.",
      "Transaction p95 latency immediately recovered after connection pool split.",
      "Query execution times remained stable as tables grew from 2M to 12M rows.",
    ],
    technologies: ["Java 17", "Spring Boot", "PostgreSQL", "Hibernate", "JDBC", "JProfiler"],
    accent: "from-violet-500/20 to-violet-900/0",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    tagline: "State machines, event logs, and a compliance audit that passed on the first try.",
    context:
      "A returns and dispute resolution workflow spanning request → approval → pickup → QC → restocking → refund. Multiple teams touched the same data at different stages. Concurrent updates caused inconsistent state, and regulatory compliance required an immutable audit trail with no gaps.",
    approach: [
      "Split the domain into three bounded modules — request, fulfilment, finance — each with its own database schema and API boundary to reduce cross-team contention.",
      "Used Spring State Machine to enforce valid state transitions with guard conditions. Applied optimistic locking with retry for concurrent access from multiple teams.",
      "Built an append-only event log with cryptographic chaining (SHA-256 of previous entry hash) to satisfy compliance audit requirements without a separate audit service.",
    ],
    results: [
      "Eliminated reconciliation errors between returns and finance ledgers entirely.",
      "Reduced average return processing cycle by ~40% across regions.",
      "Audit trail passed external compliance review on the first pass — no findings.",
    ],
    technologies: ["Java", "Spring Boot", "Spring State Machine", "PostgreSQL", "REST", "Maven"],
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
  Tools: ["IntelliJ IDEA", "Postman", "OpenAPI / Swagger", "JUnit", "Mockito", "Elasticsearch"],
};

export const systemDesign = [
  { title: "REST API Design", desc: "Resource modelling, versioning, idempotency, pagination cursors, and contract testing.", icon: "Network" },
  { title: "Microservices", desc: "Bounded contexts, service contracts, resilience patterns, and observability.", icon: "Boxes" },
  { title: "Event-driven", desc: "Async messaging, outbox pattern, eventual consistency, and replay strategies.", icon: "Radio" },
  { title: "Database Design", desc: "Normalization, indexing strategy, partitioning, and read/write path separation.", icon: "Database" },
  { title: "Performance Engineering", desc: "Profiling, query tuning, GC analysis, and end-to-end latency budgets.", icon: "Gauge" },
  { title: "Production Debugging", desc: "Thread dump analysis, slow query triage, connection pool diagnosis, heap profiling.", icon: "Bug" },
];
