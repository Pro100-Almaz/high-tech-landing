import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, PenTool, Cloud, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconMap = {
  0: <Globe className="w-8 h-8 text-cyan-400" />,
  1: <Smartphone className="w-8 h-8 text-purple-400" />,
  2: <Code2 className="w-8 h-8 text-pink-400" />,
  3: <PenTool className="w-8 h-8 text-blue-400" />,
  4: <Cloud className="w-8 h-8 text-indigo-400" />,
  5: <Lightbulb className="w-8 h-8 text-yellow-400" />
};

export function Services() {
  const { t } = useTranslation();
  const serviceItems = t('services.items', { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">{t("services.subtitle")}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">{t("services.title")}</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t("company.mission")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {iconMap[index as keyof typeof iconMap]}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
