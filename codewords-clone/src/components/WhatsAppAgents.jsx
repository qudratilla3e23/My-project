import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

const featureKeys = ["Conversational", "Proactive", "Notification"];

export default function WhatsAppAgents() {
  const { t } = useLanguage();

  return (
    <section id="whatsapp" className="bg-surface/60 py-20 border-y border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <span className="inline-block bg-lavender text-ink-soft text-[11px] tracking-wide font-medium px-3 py-1 rounded-full mb-6">
            {t("whatsapp.eyebrow")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">{t("whatsapp.title")}</h2>
          <p className="text-ink-soft leading-relaxed mb-8 max-w-md">{t("whatsapp.text")}</p>

          <div className="divide-y divide-line border-t border-line">
            {featureKeys.map((title, i) => (
              <div key={title} className="py-4">
                <h3 className="font-medium">{title}</h3>
                {i === 0 && (
                  <>
                    <p className="text-sm text-ink-soft leading-relaxed mt-2 max-w-md">
                      A customer sends a message. The agent responds, asks
                      follow-up questions, collects what it needs, and
                      resolves the issue — or hands off to a human with full
                      context. Every inbound conversation handled, at any
                      volume, in any language.
                    </p>
                    <div className="h-0.5 w-16 bg-maroon mt-4" />
                  </>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Phone mockup */}
        <Reveal delay={150} className="flex justify-center md:justify-end">
          <div className="w-full max-w-[280px] bg-surface rounded-2xl border border-line shadow-sm overflow-hidden">
            <div className="bg-forest text-white text-sm px-4 py-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-mint text-forest text-xs font-bold flex items-center justify-center">
                C
              </span>
              <div>
                <p className="leading-none text-sm">Cody</p>
                <p className="text-[10px] text-cream/60">Online</p>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm bg-cream min-h-[260px]">
              <p className="bg-mint rounded-lg px-3 py-2">
                Build a rider onboarding agent — collect documents on
                WhatsApp, verify them, and approve riders automatically.
              </p>
              <p className="bg-surface border border-line rounded-lg px-3 py-2">
                Got it. Here's your agent:
                <br />
                1. Ask for ID + vehicle docs via WhatsApp
                <br />
                2. Verify and upload them automatically
                <br />
                3. Send approval or flag for human review
                <br />
                Ready to go live?
              </p>
              <p className="bg-mint rounded-lg px-3 py-2 inline-block">Yes — go live.</p>
              <p className="bg-surface border border-line rounded-lg px-3 py-2 text-forest font-medium">
                ✓ Agent is live on WhatsApp.
              </p>
            </div>
            <div className="flex items-center gap-2 border-t border-line p-3">
              <input
                disabled
                placeholder="Type a message..."
                className="flex-1 bg-cream rounded-full px-3 py-1.5 text-xs text-muted"
              />
              <span className="w-7 h-7 rounded-full bg-forest text-white flex items-center justify-center text-xs">
                ➤
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
