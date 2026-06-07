import {
  ContactCta,
  ContentCards,
  ContentList,
  ContentPage,
  ContentSection,
} from "../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../seo-config";
import { siteContent } from "@/data/site-content";

const path = "/services";
const description =
  "Explore web application development, educational technology, business websites, and full stack systems from THANDULULO TECHNOLOGIES.";

export const metadata = createPageMetadata({
  title: "Digital Product and Web Development Services",
  description,
  path,
  keywords: [
    "web development services South Africa",
    "educational technology development",
    "digital product development",
    "full stack systems",
  ],
});

const serviceLinks = [
  "/services/web-development",
  "/services/educational-technology",
  "/contact",
  "/contact",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "THANDULULO TECHNOLOGIES Services",
  url: `${SITE_URL}${path}`,
  about: {
    "@id": ORGANIZATION_ID,
  },
};

export default function ServicesPage() {
  const { services } = siteContent;

  return (
    <ContentPage
      eyebrow="Services"
      title={services.title}
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: path },
      ]}
      relatedLinks={[
        {
          title: "Gradiate",
          description: "See how our product thinking is applied to a student-focused EdTech platform.",
          href: "/products/gradiate",
        },
        {
          title: "Technology insights",
          description: "Read practical thinking on scalable platforms and useful educational technology.",
          href: "/insights",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="What we build">
        <p>{services.description}</p>
        <ContentCards
          items={services.items.map((service, index) => ({
            title: service.title,
            description: service.description,
            href: serviceLinks[index],
          }))}
        />
      </ContentSection>

      <ContentSection title="A product-minded delivery process">
        <p>
          Every engagement starts with the problem, users, and required outcome. The
          technical implementation follows from those decisions rather than leading
          them.
        </p>
        <ContentList
          items={[
            "Clarify goals, users, requirements, and constraints",
            "Define a focused first release and practical technical foundation",
            "Build responsive interfaces and maintainable application logic",
            "Validate the experience, deploy, and plan the next stage",
          ]}
        />
      </ContentSection>

      <ContentSection title="Designed for long-term value">
        <p>
          We favour clean architecture, reusable interfaces, sensible data flows, and
          deployment choices that support continued improvement after launch.
        </p>
        <p>
          This approach is useful for new products, growing platforms, internal
          systems, and organizations replacing fragmented manual processes.
        </p>
      </ContentSection>

      <ContactCta />
    </ContentPage>
  );
}

