/* ============================================================
   ZEDERA: single source of truth for site content.
   Edit copy here; components stay structural.

   TBD.* values are PLACEHOLDERS. They render with a visible
   marker so nothing unverified ships silently. Replace them with
   real figures, then set `unverified: false`.
   ============================================================ */

export const TBD = {
  projects: "40+",
  years: "5",
  engineers: "20+",
  markets: "3",
  /** flip to false once every figure above is confirmed */
  unverified: true,
};

export const COMPANY = {
  name: "Zedera",
  legalName: "Zedera Tech Solutions",
  tagline: "Tech Solutions",
  domain: "zederaet.com",
  url: "https://www.zederaet.com",
  email: "zederaet@gmail.com",
  phones: ["0984951144", "0921319769"],
  addressLines: ["Sherifa Building, 11th Floor", "Addis Ababa, Ethiopia"],
  description:
    "Zedera Tech Solutions is an engineering partner for organisations in Ethiopia and East Africa, building software, AI systems, integrations and the teams to run them.",
};

export const ROUTES = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

/** Routes whose top section is dark, so the nav stays transparent over them. */
export const DARK_TOP_ROUTES: string[] = [];

export const HERO_STATS = [
  { value: TBD.projects, label: "Systems delivered" },
  { value: TBD.years, label: "Years operating" },
  { value: TBD.engineers, label: "Engineers & designers" },
  { value: TBD.markets, label: "Markets served" },
];

/* ---------- CAPABILITIES ---------- */
export const SERVICES = [
  {
    id: "engineering",
    tag: "Build",
    title: "Software Engineering",
    summary:
      "Web and mobile applications built to hold up in production: typed codebases, automated tests, documented APIs and a deployment pipeline you own.",
    detail:
      "We take a requirement all the way to a running system. Architecture, data model, application code, integrations and release process. Every build ships with source control, environment separation and handover documentation, so the system does not depend on us to keep running.",
    chips: ["React", "Next.js", "React Native", "Node.js", "Python", "PostgreSQL"],
    typical: "Customer portal, internal tool, mobile app, public platform",
    lead: "Senior engineer plus delivery lead",
  },
  {
    id: "ai",
    tag: "Automate",
    title: "AI & Automation",
    summary:
      "Applied AI with a measurable job to do: document processing, assistants over your own data, classification and workflow automation.",
    detail:
      "We start from the task, not the model. That means scoping where automation actually removes cost, wiring retrieval over your own documents, evaluating output quality against a held out set, and putting a human review step wherever a wrong answer is expensive.",
    chips: ["LLM integration", "RAG", "OCR & document AI", "Workflow automation", "Evaluation"],
    typical: "Document intake, support assistant, classification, reporting automation",
    lead: "AI engineer plus domain reviewer",
  },
  {
    id: "platforms",
    tag: "Connect",
    title: "Platforms & Integration",
    summary:
      "Internal platforms, portals and the connective tissue between the systems a business already runs on.",
    detail:
      "Learning platforms, operations dashboards, customer portals and back office tooling. Where systems already exist we integrate rather than replace, covering payment providers, ERPs, messaging gateways and third party APIs, with sane error handling and retry behaviour.",
    chips: ["Internal platforms", "Portals", "API integration", "Payments", "Reporting"],
    typical: "Operations platform, member portal, systems integration",
    lead: "Solutions architect plus engineers",
  },
  {
    id: "design",
    tag: "Design",
    title: "Product & Experience Design",
    summary:
      "Interface and product design grounded in how the work is actually done, not how it looks in a mockup.",
    detail:
      "User flows, information architecture, interface design and a component system the engineering team can build against directly. Design artefacts are handed over as a working design system, not a folder of images.",
    chips: ["UX research", "UI design", "Design systems", "Prototyping", "Accessibility"],
    typical: "Product redesign, design system, usability review",
    lead: "Product designer plus researcher",
  },
  {
    id: "growth",
    tag: "Grow",
    title: "Digital Growth Systems",
    summary:
      "Brand, content and search infrastructure set up as a system that can be measured and maintained in house.",
    detail:
      "Positioning and messaging, brand and content systems, technical SEO, analytics instrumentation and campaign tooling, configured so your team can run it without an agency on retainer.",
    chips: ["Positioning", "Brand systems", "Technical SEO", "Analytics", "Content"],
    typical: "Brand system, site relaunch, analytics setup",
    lead: "Strategist plus designer",
  },
  {
    id: "teams",
    tag: "Staff",
    title: "Dedicated Engineering Teams",
    summary:
      "Vetted engineers, designers and AI specialists from Ethiopia and East Africa, embedded in your team and managed by us.",
    detail:
      "For organisations that need sustained capacity rather than a single project. We assemble the team, handle contracting and delivery management, and work inside your tooling and rituals. You keep direction, we keep the team staffed and accountable.",
    chips: ["Staff augmentation", "Managed delivery", "Overlapping hours", "Local contracting"],
    typical: "Embedded squad, capacity top up, long term roadmap",
    lead: "Delivery manager plus squad",
  },
];

