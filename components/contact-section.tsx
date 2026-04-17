import { ArrowUpRight, BriefcaseBusiness, FolderGit2, Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import type { ContactContent } from "@/data/site-content";

const socialIcons = [Mail, FolderGit2, BriefcaseBusiness];

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell pb-24 sm:pb-28">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-10 lg:px-8">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <article className="glass-panel rounded-[34px] p-7 sm:p-8 lg:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-base-content/45">
              Direct Contact
            </p>
            <h3 className="mt-5 text-balance text-3xl font-semibold text-base-content sm:text-4xl">
              {contact.primaryCta.label}
            </h3>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-base-content/70">
              Email is the fastest route for project work, collaborations, and serious product conversations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={contact.primaryCta.href}
                className="btn btn-primary rounded-full border-0 px-6 text-sm font-medium shadow-glow"
              >
                {contact.primaryCta.label}
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={contact.primaryCta.href}
                className="rounded-full border border-white/10 bg-black/25 px-5 py-3 font-mono text-sm text-base-content/82 hover:border-primary/35 hover:bg-primary/10"
              >
                hello@thandululo.tech
              </a>
            </div>
          </article>

          <div className="grid gap-4">
            {contact.socials.map((social, index) => {
              const Icon = socialIcons[index] ?? Mail;

              return (
                <article
                  key={social.label}
                  className="glass-panel rounded-[28px] p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="shadow-glow flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                      className="btn btn-ghost rounded-full border border-white/10 bg-white/5 px-4 text-xs font-medium uppercase tracking-[0.24em] text-base-content/72 hover:border-primary/35 hover:bg-primary/10"
                    >
                      Open
                    </a>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-base-content">
                    {social.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-base-content/65">
                    {social.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
