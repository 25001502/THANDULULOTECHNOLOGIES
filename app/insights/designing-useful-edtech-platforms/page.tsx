import {
  ContactCta,
  ContentList,
  ContentPage,
  ContentSection,
} from "../../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../../seo-config";

const path = "/insights/designing-useful-edtech-platforms";
const title = "Designing useful EdTech platforms around real student needs";
const description =
  "Practical principles for educational technology that improves access through clear information, mobile usability, focused guidance, and responsible product design.";

export const metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "designing EdTech platforms",
    "student platform design",
    "educational technology South Africa",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}${path}`,
  datePublished: "2026-06-07",
  dateModified: "2026-06-07",
  author: { "@id": ORGANIZATION_ID },
  publisher: { "@id": ORGANIZATION_ID },
};

export default function UsefulEdtechArticle() {
  return (
    <ContentPage
      eyebrow="EdTech insight"
      title={title}
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Useful EdTech platforms", href: path },
      ]}
      relatedLinks={[
        {
          title: "Educational technology solutions",
          description: "Explore our approach to learner-focused platforms and digital systems.",
          href: "/services/educational-technology",
        },
        {
          title: "Gradiate",
          description: "See the student-focused product that informs our EdTech direction.",
          href: "/products/gradiate",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="Start with the access problem">
        <p>
          Educational technology is most useful when it reduces a real barrier.
          Students may struggle to find opportunities, understand requirements, access
          reliable guidance, or know what to do next.
        </p>
        <p>
          A strong product begins by identifying which barrier it can reduce and how
          success will be visible to the learner.
        </p>
      </ContentSection>

      <ContentSection title="Clarity is a core feature">
        <p>
          More information does not automatically create more value. Information must
          be structured, current, understandable, and connected to a meaningful next
          action.
        </p>
        <ContentList
          items={[
            "Use clear language and explain unfamiliar requirements",
            "Organize information according to learner goals",
            "Show important deadlines and next steps visibly",
            "Avoid overwhelming users with unnecessary options",
          ]}
        />
      </ContentSection>

      <ContentSection title="Design mobile-first">
        <p>
          For many learners, a phone is the primary way to access the internet. EdTech
          experiences should work on smaller screens, slower connections, and limited
          data without treating those conditions as edge cases.
        </p>
      </ContentSection>

      <ContentSection title="Build trust through responsible design">
        <p>
          Student-facing platforms should be clear about the information they collect,
          why it is needed, and who can access it. Security, privacy, and permissions
          must be part of the product design from the beginning.
        </p>
        <ContentList
          items={[
            "Collect only information that supports a defined purpose",
            "Keep access rules and administrative roles explicit",
            "Make errors and limitations understandable",
            "Create maintainable processes for reviewing and updating content",
          ]}
        />
      </ContentSection>

      <ContentSection title="Measure useful outcomes">
        <p>
          Engagement numbers can help, but they do not tell the full story. Useful
          measures include whether learners can find relevant information, understand
          requirements, complete important actions, and return when they need guidance.
        </p>
      </ContentSection>

      <ContactCta
        title="Planning an education-focused digital product?"
        description="We can help turn a learner access or information problem into a focused, usable platform."
      />
    </ContentPage>
  );
}

