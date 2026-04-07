import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-neutral-950 p-8 light:bg-neutral-50"
    >
      <div className="w-full flex justify-between text-xs font-mono tracking-widest text-white/50 light:text-black/50">
        <span>TEAM ALPHA</span>
        <span>LOADING {Math.min(progress, 100)}%</span>
      </div>

      <div className="flex-1 flex items-center justify-center relative w-full overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-white light:text-neutral-900"
        >
          ALPHA<span className="text-indigo-500">.</span>
        </motion.h1>
      </div>

      <div className="w-full h-[2px] bg-white/10 light:bg-black/10 overflow-hidden relative rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.2, ease: "linear" }}
          className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
        />
      </div>
    </motion.div>
  );
}
