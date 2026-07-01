import Marquee from "./Marquee.jsx";

const columns = [
  {
    title: "Resources",
    links: ["Blog", "Changelog", "Agency Partners"],
  },
  {
    title: "Product",
    links: ["Pricing", "Integrations", "Templates", "Documentation"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Security"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms and Conditions"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <p className="font-display text-xl font-semibold mb-6">Agemo</p>
            <p className="text-xs text-muted max-w-[10rem] mb-6">
              CodeWords is built by Agemo.
            </p>
            <div className="flex gap-3 text-muted">
              {["◎", "𝕏", "in", "◆", "▶"].map((icon, i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full border border-line flex items-center justify-center text-xs"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs text-muted mb-3">{col.title}</p>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-ink-soft hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Marquee
        duration={26}
        className="border-t border-line py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        {["CodeWords*", "CodeWords*", "CodeWords*", "CodeWords*"].map((word, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="font-display font-semibold text-ink leading-none select-none px-8"
            style={{ fontSize: "10vw" }}
          >
            {word}
          </span>
        ))}
      </Marquee>
    </footer>
  );
}
