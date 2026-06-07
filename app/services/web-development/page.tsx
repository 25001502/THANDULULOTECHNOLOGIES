import {
  ContactCta,
  ContentCards,
  ContentList,
  ContentPage,
  ContentSection,
} from "../../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../../seo-config";

const path = "/services/web-development";
const description =
  "THANDULULO TECHNOLOGIES builds responsive, scalable web applications and digital platforms with maintainable architecture and clear user experiences.";

export const metadata = createPageMetadata({
  title: "Web Application Development",
  description,
  path,
  keywords: [
    "web application development South Africa",
    "Next.js development",
    "React web platforms",
    "scalable web applications",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Application Development",
  url: `${SITE_URL}${path}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed: "South Africa",
  description,
};

export default function WebDevelopmentPage() {
  return (
    <ContentPage
      eyebrow="Web development"
      title="Web applications built for real use and continued growth"
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web development", href: path },
      ]}
      relatedLinks={[
        {
          title: "Educational technology solutions",
          description: "Explore platforms designed around learners, access, and useful information.",
          href: "/services/educational-technology",
        },
        {
          title: "Building scalable web platforms",
          description: "Read the practical architecture principles behind a platform that can grow.",
          href: "/insights/building-scalable-web-platforms",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="What we build">
        <ContentCards
          items={[
            {
              title: "Customer-facing platforms",
              description:
                "Responsive products that help users complete important tasks through clear, focused journeys.",
            },
            {
              title: "Operational dashboards",
              description:
                "Internal systems that improve workflow visibility, structured information, and team execution.",
            },
            {
              title: "Business web systems",
              description:
                "Modern websites and connected experiences that strengthen credibility and support growth.",
            },
            {
              title: "Product foundations",
              description:
                "Launch-ready first versions designed with a sensible path toward future features and users.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection title="Architecture with purpose">
        <p>
          Scalable does not mean adding complexity before it is needed. It means making
          deliberate decisions around routes, components, data access, authentication,
          performance, and deployment so the product can change without becoming
          fragile.
        </p>
        <ContentList
          items={[
            "Clear separation between interface, application logic, and data",
            "Reusable components and consistent interaction patterns",
            "Efficient reads, writes, and integrations",
            "Responsive layouts, loading states, empty states, and error handling",
            "Security and access control considered from the beginning",
          ]}
        />
      </ContentSection>

      <ContentSection title="Technology choices">
        <p>
          The company commonly works with modern React, Next.js, TypeScript, Firebase,
          and related web tooling. Technology is selected according to the product
          requirements, operating constraints, and long-term maintenance needs.
        </p>
        <p>
          The goal is not to chase tools. The goal is to deliver a stable, usable
          product with a foundation that remains understandable as it grows.
        </p>
      </ContentSection>

      <ContactCta
        title="Planning a web platform?"
        description="Share the users, workflow, and outcome you need. We can help shape a focused path from idea to launch."
      />
    </ContentPage>
  );
}

