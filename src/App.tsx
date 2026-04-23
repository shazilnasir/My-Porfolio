/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram,
  MessageSquare,
  Code2, 
  Video, 
  Palette, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Calendar,
  MapPin
} from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Web Engineering Suite",
    category: "Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Click on the link below to view my recent web projects.",
    tech: ["React", "D3.js", "Tailwind"],
    links: { demo: "https://drive.google.com/drive/folders/YOUR_WEB_FOLDER_ID", github: "#" },
  },
  {
    id: 2,
    title: "Professional Reels",
    category: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Click on the link below to view my professional video reels and high-impact edits.",
    tech: ["Premiere Pro", "CapCut"],
    links: { demo: "https://drive.google.com/drive/folders/1jV1gBafKowy6sznv20GY12c2G3Hr-x6V", github: "#" },
  },
  {
    id: 3,
    title: "Visual Brand Identity",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Click on the link below to view my diverse graphic design showcase and visual branding portfolio.",
    tech: ["Canva", "Photoshop"],
    links: { demo: "https://drive.google.com/drive/folders/1XtE-nVV-_ZP5HwcgA3-GbWoHwNBdI7aO", github: "#" },
  },
];

const CATEGORIES = ["All", "Web", "Video", "Design"];

const EDUCATION = [
  {
    degree: "Bachelors of Computer Science (BSCS)",
    institution: "Federal Urdu University of Arts Science and Technology (FUUAST)",
    year: "2023 - Present",
    location: "Islamabad"
  },
  {
    degree: "Intermediate in Pre-Engineering",
    institution: "Hamza Army Public School and College for Boys",
    year: "2021 - 2023",
    location: "Rawalpindi"
  }
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | typeof PROJECTS[0]>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-stretch">
        
        {/* Sidebar Component */}
        <aside className="glass flex flex-col p-10 h-full relative overflow-hidden">
          {/* Mobile Overlay Toggle */}
          <button 
            className="lg:hidden absolute top-6 right-6 z-50 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="relative z-10">
            {/* Profile Section */}
            <div className="w-32 h-32 rounded-full p-[3px] bg-gradient-to-br from-[#6366f1] to-[#f43f5e] mb-6 mx-auto lg:mx-0">
              <div className="w-full h-full rounded-full bg-[#1e293b] overflow-hidden flex items-center justify-center">
                <img 
                  src="/profile.jpg"
                  alt="Shazil Nasir"
                  className="w-full h-full object-cover object-top scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/shazil/400/400";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h1 className="font-display text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
              Shazil Nasir
            </h1>
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-6">
              Web Developer | Video Editor | Graphic Designer
            </p>
            
            <p className="text-sm text-slate-400 leading-relaxed font-light mb-8">
              Crafting seamless digital experiences through code, motion, and visual storytelling.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {["Web Dev", "Video Edit", "Graphics"].map(skill => (
                <span key={skill} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <nav className={`lg:mt-auto space-y-3 transition-all duration-300 ${isMenuOpen ? 'flex-1' : 'hidden lg:block'}`}>
            {[
              { label: "SELECTED_WORKS", active: true },
              { label: "ABOUT_ME", active: false },
              { label: "SERVICES", active: false },
              { label: "JOURNAL", active: false }
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 5 }}
                className={`text-[12px] font-bold cursor-pointer transition-colors ${
                  item.active ? "text-[#818cf8]" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {item.label}
              </motion.div>
            ))}
          </nav>
          
          <div className="mt-8 flex items-center gap-4 text-slate-500">
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Instagram, href: "https://www.instagram.com/shazil.nasir08/" },
              { Icon: Mail, href: "mailto:shazilnasir5@gmail.com" },
              { Icon: MessageSquare, href: "https://wa.me/923355631801" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </aside>

        {/* Main Content Component */}
        <main className="flex flex-col gap-6">
          <div className="portfolio-header flex justify-between items-center px-2">
            <span className="text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
              Recent Projects / 2026
            </span>
            <div className="flex gap-2">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[11px] font-bold uppercase transition-colors ${
                    activeCategory === cat ? "text-white" : "text-slate-600 hover:text-slate-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass group relative h-48 overflow-hidden flex flex-col justify-end p-6 cursor-pointer"
                >
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10">
                    <p className="text-[10px] text-[#818cf8] font-bold uppercase tracking-wider mb-1">
                      {project.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <section className="glass p-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 glass bg-indigo-500/10 rounded-lg text-indigo-400">
                <GraduationCap size={20} />
              </div>
              <h2 className="text-lg font-bold text-white uppercase tracking-wider">Education</h2>
            </div>
            
            <div className="grid gap-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="relative pl-10 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-[1px] before:bg-white/10 last:before:hidden">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full glass border-white/10 flex items-center justify-center bg-[#0f172a]">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-white font-semibold text-lg">{edu.degree}</h3>
                      <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-indigo-400">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {edu.year}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                      </div>
                    </div>
                    <p className="text-indigo-200/60 font-medium text-sm">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block mb-1">
                  Get in touch
                </span>
                <span className="text-base font-semibold text-white">
                  Start a project together
                </span>
              </div>
              <div className="flex gap-3">
                <motion.a 
                  whileHover={{ y: -2 }}
                  href="mailto:shazilnasir5@gmail.com"
                  className="glass p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 text-xs"
                >
                  <Mail size={14} /> Gmail
                </motion.a>
                <motion.a 
                  whileHover={{ y: -2 }}
                  href="https://wa.me/923355631801"
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 text-xs"
                >
                  <MessageSquare size={14} /> WhatsApp
                </motion.a>
                <motion.a 
                  whileHover={{ y: -2 }}
                  href="https://www.instagram.com/shazil.nasir08/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 text-xs"
                >
                  <Instagram size={14} /> Instagram
                </motion.a>
              </div>
            </div>
            
            <div className="flex w-full md:w-auto flex-1 max-w-md gap-3">
              <input 
                type="text" 
                placeholder="shazilnasir5@gmail.com" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-all flex-grow"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                Connect
              </button>
            </div>
          </section>
        </main>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-[32px] p-0 relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 glass p-2 rounded-full text-white hover:bg-white/20 transition-all shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col h-full">
                {/* Content Section */}
                <div className="w-full p-8 md:p-12 flex flex-col">
                  <span className="text-[10px] text-[#818cf8] font-bold uppercase tracking-[0.2em] mb-3 block">
                    {selectedProject.category}
                  </span>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div>
                      <h4 className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="text-[10px] px-3 py-1 glass bg-white/5 border-white/10 rounded-full text-slate-300 font-medium whitespace-nowrap">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={selectedProject.links?.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-white text-black text-center font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-sm"
                      >
                        <ExternalLink size={16} /> Project Link
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


