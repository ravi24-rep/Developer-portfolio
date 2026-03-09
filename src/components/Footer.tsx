import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-slate-400 py-12 border-t border-slate-800 relative z-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Ravi Dev. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <motion.a 
            href="https://github.com/ravi24-rep" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2, color: "#fff" }}
            className="hover:text-white transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/songs_lover_r.k/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2, color: "#fff" }}
            className="hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2, y: -2, color: "#fff" }}
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2, y: -2, color: "#fff" }}
            className="hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
