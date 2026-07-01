import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { languages } from "../i18n/translations.js";
import AuthModal from "./AuthModal.jsx";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const [authOpen, setAuthOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { key: "product", label: t("nav.product") },
    { key: "resources", label: t("nav.resources") },
    { key: "customers", label: t("nav.customers") },
    { key: "pricing", label: t("nav.pricing") },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-ink text-cream text-center text-xs py-2 tracking-wide">
        CodeWords raises $9M seed round
      </div>
      <header className="bg-cream/95 backdrop-blur border-b border-line">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-semibold">
            CodeWords<span aria-hidden="true">*</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={`#${item.key}`}
                  className="hover:text-ink transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {(item.key === "product" || item.key === "resources") && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M2 3.5L5 6.5L8 3.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Til tanlash */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="text-sm text-ink-soft hover:text-ink transition-colors uppercase px-1"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                {lang}
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 mt-2 w-36 bg-surface border border-line rounded-lg shadow-sm overflow-hidden text-sm"
                >
                  {languages.map((l) => (
                    <li key={l.code}>
                      <button
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 hover:bg-lavender/60 transition-colors ${
                          l.code === lang ? "text-ink font-medium" : "text-ink-soft"
                        }`}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-ink-soft hover:text-ink transition-colors"
            >
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M7 0.8v1.6M7 11.6v1.6M13.2 7h-1.6M2.4 7H0.8M11.3 2.7l-1.1 1.1M3.8 10.2l-1.1 1.1M11.3 11.3l-1.1-1.1M3.8 3.8L2.7 2.7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M11.5 8.7A5 5 0 016.3 2.5a5 5 0 105.2 6.2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            <button
              onClick={() => setAuthOpen(true)}
              className="hidden sm:inline text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {t("signIn")}
            </button>
            <button
              onClick={() => setAuthOpen(true)}
              className="bg-lavender-deep text-ink text-sm font-medium px-4 py-2 rounded-full hover:bg-lavender-pill transition-colors"
            >
              {t("startFree")}
            </button>
          </div>
        </nav>
      </header>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
