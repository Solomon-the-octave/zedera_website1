/* ============================================================
   ENGLISH COPY
   All visible text lives here (and in am.ts, same shape).
   Rule: publish nothing that cannot be backed up. No client names,
   case studies, statistics or testimonials until they are real.
   ============================================================ */

import type { ServiceId } from "../data/site";

const en = {
  langLabel: "English",
  langShort: "EN",

  nav: {
    services: "Services",
    solutions: "Solutions",
    process: "Process",
    about: "About",
    contact: "Contact",
    start: "Start a project",
    open: "Open menu",
    close: "Close menu",
    skip: "Skip to content",
    switchLang: "ቋንቋ ቀይር: አማርኛ",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    home: "home",
  },

  common: {
    learnMore: "Learn more",
    startProject: "Start your project",
    exploreServices: "Explore services",
    chatWhatsApp: "Chat on WhatsApp",
    whatsappAria: "Chat with Zedera on WhatsApp",
    whatsappText: "Hello Zedera, I would like to discuss a project.",
    home: "Home",
    sample: "Sample",
    discussProject: "Discuss your project",
    askAbout: "Ask about this",
    youReceive: "You receive",
    typicalProjects: "Typical projects",
    bestFor: "Best for",
    terms: "Terms",
    seeProcess: "See the full process",
  },

  company: {
    description:
      "Zedera Tech Solutions is a technology studio in Addis Ababa. We design and build websites, apps, business systems and AI tools for organisations in Ethiopia and beyond.",
    address: ["Sherifa Building, 11th Floor", "Addis Ababa, Ethiopia"],
    location: "Addis Ababa, Ethiopia",
  },

  seo: {
    home: {
      title: "Websites, Apps, Business Systems & AI in Ethiopia",
      description:
        "Zedera Tech Solutions is a technology studio in Addis Ababa. We design and build websites, apps, business systems and AI tools for organisations in Ethiopia and beyond.",
    },
    services: {
      title: "Services",
      description:
        "Website development, mobile and web apps, business systems, AI and automation, product design, and brand and digital marketing from Zedera in Addis Ababa.",
    },
    solutions: {
      title: "Solutions",
      description:
        "Digital systems for retail and ecommerce, hotels and restaurants, education, real estate, NGOs and professional services in Ethiopia.",
    },
    process: {
      title: "Process",
      description:
        "How Zedera delivers: discovery, design, build, launch and support, with a written scope, weekly updates and a clean handover.",
    },
    about: {
      title: "About",
      description:
        "Zedera is a technology studio in Addis Ababa building websites, apps, business systems and AI tools that clients own outright.",
    },
    contact: {
      title: "Contact",
      description:
        "Talk to Zedera Tech Solutions about a website, app, business system or AI project. Based in Addis Ababa, Ethiopia.",
    },
    notFound: { title: "Page not found", description: "The page you were looking for does not exist." },
  },

  hero: {
    modules: ["Mobile app", "Inventory", "AI assistant", "Analytics", "Website", "Payments"],
    overview: "Overview",
    sampleData: "Sample data",
    greet: "Good morning",
    greetSub: "Everything your business runs on, in one view",
    kpiVisits: "Website visits",
    kpiOrders: "Orders today",
    kpiEnquiries: "New enquiries",
    kpiAnswered: "9 answered by AI",
    weekly: "Weekly sales",
    chat: "Replied to a customer asking about delivery to Bole. Order confirmed.",
    eyebrow: "Technology studio · Addis Ababa",
    title: "We build the digital systems",
    accent: "your business runs on.",
    lede: "Websites, mobile apps, business systems and AI tools, designed and built by one team, and handed over in your name.",
    aiTitle: "AI assistant",
    aiText: "Replied to 9 customer enquiries this morning. 2 passed to your team.",
    orders: "Orders today",
    visits: "Website visits",
  },

  stripLabel: "Built with proven, well supported technology",

  home: {
    services: {
      eyebrow: "What we build",
      title: "Digital solutions",
      accent: "for real businesses",
      lede: "Six services, one team. Most projects combine two or three, run by a single lead under one written scope.",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Systems for every",
      accent: "kind of business",
      lede: "Choose your sector to see the kind of system we would put together for it.",
    },
    process: {
      eyebrow: "How we work",
      title: "From first call to",
      accent: "live system",
      lede: "Five clear stages. You always know where the project is, what comes next and what you will receive.",
    },
    why: {
      eyebrow: "Why Zedera",
      title: "Not a vendor.",
      accent: "A long term technology partner.",
      lede: "We build systems meant to run for years, scope them honestly and hand them over cleanly, so you are never dependent on us to keep the lights on.",
    },
  },

  services: [
    {
      id: "web",
      title: "Website Development",
      summary: "Fast, mobile first websites that explain what you do and turn visitors into enquiries.",
      detail:
        "Company sites, landing pages and content platforms, built on a modern stack with a content editor your team can use, analytics from day one and search basics done properly.",
      includes: ["Company websites", "Landing pages", "Content management", "Analytics & SEO setup"],
      typical: "Corporate site, product launch page, booking site",
    },
    {
      id: "apps",
      title: "Mobile & Web Apps",
      summary: "Customer and staff apps for Android, iOS and the browser, from a single, maintainable codebase.",
      detail:
        "Booking, ordering, loyalty and field apps with sign in, notifications and offline tolerance for real network conditions. Published to the stores under your own accounts.",
      includes: ["Android & iOS", "Progressive web apps", "Notifications", "Payments integration"],
      typical: "Customer app, delivery app, field data collection",
    },
    {
      id: "systems",
      title: "Business Systems",
      summary: "Custom portals, dashboards and internal tools that replace spreadsheets and paper workflows.",
      detail:
        "Inventory, sales, HR, approvals, learning platforms and member portals. Where you already run other software we integrate with it rather than replace it.",
      includes: ["Internal tools & ERP", "Client portals", "Dashboards & reporting", "API integration"],
      typical: "Operations dashboard, learning platform, member portal",
    },
    {
      id: "ai",
      title: "AI & Automation",
      summary: "Practical AI with a clear job to do: assistants, document processing and workflow automation.",
      detail:
        "Chat assistants trained on your own information, tools that read and sort documents, and automations that move data between systems. Each one scoped around a task worth automating, with human review where mistakes are costly.",
      includes: ["AI chat assistants", "Document AI & OCR", "Workflow automation", "Telegram & web bots"],
      typical: "Customer support assistant, document intake, report automation",
    },
    {
      id: "design",
      title: "Product & UX Design",
      summary: "Interfaces designed around how people actually work, handed over as a system engineers can build from.",
      detail:
        "User research, flows, interface design and prototypes, delivered as a component based design system so what gets built matches what was designed.",
      includes: ["UX research", "UI design", "Prototyping", "Design systems"],
      typical: "App redesign, new product design, usability review",
    },
    {
      id: "growth",
      title: "Brand & Digital Marketing",
      summary: "Brand identity, social media and content that make a business look as good online as it is offline.",
      detail:
        "Visual identity, social media setup and management, content calendars, and the tracking needed to see what is working, run as a system your team can take over.",
      includes: ["Brand identity", "Social media management", "Content production", "Campaign tracking"],
      typical: "Brand refresh, social media launch, monthly content",
    },
  ] as { id: ServiceId; title: string; summary: string; detail: string; includes: string[]; typical: string }[],

  preview: {
    domain: "yourbusiness.et",
    bookNow: "Book now",
    bookings: "Bookings",
    orders: "Orders",
    rewards: "Rewards",
    newOrder: "New order received",
    request: "Request",
    status: "Status",
    rows: ["Stock transfer", "Leave request", "Purchase order"],
    approved: "Approved",
    pending: "Pending",
    userMsg: "Do you deliver to Adama?",
    botMsg: "Yes. Orders before 2pm arrive next day. Want me to start one?",
    primary: "Primary",
    secondary: "Secondary",
    reach: "Reach this month",
  },

  solutions: [
    {
      id: "retail",
      name: "Retail & ecommerce",
      headline: "Sell online and keep stock in step",
      body: "An online shop connected to your inventory, local payment options, order notifications and a dashboard that shows what is selling.",
      builds: ["Online store", "Inventory & orders", "Telebirr & card payments", "Sales dashboard"],
    },
    {
      id: "hospitality",
      name: "Hotels & restaurants",
      headline: "Bookings, menus and guests in one place",
      body: "Direct booking on your own website, QR menus, table and room management, and guest messaging that does not depend on third party platforms.",
      builds: ["Direct booking site", "QR menu", "Reservations", "Guest messaging"],
    },
    {
      id: "education",
      name: "Education & training",
      headline: "Courses that work on any connection",
      body: "Learning platforms with course authoring, assessments, certificates and reporting, built to stay usable on slow or patchy networks.",
      builds: ["Learning platform", "Assessments", "Certificates", "Progress reporting"],
    },
    {
      id: "realestate",
      name: "Real estate",
      headline: "Listings people can trust",
      body: "Property listing platforms with search, enquiry tracking, agent dashboards and checks that keep low quality or duplicate listings out.",
      builds: ["Listing platform", "Search & filters", "Lead tracking", "Agent dashboard"],
    },
    {
      id: "ngo",
      name: "NGOs & associations",
      headline: "Programmes, members and reporting",
      body: "Member portals, field data collection and donor ready reporting, with access controls for staff, partners and members.",
      builds: ["Member portal", "Field data apps", "Donor reporting", "Role based access"],
    },
    {
      id: "services",
      name: "Professional services",
      headline: "Less admin, faster replies",
      body: "Client portals, document automation and AI assistants that handle routine questions, so your team spends time on the work that pays.",
      builds: ["Client portal", "Document automation", "AI assistant", "CRM integration"],
    },
  ],
  solutionsTabsLabel: "Business types",
  discussSector: (name: string) => `Discuss a ${name.toLowerCase()} project`,

  stages: [
    {
      num: "01",
      title: "Discovery",
      duration: "1 to 2 weeks",
      body: "We learn how your business works today, what needs to change and what the constraints are. You get a written scope you can hold us to.",
      outputs: ["Requirements brief", "Written scope", "Proposal"],
    },
    {
      num: "02",
      title: "Design",
      duration: "1 to 3 weeks",
      body: "User flows, interface design and technical plan, agreed with you before production code is written.",
      outputs: ["Interface design", "Technical plan", "Delivery timeline"],
    },
    {
      num: "03",
      title: "Build",
      duration: "Iterative",
      body: "Work delivered in short cycles against a preview link you can open at any time, with a written update every week.",
      outputs: ["Preview environment", "Weekly updates", "Tested releases"],
    },
    {
      num: "04",
      title: "Launch",
      duration: "1 week",
      body: "Go live, data migration where needed, and handover of code, accounts and documentation. Your team is trained before we step back.",
      outputs: ["Production launch", "Handover pack", "Team training"],
    },
    {
      num: "05",
      title: "Support",
      duration: "Ongoing, optional",
      body: "Monitoring, fixes and improvements on a plan that suits you. Optional: everything is built so you can run it yourself.",
      outputs: ["Monitoring", "Maintenance", "Improvement backlog"],
    },
  ],

  principles: [
    {
      title: "You own everything",
      body: "Code, domains, hosting and app store accounts are set up in your name. Nothing is locked behind us.",
    },
    {
      title: "Scoped in writing",
      body: "Every project starts with a written scope: what is included, what is not, and how we will know it is done.",
    },
    {
      title: "Built for local reality",
      body: "Local payment rails, mobile first users and patchy connectivity are design inputs, not afterthoughts.",
    },
    {
      title: "One accountable lead",
      body: "A single point of contact, a weekly written update and a preview link you can check at any time.",
    },
  ],

  standards: [
    "Version control on every project",
    "Code review before release",
    "Separate test and live environments",
    "Mobile first, responsive layouts",
    "Accessibility basics checked",
    "Secrets kept out of code",
    "Documentation at handover",
    "Accounts and credentials in your name",
  ],

  engagements: [
    {
      title: "Project",
      bestFor: "A clear goal with a defined product at the end.",
      terms: "Fixed price against a written scope, paid by milestone.",
    },
    {
      title: "Dedicated team",
      bestFor: "Ongoing work where priorities change faster than a fixed scope allows.",
      terms: "Monthly retainer that scales up or down.",
    },
    {
      title: "Care plan",
      bestFor: "Keeping an existing website, app or system healthy and improving.",
      terms: "Monthly plan covering monitoring, updates and small changes.",
    },
  ],

  faq: [
    {
      q: "How much does a website or app cost?",
      a: "It depends on scope. After a short call we send a written proposal with a fixed price for the agreed scope, so you know the cost before any work starts.",
    },
    {
      q: "How long does a project take?",
      a: "A company website typically takes 3 to 6 weeks. Apps and business systems usually take 6 to 16 weeks, depending on features and integrations.",
    },
    {
      q: "Can you work with our existing systems?",
      a: "Yes. We integrate with tools you already use, such as payment providers, accounting software and messaging platforms, rather than replacing them.",
    },
    {
      q: "Who owns the code and accounts?",
      a: "You do. Code repositories, domains, hosting and app store accounts are set up in your name and handed over at launch.",
    },
    {
      q: "Do you support the system after launch?",
      a: "Yes, through an optional care plan. Everything is documented so your own team, or another partner, can take it over if you prefer.",
    },
  ],

  cta: {
    title: "Have a project in mind?",
    accent: "Let's build it properly.",
    body: "Tell us what you need, even if it is rough. We will reply with honest advice on scope, timeline and cost.",
  },

  pages: {
    services: {
      crumb: "Services",
      eyebrow: "Services",
      title: "Everything you need to",
      accent: "run and grow online.",
      lede: "From a first website to a full business system, one team designs it, builds it and hands it over in your name.",
      engEyebrow: "Ways to work together",
      engTitle: "Choose the model",
      engAccent: "that fits the work",
      faqEyebrow: "FAQ",
      faqTitle: "Questions we",
      faqAccent: "hear often",
    },
    solutions: {
      crumb: "Solutions",
      eyebrow: "Solutions",
      title: "Systems shaped around",
      accent: "how your sector works.",
      lede: "Every business is different, but most sectors share the same core needs. Here is where we usually start for each.",
      ctaTitle: "Your sector is not listed?",
      ctaAccent: "We still want to hear from you.",
      ctaBody:
        "The list above is where we usually start, not a limit. Tell us how your business works and we will suggest an approach.",
    },
    process: {
      crumb: "Process",
      eyebrow: "How we work",
      title: "A clear process,",
      accent: "with no surprises.",
      lede: "Five stages, each with a defined output. You always know where the project stands and what you will receive next.",
      stdEyebrow: "Delivery standards",
      stdTitle: "Applied to every project,",
      stdAccent: "without being asked",
    },
    about: {
      crumb: "About",
      eyebrow: "About Zedera",
      title: "Technology that works,",
      accent: "built to be yours.",
      lede: "A studio in Addis Ababa designing and building the websites, apps and systems that organisations run on.",
      paragraphs: [
        "Zedera is a technology studio based in Addis Ababa. We design and build websites, apps, business systems and AI tools for organisations that want technology to do real work for them.",
        "We started Zedera because too many businesses here end up with a website nobody updates, an app that stops working when the freelancer moves on, or a system they do not actually own. We want to change that by scoping projects honestly, building them properly and handing them over cleanly.",
        "We work with businesses, NGOs and institutions across Ethiopia, and with organisations abroad that want a capable team in East Africa.",
      ],
      quote: "A system is only finished when someone else can run it without calling us.",
      quoteAttr: "The standard we hold every project to",
      basedIn: "Based in",
      workingWith: "Working with",
      workingWithVal: "Clients across Ethiopia and abroad",
      prEyebrow: "What we stand for",
      prTitle: "Four principles,",
      prAccent: "every project",
    },
    contact: {
      crumb: "Contact",
      eyebrow: "Get in touch",
      title: "Tell us what",
      accent: "you want to build.",
      lede: "Send a short brief, even a rough one. We will reply with honest advice on scope, timeline and cost.",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappVal: "Chat with us directly",
      office: "Office",
      hours: "Monday to Friday, 9:00 to 18:00 EAT",
      name: "Full name",
      organisation: "Organisation",
      emailField: "Email",
      phoneField: "Phone (optional)",
      need: "What do you need?",
      selectService: "Select a service",
      notSure: "Not sure yet",
      brief: "Your brief",
      briefPlaceholder: "What do you want to build, what exists today, and when do you need it?",
      send: "Send message",
      compose: "Compose email",
      sending: "Sending",
      noteEndpoint: "Your details are only used to reply to this enquiry.",
      noteMail: (email: string) => `This opens your email app with your message filled in, addressed to ${email}.`,
      ok: "Thank you, your message has been received. We will be in touch shortly.",
      errBefore: "Something went wrong sending the form. Please email",
      errAfter: "instead.",
      mailSubject: (name: string) => `Project enquiry from ${name || "the website"}`,
      nextEyebrow: "What happens next",
      nextTitle: "Three simple steps,",
      nextAccent: "no pressure",
      nextSteps: [
        {
          num: "01",
          title: "We read your brief",
          body: "We review what you sent and reply with questions, or to say honestly if we are not the right fit.",
        },
        {
          num: "02",
          title: "A short call",
          body: "Around 30 minutes on what you need, what exists today and your timeline. Free, with no obligation.",
        },
        {
          num: "03",
          title: "A written proposal",
          body: "Scope, timeline and a fixed price in writing, so you can decide with all the facts.",
        },
      ],
    },
    notFound: {
      title: "This page does not exist.",
      lede: "It may have moved, or the link may be out of date.",
      back: "Back to home",
    },
  },

  footer: {
    company: "Company",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

export type Dict = typeof en;
export default en;