/* ---------- OPERATING PRINCIPLES (About page only) ---------- */
export const PRINCIPLES = [
  {
    title: "Engineered for handover",
    body: "Source control, documentation and environment access are part of the deliverable. If you want to take the system in house or move to another partner, nothing is locked behind us.",
  },
  {
    title: "Scoped before it is built",
    body: "Every engagement starts with a written scope: what is being built, what it integrates with, what is explicitly out of scope, and what the acceptance criteria are.",
  },
  {
    title: "Regional context, global standards",
    body: "Built by a team that understands the operating reality here, including connectivity, payment rails, local compliance and procurement, against the engineering standards clients expect anywhere.",
  },
  {
    title: "Accountable delivery",
    body: "One delivery lead per engagement, a written status update every week, and a demo environment you can open at any point in the build.",
  },
];

/* ---------- DELIVERY STANDARDS (Home page only) ---------- */
export const STANDARDS = [
  "Version control on every project",
  "Code review before merge",
  "Automated test coverage",
  "Separate staging and production",
  "Role based access control",
  "Documented API contracts",
  "Secrets in environment variables, never in code",
  "Repository and credentials handed over at launch",
];

/* ---------- ENGAGEMENT MODELS (Services page only) ---------- */
export const ENGAGEMENTS = [
  {
    title: "Fixed scope project",
    bestFor: "A clear requirement with a specific product as the outcome.",
    commercial: "Milestone billing against a written scope",
    duration: "6 to 16 weeks, typically",
    team: "Delivery lead plus 2 to 4 specialists",
  },
  {
    title: "Dedicated team",
    bestFor: "Continuous work where priorities shift faster than a fixed scope allows.",
    commercial: "Monthly retainer, scales up or down",
    duration: "3 months minimum, rolling",
    team: "Embedded squad working to your roadmap",
  },
  {
    title: "Advisory retainer",
    bestFor: "In house teams that need senior technical judgement, not more hands.",
    commercial: "Fixed monthly fee, capped hours",
    duration: "Rolling, 30 day notice",
    team: "Principal engineer plus architect",
  },
];

/* ---------- PROCESS (Process page only) ---------- */
export const STAGES = [
  {
    num: "01",
    short: "Discovery",
    duration: "1 to 2 weeks",
    title: "Discovery & scoping",
    body: "We map the current process, the systems already in use and the constraints that are non negotiable. The output is a written scope with acceptance criteria, the document the rest of the engagement is measured against.",
    outputs: ["Requirements brief", "System map", "Written scope", "Commercial proposal"],
    you: "Access to the people who do the work today",
    us: "Workshops, system review, written scope",
  },
  {
    num: "02",
    short: "Architecture",
    duration: "1 to 3 weeks",
    title: "Architecture & design",
    body: "Data model, service architecture, integration points and interface design. We agree the technical approach and the interface before a line of production code is written.",
    outputs: ["Architecture decision record", "Data model", "UI design system", "Delivery plan"],
    you: "Sign off on approach and interface",
    us: "Architecture, data model, design system",
  },
  {
    num: "03",
    short: "Build",
    duration: "Iterative",
    title: "Build & integrate",
    body: "Delivery in two week increments against a demo environment you can open at any time. Automated tests and code review on every change, and a written status update every week.",
    outputs: ["Demo environment", "Weekly status note", "Test suite", "Integration work"],
    you: "Fortnightly review, decisions inside 48 hours",
    us: "Build, test, integrate, report",
  },
  {
    num: "04",
    short: "Launch",
    duration: "1 to 2 weeks",
    title: "Launch & handover",
    body: "Production deployment, data migration where required, and handover of repositories, environments and credentials. Your team is trained on the system before we step back.",
    outputs: ["Production release", "Repo & environment handover", "Runbook", "Team training"],
    you: "Nominate the owners who take it on",
    us: "Deploy, migrate, document, train",
  },
  {
    num: "05",
    short: "Operate",
    duration: "Ongoing",
    title: "Operate & improve",
    body: "Monitoring, support and a prioritised improvement backlog. This stage is optional: the system is built so you can run it yourself if you prefer.",
    outputs: ["Monitoring & alerts", "Support SLA", "Improvement backlog", "Quarterly review"],
    you: "Quarterly priorities",
    us: "Monitor, support, improve",
  },
];

/* ---------- STACK (Home page only) ---------- */
/* Confirm this reflects the stack Zedera actually works in. */
export const STACK = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "React Native", "Tailwind"] },
  { group: "Backend & data", items: ["Node.js", "Python", "PostgreSQL", "REST & GraphQL", "Redis"] },
  { group: "AI & automation", items: ["LLM APIs", "Retrieval (RAG)", "OCR pipelines", "Workflow tooling"] },
  { group: "Cloud & delivery", items: ["AWS", "Docker", "CI/CD pipelines", "Vercel & Netlify", "Monitoring"] },
];

