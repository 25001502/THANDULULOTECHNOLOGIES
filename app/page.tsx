import { existsSync } from "node:fs";
import { join } from "node:path";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HighlightsSection } from "@/components/highlights-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeCtaSection } from "@/components/resume-cta-section";
import { siteContent } from "@/data/site-content";

export default function Home() {
  const publicDirectory = join(process.cwd(), "public");
  const hasAvatar = existsSync(join(publicDirectory, "avatar.jpg"));
  const hasResume = existsSync(join(publicDirectory, "resume.pdf"));

  return (
    <>
      <Navbar
        brand={siteContent.brand}
        links={siteContent.navigation}
        cta={siteContent.hero.primaryCta}
      />
      <main id="top" className="relative isolate overflow-x-clip">
        <Hero
          brand={siteContent.brand}
          hero={siteContent.hero}
          hasAvatar={hasAvatar}
        />
        <AboutSection about={siteContent.about} />
        <ProjectsSection projects={siteContent.projects} />
        <HighlightsSection highlights={siteContent.highlights} />
        <ResumeCtaSection resume={siteContent.resume} hasResume={hasResume} />
        <ContactSection contact={siteContent.contact} />
      </main>
      <Footer brand={siteContent.brand} />
    </>
  );
}
