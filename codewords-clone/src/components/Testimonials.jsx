import Marquee from "./Marquee.jsx";
import Reveal from "./Reveal.jsx";

const row1 = [
  { text: "The most straightforward workflow builder compared to alternatives.", name: "Mauro", role: "CTO @ GeoGen.io & CloudBlast.io", bar: "bg-maroon" },
  { text: "I would give you hugs right now. It's beautiful.", name: "Simphiwe", role: "Impact Advisory Consultant", bar: "bg-forest" },
  { text: "I built an Outlook + Notion automation for a client in just two clicks.", name: "Henri", role: "Freelance AI Automation Consultant", bar: "bg-lavender-deep" },
  { text: "ChatGPT can describe things but can't execute tasks or access tools. That's the key differentiator.", name: "Abdalla", role: "Civil Engineer", bar: "bg-maroon" },
  { text: "Success metric: full migration from n8n to CodeWords.", name: "Amelia", role: "Co-founder & CEO @ ivee", bar: "bg-lavender-deep" },
  { text: "We want CodeWords as our main platform for automations.", name: "Ilia", role: "Head of AI @ PIABO", bar: "bg-forest" },
];

const row2 = [
  { text: "Using CodeWords felt like discovering a new power — I was building things that were otherwise impossible.", name: "Moises", role: "Growth @ PMF", bar: "bg-forest" },
  { text: "It's sooo much easier than n8n. It's for people who don't have time to fiddle around.", name: "Abby", role: "Operations Manager", bar: "bg-lavender-deep" },
  { text: "I built in CodeWords in 25 minutes what originally took a day in n8n.", name: "Ben", role: "Finance Manager", bar: "bg-maroon" },
  { text: "I've fallen in love a bit. It's incredibly powerful.", name: "Mark", role: "Founder @ SEEKR", bar: "bg-forest" },
  { text: "I'm addicted to CodeWords.", name: "Urav", role: "Founder", bar: "bg-maroon" },
  { text: "CodeWords is magical. It just worked.", name: "Daniel", role: "Founder", bar: "bg-lavender-deep" },
];

function Card({ q }) {
  return (
    <div className="w-72 shrink-0 bg-surface border border-line rounded-card overflow-hidden">
      <div className={`h-1.5 ${q.bar}`} />
      <div className="p-5">
        <p className="text-sm leading-relaxed mb-6">{q.text}</p>
        <p className="text-sm font-medium">{q.name}</p>
        <p className="text-xs text-muted">{q.role}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="customers" className="py-20 bg-surface/60 border-b border-line overflow-hidden">
      <Reveal className="max-w-6xl mx-auto px-6 mb-8">
        <div className="space-y-4">
          <Marquee duration={38} className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            {row1.map((q, i) => (
              <Card key={i} q={q} />
            ))}
          </Marquee>
          <Marquee
            duration={34}
            reverse
            className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          >
            {row2.map((q, i) => (
              <Card key={i} q={q} />
            ))}
          </Marquee>
        </div>
      </Reveal>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal className="bg-surface border border-line rounded-card p-8">
            <p className="font-display text-xl mb-4">
              From 3 tools to 1<br /> that worked.
            </p>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              "I can see us running the whole JForce operation on WhatsApp
              because of CodeWords."
            </p>
            <p className="text-sm font-medium">Faiz Jafar</p>
            <p className="text-xs text-muted">Jumia · Head of JForce Operations</p>
          </Reveal>
          <Reveal delay={120} className="bg-surface border border-line rounded-card p-8">
            <p className="font-display text-xl mb-4">
              From one-to-one
              <br /> to whole groups.
            </p>
            <p className="text-sm text-ink-soft leading-relaxed mb-6">
              "CodeWords is perfectly suited for what we do. It's made our
              operations so much easier."
            </p>
            <p className="text-sm font-medium">Jay Bourasi</p>
            <p className="text-xs text-muted">Flipkart · Supply Chain Automation</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
