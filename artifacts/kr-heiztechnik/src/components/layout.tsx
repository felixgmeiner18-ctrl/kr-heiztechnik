import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Startseite", path: "/" },
  { name: "Heizung", path: "/heizung" },
  { name: "Sanitär", path: "/sanitaer" },
  { name: "Erdgas & Flüssiggas", path: "/gas" },
  { name: "Mobile Notheizung", path: "/notheizung" },
  { name: "Kontakt", path: "/kontakt" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-2xl shadow-[0_2px_40px_rgba(0,0,0,0.4)] border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="group flex items-center gap-3 transition-all hover:opacity-90"
            >
              <img
                src={`${baseUrl}images/logo-flame.png`}
                alt="KR Heiztechnik Logo"
                className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-display font-extrabold text-white tracking-tight">
                KR Heiztechnik
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                const isContact = link.path === "/kontakt";

                if (isContact) {
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className="ml-4 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 bg-primary text-white hover:bg-accent hover:shadow-[0_0_25px_rgba(232,97,26,0.5)] hover:-translate-y-0.5 animate-pulse-glow"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden pt-24 pb-8 px-4 flex flex-col"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-5 py-4 rounded-2xl font-display font-semibold text-xl transition-colors ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-4 p-5 bg-card rounded-2xl border border-white/5">
              <a href="tel:+436645319004" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                +43 664 / 531 90 04
              </a>
              <a href="mailto:info@kr-heiztechnik.at" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                info@kr-heiztechnik.at
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-grow pt-0">{children}</main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/8 pt-16 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-primary/8 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-5 inline-flex">
                <img
                  src={`${baseUrl}images/logo-flame.png`}
                  alt="KR Heiztechnik"
                  className="w-9 h-9 object-contain"
                />
                <span className="text-xl font-display font-extrabold text-white tracking-tight">KR Heiztechnik</span>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed text-sm">
                Ihr persönlicher Installateur für Heizung, Sanitär und Gas im Walgau und ganz Vorarlberg. Direkt, ehrlich, verlässlich.
              </p>
              <p className="text-xs text-muted-foreground/60 font-medium tracking-wide uppercase">
                Krientschnig Heiztechnik · Nuziders · Vorarlberg
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Leistungen</h3>
              <ul className="space-y-3">
                {navLinks.slice(1, 5).map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Kontakt</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://maps.google.com/?q=Walgaustraße+67,Nuziders" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-muted-foreground hover:text-white transition-colors group text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Walgaustraße 67<br/>A-6714 Nuziders</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+436645319004" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    +43 664 / 531 90 04
                  </a>
                </li>
                <li>
                  <a href="mailto:info@kr-heiztechnik.at" className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    info@kr-heiztechnik.at
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
            <p>© {new Date().getFullYear()} Krientschnig Heiztechnik · Alle Rechte vorbehalten</p>
            <Link href="/kontakt" className="hover:text-white transition-colors">Impressum & Datenschutz</Link>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-white shadow-[0_0_30px_rgba(232,97,26,0.4)] flex items-center justify-center z-40 hover:bg-accent hover:scale-110 transition-all duration-300"
            aria-label="Nach oben"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
