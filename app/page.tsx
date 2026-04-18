import { existsSync } from "node:fs";
import { join } from "node:path";
import { AboutSection } from "@/components/about-section";
import { CapabilityStrip } from "@/components/capability-strip";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FounderNoteSection } from "@/components/founder-note-section";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SolutionsSection } from "@/components/solutions-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { siteContent } from "@/data/site-content";

export default function Home() {
  const publicDirectory = join(process.cwd(), "public");
  const hasAvatar = existsSync(join(publicDirectory, "avatar.jpg"));

  return (
    <>
      <Navbar
        brand={siteContent.brand}
        links={siteContent.navigation}
        cta={siteContent.contact.primaryCta}
      />
      <main id="top" className="relative isolate overflow-x-clip">
        <Hero brand={siteContent.brand} hero={siteContent.hero} />
        <CapabilityStrip items={siteContent.capabilities} />
        <AboutSection about={siteContent.about} />
        <SolutionsSection services={siteContent.services} />
        <ProjectsSection projects={siteContent.projects} />
        <WhyChooseUsSection reasons={siteContent.reasons} />
        <FounderNoteSection
          founder={siteContent.founder}
          brand={siteContent.brand}
          hasAvatar={hasAvatar}
        />
        <ContactSection contact={siteContent.contact} />
      </main>
      <Footer brand={siteContent.brand} links={siteContent.navigation} />
    </>
  );
}
