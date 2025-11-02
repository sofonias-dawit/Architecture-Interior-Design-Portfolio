import { Mail, Instagram, Send } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Filenbar Alemu</h3>
            <p className="text-primary-foreground/80 text-sm">
              Architecture & Interior Design
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {["home", "projects", "portfolio", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:filenbaralemu85@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/fila7_377"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/filenbar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

       <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
  <p>
    &copy; {new Date().getFullYear()} Filenbar Alemu. All rights reserved.
  </p>
  <p className="mt-1">
    Developed by{" "}
    <a
      href="https://t.me/sofoniasdawit"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-foreground hover:underline"
    >
       Sofonias D.
    </a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
