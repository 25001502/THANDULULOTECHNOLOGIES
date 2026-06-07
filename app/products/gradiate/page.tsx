import {
  ContactCta,
  ContentCards,
  ContentList,
  ContentPage,
  ContentSection,
} from "../../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../../seo-config";
import { siteContent } from "@/data/site-content";

const path = "/products/gradiate";
const description =
  "Gradiate is a student-focused educational platform founded  by Thandululo Nengovhela under THANDULULO TECHNOLOGIES, created to improve access to academic opportunities, guidance, and information.";

export const metadata = createPageMetadata({
  title: "Gradiate Student Platform",
  description,
  path,
  keywords: [
    "Gradiate",
    "Gradiate student platform",
    "South African student opportunities",
    "THANDULULO TECHNOLOGIES product",
    "Thandululo Nengovhela Gradiate",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Gradiate",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  url: `${SITE_URL}${path}`,
  creator: { "@id": ORGANIZATION_ID },
  description,
};

export default function GradiatePage() {
  const project = siteContent.projects.items[0];

  return (
    <ContentPage
      eyebrow="Flagship product"
      title="Gradiate"
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/#products" },
        { label: "Gradiate", href: path },
      ]}
      relatedLinks={[
        {
          title: "Educational technology solutions",
          description: "See how we approach learner-focused platforms and information systems.",
          href: "/services/educational-technology",
        },
        {
          title: "About THANDULULO TECHNOLOGIES",
          description: "Learn about the company and product thinking behind Gradiate.",
          href: "/about",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="The product mission">
        <p>{project.description}</p>
        <p>{project.outcome}</p>
        <ContentList items={project.highlights} />
      </ContentSection>

      <ContentSection title="What Gradiate is designed to improve">
        <ContentCards
          items={[
            {
              title: "Opportunity access",
              description:
                "Make academic and development opportunities easier for students to discover and understand.",
            },
            {
              title: "Practical guidance",
              description:
                "Present useful information in a structure that helps learners identify sensible next steps.",
            },
            {
              title: "Digital empowerment",
              description:
                "Give students a clearer digital starting point for important education-related decisions.",
            },
            {
              title: "Long-term platform value",
              description:
                "Build a product foundation that can expand with additional resources, tools, and learner needs.",
            },
          ]}
        />
      </ContentSection>

      <ContentSection title="Built by THANDULULO TECHNOLOGIES">
        <p>
          Gradiate reflects the company&apos;s focus on practical technology, clean
          user experiences, and products that address real information-access
          problems.
        </p>
        <p>
          The platform is guided by founder Thandululo Nengovhela and forms an
          important part of the company&apos;s educational technology direction.
        </p>
      </ContentSection>

      <ContactCta
        title="Interested in Gradiate or a similar platform?"
        description="Contact THANDULULO TECHNOLOGIES to discuss partnerships, product direction, or an education-focused solution."
      />
    </ContentPage>
  );
}

