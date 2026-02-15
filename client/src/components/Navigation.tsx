import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation({ activeSection = "", isRelative = false }: { activeSection?: string; isRelative?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "The Vault Opens", href: "#act-viii", id: "act-viii" },
    { label: "The Story", href: "#story", id: "story" },
    { label: "The Reckoning", href: "#reckoning", id: "reckoning" },
    { label: "Take Action", href: "#action", id: "action" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Account for fixed header with banner
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`${isRelative ? "relative" : "fixed top-0 left-0 right-0"} z-50 transition-all duration-300 ${isScrolled || isOpen || isRelative ? "bg-black/95 backdrop-blur-sm border-b border-red-600" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`text-xl font-bold transition-colors ${activeSection === "top" ? "text-red-600" : "text-foreground hover:text-red-500"
              }`}
          >
            THE CATHEDRAL
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${activeSection === item.id
                  ? "text-red-600"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-red-600 mt-2">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors rounded-md ${activeSection === item.id
                    ? "text-red-600 bg-red-900/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
