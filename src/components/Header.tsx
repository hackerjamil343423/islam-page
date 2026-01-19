import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#hero" },
    { name: "المشاكل", href: "#problem" },
    { name: "الحلول", href: "#solutions" },
    { name: "الخدمات", href: "#offer" },
    { name: "النتائج", href: "#testimonials" },
    { name: "الأسئلة", href: "#faq" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Flowing wave bottom border */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          className="w-full h-8"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ transform: "translateY(99%)" }}
        >
          <path
            fill="url(#gradient-wave)"
            d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z"
            className={`transition-transform duration-700 ${
              isScrolled ? "scale-y-50 opacity-30" : "scale-y-100 opacity-60"
            }`}
          />
          <defs>
            <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(var(--mint))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="نمو إلكتروني"
              className="w-12 h-12 rounded-2xl object-cover shadow-lg"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">اسلام ابراهيم</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-mint group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/201152628699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-mint hover:from-primary/90 hover:to-mint/90 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>تواصل معنا</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-up">
            <div className="flex flex-col gap-2 p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-2xl">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/201152628699"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-gradient-to-r from-primary to-mint text-white rounded-xl font-semibold text-center shadow-lg"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
