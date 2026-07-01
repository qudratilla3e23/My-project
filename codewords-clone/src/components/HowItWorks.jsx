import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

const steps = [
  {
    n: "01",
    title: "Describe your workflow",
    text: "Tell Cody what you need in plain language — no code, flowcharts, or drag-and-drop.",
  },
  {
    n: "02",
    title: "Cody builds the agent",
    text: "Cody maps your tools, sets up the logic, and configures the pieces. You review, adjust, and approve in minutes.",
  },
  {
    n: "03",
    title: "Your agent is live",
    text: "Your agent handles the conversation, logs the outcome, and hands off to a human when needed. It runs on a schedule, a trigger, or whenever a human is needed.",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="product" className="max-w-6xl mx-auto px-6 py-16">
      <Reveal>
        <span className="inline-block bg-lavender text-ink-soft text-[11px] tracking-wide font-medium px-3 py-1 rounded-full mb-6">
          {t("how.eyebrow")}
        </span>
        <h2 className="font-display text-3xl sm:text-4xl max-w-lg leading-tight mb-10">
          {t("how.title")}
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <Reveal
            key={step.n}
            delay={i * 100}
            className="bg-surface/60 border border-line rounded-card p-6"
          >
            <span className="text-xs text-muted font-mono">{step.n}</span>
            <h3 className="font-medium mt-3 mb-2">{step.title}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
