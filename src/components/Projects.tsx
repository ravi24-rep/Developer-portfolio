import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, FileCode2, FolderGit2, Terminal, Database, Cpu, Code2, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Shanghai Chinese Kitchen",
    description: "A modern, responsive restaurant website featuring an elegant UI, interactive menu showcase, and seamless user experience. Optimized for performance and deployed on Vercel.",
    longDescription: "A full-stack restaurant application featuring a dynamic menu, shopping cart functionality, and a seamless checkout process. The UI is designed with modern aesthetics, utilizing Tailwind CSS for responsive layouts and Framer Motion for fluid animations. It includes an admin dashboard for managing orders and menu items, demonstrating strong product thinking and backend integration.",
    image: "/projects/shanghai.png",
    tags: ["React", "Tailwind CSS", "Vercel", "Framer Motion", "Node.js"],
    github: "#",
    live: "https://shangai-chinese-kitchen.vercel.app/"
  },
  {
    title: "Eggzilla Website",
    description: "A dynamic and engaging brand website for Eggzilla. Built with modern web technologies to showcase products with high performance and smooth animations.",
    longDescription: "A high-performance brand website built to showcase Eggzilla's unique product offerings. It features an interactive product viewer, smooth scroll animations powered by GSAP, and a highly optimized Lighthouse score. The site is fully responsive, ensuring a premium user experience across all devices, and integrates seamlessly with modern deployment pipelines.",
    image: "/projects/eggzilla.png",
    tags: ["React", "Node.js", "Render", "GSAP", "SEO"],
    github: "#",
    live: "https://eggzilla-website.onrender.com/"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useGSAP(() => {
    // Parallax layers
    const layers = gsap.utils.toArray(".parallax-layer");
    
    layers.forEach((layer: any) => {
      const speed = layer.dataset.speed;
      
      gsap.to(layer, {
        y: () => (1 - parseFloat(speed)) * (ScrollTrigger.maxScroll(window) * 0.5),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing
        }
      });
    });

    // 3D Tilt effect on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".tilt-element", {
        rotationY: xPos,
        rotationX: -yPos,
        ease: "power2.out",
        duration: 1
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="relative bg-[#020617] min-h-[150vh] overflow-hidden perspective-1000 py-32">
      {/* Layer 1: Background Grid & Particles */}
      <div className="absolute inset-0 z-0 parallax-layer opacity-20 pointer-events-none" data-speed="0.1">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Layer 2: Floating Blurred UI Windows */}
      <div className="absolute inset-0 z-10 parallax-layer pointer-events-none" data-speed="0.3">
        <div className="absolute top-[10%] left-[5%] w-72 h-56 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl tilt-element opacity-40 blur-[3px] shadow-[0_0_50px_rgba(255,255,255,0.05)]" />
        <div className="absolute top-[40%] right-[5%] w-96 h-72 bg-indigo-500/5 backdrop-blur-3xl border border-indigo-500/20 rounded-2xl tilt-element opacity-30 blur-[5px] shadow-[0_0_50px_rgba(99,102,241,0.1)]" />
        <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-purple-500/5 backdrop-blur-3xl border border-purple-500/20 rounded-full tilt-element opacity-20 blur-[6px]" />
      </div>

      {/* Layer 3: Code Files, Icons & Connection Lines */}
      <div className="absolute inset-0 z-20 parallax-layer pointer-events-none" data-speed="0.5">
        {/* Glowing Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <path d="M 200 300 Q 400 100 800 400 T 1400 200" fill="transparent" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 100 600 Q 500 800 900 500 T 1600 700" fill="transparent" stroke="url(#gradient2)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_15s_linear_infinite_reverse]" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Icons */}
        <FileCode2 className="absolute top-[25%] right-[20%] text-blue-400/60 w-16 h-16 tilt-element animate-[bounce_4s_infinite]" />
        <FolderGit2 className="absolute top-[65%] left-[15%] text-emerald-400/50 w-20 h-20 tilt-element animate-[bounce_5s_infinite_0.5s]" />
        <Terminal className="absolute top-[15%] left-[35%] text-purple-400/40 w-12 h-12 tilt-element animate-[bounce_6s_infinite_1s]" />
        <Database className="absolute top-[75%] right-[35%] text-pink-400/50 w-14 h-14 tilt-element animate-[bounce_4.5s_infinite_0.2s]" />
        <Cpu className="absolute top-[45%] right-[10%] text-amber-400/40 w-16 h-16 tilt-element animate-[bounce_5.5s_infinite_0.8s]" />
        
        {/* Floating File Icons (JS, TS, CSS, JSON) */}
        <div className="absolute top-[20%] right-[35%] w-12 h-14 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center backdrop-blur-md tilt-element animate-[bounce_4.2s_infinite_0.3s] shadow-[0_0_15px_rgba(250,204,21,0.2)]">
          <span className="text-yellow-400 font-bold font-mono text-sm">JS</span>
        </div>
        <div className="absolute top-[55%] left-[25%] w-12 h-14 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center justify-center backdrop-blur-md tilt-element animate-[bounce_5.1s_infinite_0.7s] shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="text-blue-400 font-bold font-mono text-sm">TS</span>
        </div>
        <div className="absolute bottom-[30%] right-[25%] w-12 h-14 bg-sky-400/10 border border-sky-400/30 rounded-lg flex items-center justify-center backdrop-blur-md tilt-element animate-[bounce_4.8s_infinite_0.1s] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <span className="text-sky-400 font-bold font-mono text-sm">CSS</span>
        </div>
        <div className="absolute top-[80%] left-[45%] w-12 h-14 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center backdrop-blur-md tilt-element animate-[bounce_5.3s_infinite_0.9s] shadow-[0_0_15px_rgba(34,197,94,0.2)]">
          <span className="text-green-400 font-bold font-mono text-xs">JSON</span>
        </div>
        
        {/* Drifting Code Snippets */}
        <div className="absolute top-[35%] left-[8%] bg-[#0d1117]/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl font-mono text-xs text-indigo-300/80 tilt-element rotate-[-5deg] shadow-2xl">
          <code>{`const vibe = await coder.init();\nvibe.setMode('ultra_pro');`}</code>
        </div>
        <div className="absolute top-[60%] right-[12%] bg-[#0d1117]/90 backdrop-blur-md border border-slate-800 p-4 rounded-xl font-mono text-xs text-emerald-300/80 tilt-element rotate-[8deg] shadow-2xl">
          <code>{`import { Future } from 'tomorrow';\nFuture.build(now);`}</code>
        </div>
      </div>

      {/* Layer 4 & 5: Main Content & Highlighted Cards */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 parallax-layer" data-speed="1">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            PROJECT FILES
          </h2>
          <p className="text-indigo-400 mt-6 text-xl font-mono">{"<Showcase />"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative tilt-element transform-style-3d cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Glowing backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-1000 group-hover:duration-300" />
              
              <div className="relative h-full bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-indigo-500/50 group-hover:-translate-y-2 flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  
                  {/* Top Bar */}
                  <div className="absolute top-0 left-0 right-0 p-4 z-20 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="text-indigo-400" size={24} />
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  </div>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-white/5 text-indigo-200 rounded-lg text-xs font-mono border border-white/10 shadow-inner">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-white/10 mt-auto">
                    <a href={project.github} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20">
                      <Github size={18} /> Source
                    </a>
                    <a href={project.live} onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-auto bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
          >
            <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl" onClick={() => setSelectedProject(null)} />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900/90 backdrop-blur-2xl border border-indigo-500/50 rounded-3xl shadow-[0_0_80px_rgba(99,102,241,0.3)] flex flex-col md:flex-row custom-scrollbar"
            >
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
              >
                <X size={24} />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="text-indigo-400" size={32} />
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow">
                  {selectedProject.longDescription}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, j) => (
                      <span key={j} className="px-4 py-2 bg-indigo-500/10 text-indigo-200 rounded-xl text-sm font-medium border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-6 border-t border-white/10 mt-auto">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20">
                    <Github size={20} /> Source Code
                  </a>
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-2 text-sm font-medium text-white transition-all ml-auto bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
