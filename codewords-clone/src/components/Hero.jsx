import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const quickAgents = [
  "Rider onboarding agent",
  "Lead qualification agent",
  "Field team check-in",
  "Candidate screening agent",
  "Merchant onboarding agent",
  "Customer support agent",
];

// Kiritilgan matndagi kalit so'zlarga qarab moslashadigan "aqlli" qurish jarayoni.
// Haqiqiy backend yo'q, lekin javob promtga qarab dinamik shakllanadi.
function buildSteps(prompt) {
  const text = prompt.toLowerCase();
  const steps = ["Reading your description..."];

  const rules = [
    [/whatsapp/, "Connecting to your WhatsApp number"],
    [/shopify|store|merchant/, "Connecting to your Shopify store"],
    [/sheet|excel|spreadsheet/, "Linking Google Sheets"],
    [/gmail|email/, "Linking your Gmail inbox"],
    [/slack/, "Connecting to your Slack workspace"],
    [/hubspot|lead|crm|sales/, "Syncing with your CRM"],
    [/candidate|hiring|screen/, "Connecting to your applicant tracker"],
    [/rider|driver|delivery|field/, "Linking your field-ops dashboard"],
  ];

  let matched = 0;
  rules.forEach(([re, label]) => {
    if (re.test(text)) {
      steps.push(label);
      matched += 1;
    }
  });

  if (matched === 0) {
    steps.push("Mapping tools and logic from your description");
  }

  steps.push(`Building the workflow (${3 + matched} steps)`);
  steps.push("Agent deployed — live and ready ✓");
  return steps;
}

export default function Hero() {
  const { t } = useLanguage();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("idle"); // idle | building | done
  const [visibleSteps, setVisibleSteps] = useState([]);

  const handlePill = (label) => {
    setValue(`Build a ${label.toLowerCase()} for WhatsApp`);
  };

  const handleSubmit = () => {
    if (!value.trim() || status === "building") return;
    setStatus("building");
    setVisibleSteps([]);
    const steps = buildSteps(value);
    steps.forEach((step, i) => {
      setTimeout(() => {
        setVisibleSteps((prev) => [...prev, step]);
        if (i === steps.length - 1) setStatus("done");
      }, (i + 1) * 480);
    });
  };

  return (
    <section className="dot-grid relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <a
          href="#whatsapp"
          className="inline-flex items-center gap-2 bg-surface border border-line rounded-full px-4 py-1.5 text-xs text-ink-soft shadow-sm mb-8"
        >
          {t("hero.badge")}
          <span aria-hidden="true">→</span>
        </a>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
          {t("hero.title")}
        </h1>

        <p className="text-ink-soft mt-5 max-w-md mx-auto">{t("hero.subtitle")}</p>

        {/* Prompt card — real ishlaydigan, kalit so'zlarga moslashadigan demo */}
        <div className="mt-10 max-w-xl mx-auto bg-surface border border-line rounded-2xl shadow-sm p-4 text-left">
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={2}
            placeholder={t("hero.placeholder")}
            className="w-full resize-none text-sm outline-none placeholder:text-ink-soft/60 bg-transparent text-ink"
          />

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-line">
            <div className="flex items-center gap-3 text-ink-soft/50">
              <span title={t("hero.voiceTitle")} className="cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="6" y="2" width="4" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M3 8a5 5 0 0010 0M8 13v1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span title={t("hero.attachTitle")} className="cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <button
              onClick={handleSubmit}
              aria-label="Ask CodeWords"
              disabled={status === "building"}
              className="bg-ink text-cream rounded-full w-8 h-8 flex items-center justify-center hover:opacity-85 transition-opacity disabled:opacity-40"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {status !== "idle" && (
            <div className="mt-3 pt-3 border-t border-line text-left text-sm space-y-1.5">
              {visibleSteps.map((step, i) => (
                <p
                  key={i}
                  className={step.includes("✓") ? "text-forest font-medium" : "text-ink-soft"}
                >
                  {step.includes("✓") ? "✓" : "•"} {step.replace(" ✓", "")}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
          {quickAgents.map((label) => (
            <button
              key={label}
              onClick={() => handlePill(label)}
              className="bg-surface/70 border border-line rounded-full px-3.5 py-1.5 text-xs text-ink-soft hover:border-ink/30 hover:text-ink transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
