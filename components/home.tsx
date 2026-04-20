import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Link2,
  Mail,
  Play,
  SendHorizontal,
  Sparkles,
  Star,
  MessageCircle,
} from 'lucide-react';

type Stat = {
  value: string;
  label: string;
};

type Testimonial = {
  title: string;
  body: string;
  name: string;
  role: string;
  initials: string;
};

type FaqCard = {
  title: string;
  body: string;
};

type FooterColumn = {
  title: string;
  links: string[];
};

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
];

const heroStats: Stat[] = [
  { value: '4+', label: 'Digital Products' },
  { value: '3+', label: 'Core Focus Areas' },
  { value: '2025', label: 'Founded In' },
];

const testimonialCards: Testimonial[] = [
  {
    title: 'Clear Product Thinking',
    body:
      'THANDULULO TECHNOLOGIES brought structure, clarity, and strong execution to the product process. The final result felt modern, practical, and ready for real users.',
    name: 'M. Ndou',
    role: 'Education Partner',
    initials: 'MN',
  },
  {
    title: 'Reliable and Modern',
    body:
      'The team translated rough ideas into a clean digital experience with strong visual direction and sensible technical choices. Communication stayed sharp throughout.',
    name: 'A. Mulaudzi',
    role: 'Project Stakeholder',
    initials: 'AM',
  },
  {
    title: 'Strong EdTech Vision',
    body:
      'What stood out most was the focus on impact. The product direction was not just attractive visually, it was aligned to real student needs and long-term growth.',
    name: 'T. Netshiavha',
    role: 'Community Reviewer',
    initials: 'TN',
  },
];

const faqCards: FaqCard[] = [
  {
    title: 'Do you build custom web platforms?',
    body:
      'Yes. We design and develop tailored web applications, landing pages, dashboards, and scalable business platforms based on the goals of the project.',
  },
  {
    title: 'Can you work on education-focused products?',
    body:
      'Yes. Educational technology is one of our strongest focus areas, including student platforms, information systems, guidance tools, and digital access solutions.',
  },
  {
    title: 'Do you also handle deployment and launch?',
    body:
      'Yes. We can support hosting, Firebase-based deployments, production readiness, domain setup, and the technical steps required to get a platform live.',
  },
];

const footerColumns: FooterColumn[] = [
  {
    title: 'Home',
    links: ['Hero Section', 'Highlights', 'Products', 'Testimonials', 'FAQs'],
  },
  {
    title: 'About Us',
    links: ['Our Story', 'Mission', 'Work Style', 'Founder', 'Vision'],
  },
  {
    title: 'Products',
    links: ['Gradiate', 'Student Platforms', 'Dashboards', 'Landing Pages'],
  },
  {
    title: 'Services',
    links: ['Web Development', 'UI Systems', 'Firebase Builds', 'Product Strategy'],
  },
  {
    title: 'Contact',
    links: ['Contact Form', 'Business Enquiries', 'Partnerships', 'Support'],
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  buttonText,
  buttonHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="max-w-4xl space-y-4">
        <div className="flex items-center gap-2 text-white/60">
          <Sparkles className="h-4 w-4 text-white/50" />
          <span className="text-xs uppercase tracking-[0.28em] text-white/40">{eyebrow}</span>
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
        <p className="max-w-3xl text-base leading-8 text-white/55 sm:text-lg">{description}</p>
      </div>
      {buttonText && buttonHref ? (
        <Link href={buttonHref} className="btn-dark self-start whitespace-nowrap">
          {buttonText}
        </Link>
      ) : null}
    </div>
  );
}

