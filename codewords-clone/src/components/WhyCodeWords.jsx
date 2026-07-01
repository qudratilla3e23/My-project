import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

export default function WhyCodeWords() {
  const { t } = useLanguage();

  return (
    <section className="bg-lavender py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <span className="inline-block bg-surface/60 text-ink-soft text-[11px] tracking-wide font-medium px-3 py-1 rounded-full mb-6">
            {t("why.eyebrow")}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl mb-10">{t("why.title")}</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 1: build prompt */}
          <Reveal className="bg-surface rounded-card p-6">
            <span className="text-[11px] text-muted font-mono">[01]</span>
            <div className="mt-3 flex items-center justify-between bg-cream border border-line rounded-full px-4 py-2 text-sm">
              <span>Build a rider onboarding agent for WhatsApp!</span>
              <span className="w-6 h-6 rounded-full bg-ink text-cream flex items-center justify-center text-xs shrink-0">
                ↗
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>• Connected to your WhatsApp number</li>
              <li>• Onboarding flow created (6 steps)</li>
              <li>• Google Sheets integration linked</li>
              <li className="text-ink">• Agent deployed — live on WhatsApp</li>
            </ul>
            <h3 className="font-medium mt-6 mb-1">
              Built by description, for the real world.
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              This isn't a developer tool. Describe what your team needs and
              Cody writes the logic, connects the tools, and deploys the
              agent — all from one conversation.
            </p>
          </Reveal>

          {/* Card 2: deployment status */}
          <Reveal delay={100} className="bg-surface rounded-card p-6">
            <span className="text-[11px] text-muted font-mono">[02]</span>
            <div className="mt-3 space-y-2 text-sm">
              {["WhatsApp number connected", "Google Sheets linked", "Logic configured"].map(
                (txt) => (
                  <div key={txt} className="flex items-center gap-2 text-ink-soft">
                    <span className="text-forest">✓</span> {txt}
                  </div>
                )
              )}
              <div className="flex items-center gap-2 text-ink-soft">
                <span className="text-maroon">●</span> Deploying agent...
              </div>
            </div>
            <button className="mt-4 bg-ink text-cream text-sm px-4 py-2 rounded-full">
              Go live
            </button>
            <h3 className="font-medium mt-6 mb-1">Change it by describing it.</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              Tell Cody what's different, and it redeploys the agent — the
              same conversation that built it can change it.
            </p>
          </Reveal>
        </div>

        {/* Quote */}
        <Reveal className="bg-ink text-cream rounded-card p-8 md:p-10 my-5">
          <p className="font-display text-xl md:text-2xl leading-snug max-w-2xl">
            "CodeWords is magic. Just describe what you want automated and
            voilà, it's done!"
          </p>
          <p className="text-sm text-cream/60 mt-4">
            Michael Stothard{" "}
            <span className="text-cream/40">· Principal, firstminute capital</span>
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Card 3: chat conversation */}
          <Reveal className="bg-surface rounded-card p-6">
            <span className="text-[11px] text-muted font-mono">[03]</span>
            <div className="mt-3 bg-cream rounded-xl overflow-hidden border border-line">
              <div className="bg-forest text-white text-sm px-4 py-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-mint text-forest text-[10px] font-bold flex items-center justify-center">
                  C
                </span>
                <div>
                  <p className="leading-none">Cody</p>
                  <p className="text-[10px] text-cream/60">Online</p>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm">
                <p className="bg-surface border border-line rounded-lg px-3 py-2 inline-block">
                  Hi — I need to report a failed delivery. Order #5541.
                </p>
                <p className="bg-mint rounded-lg px-3 py-2">
                  Got it. I've logged order #5541 as failed. Can you confirm
                  the reason?
                  <br />
                  1 — Customer not home
                  <br />
                  2 — Wrong address
                  <br />
                  3 — Other
                </p>
                <p className="bg-surface border border-line rounded-lg px-3 py-2 inline-block">1</p>
                <p className="bg-mint rounded-lg px-3 py-2">
                  Logged. Re-delivery scheduled for tomorrow. Reference:{" "}
                  <strong>RD-5541 ✓</strong>
                </p>
              </div>
            </div>
            <h3 className="font-medium mt-6 mb-1">Conversations become data.</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              What used to vanish in group chats — onboarding conversations,
              support threads, field reports — becomes a structured,
              trackable outcome the people running the operation can
              actually use.
            </p>
          </Reveal>

          {/* Card 4: handoff */}
          <Reveal delay={100} className="bg-surface rounded-card p-6">
            <span className="text-[11px] text-muted font-mono">[04]</span>
            <div className="mt-3 bg-cream rounded-xl border border-line p-4 space-y-2 text-sm">
              <p className="bg-surface border border-line rounded-lg px-3 py-2 inline-block">
                My delivery hasn't arrived — it's been 3 days.
              </p>
              <p className="bg-mint rounded-lg px-3 py-2">
                I've checked order #3812. It's held at the depot — I've filed
                a priority re-delivery for tomorrow AM.
              </p>
              <p className="bg-surface border border-line rounded-lg px-3 py-2 inline-block">
                I want to speak to someone.
              </p>
              <p className="bg-ink text-cream rounded-lg px-3 py-2">
                Passing you to the support team now — they have the full
                context. <span className="text-cream/60">→ Human handoff</span>
              </p>
            </div>
            <h3 className="font-medium mt-6 mb-1">Agents that run operations.</h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              You get proactive agents that initiate, scheduled agents that
              run at set times, and triggered agents that act when something
              happens.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
