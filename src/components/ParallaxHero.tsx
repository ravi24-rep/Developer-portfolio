import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Music } from "lucide-react";

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "350%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const distantMountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const midMountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const wavesY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  // Lightning star music notes
  const music1X = useTransform(scrollYProgress, [0, 1], ["0vw", "150vw"]);
  const music1Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const music2X = useTransform(scrollYProgress, [0, 1], ["0vw", "-120vw"]);
  const music2Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-150vh"]);
  const music3X = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);
  const music3Y = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"]);
  const music4X = useTransform(scrollYProgress, [0, 1], ["0vw", "-150vw"]);
  const music4Y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);
  const music5X = useTransform(scrollYProgress, [0, 1], ["0vw", "200vw"]);
  const music5Y = useTransform(scrollYProgress, [0, 1], ["0vh", "-50vh"]);

  return (
    <div
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e1b4b] flex items-center justify-center"
    >
      {/* Background Stars */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-50"
      >
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute top-20 left-2/3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute top-40 left-1/5 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute top-1/3 left-3/4 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
        <div className="absolute top-2/3 left-4/5 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
      </motion.div>

      {/* Music Notes in the Sky (Lightning Stars) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: music1X, y: music1Y }}
          className="absolute top-[15%] left-[20%]"
        >
          <Music className="text-cyan-300 w-8 h-8 drop-shadow-[0_0_20px_rgba(34,211,238,1)] blur-[1px]" />
        </motion.div>
        <motion.div
          style={{ x: music2X, y: music2Y }}
          className="absolute top-[45%] left-[75%]"
        >
          <Music className="text-purple-400 w-12 h-12 drop-shadow-[0_0_25px_rgba(192,132,252,1)] blur-[1px]" />
        </motion.div>
        <motion.div
          style={{ x: music3X, y: music3Y }}
          className="absolute top-[10%] left-[85%]"
        >
          <Music className="text-pink-400 w-6 h-6 drop-shadow-[0_0_15px_rgba(244,114,182,1)] blur-[1px]" />
        </motion.div>
        <motion.div
          style={{ x: music4X, y: music4Y }}
          className="absolute top-[60%] left-[15%]"
        >
          <Music className="text-blue-400 w-16 h-16 drop-shadow-[0_0_30px_rgba(96,165,250,1)] blur-[2px]" />
        </motion.div>
        <motion.div
          style={{ x: music5X, y: music5Y }}
          className="absolute top-[35%] left-[40%]"
        >
          <Music className="text-indigo-300 w-10 h-10 drop-shadow-[0_0_20px_rgba(165,180,252,1)] blur-[1px]" />
        </motion.div>
      </div>

      {/* Moon / Planet */}
      <motion.div
        style={{ y: moonY }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-300 to-purple-600 shadow-[0_0_100px_rgba(167,139,250,0.5)]"
      />

      {/* Text */}
      <motion.div
        style={{ y: textY, scale: textScale, opacity: textOpacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          RAVI DEV
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-3xl text-indigo-200 font-medium tracking-wide uppercase drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]"
        >
          Vibe Coder | CS Student
        </motion.p>
      </motion.div>

      {/* Distant Mountains */}
      <motion.div
        style={{ y: distantMountainsY }}
        className="absolute bottom-0 left-0 right-0 z-30 h-[50vh]"
      >
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full fill-[#1e1b4b]"
        >
          <path d="M0,400 L0,200 L150,100 L300,250 L500,50 L700,200 L900,100 L1100,250 L1200,150 L1200,400 Z" />
        </svg>
      </motion.div>

      {/* Midground Mountains */}
      <motion.div
        style={{ y: midMountainsY }}
        className="absolute bottom-0 left-0 right-0 z-40 h-[40vh]"
      >
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full fill-[#0f172a]"
        >
          <path d="M0,400 L0,250 L200,150 L400,300 L600,100 L800,250 L1000,150 L1200,300 L1200,400 Z" />
        </svg>
      </motion.div>

      {/* Sea Waves */}
      <motion.div
        style={{ y: wavesY }}
        className="absolute bottom-0 left-0 right-0 z-[45] h-[35vh] overflow-hidden"
      >
        {/* Back wave */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute bottom-0 w-[200%] h-full"
        >
          <svg viewBox="0 0 2400 400" preserveAspectRatio="none" className="w-full h-full fill-cyan-900/40">
            <path d="M0,200 C200,350 400,50 600,200 C800,350 1000,50 1200,200 C1400,350 1600,50 1800,200 C2000,350 2200,50 2400,200 L2400,400 L0,400 Z" />
          </svg>
        </motion.div>
        {/* Mid wave */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute bottom-0 w-[200%] h-full translate-y-6"
        >
          <svg viewBox="0 0 2400 400" preserveAspectRatio="none" className="w-full h-full fill-blue-800/60">
            <path d="M0,250 C200,100 400,400 600,250 C800,100 1000,400 1200,250 C1400,100 1600,400 1800,250 C2000,100 2200,400 2400,250 L2400,400 L0,400 Z" />
          </svg>
        </motion.div>
        {/* Front wave */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute bottom-0 w-[200%] h-full translate-y-12"
        >
          <svg viewBox="0 0 2400 400" preserveAspectRatio="none" className="w-full h-full fill-indigo-950/90">
            <path d="M0,300 C200,450 400,150 600,300 C800,450 1000,150 1200,300 C1400,450 1600,150 1800,300 C2000,450 2200,150 2400,300 L2400,400 L0,400 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Foreground */}
      <motion.div
        style={{ y: foregroundY }}
        className="absolute bottom-0 left-0 right-0 z-50 h-[25vh]"
      >
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full fill-[#020617]"
        >
          <path d="M0,200 L0,100 Q300,0 600,100 T1200,50 L1200,200 Z" />
        </svg>
        <div className="absolute bottom-0 w-full h-10 bg-[#020617] blur-md translate-y-5" />
      </motion.div>

      {/* Gradient Overlay to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-50" />
    </div>
  );
}
