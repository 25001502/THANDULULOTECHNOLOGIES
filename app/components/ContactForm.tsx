import { SITE_URL } from "../seo-config";
import { siteContent } from "@/data/site-content";

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-[#ef233c]";

export function ContactForm() {
  const { contact } = siteContent;

  return (
    <form
      id="contact-form"
      action={`https://formsubmit.co/${contact.email}`}
      method="POST"
      className="space-y-5 rounded-2xl border border-white/10 bg-zinc-950 p-6 sm:p-8"
    >
      <input
        type="hidden"
        name="_subject"
        value="New THANDULULO TECHNOLOGIES project inquiry"
      />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${SITE_URL}/contact#contact-form`} />
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-300">
          <span>Full name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={fieldClasses}
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-300">
          <span>Email address</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-300">
          <span>Project type</span>
          <select required name="project_type" className={fieldClasses} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Web application</option>
            <option>Business website</option>
            <option>Educational technology</option>
            <option>Firebase or full stack system</option>
            <option>Product consultation</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-300">
          <span>Timeline</span>
          <input
            name="timeline"
            type="text"
            placeholder="Example: 2-4 weeks"
            className={fieldClasses}
          />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-zinc-300">
        <span>Project details</span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us what you want to build, who it is for, and the most important outcome."
          className={`${fieldClasses} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-[#ef233c] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
        >
          Send inquiry
        </button>
        <a
          href={`mailto:${contact.email}`}
          className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          {contact.email}
        </a>
      </div>
    </form>
  );
}
