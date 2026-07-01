import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

const tools = ["WhatsApp", "Google Sheets", "HubSpot", "Notion", "Gmail", "Airtable", "Shopify", "Slack"];

export default function Integrations() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="bg-surface/60 border border-line rounded-card p-10 md:p-14 text-center">
          <span className="inline-block bg-lavender text-ink-soft text-[11px] tracking-wide font-medium px-3 py-1 rounded-full mb-6">
            {t("integrations.eyebrow")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-8 whitespace-pre-line">
            {t("integrations.title")}
          </h2>
          <button className="bg-ink text-cream text-sm font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2 mb-10">
            {t("integrations.cta")} <span aria-hidden="true">→</span>
          </button>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-surface border border-line rounded-full px-4 py-1.5 text-sm text-ink-soft"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
