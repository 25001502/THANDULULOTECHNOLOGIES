import {
  ContactCta,
  ContentCards,
  ContentList,
  ContentPage,
  ContentSection,
} from "../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../seo-config";
import { siteContent } from "@/data/site-content";

const path = "/about";
const description =
  "Learn about THANDULULO TECHNOLOGIES, a South African digital solutions company founded by Thandululo Nengovhela to build practical, scalable technology.";

export const metadata = createPageMetadata({
  title: "About THANDULULO TECHNOLOGIES",
  description,
  path,
  keywords: [
    "About THANDULULO TECHNOLOGIES",
    "South African technology company",
    "Thandululo Nengovhela",
    "digital solutions company",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About THANDULULO TECHNOLOGIES",
  url: `${SITE_URL}${path}`,
  about: {
    "@id": ORGANIZATION_ID,
  },
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <ContentPage
      eyebrow="Company"
      title={about.title}
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About", href: path },
      ]}
      relatedLinks={[
        {
          title: "Meet Thandululo Nengovhela",
          description: "Learn more about the founder and the product-minded direction behind the company.",
          href: "/about/thandululo-nengovhela",
        },
        {
          title: "Explore our services",
          description: "See how we build web platforms, educational technology, and connected systems.",
          href: "/services",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="Why the company exists">
        <p>{about.body}</p>
        <p>{about.founderNote}</p>
        <ContentList items={about.focusAreas} />
      </ContentSection>

      <ContentSection title="How we approach digital products">
        <ContentCards items={about.cards} />
      </ContentSection>

      <ContentSection title="Built from South Africa">
        <p>
          THANDULULO TECHNOLOGIES is built from a South African base and focuses on
          technology that can create practical value for students, businesses,
          organizations, and growing digital teams.
        </p>
        <p>
          The company prioritizes clear product decisions, maintainable systems, and
          focused delivery so each solution has a strong foundation beyond its first
          launch.
        </p>
      </ContentSection>

      <ContactCta />
    </ContentPage>
  );
}

