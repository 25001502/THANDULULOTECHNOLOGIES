import {
  ContactCta,
  ContentList,
  ContentPage,
  ContentSection,
} from "../../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../../seo-config";

const path = "/insights/building-scalable-web-platforms";
const title = "Building scalable web platforms without unnecessary complexity";
const description =
  "A practical guide to building web platforms that can grow through focused scope, clean architecture, efficient data access, and maintainable product decisions.";

export const metadata = createPageMetadata({
  title,
  description,
  path,
  keywords: [
    "building scalable web platforms",
    "web application architecture",
    "scalable Next.js application",
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

export default function ScalablePlatformsArticle() {
  return (
    <ContentPage
      eyebrow="Web platform insight"
      title={title}
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Insights", href: "/insights" },
        { label: "Scalable web platforms", href: path },
      ]}
      relatedLinks={[
        {
          title: "Web application development",
          description: "Explore our approach to building practical, maintainable web products.",
          href: "/services/web-development",
        },
        {
          title: "Designing useful EdTech platforms",
          description: "Apply focused product thinking to learner-facing platforms.",
          href: "/insights/designing-useful-edtech-platforms",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="Scalability starts with clarity">
        <p>
          A platform is easier to scale when the team is clear about its users, core
          workflow, and first meaningful outcome. Unclear product scope creates more
          technical complexity than growth itself.
        </p>
        <p>
          The strongest first release solves a focused problem well and creates a
          foundation for learning from real use.
        </p>
      </ContentSection>

      <ContentSection title="Separate the important concerns">
        <p>
          Interfaces, application logic, data access, and external integrations should
          have understandable boundaries. This makes changes easier to test and reduces
          the chance that one feature quietly breaks another.
        </p>
        <ContentList
          items={[
            "Keep reusable interface components independent from page-specific data",
            "Centralize important data operations and validation",
            "Make authentication and authorization rules explicit",
            "Use structured error, loading, and empty states",
          ]}
        />
      </ContentSection>

      <ContentSection title="Design efficient data flows">
        <p>
          Database choices matter, but efficient access patterns matter more. Fetch the
          data a screen actually needs, avoid unnecessary realtime listeners, and plan
          indexes around real queries.
        </p>
        <p>
          As the product grows, these decisions reduce cost, improve performance, and
          make behaviour easier to reason about.
        </p>
      </ContentSection>

      <ContentSection title="Build for change, not every imagined future">
        <p>
          Premature abstraction often makes early products harder to change. Good
          architecture leaves room for growth while keeping the current system simple
          enough for the team to understand.
        </p>
        <ContentList
          items={[
            "Use established framework patterns before creating custom infrastructure",
            "Add abstractions when they remove real duplication or complexity",
            "Measure performance before optimizing",
            "Document important decisions and operational requirements",
          ]}
        />
      </ContentSection>

      <ContentSection title="Treat operations as part of the product">
        <p>
          Deployment, monitoring, security, backups, and content operations are not
          afterthoughts. A platform that works in development but is difficult to
          operate is not ready to scale.
        </p>
      </ContentSection>

      <ContactCta
        title="Planning a platform that needs room to grow?"
        description="THANDULULO TECHNOLOGIES can help shape a focused product and a maintainable technical foundation."
      />
    </ContentPage>
  );
}

