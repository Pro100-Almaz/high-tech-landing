import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>H</span>
          </div>
          <span className="text-xl font-bold text-white tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t("company.name")}
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t("nav.about")}</a>
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t("nav.services")}</a>
          <a href="#portfolio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{t("nav.portfolio")}</a>
          
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              {i18n.language.toUpperCase()}
            </button>
            {showLangMenu && (
              <div className="absolute top-full mt-2 right-0 bg-black/90 border border-white/10 rounded-lg overflow-hidden">
                {["en", "ru", "kk"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                      i18n.language === lang
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {lang === "en" ? "English" : lang === "ru" ? "Русский" : "Қазақша"}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            {t("nav.talk")}
          </a>
        </motion.div>
      </div>
    </nav>
  );
}
