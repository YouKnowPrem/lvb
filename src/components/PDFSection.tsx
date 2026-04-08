import { motion } from "motion/react";
import { FileText, Download } from "lucide-react";

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
                <a href="/Presentation.pdf" download="LvB_Case_Presentation.pdf" className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="/PPT.pdf" download="PPT.pdf" className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                  <Download size={18} />
                  Download PPT
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
