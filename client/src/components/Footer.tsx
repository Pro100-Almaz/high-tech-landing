import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>H</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
              {t("company.name")}
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">HQ:</span>
              <span>{t("company.hq")}</span>
            </div>
            <a href={`mailto:${t("company.email")}`} className="hover:text-white transition-colors">
              {t("company.email")}
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {t("company.name")}. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-gray-300 transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
