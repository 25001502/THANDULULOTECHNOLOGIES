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

export type BrandContent = {
  name: string;
  monogram: string;
  founderName: string;
  founderLine: string;
  domain: string;
  email: string;
  tagline: string;
  location: string;
};

export type HeroShowcaseContent = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  highlights: string[];
  footerLabel: string;
  footerValue: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  supportingText: string;
  focusTags: string[];
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  showcase: HeroShowcaseContent;
  stats: StatItem[];
};

export type CapabilityItem = {
  title: string;
  description: string;
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
  founderNote: string;
  focusAreas: string[];
  cards: AboutCard[];
};

export type ServiceIconKey =
  | "web"
  | "edtech"
  | "business"
  | "systems";

export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  icon: ServiceIconKey;
};

export type ServicesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
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

export type ReasonItem = {
  title: string;
  description: string;
};

export type ReasonsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: ReasonItem[];
};

export type FounderContent = {
  eyebrow: string;
  title: string;
  description: string;
  body: string;
  cta: ActionLink;
  principles: string[];
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
  email: string;
  primaryCta: ActionLink;
  socials: SocialItem[];
};

export const siteContent = {
  brand: {
    name: "THANDULULO TECHNOLOGIES",
    monogram: "TT",
    founderName: "Thandululo Nengovhela",
    founderLine: "Founded by Thandululo Nengovhela",
    domain: "thandululo.tech",
    email: "hello@thandululo.tech",
    tagline:
      "Digital products, platforms, and modern web solutions built for impact and growth.",
    location: "South Africa",
  } satisfies BrandContent,
  navigation: [
    { label: "Home", href: "#top" },
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  hero: {
    eyebrow: "Digital Solutions Company",
    headline:
      "Building Modern Digital Solutions for Education, Business, and Growth",
    subheadline:
      "THANDULULO TECHNOLOGIES develops scalable web platforms, digital products, and smart software solutions with a strong focus on impact-driven innovation.",
    supportingText:
      "From student platforms like Gradiate to modern web systems and business-ready digital experiences, we create technology that solves real problems.",
    focusTags: [
      "Product Development",
      "Web Platforms",
      "EdTech Innovation",
      "Business Solutions",
    ],
    primaryCta: { label: "Explore Our Work", href: "#products" },
    secondaryCta: { label: "Contact Us", href: "#contact" },
    showcase: {
      eyebrow: "Flagship Product",
      title: "Gradiate",
      description:
        "A student-focused educational platform created to improve access to academic opportunities, guidance, and digital empowerment.",
      chips: [
        "EdTech innovation",
        "Scalable product development",
        "Impact-oriented platform design",
      ],
      highlights: [
        "Academic opportunities and practical guidance",
        "Access to useful information for learners",
        "Built as a platform foundation for long-term growth",
      ],
      footerLabel: "Company Focus",
      footerValue: "Products and systems that create real-world utility",
    },
    stats: [
      {
        value: "4+ Solutions",
        label: "Digital Products",
        detail:
          "Company-led concepts and solution builds shaped around practical delivery.",
      },
      {
        value: "EdTech & Web Platforms",
        label: "Core Focus Areas",
        detail:
          "Technology work centered on platforms, systems, and modern digital experiences.",
      },
      {
        value: "South Africa",
        label: "Founded In",
        detail:
          "Built from a South African base with a product mindset suited to wider digital markets.",
      },
      {
        value: "Students & Businesses",
        label: "Primary Market",
        detail:
          "Solutions designed for learners, organizations, and growth-focused teams.",
      },
    ],
  } satisfies HeroContent,
  capabilities: [
    {
      title: "Product Development",
      description:
        "Turning ideas into launch-ready digital products with strong structure and clear execution.",
    },
    {
      title: "Web Platforms",
      description:
        "Building modern platforms that support users, workflows, and scalable digital operations.",
    },
    {
      title: "EdTech Innovation",
      description:
        "Creating education-focused products that improve access, guidance, and digital opportunity.",
    },
    {
      title: "Business Solutions",
      description:
        "Designing business-ready systems and websites that strengthen credibility, efficiency, and growth.",
    },
  ] satisfies CapabilityItem[],
  about: {
    eyebrow: "About",
    title: "About THANDULULO TECHNOLOGIES",
    description:
      "THANDULULO TECHNOLOGIES is a digital solutions company focused on building practical, modern, and scalable technology products.",
    body:
      "The company works on educational technology, web platforms, and digital systems that help people and organizations operate better. Its delivery approach combines product thinking, clean execution, and maintainable architecture so solutions can support real growth over time.",
    founderNote:
      "Founded by Thandululo Nengovhela, the company reflects a strong focus on innovation, usability, and long-term product value.",
    focusAreas: [
      "Digital products",
      "Web platforms",
      "Educational technology",
      "Scalable systems",
    ],
    cards: [
      {
        title: "Practical Product Building",
        description:
          "Solutions are shaped around real user needs, clear outcomes, and product decisions that can scale.",
        bullets: [
          "Modern architecture choices",
          "Clean reusable interfaces",
          "Long-term maintainability",
        ],
      },
      {
        title: "Impact-Driven Innovation",
        description:
          "The company prioritizes useful technology that improves access, efficiency, and digital experience quality.",
        bullets: [
          "EdTech opportunity thinking",
          "Business-ready solution design",
          "User-centered product decisions",
        ],
      },
      {
        title: "Execution With Clarity",
        description:
          "From early concepts to polished launches, projects are built with disciplined structure and strong delivery focus.",
        bullets: [
          "Scalable full stack systems",
          "Structured rollout approach",
          "Commercially credible outcomes",
        ],
      },
    ],
  } satisfies AboutContent,
  services: {
    eyebrow: "Solutions",
    title: "Services designed to launch products and strengthen digital operations",
    description:
      "THANDULULO TECHNOLOGIES delivers product-minded development across web applications, business websites, education-focused systems, and full stack solution builds.",
    items: [
      {
        title: "Web Application Development",
        description:
          "Custom web applications built for usability, scalability, and modern product performance.",
        bullets: ["App Router builds", "Responsive interfaces", "Platform-ready architecture"],
        icon: "web",
      },
      {
        title: "Educational Technology Solutions",
        description:
          "Digital products and systems designed to improve learner access, guidance, and educational experiences.",
        bullets: ["Student platform thinking", "Opportunity access flows", "Clear information design"],
        icon: "edtech",
      },
      {
        title: "Landing Pages & Business Websites",
        description:
          "Premium business-facing websites that communicate credibility, clarity, and strong digital positioning.",
        bullets: ["Company landing pages", "Brand-forward messaging", "Conversion-aware structure"],
        icon: "business",
      },
      {
        title: "Firebase & Full Stack Systems",
        description:
          "Modern application systems using scalable backend services, data flows, and connected user experiences.",
        bullets: ["Realtime foundations", "Auth and data flows", "Practical system delivery"],
        icon: "systems",
      },
    ],
  } satisfies ServicesContent,
  projects: {
    eyebrow: "Products",
    title: "Products & Featured Work",
    description:
      "Gradiate leads the product story, supported by strategic solution concepts that reflect how THANDULULO TECHNOLOGIES can build platforms, systems, and business-ready experiences.",
    items: [
      {
        title: "Gradiate",
        category: "Flagship Product",
        description:
          "A student-focused educational platform built to improve access to academic opportunities, practical guidance, and important information.",
        outcome:
          "Positions the company around EdTech innovation, digital empowerment, and a long-term product vision for learner support.",
        tags: [
          "EdTech",
          "Student Platform",
          "Academic Opportunities",
          "Digital Empowerment",
        ],
        actions: [
          { label: "Learn More", href: "#contact" },
          { label: "Discuss Product", href: "#contact" },
        ],
        highlights: [
          "Opportunity discovery and guidance",
          "Clear access to useful information",
          "Scalable product foundation for growth",
        ],
      },
      {
        title: "Student Information Platform",
        category: "Platform Solution",
        description:
          "A structured digital platform concept for schools, education programs, or learner communities that need notices, resources, and communication in one system.",
        outcome:
          "Shows how the company can design information systems that reduce friction and improve student engagement.",
        tags: [
          "Education Systems",
          "Student Resources",
          "Digital Communication",
          "Platform Design",
        ],
        actions: [
          { label: "View Concept", href: "#solutions" },
          { label: "Request Similar Build", href: "#contact" },
        ],
        highlights: [
          "Centralized notices and resources",
          "Clear navigation for student use",
          "Practical platform structure for scale",
        ],
      },
      {
        title: "Smart Application Dashboard",
        category: "Business System",
        description:
          "A dashboard concept for tracking submissions, workflows, and status visibility across growing operational processes.",
        outcome:
          "Demonstrates how internal systems can support decision-making, transparency, and more efficient execution.",
        tags: [
          "Dashboard UI",
          "Workflow Visibility",
          "Operational Systems",
          "Business Tools",
        ],
        actions: [
          { label: "Explore Solution", href: "#solutions" },
          { label: "Talk Through Scope", href: "#contact" },
        ],
        highlights: [
          "Status-driven dashboard patterns",
          "Clear operational visibility",
          "Scalable internal system thinking",
        ],
      },
      {
        title: "Business Landing Platform",
        category: "Business Web System",
        description:
          "A premium web presence concept for companies that need a strong digital front door, polished messaging, and modern presentation.",
        outcome:
          "Reflects the company's ability to build business-facing web experiences that support trust and growth.",
        tags: [
          "Business Websites",
          "Brand Positioning",
          "Landing Systems",
          "Digital Presence",
        ],
        actions: [
          { label: "See Approach", href: "#about" },
          { label: "Start a Project", href: "#contact" },
        ],
        highlights: [
          "Premium company presentation",
          "Structured messaging and layout",
          "Reusable launch-ready web system",
        ],
      },
    ],
  } satisfies ProjectsContent,
  reasons: {
    eyebrow: "Why Choose Us",
    title: "Why Work With Us",
    description:
      "The company is built around product discipline, useful technology, and digital execution that stays aligned with real-world goals.",
    items: [
      {
        title: "Modern Scalable Development",
        description:
          "Solutions are built with current tooling, clean architecture, and room to grow beyond the first launch.",
      },
      {
        title: "Practical Problem Solving",
        description:
          "Projects stay focused on outcomes, not complexity for its own sake, which keeps the work commercially useful.",
      },
      {
        title: "Clean User-Focused Design",
        description:
          "Interfaces are shaped to be credible, intuitive, and aligned with how real users move through a product or system.",
      },
      {
        title: "Strong Product Vision",
        description:
          "The company approaches each build with long-term product value in mind, not just short-term delivery.",
      },
    ],
  } satisfies ReasonsContent,
  founder: {
    eyebrow: "Founder",
    title: "Meet the Founder",
    description:
      "Founded by Thandululo Nengovhela, the company is guided by a product-minded approach to building useful, scalable digital solutions.",
    body:
      "THANDULULO TECHNOLOGIES was created to turn practical ideas into modern platforms, products, and systems that create long-term value. Founder involvement stays focused on direction, execution quality, and innovation rather than personal branding.",
    cta: { label: "Contact the Company", href: "#contact" },
    principles: ["Innovation", "Usability", "Long-term value"],
  } satisfies FounderContent,
  contact: {
    eyebrow: "Contact",
    title: "Let's Build Something Meaningful",
    description:
      "If you need a product-minded technology company to shape a platform, website, or digital solution, start the conversation here.",
    email: "hello@thandululo.tech",
    primaryCta: { label: "Let's Talk", href: "mailto:hello@thandululo.tech" },
    socials: [
      {
        label: "Email",
        description:
          "The best channel for project inquiries, solution discussions, and business conversations.",
        href: "mailto:hello@thandululo.tech",
      },
      {
        label: "GitHub",
        description:
          "Use this slot for repositories, technical case studies, and public product work.",
        href: "https://github.com/",
      },
      {
        label: "LinkedIn",
        description:
          "Use this slot for business presence, founder profile context, and professional outreach.",
        href: "https://www.linkedin.com/",
      },
    ],
  } satisfies ContactContent,
} as const;
