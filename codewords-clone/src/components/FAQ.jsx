import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import Reveal from "./Reveal.jsx";

const faqs = [
  { q: "What is CodeWords?", a: "CodeWords is a platform that turns plain-language descriptions into working, deployed AI agents connected to your real tools." },
  { q: "How is CodeWords different from ChatGPT or Claude?", a: "ChatGPT and Claude can describe what to do, but they don't execute tasks or maintain live connections to your tools. CodeWords builds and runs the agent itself." },
  { q: "How is CodeWords different from Zapier, Make, or n8n?", a: "Those tools require you to build the logic yourself, step by step. With CodeWords, you describe the workflow and Cody configures it for you." },
  { q: "Do I need to know how to code?", a: "No. You describe your workflow in plain language and Cody builds it." },
  { q: "What is Cody?", a: "Cody is the AI that reads your description, maps out the logic, connects your tools, and deploys the agent." },
  { q: "Does this work with WhatsApp?", a: "Yes. CodeWords agents can be deployed directly on WhatsApp to handle conversations, onboarding, and support." },
  { q: "What kinds of agents can I build?", a: "Onboarding agents, support agents, lead qualification, field check-ins, screening agents, and more — conversational, proactive, or scheduled." },
  { q: "How much does it cost?", a: "Your first agent is free to build. See the pricing page for paid plans." },
  { q: "Is CodeWords secure?", a: "Yes. CodeWords follows standard security and data-handling practices for connected business tools." },
];

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <Reveal className="flex items-center justify-between mb-8">
        <h2 className="font-display text-3xl">{t("faq.title")}</h2>
        <a
          href="#contact"
          className="bg-ink text-cream text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap"
        >
          {t("faq.contact")}
        </a>
      </Reveal>

      <Reveal className="divide-y divide-line border-t border-b border-line">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="text-sm sm:text-base">{item.q}</span>
                <span className={`text-xl text-muted transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {isOpen && (
                <p className="text-sm text-ink-soft leading-relaxed pb-4 max-w-2xl">{item.a}</p>
              )}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
