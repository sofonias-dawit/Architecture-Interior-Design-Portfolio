import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Instagram, Send, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-blue-accent transition-all shadow-soft hover:shadow-hover"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-card p-8 rounded-lg shadow-soft">
                <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                  Connect With Me
                </h3>
                
                <div className="space-y-6">
                  <a
                    href="tel:+251973773171"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span>+251 973 773 171</span>
                  </a>

                  <a
                    href="mailto:filenbaralemu85@gmail.com"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span>filenbaralemu85@gmail.com</span>
                  </a>

                  <a
                    href="https://instagram.com/fila7_377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://t.me/filenbar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Send className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span>Telegram</span>
                  </a>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mt-2">
                    Available for freelance projects and collaborations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
