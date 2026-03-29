import { motion, useScroll, useMotionValueEvent, useSpring, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-[100] transition-colors duration-300 ${
        scrolled || mobileMenuOpen ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter relative z-50">
          RAVI<span className="text-indigo-500">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all">
            About
          </a>
          <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all">
            Experience
          </a>
          <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all">
            Projects
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-400 rounded-full transition-all shadow-[0_0_15px_rgba(99,102,241,0.1)] hover:shadow-[0_0_25px_rgba(99,102,241,0.3)]"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all"
              >
                Experience
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-indigo-300 hover:drop-shadow-[0_0_8px_rgba(165,180,252,0.8)] transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-medium text-white bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 rounded-xl transition-all shadow-[0_0_15px_rgba(99,102,241,0.2)]"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
