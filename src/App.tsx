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
  { name: "Sanjeevani", role: "Anchor & Moderator", email: "sanjeevani@example.com", linkedin: "#", image: "/Sanjeevani.jpeg" },
  { name: "Shariq", role: "Legal Precedent Analyst", email: "shariq@example.com", linkedin: "#" },
  { name: "Subha", role: "Core Issues Analyst", email: "subha@example.com", linkedin: "#" },
  { name: "Sonali", role: "Case Story Narrator", email: "sonali@example.com", linkedin: "#", image: "/Sonali.jpeg" },
  { name: "Nayeem", role: "Plaintiff's Counsel", email: "nayeem@example.com", linkedin: "#", image: "/Nayeem.jpeg" },
  { name: "Tanyia", role: "Defense Counsel", email: "tanya@example.com", linkedin: "#", image: "/Tanya.jpeg" },
  { name: "Raghvi", role: "Presiding Judge", email: "raghavi@example.com", linkedin: "#", image: "/Raghavi.jpeg" },
  { name: "Nargis", role: "Verdict Impact Analyst", email: "nargis@example.com", linkedin: "#" },
  { name: "Prem", role: "Expert Q&A Panelist", email: "prem@example.com", linkedin: "#", image: "/Prem.png" },
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
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={toggleTheme}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 dark:text-white light:text-neutral-900 light:border-black/10 light:bg-black/5"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="rounded-full shrink-0 bg-white px-4 sm:px-5 py-2 text-xs font-bold text-black transition-all hover:bg-neutral-200 active:scale-95 dark:bg-white dark:text-black light:bg-neutral-900 light:text-white">
              CONTACT
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
              <h2 className="font-display mb-4 text-4xl font-bold text-white sm:text-5xl dark:text-white light:text-neutral-900">Our Expert Team</h2>
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
            © 2026 LvB Case Presentation. Built with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}
