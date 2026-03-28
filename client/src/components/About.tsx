import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const skills = {
  languages: ["Python", "Go", "SQL", "JavaScript", "C#"],
  frameworks: ["FastAPI", "Django", "Flask", "Vue"],
  tools: ["Docker", "Git", "GCP", "PostgreSQL", "Redis", "AWS S3"],
};

const skillColors: Record<string, string> = {
  languages: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  frameworks: "text-purple-400 border-purple-500/30 bg-purple-500/10",
  tools: "text-pink-400 border-pink-500/30 bg-pink-500/10",
};

export function About() {
  const { t } = useTranslation();
  const experience = t("about.experience", { returnObjects: true }) as Array<{
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
  }>;

  return (
    <section id="about" className="py-32 relative z-10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full filter blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">
            {t("about.subtitle")}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("about.title")}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t("about.bio")}
          </p>
        </motion.div>

        {/* Top grid: info + skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Left: Education + links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 flex flex-col gap-6"
          >
            <h4 className="text-lg font-bold text-white">{t("about.educationLabel")}</h4>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-semibold">Nazarbayev University</p>
                <p className="text-gray-400 text-sm">Bachelor of Science in Computer Science</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" /> Astana, Kazakhstan
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" /> 2020 – 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-3">
              <h4 className="text-sm font-bold text-white mb-1">{t("about.connectLabel")}</h4>
              <a
                href="https://github.com/Pro100-Almaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">github.com/Pro100-Almaz</span>
              </a>
              <a
                href="https://linkedin.com/in/almaz-amanzholuly"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">linkedin.com/in/almaz-amanzholuly</span>
              </a>
              <a
                href="mailto:q19.almaz@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                <span className="text-sm">q19.almaz@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 flex flex-col gap-6"
          >
            <h4 className="text-lg font-bold text-white">{t("about.skillsLabel")}</h4>
            {(["languages", "frameworks", "tools"] as const).map((cat) => (
              <div key={cat}>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                  {t(`about.skillCategories.${cat}`)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills[cat].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${skillColors[cat]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-lg font-bold text-white mb-10 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            {t("about.experienceLabel")}
          </h4>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />

            <div className="flex flex-col gap-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative sm:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 top-3 w-4 h-4 rounded-full bg-background border-2 border-cyan-500 hidden sm:block" />

                  <div className="glass-panel rounded-2xl p-6 hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h5 className="text-white font-bold text-base">{job.company}</h5>
                        <p className="text-cyan-400 text-sm font-medium">{job.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 flex items-center justify-end gap-1">
                          <Calendar className="w-3 h-3" /> {job.period}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center justify-end gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet, bi) => (
                        <li key={bi} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                          <span className="text-cyan-500 mt-1.5 shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
