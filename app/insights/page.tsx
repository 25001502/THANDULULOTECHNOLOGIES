import {
  ContentCards,
  ContentPage,
  ContentSection,
} from "../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../seo-config";

const path = "/insights";
const description =
  "Practical insights from THANDULULO TECHNOLOGIES on scalable web platforms, digital product development, and useful educational technology.";

export const metadata = createPageMetadata({
  title: "Technology and Product Insights",
  description,
  path,
  keywords: [
    "web platform insights",
    "EdTech product design",
    "digital product development South Africa",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "THANDULULO TECHNOLOGIES Insights",
  url: `${SITE_URL}${path}`,
  publisher: { "@id": ORGANIZATION_ID },
};

export default function InsightsPage() {
  return (
    <ContentPage
      eyebrow="Insights"
      title="Practical thinking for useful digital products"
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Insights", href: path },
      ]}
      relatedLinks={[
        {
          title: "Explore services",
          description: "See how these principles are applied to web platforms and EdTech solutions.",
          href: "/services",
        },
        {
          title: "About the company",
          description: "Learn about the product-minded approach behind our work.",
          href: "/about",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="Latest insights">
        <ContentCards
          items={[
            {
              title: "Building scalable web platforms without unnecessary complexity",
              description:
                "A practical view of architecture, product scope, data access, and the decisions that help a web platform grow.",
              href: "/insights/building-scalable-web-platforms",
            },
            {
              title: "Designing useful EdTech platforms around real student needs",
              description:
                "Why access, clarity, mobile usability, and maintainable information matter more than adding features.",
              href: "/insights/designing-useful-edtech-platforms",
            },
          ]}
        />
      </ContentSection>

      <ContentSection title="What we write about">
        <p>
          These insights focus on the decisions behind useful digital products:
          identifying real user problems, choosing a sensible first release, designing
          clear experiences, and building technical foundations that can be maintained.
        </p>
        <p>
          The aim is practical clarity for founders, teams, education organizations,
          and anyone planning a web platform or digital system.
        </p>
      </ContentSection>
    </ContentPage>
  );
}

