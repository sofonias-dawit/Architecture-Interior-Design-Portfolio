import { motion } from "framer-motion";
import { useState } from "react";
import { projects, Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";

// Import all images
import g7MixedUse from "@/assets/g7-mixed-use-building.jpg";
import interiorDesign from "@/assets/Interior-Design.png";
import busTerminal from "@/assets/arba-minch-bus-terminal.jpg";
import bedroom from "@/assets/Bedroom-Interior.png";
import mixedUse from "@/assets/Mixed-Use-Building.jpg";
import apartment from "@/assets/Apartment-interior.jpg";

// Create a mapping object
const imageMap = {
  "/src/assets/g7-mixed-use-building.jpg": g7MixedUse,
  "/src/assets/Interior-Design.png": interiorDesign,
  "/src/assets/arba-minch-bus-terminal.jpg": busTerminal,
  "/src/assets/Bedroom-Interior.png": bedroom,
  "/src/assets/Mixed-Use-Building.jpg": mixedUse,
  "/src/assets/Apartment-interior.jpg": apartment,
};

const Projects = () => {
  const [filter, setFilter] = useState<"all" | "interior" | "architecture">("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of architectural and interior design work
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "architecture", "interior"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as typeof filter)}
              className={`px-6 py-2 rounded-full transition-all capitalize ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div
          key={filter}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-hover transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={imageMap[project.image as keyof typeof imageMap]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-blue-accent font-medium">
                    {project.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message when no projects found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;