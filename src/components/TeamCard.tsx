import { motion } from "motion/react";
import { User, ArrowUpRight } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface TeamCardProps {
  member: TeamMember;
  index: number;
  key?: string | number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  const memberId = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10 light:hover:border-black/20 light:hover:bg-black/10"
    >
      {/* Background Accents */}
      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-indigo-500/5 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/15" />
      <div className="absolute left-6 top-6 text-[10px] font-mono font-bold tracking-[0.2em] text-white/20 light:text-black/20">
        MEMBER / {memberId}
      </div>

      <div className="relative z-10 mt-8 flex flex-col items-center text-center">
        {/* Avatar Area */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl transition-all duration-500 group-hover:bg-indigo-500/40" />
          <div className="relative flex h-36 w-36 sm:h-40 sm:w-40 items-center justify-center rounded-full border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 p-2 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
            <div className="h-full w-full overflow-hidden rounded-full bg-neutral-900 light:bg-neutral-100">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-indigo-400/50">
                  <User size={56} />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Role Badge */}
        <div className="mb-3 flex items-center justify-center gap-2">
          <div className="h-2.5 w-2.5 rounded-[3px] bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-indigo-400">
            {member.role}
          </p>
        </div>

        {/* Name */}
        <h3 className="font-display text-2xl font-bold tracking-tight text-white light:text-neutral-900 transition-colors group-hover:text-indigo-100 light:group-hover:text-indigo-600 dark:text-white">
          {member.name}
        </h3>

        {/* Empty space as requested */}
        <div className="mt-8 h-4" />
      </div>
    </motion.div>
  );
}
