import {
  ContactCta,
  ContentCards,
  ContentList,
  ContentPage,
  ContentSection,
} from "../../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../../seo-config";

const path = "/services/educational-technology";
const description =
  "THANDULULO TECHNOLOGIES designs educational technology platforms that improve access to opportunities, guidance, resources, and useful learner information.";

export const metadata = createPageMetadata({
  title: "Educational Technology Solutions",
  description,
  path,
  keywords: [
    "educational technology South Africa",
    "student platform development",
    "EdTech solutions",
    "learner information platform",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Educational Technology Solutions",
  url: `${SITE_URL}${path}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: "South Africa",
  description,
};

export default function EducationalTechnologyPage() {
  return (
    <ContentPage
      eyebrow="Educational technology"
      title="Digital products that make useful opportunities easier to access"
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Educational technology", href: path },
      ]}
      relatedLinks={[
        {
          title: "Gradiate",
          description: "Explore the student-focused product at the centre of our EdTech work.",
          href: "/products/gradiate",
        },
        {
          title: "Designing useful EdTech platforms",
          description: "Read how clear information and user needs should shape education products.",
          href: "/insights/designing-useful-edtech-platforms",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="The problem we focus on">
        <p>
          Students often face fragmented information, unclear requirements, and
          difficult journeys when looking for academic opportunities or practical
          guidance. A useful EdTech product reduces that friction.
        </p>
        <p>
          We design platforms around accessible information, clear actions, mobile
          usability, and a structure that can support changing opportunities over time.
        </p>
      </ContentSection>

      <ContentSection title="What an effective platform needs">
        <ContentList
          items={[
            "Clear information architecture and language",
            "Mobile-first experiences for learners accessing the web on phones",
            "Useful filtering, discovery, and guidance flows",
            "Responsible handling of learner information and permissions",
            "Maintainable content and data processes for platform teams",
          ]}
        />
      </ContentSection>

      <ContentSection title="Potential solutions">
        <ContentCards
          items={[
            {
              title: "Opportunity discovery platforms",
              description:
                "Products that organize academic opportunities and make relevant information easier to understand.",
            },
            {
              title: "Student information systems",
              description:
                "Central spaces for notices, resources, guidance, and important learner communication.",
            },
            {
              title: "Application guidance tools",
              description:
                "Focused journeys that help learners understand requirements, next steps, and important deadlines.",
            },
            {
              title: "Education program portals",
              description:
                "Digital systems that help organizations support learners and manage structured program information.",
            },
          ]}
        />
      </ContentSection>

      <ContactCta
        title="Building for students or education teams?"
        description="Tell us what information, process, or opportunity access problem the platform needs to solve."
      />
    </ContentPage>
  );
}

