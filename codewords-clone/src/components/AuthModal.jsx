import { useLanguage } from "../context/LanguageContext.jsx";

export default function AuthModal({ open, onClose }) {
  const { t } = useLanguage();
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm bg-[#111111] text-white rounded-2xl p-8 relative"
      >
        <button
          onClick={onClose}
          aria-label={t("auth.close")}
          className="absolute top-4 right-4 text-white/50 hover:text-white text-lg leading-none"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-4" aria-hidden="true">
            ✳︎
          </span>
          <h2 className="font-display text-xl font-semibold mb-6">
            {t("auth.welcome")}
          </h2>

          <form
            className="w-full text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="text-xs text-white/60 mb-1 block">
              {t("auth.email")}
            </label>
            <input
              type="email"
              placeholder={t("auth.emailPlaceholder")}
              className="w-full bg-transparent border border-white/20 rounded-lg px-3 py-2.5 text-sm mb-4 outline-none focus:border-white/50 placeholder:text-white/30"
            />
            <button
              type="submit"
              className="w-full bg-white text-black text-sm font-medium py-2.5 rounded-lg hover:bg-white/90 transition-colors"
            >
              {t("auth.continue")}
            </button>
          </form>

          <div className="flex items-center gap-3 w-full my-5">
            <span className="h-px flex-1 bg-white/15" />
            <span className="text-[11px] text-white/40">{t("auth.or")}</span>
            <span className="h-px flex-1 bg-white/15" />
          </div>

          <div className="w-full space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-white/20 rounded-lg py-2.5 text-sm hover:bg-white/5 transition-colors">
              <span aria-hidden="true">G</span> {t("auth.google")}
            </button>
            <button className="w-full flex items-center justify-center gap-2 border border-white/20 rounded-lg py-2.5 text-sm hover:bg-white/5 transition-colors">
              <span aria-hidden="true">in</span> {t("auth.linkedin")}
            </button>
          </div>

          <p className="text-xs text-white/50 mt-6">
            {t("auth.noAccount")}{" "}
            <a href="#signup" className="text-white underline">
              {t("auth.signUp")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
