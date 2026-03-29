import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GraduationCap, Briefcase, Code2, User, Sparkles, Cpu, Globe, Rocket, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    period: "2021 - Present",
    school: "Anna University",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    detail: "CGPA: 7.9",
  },
  {
    period: "2020 - 2021",
    school: "SHNV Hr Sec School",
    degree: "Higher Secondary",
    detail: "Percentage: 74.13%",
  }
];

const experience = [
  {
    role: "Blockchain - Intern",
    company: "GateWay Solutions",
    period: "Jul 2024 - Aug 2024",
    description: "Completed an internship in Blockchain development, gaining experience in smart contracts, decentralized applications (DApps), and blockchain technology."
  },
  {
    role: "Angular Developer - Intern",
    company: "Anjana InfoTech",
    period: "May 2023 - Aug 2023",
    description: "Completed an internship as an Angular Developer, gaining hands-on experience in building dynamic web applications using Angular."
  }
];

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  "UI / UX": ["Responsive Design", "Framer Motion Animations", "Parallax Effects", "Interactive UI", "GSAP"],
  "Backend": ["Node.js", "API Development", "Authentication Systems", "Order Processing Logic", "Firebase"],
  "Optimization": ["SEO", "Performance Optimization", "Lighthouse Optimization", "Product Thinking"],
  "Tools & Deployment": ["Git & GitHub", "Vercel Deployment", "VS Code", "Figma"],
  "AI & Core": ["AI Prompt Engineering", "Cursor", "Copilot", "Python", "C/C++", "Java"]
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Multi-layer Parallax Elements
    const parallaxElements = gsap.utils.toArray(".parallax-el");
    parallaxElements.forEach((el: any) => {
      const speed = el.dataset.speed || 1;
      gsap.to(el, {
        y: () => (1 - parseFloat(speed)) * (window.innerHeight * 0.8),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    });

    // 3D Card Reveal Animations
    const cards = gsap.utils.toArray(".reveal-card");
    cards.forEach((card: any) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        rotationX: 15,
        transformPerspective: 1000,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      });
    });

    // Floating animation for background icons
    gsap.to(".float-icon", {
      y: -20,
      rotation: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="py-32 bg-[#020617] text-slate-300 relative z-50 overflow-hidden min-h-[150vh]">
      
      {/* --- LAYER 1: Deep Background Parallax --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.03] parallax-el" data-speed="0.2">
        <h1 className="text-[20vw] font-black tracking-tighter text-white whitespace-nowrap" style={{ WebkitTextStroke: '2px white', color: 'transparent' }}>
          VIBE CODER
        </h1>
      </div>

      {/* --- LAYER 2: Glowing Orbs & Gradients --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[120px] parallax-el" data-speed="0.4" />
        <div className="absolute bottom-[20%] right-[5%] w-[35rem] h-[35rem] bg-purple-600/10 rounded-full blur-[100px] parallax-el" data-speed="0.6" />
        <div className="absolute top-[50%] left-[40%] w-[30rem] h-[30rem] bg-blue-600/5 rounded-full blur-[80px] parallax-el" data-speed="0.8" />
      </div>

      {/* --- LAYER 3: Floating Foreground Icons --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Sparkles className="absolute top-[15%] right-[15%] w-12 h-12 text-indigo-400/30 float-icon parallax-el" data-speed="1.5" />
        <Globe className="absolute top-[45%] left-[8%] w-16 h-16 text-purple-400/20 float-icon parallax-el" data-speed="1.8" />
        <Rocket className="absolute bottom-[15%] right-[25%] w-14 h-14 text-pink-400/20 float-icon parallax-el" data-speed="1.3" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-30">
        
        {/* Section Header */}
        <div className="text-center mb-24 reveal-card">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            ABOUT & EXP
          </h2>
          <p className="text-indigo-400 mt-6 text-xl font-mono">{"<Profile />"}</p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* About Me (Left Column, Normal Speed) */}
          <div className="lg:col-span-7 reveal-card parallax-el" data-speed="0.95">
            <div className="h-full bg-slate-900/40 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/10 shadow-2xl hover:border-indigo-500/30 transition-colors group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-colors duration-700" />
              
              <div className="shrink-0 relative z-10">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:border-indigo-500/60 transition-colors duration-500">
                  <img 
                    src="https://github.com/ravi24-rep.png" 
                    alt="Ravi" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="relative z-10 flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                    <User size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">About Me</h3>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">
                  I am a dedicated <span className="text-white font-medium">Computer Science Engineering</span> student with a passion for software development. I actively contribute to group projects and motivate team members to achieve common targets. My inquisitive nature drives me to continuously learn and expand my knowledge horizons as a <span className="text-indigo-300 font-mono bg-indigo-500/10 px-2 py-1 rounded-md">"vibe coder"</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href={`${import.meta.env.BASE_URL}resume.pdf`} 
                    download="Ravi_Kumar_Resume.pdf"
                    onClick={() => {
                      // Small delay to allow download to trigger before mail window opens
                      setTimeout(() => {
                        window.location.href = "mailto:ravidynamo1924@gmail.com?subject=Hire%20Me%20Inquiry&body=Hi%20Ravi,%20I%20just%20downloaded%20your%20resume%20and%20would%20like%20to%20discuss%20an%20opportunity.";
                      }, 500);
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:-translate-y-1 group/hire relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/hire:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Briefcase size={20} className="group-hover/hire:animate-bounce" />
                      Hire Me
                    </span>
                    <span className="relative z-10 text-indigo-200 text-sm border-l border-white/20 pl-2 ml-2 flex items-center gap-1">
                      <Download size={16} /> Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education (Right Column, Faster Speed for Parallax Offset) */}
          <div className="lg:col-span-5 reveal-card parallax-el lg:mt-24" data-speed="1.1">
            <div className="h-full bg-slate-900/40 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/10 shadow-2xl hover:border-purple-500/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-700" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 text-purple-400">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-8 relative z-10">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-800 group-hover:border-purple-500/30 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#020617] border-2 border-purple-500" />
                    <span className="text-purple-400 font-mono text-sm mb-1 block">{edu.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.school}</h4>
                    <p className="text-slate-400 text-sm mb-2">{edu.degree}</p>
                    <p className="text-purple-200 font-medium text-sm bg-purple-500/10 inline-block px-3 py-1 rounded-full border border-purple-500/20">{edu.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience (Left Column, Slower Speed) */}
          <div id="experience" className="lg:col-span-6 reveal-card parallax-el" data-speed="0.9">
            <div className="h-full bg-slate-900/40 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/10 shadow-2xl hover:border-blue-500/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-700" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-400">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Experience</h3>
              </div>
              
              <div className="space-y-8 relative z-10">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-slate-800 group-hover:border-blue-500/30 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#020617] border-2 border-blue-500" />
                    <span className="text-blue-400 font-mono text-sm mb-1 block">{exp.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-slate-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills (Right Column, Faster Speed) */}
          <div id="skills" className="lg:col-span-6 reveal-card parallax-el lg:mt-16" data-speed="1.05">
            <div className="h-full bg-slate-900/40 backdrop-blur-2xl p-10 rounded-[2rem] border border-white/10 shadow-2xl hover:border-pink-500/30 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 group-hover:bg-pink-500/20 transition-colors duration-700" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center border border-pink-500/30 text-pink-400">
                  <Code2 size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                {Object.entries(skills).map(([category, items], i) => (
                  <div key={i}>
                    <h4 className="text-sm font-mono text-pink-400 mb-4 uppercase tracking-wider">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, j) => (
                        <span key={j} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-slate-200 rounded-xl text-sm font-medium border border-white/10 hover:border-pink-500/30 transition-all cursor-default shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
