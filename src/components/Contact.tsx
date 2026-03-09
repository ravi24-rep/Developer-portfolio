import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle2, Github, Linkedin, Instagram, Layout, Code2, Image as ImageIcon, Cloud, Terminal } from "lucide-react";
import Lottie from "lottie-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    fetch("/developer.json")
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch(err => console.error("Failed to load lottie", err));
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Simulate network request before triggering mail
    setTimeout(() => {
      setFormState("success");

      // Open email client
      window.location.href = `mailto:ravidynamo1924@gmail.com?subject=${subject}&body=${body}`;

      // Fire confetti from the button position
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
      }, 250);

      setTimeout(() => setFormState("idle"), 4000);
      e.currentTarget.reset();
    }, 1500);
  };

  // Calculate parallax offsets based on mouse position
  const xOffset = (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) / 40;
  const yOffset = (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) / 40;

  return (
    <section
      ref={containerRef}
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-[#020617] text-slate-300 overflow-hidden perspective-1000 min-h-screen flex items-center"
    >
      {/* Dynamic Background Glow following cursor */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 tracking-tighter drop-shadow-sm mb-4"
          >
            LET'S CONNECT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-indigo-400 font-mono text-lg"
          >
            {"<ReadyForOpportunities />"}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Side: Contact Form & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-12"
          >
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-slate-900/60 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800/50 hover:border-indigo-500/30 transition-colors duration-500 relative group overflow-hidden">
              {/* Form internal glow line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-slate-400">Name</label>
                    <input name="name" required type="text" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-slate-400">Email</label>
                    <input name="email" required type="email" className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-slate-400">Message</label>
                  <textarea name="message" required rows={4} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none" placeholder="Let's build something amazing together..." />
                </div>

                <button
                  disabled={formState !== "idle"}
                  className="w-full relative overflow-hidden bg-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-80 disabled:cursor-not-allowed group/btn"
                >
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500" style={{ transform: formState === "idle" ? "translateY(0)" : "translateY(-100%)" }}>
                    <span className="flex items-center gap-2 group-hover/btn:scale-105 transition-transform">
                      Send Transmission <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500" style={{ transform: formState === "submitting" ? "translateY(0)" : "translateY(100%)" }}>
                    <span className="flex items-center gap-2 opacity-80">
                      <Terminal size={18} className="animate-pulse" /> Establishing Connection...
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-emerald-500 flex items-center justify-center transition-transform duration-500" style={{ transform: formState === "success" ? "translateY(0)" : "translateY(100%)" }}>
                    <span className="flex items-center gap-2 font-bold scale-110">
                      <CheckCircle2 size={20} /> Transmission Received
                    </span>
                  </div>
                </button>
              </div>
            </form>

            {/* Quick Links & Socials */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 px-4">
              <div className="space-y-4">
                <a href="mailto:ravidynamo1924@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-indigo-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">ravidynamo1924@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <MapPin size={18} />
                  </div>
                  <span className="font-medium">India</span>
                </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/ravi24-rep" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ravi-kumar-82aa8724a/" },
                  { icon: Instagram, href: "https://www.instagram.com/songs_lover_r.k/" }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Developer Desk Lottie + Floating Cards (Interactive Design Lab) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center perspective-1000"
          >
            {/* Holographic Base Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px]" />

            {/* Central Lottie Animation */}
            <motion.div
              animate={{
                x: -xOffset * 1.5,
                y: -yOffset * 1.5,
                rotateX: yOffset * 0.5,
                rotateY: -xOffset * 0.5
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative z-20 w-full max-w-md pointer-events-none drop-shadow-2xl"
            >
              {lottieData ? (
                <Lottie animationData={lottieData} loop={true} />
              ) : (
                <div className="w-64 h-64 mx-auto bg-slate-800/50 rounded-full animate-pulse flex items-center justify-center border border-slate-700">
                  <Code2 className="text-slate-500 w-16 h-16" />
                </div>
              )}
            </motion.div>

            {/* Floating UI Elements Around Developer */}

            {/* 1. Layout Card */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: xOffset * 2,
                rotate: [-5, -2, -5],
                rotateY: xOffset * 2
              }}
              transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, x: { type: "spring" }, rotateY: { type: "spring" } }}
              className="absolute top-[10%] left-[5%] z-30 bg-[#0d1117]/80 backdrop-blur-xl border border-indigo-500/30 p-4 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)]"
            >
              <div className="flex items-center gap-3 text-indigo-300 font-mono text-xs">
                <Layout size={16} className="text-indigo-400" />
                <span>UI_Layout.tsx</span>
              </div>
              <div className="mt-3 space-y-2 w-32">
                <div className="h-2 bg-slate-700/50 rounded-full w-full" />
                <div className="h-2 bg-slate-700/50 rounded-full w-4/5" />
                <div className="h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-lg mt-2 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/40" />
                </div>
              </div>
            </motion.div>

            {/* 2. Media / Image Card */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                x: -xOffset * 1.2,
                rotate: [5, 8, 5],
                rotateX: -yOffset * 1.5
              }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }, x: { type: "spring" }, rotateX: { type: "spring" } }}
              className="absolute bottom-[20%] left-[-5%] z-30 bg-white/5 backdrop-blur-xl border border-pink-500/20 p-3 rounded-2xl shadow-xl"
            >
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex flex-col items-center justify-center text-pink-300 border border-pink-500/10">
                <ImageIcon size={24} className="mb-2" />
                <span className="text-[10px] font-mono">assets/media</span>
              </div>
            </motion.div>

            {/* 3. Terminal / Code Snippet */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: xOffset * 1.5,
                rotate: [2, -1, 2],
                rotateY: xOffset * 1.2
              }}
              transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }, x: { type: "spring" }, rotateY: { type: "spring" } }}
              className="absolute top-[25%] right-[0%] z-10 bg-[#020617]/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.15)] w-48"
            >
              <div className="flex gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <p className="font-mono text-[10px] text-emerald-400 leading-relaxed">
                <span className="text-fuchsia-400">const</span> developer = <span className="text-yellow-300">new</span> Engineer();<br />
                <span className="text-blue-400">await</span> developer.build(<br />
                &nbsp;&nbsp;<span className="text-green-300">'modern web'</span><br />
                );<br />
                <span className="text-slate-400">// success</span>
              </p>
            </motion.div>

            {/* 4. Deployment Cloud Icon */}
            <motion.div
              animate={{ y: [0, 15, 0], x: -xOffset * 2.5 }}
              transition={{ y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }, x: { type: "spring" } }}
              className="absolute bottom-[30%] right-[5%] z-30 w-14 h-14 bg-sky-500/10 backdrop-blur-md border border-sky-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(14,165,233,0.3)]"
            >
              <Cloud className="text-sky-400" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