/* ---------- SECTORS (Work page only) ---------- */
export const SECTORS = [
  "Financial services",
  "Agriculture & agritech",
  "Logistics & mobility",
  "Real estate",
  "Education & training",
  "NGOs & public sector",
];

/* ---------- CASE STUDIES (Work page only) ---------- */
/* Placeholder engagements. Replace each with a real project, and use a
   client name only with written permission, before going live. */
export const CASES = [
  {
    sector: "Real estate",
    title: "Listing integrity platform for a property marketplace",
    body: "A web platform that scores property listings for signs of fraud, combining rule based checks with a trained classifier, and routes flagged listings into a human review queue with a full audit trail.",
    engagement: "Fixed scope project",
    stack: "Next.js, Python, PostgreSQL",
    outcome: "Under review, pending client sign off",
    capabilities: ["AI & Automation", "Software Engineering", "Platforms & Integration"],
    tbd: true,
  },
  {
    sector: "Education & training",
    title: "Learning platform for a national member association",
    body: "A course delivery and certification platform for a distributed member network, covering authoring tools, offline tolerant course access, assessment, and reporting for the programme team.",
    engagement: "Dedicated team",
    stack: "React, Node.js, PostgreSQL",
    outcome: "Under review, pending client sign off",
    capabilities: ["Platforms & Integration", "Product & Experience Design"],
    tbd: true,
  },
  {
    sector: "Agriculture & agritech",
    title: "Operations and traceability system for an agribusiness",
    body: "Record keeping for production operations, covering inputs, batch tracking and process logs, with role based access for field staff and a reporting layer for management and buyers.",
    engagement: "Fixed scope project",
    stack: "React, Node.js, PostgreSQL",
    outcome: "Under review, pending client sign off",
    capabilities: ["Software Engineering", "Platforms & Integration"],
    tbd: true,
  },
  {
    sector: "Professional services",
    title: "Document automation for a back office team",
    body: "An automation layer that reads inbound documents, extracts structured fields, validates them against existing records and drafts the outbound response for human approval.",
    engagement: "Advisory retainer",
    stack: "Python, LLM APIs, OCR",
    outcome: "Under review, pending client sign off",
    capabilities: ["AI & Automation", "Dedicated Engineering Teams"],
    tbd: true,
  },
];

/* ---------- ABOUT (About page only) ---------- */
export const ABOUT_PARAGRAPHS = [
  "Zedera Tech Solutions was founded on a straightforward observation. Organisations in this region are rarely short of ambition, but they are often short of engineering partners who will scope a system properly, build it to a standard, and then hand it over cleanly.",
  "We work across software engineering, applied AI, platform integration and product design. The common thread is that we build systems intended to run for years, not demos, and not projects that quietly become dependent on the agency that made them.",
  "The team is based in Addis Ababa and works with clients across Ethiopia and East Africa, as well as organisations elsewhere that want senior engineering capacity in an overlapping time zone.",
];

export const PULLQUOTE = {
  text: "A system is only finished when someone else can run it without calling us.",
  attrib: "The standard we hold every engagement to",
};

/* Firm milestones. Replace the years and entries with the real history. */
export const TIMELINE = [
  {
    year: "Founded",
    title: "Started as a small engineering team in Addis Ababa",
    body: "Building websites and internal tools for local businesses that needed a technical partner rather than a freelancer.",
    tbd: true,
  },
  {
    year: "Expansion",
    title: "Added platform engineering and product design",
    body: "Client work moved from single sites to operational systems: portals, dashboards and integrations with the tools those businesses already ran on.",
    tbd: true,
  },
  {
    year: "Applied AI",
    title: "Built an applied AI practice",
    body: "Document processing, retrieval over client data and workflow automation, scoped around tasks with a measurable cost to remove.",
    tbd: true,
  },
  {
    year: "Today",
    title: "An engineering partner across East Africa",
    body: "Fixed scope projects, dedicated teams and advisory retainers for clients in Ethiopia, the wider region and beyond.",
    tbd: true,
  },
];

/* ---------- CONTACT (Contact page only) ---------- */
export const NEXT_STEPS = [
  {
    num: "01",
    title: "We read the brief",
    body: "A delivery lead reviews what you sent and comes back within two working days, including when we are not the right fit.",
  },
  {
    num: "02",
    title: "A scoping call",
    body: "Forty five minutes on what exists today, what needs to change and what the constraints are. No charge, no obligation.",
  },
  {
    num: "03",
    title: "A written proposal",
    body: "Scope, acceptance criteria, timeline and commercial terms in writing, so you can compare it against anyone else.",
  },
];
