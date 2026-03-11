import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Glotus",
    category: "Enterprise ERP & Logistics",
    url: "https://glotus.kz/",
    description: "A comprehensive logistics and enterprise resource planning platform designed to streamline complex supply chains across Central Asia.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    color: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
  },
  {
    title: "Qadam",
    category: "EdTech Platform",
    url: "https://qadam.edu.kz/",
    description: "A next-generation educational platform empowering students and educators with interactive learning tools and analytics.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    color: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    badge: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
  {
    title: "Dopsy",
    category: "E-Commerce Marketplace",
    url: "https://www.dopsy.kz/",
    description: "A modern, highly-performant marketplace offering seamless consumer experiences and robust vendor management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/30"
  }
];

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio" className="py-32 relative z-10 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-4">{t("portfolio.subtitle")}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white">{t("portfolio.title")}</h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group block glass-panel rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-white/20 ${project.color}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-8 relative z-20 -mt-10">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border mb-4 ${project.badge}`}>
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center justify-between">
                  {project.title}
                </h4>
                <p className="text-gray-400 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
