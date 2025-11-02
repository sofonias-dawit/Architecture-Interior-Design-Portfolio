import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const FullPortfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Full Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the complete collection of my architectural and design work
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-soft overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Preview/Thumbnail side */}
              <div className="bg-gradient-hero p-12 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-24 h-24 text-primary mx-auto mb-6" />
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    Complete Portfolio
                  </p>
                </div>
              </div>

              {/* Content side */}
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  Architecture & Design Portfolio
                </h3>
                <p className="text-foreground mb-6 leading-relaxed">
                  This comprehensive portfolio showcases my journey through architectural design, 
                  urban planning, and interior design projects. It includes detailed case studies, 
                  technical drawings, 3D visualizations, and conceptual explorations.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-accent rounded-full" />
                    Residential & Commercial Projects
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-accent rounded-full" />
                    Urban Planning Concepts
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-accent rounded-full" />
                    Interior Design Studies
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-blue-accent rounded-full" />
                    Technical Documentation
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1iFOGHYR8Cmq2LPtVHj5EFUzLawrcPvHI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-blue-accent transition-all shadow-soft hover:shadow-hover group"
                >
                  View Full Portfolio on Google Drive
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullPortfolio;
