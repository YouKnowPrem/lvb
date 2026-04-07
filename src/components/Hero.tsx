import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.4,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-24 text-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-indigo-600/20 blur-[80px] sm:blur-[120px] animate-pulse" />
        <div className="absolute -right-1/4 bottom-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-purple-600/10 blur-[80px] sm:blur-[120px] animate-pulse delay-700" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6 inline-flex items-center rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 px-4 py-1.5 text-sm font-medium text-indigo-300 light:text-indigo-700 backdrop-blur-md"
      >
        <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
        Presentation Live
      </motion.div>

      <h1
        ref={titleRef}
        className="font-display max-w-4xl text-5xl font-bold tracking-tight text-white light:text-neutral-900 sm:text-7xl md:text-8xl"
      >
        LAMPLEIOH V. <br />
        <span className="text-gradient">BRATHWAIT.</span>
      </h1>

      <p
        ref={subtitleRef}
        className="mt-8 max-w-2xl text-lg text-neutral-400 light:text-neutral-600 sm:text-xl"
      >
        A deep dive into strategic innovation and legal precedents. 
        Presented by the Legal Team.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <a
          href="#presentation"
          className="rounded-full bg-white light:bg-neutral-900 px-8 py-4 font-semibold text-black light:text-white transition-all hover:bg-neutral-200 light:hover:bg-neutral-800 hover:scale-105 active:scale-95"
        >
          View Presentation
        </a>
        <a
          href="#team"
          className="rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 px-8 py-4 font-semibold text-white light:text-neutral-900 backdrop-blur-md transition-all hover:bg-white/10 light:hover:bg-black/10 hover:scale-105 active:scale-95"
        >
          Meet the Team
        </a>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 light:text-black/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