function BrandMark() {
  return (
    <div className="relative h-11 w-11 rounded-full bg-[#7c3aed]/20 ring-1 ring-white/10">
      <span className="absolute left-[7px] top-[6px] h-7 w-4 rounded-full bg-[#7c3aed]" />
      <span className="absolute right-[7px] top-[6px] h-7 w-4 rounded-full bg-[#7c3aed] [clip-path:polygon(0_0,100%_0,100%_55%,0_100%)]" />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative isolate overflow-hidden rounded-[28px] border border-white/8 bg-[#0d0d10] min-h-[560px] lg:min-h-[760px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.22),transparent_35%)]" />
      <div className="hero-lines absolute inset-0 opacity-50" />
      <div className="absolute inset-y-0 left-0 w-px bg-white/8" />

      <div className="absolute left-8 top-24 z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-black/45 backdrop-blur-md sm:left-10 sm:top-36">
        <div className="absolute inset-[10px] rounded-full border border-white/10" />
        <div className="text-center">
          <ArrowRight className="mx-auto h-8 w-8 text-white/90" />
        </div>
      </div>

      <div className="absolute bottom-0 right-[4%] top-[8%] w-[70%] min-w-[280px]">
        <div className="absolute bottom-0 left-[2%] h-[48%] w-[40%] rounded-t-[28px] rounded-b-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(82,70,255,0.95),rgba(31,41,255,0.58))] shadow-[0_0_80px_rgba(80,70,255,0.18)]">
          <div className="window-grid h-full w-full opacity-45" />
        </div>
        <div className="absolute bottom-0 left-[26%] h-[78%] w-[34%] rounded-t-[34px] rounded-b-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(99,102,241,0.98),rgba(37,99,235,0.56))] shadow-[0_0_100px_rgba(99,102,241,0.16)]">
          <div className="window-grid h-full w-full opacity-45" />
          <div className="absolute right-0 top-[50%] h-[9%] w-[72%] -translate-y-1/2 rounded-l-2xl border-y border-l border-white/10 bg-black/40 backdrop-blur-sm" />
        </div>
        <div className="absolute bottom-0 right-[14%] h-[60%] w-[26%] rounded-t-[24px] rounded-b-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(74,108,255,0.95),rgba(37,99,235,0.46))] shadow-[0_0_80px_rgba(74,108,255,0.16)]">
          <div className="window-grid h-full w-full opacity-45" />
        </div>
        <div className="absolute bottom-0 right-0 h-[42%] w-[20%] rounded-t-[20px] rounded-b-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(96,165,250,0.88),rgba(59,130,246,0.34))] shadow-[0_0_60px_rgba(96,165,250,0.12)]">
          <div className="window-grid h-full w-full opacity-40" />
        </div>
      </div>
    </div>
  );
}

function HeroStat({ value, label }: Stat) {
  return (
    <div className="surface-card flex min-h-[118px] flex-col justify-end gap-2 rounded-[22px] p-7">
      <span className="text-5xl font-semibold tracking-tight text-white">{value}</span>
      <span className="text-xl text-white/45">{label}</span>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="surface-card rounded-[24px] p-10">
      <div className="mb-8 flex gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.03]"
          >
            <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
          </div>
        ))}
      </div>
      <h3 className="mb-5 text-[2rem] font-medium tracking-tight text-white">{item.title}</h3>
      <p className="mb-12 max-w-xl text-[1.1rem] leading-9 text-white/70">{item.body}</p>
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[radial-gradient(circle_at_top,#2c2c38,#0f0f14)] text-lg font-semibold text-white ring-1 ring-white/10">
          {item.initials}
        </div>
        <div>
          <p className="text-2xl font-medium text-white">{item.name}</p>
          <p className="text-xl text-white/45">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function FaqCardItem({ item }: { item: FaqCard }) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[24px] p-10">
      <h3 className="mb-8 max-w-lg text-[2rem] font-medium leading-[1.35] tracking-tight text-white">{item.title}</h3>
      <p className="mb-10 text-[1.08rem] leading-8 text-white/55">{item.body}</p>
      <button className="btn-dark mt-auto self-start">Read More</button>
    </article>
  );
}

