export type NavLink = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
  detail: string;
};

export type HeroContent = {
  availability: string;
  location: string;
  heading: string;
  role: string;
  supportLine: string;
  paragraph: string;
  techStack: string[];
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  stats: StatItem[];
};

export type BrandContent = {
  name: string;
  personName: string;
  domain: string;
  role: string;
  companyLine: string;
  tagline: string;
  email: string;
};

export type AboutCard = {
  title: string;
  description: string;
  bullets: string[];
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  cards: AboutCard[];
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  actions: [ActionLink, ActionLink];
  highlights: string[];
};

export type ProjectsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ProjectItem[];
};

export type HighlightItem = {
  title: string;
  description: string;
  bullets: string[];
};

export type ResumeContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  chips: string[];
};

export type SocialItem = {
  label: string;
  description: string;
  href: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ActionLink;
  socials: SocialItem[];
};

export const siteContent = {
  brand: {
    name: "THANDULULO TECHNOLOGIES",
    personName: "Thandululo Nengovhela",
    domain: "thandululo.tech",
    role: "Full Stack Developer & Founder",
    companyLine:
      "Building practical digital products through THANDULULO TECHNOLOGIES.",
    tagline:
      "Founder-led software delivery for modern products, platforms, and digital experiences.",
    email: "hello@thandululo.tech",
  } satisfies BrandContent,
  navigation: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Highlights", href: "#highlights" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  hero: {
    availability: "Available for Work",
    location: "Based in South Africa • Open to Remote Work",
    heading: "Hi, I'm Thandululo",
    role: "Full Stack Developer & Founder",
    supportLine:
      "Building practical digital products through THANDULULO TECHNOLOGIES.",
    paragraph:
      "I design and build modern web applications, student-focused platforms, and scalable digital experiences. I'm the creator of Gradiate, a platform focused on helping learners access better academic opportunities.",
    techStack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "daisyUI"],
    primaryCta: { label: "View Projects", href: "#projects" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
    stats: [
      {
        value: "4+ Projects",
        label: "Projects Built",
        detail: "Focused builds across platforms, prototypes, and launch-ready websites.",
      },
      {
        value: "EdTech Focus",
        label: "Core Focus",
        detail: "Practical tools for students, founders, and growing digital teams.",
      },
      {
        value: "1 Brand",
        label: "Products Launched",
        detail: "A founder-led studio built to ship clear, modern digital experiences.",
      },
    ],
  } satisfies HeroContent,
  about: {
    eyebrow: "About",
    title: "A personal brand with a product-first technology studio behind it",
    description:
      "Thandululo Technologies blends software development, educational technology thinking, and startup execution into one clear delivery style.",
    body:
      "I work at the intersection of personal craft and company-building. Through THANDULULO TECHNOLOGIES, I build polished interfaces, dependable full stack systems, and student-centered digital products that stay practical as they scale.",
    cards: [
      {
        title: "Software Development",
        description:
          "Modern web builds with strong foundations, reusable architecture, and clean front-end execution.",
        bullets: ["Next.js and TypeScript", "Scalable UI systems", "Production-ready delivery"],
      },
      {
        title: "Educational Technology",
        description:
          "Digital products that help learners access information, opportunities, and supportive online experiences.",
        bullets: ["Learner-first flows", "Opportunity platforms", "Clear information design"],
      },
      {
        title: "Digital Products",
        description:
          "Concept-to-launch execution for landing pages, dashboards, internal tools, and startup-facing MVPs.",
        bullets: ["Founder-led decisions", "Fast iteration cycles", "Maintainable codebases"],
      },
    ],
  } satisfies AboutContent,
  projects: {
    eyebrow: "Projects",
    title: "Selected products and polished concept builds",
    description:
      "Gradiate leads the portfolio, supported by sample products that reflect the kind of systems, interfaces, and startup-minded work THANDULULO TECHNOLOGIES can deliver.",
    items: [
      {
        title: "Gradiate",
        category: "Featured Product",
        description:
          "A student-focused platform designed to help learners discover better academic opportunities with more clarity and less friction.",
        outcome:
          "Built around opportunity discovery, simplified guidance, and a product direction tailored to real learner needs.",
        tags: ["EdTech", "Platform Design", "Student Experience", "Product Strategy"],
        actions: [
          { label: "View Project", href: "#contact" },
          { label: "Discuss Product", href: "#contact" },
        ],
        highlights: [
          "Opportunity discovery flows",
          "Clear academic guidance surfaces",
          "Scalable product foundation",
        ],
      },
      {
        title: "Foundry Ops",
        category: "Sample Dashboard",
        description:
          "A dark-theme operations dashboard concept for startup teams that need visibility across projects, tasks, and delivery rhythm.",
        outcome:
          "Demonstrates clean data hierarchy, actionable UI states, and founder-friendly operational clarity.",
        tags: ["Dashboard", "Analytics", "Team Workflows", "Admin UI"],
        actions: [
          { label: "View Concept", href: "#highlights" },
          { label: "Start Similar Build", href: "#contact" },
        ],
        highlights: ["Delivery snapshots", "Team status views", "Operations-ready layout"],
      },
      {
        title: "Launchframe Studio",
        category: "Sample Landing System",
        description:
          "A conversion-focused marketing site concept for premium service businesses and early-stage product launches.",
        outcome:
          "Shows how strong messaging, motion restraint, and visual depth can elevate a founder-led web presence.",
        tags: ["Landing Page", "Brand UI", "Conversion Design", "Startup Web"],
        actions: [
          { label: "See Style", href: "#highlights" },
          { label: "Book a Build", href: "#contact" },
        ],
        highlights: ["Premium section rhythm", "Reusable component patterns", "High-trust presentation"],
      },
      {
        title: "Campus Pulse",
        category: "Sample Platform",
        description:
          "A student community and notices concept combining updates, resources, and engagement tools into one connected experience.",
        outcome:
          "Explores how Firebase-backed apps can support communication, visibility, and lightweight platform interactions.",
        tags: ["Firebase", "Student Platform", "Realtime Updates", "Community Tools"],
        actions: [
          { label: "Explore Capability", href: "#highlights" },
          { label: "Talk Through Scope", href: "#contact" },
        ],
        highlights: ["Realtime update surfaces", "Community-ready modules", "Simple moderation patterns"],
      },
    ],
  } satisfies ProjectsContent,
  highlights: [
    {
      title: "Web Applications",
      description:
        "Full stack applications with modern UX, strong component systems, and practical implementation detail.",
      bullets: ["App Router builds", "Responsive interaction design", "Deployment-ready foundations"],
    },
    {
      title: "Dashboards",
      description:
        "Admin and internal tool interfaces designed for clarity, quick scanning, and efficient daily use.",
      bullets: ["Data-focused layouts", "Status-rich cards", "Clean system navigation"],
    },
    {
      title: "Landing Pages",
      description:
        "Premium marketing pages that balance brand presence, storytelling, and startup credibility.",
      bullets: ["Strong hero sections", "Conversion-aware content", "Reusable UI sections"],
    },
    {
      title: "Student Platforms",
      description:
        "Learner-centered experiences built around access, guidance, and more approachable digital journeys.",
      bullets: ["Opportunity discovery", "Helpful content structure", "EdTech-friendly UX"],
    },
    {
      title: "Firebase Apps",
      description:
        "Product foundations that can move quickly with auth, data, storage, and lightweight realtime patterns.",
      bullets: ["Auth and data flows", "Rapid MVP delivery", "Scalable product iteration"],
    },
    {
      title: "Founder Support",
      description:
        "Design and build support for founders who need polished web products without losing speed.",
      bullets: ["Clear scope alignment", "Modern interface quality", "Maintainable code handoff"],
    },
  ] satisfies HighlightItem[],
  resume: {
    eyebrow: "Resume",
    title: "Need the full experience breakdown?",
    description:
      "For relevant roles, product conversations, and collaborations, a detailed resume can be shared alongside project context and technical depth.",
    primaryCta: { label: "Download Resume", href: "/resume.pdf" },
    secondaryCta: { label: "Request Resume", href: "#contact" },
    chips: ["Full stack delivery", "Founder-led execution", "Remote-ready collaboration"],
  } satisfies ResumeContent,
  contact: {
    eyebrow: "Contact",
    title: "Let's build something practical, sharp, and ready to ship",
    description:
      "Whether you need a product-minded developer, a polished landing page, or a thoughtful full stack build, the next step starts with a simple conversation.",
    primaryCta: { label: "Let's Talk", href: "mailto:hello@thandululo.tech" },
    socials: [
      {
        label: "Email",
        description: "Best for project inquiries, collaborations, and serious build conversations.",
        href: "mailto:hello@thandululo.tech",
      },
      {
        label: "GitHub",
        description: "Use this slot for repositories, experiments, and public build history.",
        href: "https://github.com/",
      },
      {
        label: "LinkedIn",
        description: "Use this slot for professional profile details, network presence, and outreach.",
        href: "https://www.linkedin.com/",
      },
    ],
  } satisfies ContactContent,
} as const;
