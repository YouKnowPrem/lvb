import { motion } from "motion/react";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function PDFSection() {
  return (
    <section id="presentation" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass overflow-hidden rounded-3xl"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                <FileText size={24} />
              </div>
              <h2 className="font-display mb-4 text-3xl font-bold text-white light:text-neutral-900">Case Presentation PPT</h2>
              <p className="mb-8 text-neutral-400 light:text-neutral-600 leading-relaxed">
                Explore our comprehensive case study analysis. This presentation covers the methodology, 
                key findings, and strategic recommendations developed by our team.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  <Download size={18} />
                  Download PDF
                </button>
                <button className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 light:border-black/10 light:bg-black/5 px-6 py-3 font-medium text-white light:text-neutral-900 transition-all hover:bg-white/10 light:hover:bg-black/10">
                  <ExternalLink size={18} />
                  View Fullscreen
                </button>
              </div>
            </div>
            
            <div className="relative h-64 w-full bg-neutral-900 light:bg-neutral-200 md:h-auto md:w-1/3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <FileText size={48} className="mx-auto mb-4 text-white/20 light:text-black/20" />
                  <span className="text-xs font-mono text-white/40 light:text-black/40 uppercase tracking-widest">Preview Unavailable</span>
                </div>
              </div>
              {/* In a real app, you'd put an iframe or image here */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 light:from-white/80 to-transparent md:bg-gradient-to-l" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
