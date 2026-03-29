import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-400 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Trailing glowing orb */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-indigo-500/50 bg-indigo-500/10 rounded-full pointer-events-none z-[9998] backdrop-blur-[2px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.05)",
          borderColor: isHovering ? "rgba(99, 102, 241, 0.8)" : "rgba(99, 102, 241, 0.4)",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