function FooterColumnList({ column }: { column: FooterColumn }) {
  return (
    <div className="space-y-6">
      <h4 className="text-2xl font-medium text-white/75">{column.title}</h4>
      <ul className="space-y-4 text-xl text-white/85">
        {column.links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-[#8b5cf6]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pager() {
  return (
    <div className="flex items-center gap-4">
      <button className="icon-button" aria-label="Previous">
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button className="icon-button" aria-label="Next">
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#08090b] text-white selection:bg-[#7c3aed] selection:text-white">
      <div className="page-grid pointer-events-none fixed inset-0 opacity-40" />
      <div className="page-glow pointer-events-none fixed inset-0" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#101113]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-5 lg:px-10">
          <Link href="#home" className="flex items-center gap-4">
            <BrandMark />
            <span className="text-3xl font-semibold tracking-tight text-white">THANDULULO TECHNOLOGIES</span>
          </Link>

          <nav className="hidden items-center gap-2 rounded-2xl border border-white/8 bg-black/20 p-2 lg:flex">
            {navLinks.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-xl px-6 py-3 text-lg transition ${
                  index === 0
                    ? 'bg-white/[0.03] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]'
                    : 'text-white/80 hover:bg-white/[0.03] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="#contact" className="btn-dark hidden lg:inline-flex">
            Contact Us
          </Link>
        </div>
      </header>

      <section id="home" className="border-b border-white/8">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border-r border-white/8 px-6 py-16 lg:px-12 lg:py-24 xl:px-20 xl:py-28">
            <div className="max-w-3xl pt-8 lg:pt-14">
              <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#b49bff]">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#8b5cf6]" />
                Company-first digital solutions
              </p>
              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
                Build Modern Digital Products with THANDULULO TECHNOLOGIES
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/60 sm:text-2xl">
                We create scalable websites, student-focused platforms, and practical digital systems that help people,
                communities, and growing organisations move faster with better technology.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link href="#about" className="btn-dark">
                  Learn More
                </Link>
                <Link href="#products" className="btn-primary-purple">
                  Explore Products
                </Link>
              </div>

              <div className="mt-16 grid gap-5 md:grid-cols-3">
                {heroStats.map((item) => (
                  <HeroStat key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 py-10 lg:px-0 lg:py-0">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section id="about" className="section-shell border-b border-white/8">
        <SectionHeader
          eyebrow="Company Overview"
          title="A modern product studio inspired by the structure of the Figma template"
          description="This version adapts the dark premium layout into a business-first landing page for THANDULULO TECHNOLOGIES. The focus is on digital products, educational technology, strong UI systems, and practical software delivery rather than a generic portfolio presentation."
        />
      </section>

      <section id="products" className="section-shell border-b border-white/8">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Clients and Partners Say"
          description="Use this section for social proof, partnership feedback, or founder credibility. The layout mirrors the premium three-card testimonial block from the design while keeping your brand direction company-first."
          buttonText="View All Testimonials"
          buttonHref="#contact"
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {testimonialCards.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl text-white/85">01 of 10</p>
          <Pager />
        </div>
      </section>

      <section id="services" className="section-shell border-b border-white/8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="This block recreates the clean three-card FAQ presentation from the reference page. It works well for service scope, delivery questions, deployment support, or product planning information."
          buttonText="View All FAQ's"
          buttonHref="#contact"
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {faqCards.map((item) => (
            <FaqCardItem key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl text-white/85">01 of 10</p>
          <Pager />
        </div>
      </section>

      <section id="contact" className="border-b border-white/8">
        <div className="cta-shell mx-auto max-w-[1600px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="cta-panel relative overflow-hidden rounded-[28px] border border-white/8 px-8 py-12 lg:px-14 lg:py-16">
            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-4xl">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Start Building Your Next Digital Product Today
                </h2>
                <p className="mt-6 text-lg leading-9 text-white/60 lg:text-2xl">
                  Whether you need a student platform, a business website, a Firebase-powered system, or a sharper digital
                  presence, THANDULULO TECHNOLOGIES is ready to help turn the idea into a polished, launch-ready product.
                </p>
              </div>

              <Link href="mailto:hello@thandululo.tech" className="btn-primary-purple whitespace-nowrap">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>

        <footer className="mx-auto max-w-[1600px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid gap-12 xl:grid-cols-[1.15fr_repeat(5,minmax(0,1fr))]">
            <div className="space-y-10 xl:pr-12">
              <div className="flex items-center gap-4">
                <BrandMark />
                <span className="text-3xl font-semibold tracking-tight text-white">THANDULULO TECHNOLOGIES</span>
              </div>

              <label className="input input-bordered flex h-16 items-center gap-3 rounded-2xl border-white/8 bg-white/[0.02] text-white shadow-none">
                <Mail className="h-5 w-5 text-white/45" />
                <input
                  type="email"
                  className="grow bg-transparent text-lg placeholder:text-white/35"
                  placeholder="Enter Your Email"
                />
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] transition hover:bg-[#8b5cf6]">
                  <SendHorizontal className="h-5 w-5" />
                </button>
              </label>
            </div>

            {footerColumns.map((column) => (
              <FooterColumnList key={column.title} column={column} />
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-6 border-t border-white/8 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-8 text-lg text-white/70">
              <span>@2026 THANDULULO TECHNOLOGIES. All Rights Reserved.</span>
              <a href="#" className="transition hover:text-white">
                Terms &amp; Conditions
              </a>
            </div>

            <div className="flex items-center gap-4">
              {[Globe, Link2, MessageCircle, Play].map((Icon, index) => (
                <button key={index} className="icon-button" aria-label="Social media link">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
