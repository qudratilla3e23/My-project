import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <Reveal className="bg-gradient-to-b from-maroon to-maroon-deep rounded-[2rem] px-6 py-16 text-center text-cream">
        <span className="inline-block bg-cream/10 text-cream/80 text-[11px] tracking-wide font-medium px-3 py-1 rounded-full mb-6">
          {t("cta.eyebrow")}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight max-w-xl mx-auto mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-cream/70 max-w-md mx-auto mb-8">{t("cta.subtitle")}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#start"
            className="bg-cream text-maroon-deep text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {t("cta.primary")}
          </a>
          <a
            href="#talk"
            className="border border-cream/40 text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-cream/10 transition-colors"
          >
            {t("cta.secondary")}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
