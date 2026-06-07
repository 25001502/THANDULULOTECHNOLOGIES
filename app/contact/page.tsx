import {
  ContentCards,
  ContentList,
  ContentPage,
  ContentSection,
} from "../components/ContentPage";
import { ORGANIZATION_ID, SITE_URL, createPageMetadata } from "../seo-config";
import { siteContent } from "@/data/site-content";

const path = "/contact";
const description =
  "Contact THANDULULO TECHNOLOGIES to discuss a web platform, educational technology product, business website, or connected digital system.";

export const metadata = createPageMetadata({
  title: "Contact THANDULULO TECHNOLOGIES",
  description,
  path,
  keywords: [
    "contact THANDULULO TECHNOLOGIES",
    "hire web developer South Africa",
    "digital product project",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact THANDULULO TECHNOLOGIES",
  url: `${SITE_URL}${path}`,
  about: { "@id": ORGANIZATION_ID },
};

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <ContentPage
      eyebrow="Contact"
      title={contact.title}
      description={description}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact", href: path },
      ]}
      relatedLinks={[
        {
          title: "Explore services",
          description: "Review the products, platforms, and systems we can help build.",
          href: "/services",
        },
        {
          title: "About the company",
          description: "Understand our focus, product mindset, and delivery approach.",
          href: "/about",
        },
      ]}
      schema={schema}
    >
      <ContentSection title="Start the conversation">
        <p>{contact.description}</p>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex rounded-full bg-[#ef233c] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
        >
          {contact.email}
        </a>
      </ContentSection>

      <ContentSection title="What to include">
        <p>
          A short, focused project brief helps us understand the problem and prepare a
          useful first conversation.
        </p>
        <ContentList
          items={[
            "The users or organization the solution should support",
            "The current problem, process, or opportunity",
            "The most important outcome for the first release",
            "Any timeline, technical constraints, or existing systems",
          ]}
        />
      </ContentSection>

      <ContentSection title="Good project fit">
        <ContentCards
          items={[
            {
              title: "New digital product",
              description:
                "You have a clear problem or product direction and need help shaping a focused first version.",
            },
            {
              title: "Platform improvement",
              description:
                "An existing platform needs a stronger user experience, technical foundation, or growth path.",
            },
            {
              title: "Education-focused system",
              description:
                "You need to improve learner access, information, guidance, or program operations.",
            },
            {
              title: "Business web presence",
              description:
                "Your organization needs a credible, modern website or connected web experience.",
            },
          ]}
        />
      </ContentSection>
    </ContentPage>
  );
}

