import { motion } from "framer-motion";
import { ArrowDown, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profilePic from "@/assets/profile-picture.jpg";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com/fila7_377", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, url: "mailto:filenbaralemu85@gmail.com", label: "Email" },
    { icon: Send, url: "https://t.me/filenbar", label: "Telegram" },
  ];
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary rotate-45" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-accent rotate-45" />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Avatar className="w-44 h-44 md:w-52 md:h-52 border-4 border-primary shadow-hover">
              <AvatarImage src={profilePic} alt="Filenbar Alemu" />
              <AvatarFallback className="text-3xl font-heading">Fila</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold text-primary mb-3"
          >
            Filenbar Alemu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base uppercase tracking-widest text-muted-foreground mb-2"
          >
            Architecture & Interior Design
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-6"
          >
            5th Year Architecture & Urban Planning Student
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mb-10"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="w-12 h-12 rounded-full bg-card border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-soft hover:shadow-hover hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-card p-8 rounded-lg shadow-soft max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl font-heading font-semibold text-primary mb-4">About Me</h2>
            <p className="text-foreground leading-relaxed">
              I'm Filenbar Alemu, a 5th-year Architecture and Urban Planning student at Arba Minch University. 
              I'm passionate about architectural and interior design, creating spaces that are functional, aesthetic, 
              and environmentally responsible. My design approach focuses on blending creativity with practicality — 
              shaping buildings and interiors that reflect harmony between people, nature, and technology.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-blue-accent transition-all shadow-soft hover:shadow-hover inline-flex items-center gap-2"
          >
            View My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
