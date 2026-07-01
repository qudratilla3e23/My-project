import { useLanguage } from "../context/LanguageContext.jsx";
import Marquee from "./Marquee.jsx";

const logos = ["JUMIA", "DATADOG", "ElevenLabs", "MISTRAL AI ", "Cohere", "LlamaIndex", "LangChain", "Pinecone", "Weaviate", "Supabase", "Vercel", "Render", "Railway", "Fly.io", "PlanetScale", "PostHog", "Sentry", "Linear", "Figma", "Notion", "Slack"];

export default function LogoBar() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
        <p className="text-[11px] tracking-wide text-muted font-mono leading-relaxed shrink-0 max-w-[9rem] text-center md:text-left">
          {t("logos.eyebrow")}
        </p>
        <Marquee duration={60} className="flex-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {logos.map((logo) => (
            <button
              key={logo}
              className="font-display text-xl md:text-2xl font-medium text-ink-soft px-8 opacity-70"
            >
              {logo}
            </button>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
