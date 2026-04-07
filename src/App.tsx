import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import Hero from "./components/Hero";
import TeamCard, { TeamMember } from "./components/TeamCard";
import PDFSection from "./components/PDFSection";
import LoadingScreen from "./components/LoadingScreen";

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Nargis", role: "Verdict Impact Analyst", image: "/Nargis.jpeg" },
  { name: "Nayeem", role: "Plaintiff's Counsel", image: "/Nayeem.jpeg" },
  { name: "Prem", role: "Expert Q&A Panelist", image: "/Prem.png" },
  { name: "Raghvi", role: "Presiding Judge", image: "/Raghavi.jpeg" },
  { name: "Sanjeevani", role: "Anchor & Moderator", image: "/Sanjeevani.jpeg" },
  { name: "Shariq", role: "Legal Precedent Analyst", image: "/Shariq.jpeg" },
  { name: "Sonali", role: "Case Story Narrator", image: "/Sonali.jpeg" },
  { name: "Subha", role: "Core Issues Analyst" },
  { name: "Tanyia", role: "Defense Counsel", image: "/Tanya.jpeg" },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
          if (section.id === "hero") return;

          gsap.from(section, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });
      return () => ctx.revert();
    }
  }, [loading]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-indigo-500/30 ${isDark ? "bg-neutral-950 text-neutral-100" : "bg-neutral-50 text-neutral-900"}`}>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-4 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/20 px-6 py-3 backdrop-blur-xl dark:bg-black/20 light:bg-white/40">
          <div className="font-display text-xl font-bold tracking-tighter text-white dark:text-white light:text-neutral-900">
            LvB<span className="text-indigo-500">.</span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium text-white/60 md:flex dark:text-white/60 light:text-neutral-600">
            <a href="#" className="transition-colors hover:text-white dark:hover:text-white light:hover:text-neutral-900">Home</a>
            <a href="#presentation" className="transition-colors hover:text-white dark:hover:text-white light:hover:text-neutral-900">Presentation</a>
            <a href="#team" className="transition-colors hover:text-white dark:hover:text-white light:hover:text-neutral-900">Team</a>
          </div>
          <div className="flex items-center">
            <button 
              onClick={toggleTheme}
              className="relative flex h-10 w-[72px] shrink-0 items-center rounded-full border border-white/10 bg-white/5 p-1 transition-all hover:bg-white/10 light:border-black/10 light:bg-black/5"
              aria-label="Toggle Theme"
            >
              <div
                className={`absolute h-8 w-8 rounded-full transition-transform duration-300 ease-in-out ${
                  isDark ? "translate-x-[32px] bg-white shadow-md shadow-white/20" : "translate-x-0 bg-neutral-900 shadow-md shadow-black/10"
                }`}
              />
              <div className="relative z-10 flex w-full justify-between items-center px-1.5 pointer-events-none">
                <Sun size={16} className={`transition-colors duration-300 ${!isDark ? "text-white" : "text-neutral-500 light:text-neutral-400"}`} />
                <Moon size={16} className={`transition-colors duration-300 ${isDark ? "text-black" : "text-neutral-500 light:text-neutral-400"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        
        <PDFSection />

        <section id="team" className="py-24 px-4">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="font-display mb-4 text-4xl font-bold text-white sm:text-5xl dark:text-white light:text-neutral-900">Our Team</h2>
              <p className="mx-auto max-w-2xl text-neutral-400 dark:text-neutral-400 light:text-neutral-500">
                Meet the brilliant minds behind this case study. A diverse group of specialists 
                dedicated to excellence and innovation.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM_MEMBERS.map((member, index) => (
                <TeamCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 px-4 dark:border-white/5 light:border-black/5">
        <div className="mx-auto max-w-7xl text-center">
          <div className="font-display mb-6 text-2xl font-bold text-white dark:text-white light:text-neutral-900">
            LvB<span className="text-indigo-500">.</span>
          </div>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 light:text-neutral-400">
            © 2026 All Rights reserved.|Made with 💖|By Prem
          </p>
        </div>
      </footer>
    </div>
  );
}
