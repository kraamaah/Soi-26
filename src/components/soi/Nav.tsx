import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("soi_theme") || "light";
    }
    return "light";
  });
  const [logoClicks, setLogoClicks] = useState(0);
  const logoClickTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("soi_theme", theme);
  }, [theme]);

  const handleToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined") {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Track clicks for Sound Wizard synthesizer unlock on mobile/desktop
      if (logoClickTimeout.current) clearTimeout(logoClickTimeout.current);
      setLogoClicks((prev) => {
        const next = prev + 1;
        if (next >= 3) {
          window.dispatchEvent(
            new CustomEvent("soi-achievement", { detail: "synth-explorer" }),
          );
          window.dispatchEvent(new CustomEvent("soi-open-synth"));
          return 0;
        }
        return next;
      });
      logoClickTimeout.current = setTimeout(() => {
        setLogoClicks(0);
      }, 2000);

      // Spawn retro cosmic wave particles radiating from button center
      const particleCount = 18;
      const colors = [
        "var(--primary)",
        "var(--accent)",
        "#2747FF",
        "#FF6A3D",
        "#ff58b6",
      ];
      for (let i = 0; i < particleCount; i++) {
        const el = document.createElement("div");
        el.className = "cosmic-particle";

        const angle =
          (i * 2 * Math.PI) / particleCount + (Math.random() - 0.5) * 0.35;
        const distance = 90 + Math.random() * 110;
        const tx = `${Math.cos(angle) * distance}px`;
        const ty = `${Math.sin(angle) * distance}px`;
        const rot = `${(Math.random() - 0.5) * 720}deg`;

        el.style.setProperty("--tx", tx);
        el.style.setProperty("--ty", ty);
        el.style.setProperty("--rot", rot);

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        el.style.borderRadius = Math.random() > 0.5 ? "50%" : "0px";

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 600);
      }

      // Spawn retro pixel glitch boot screen overlay
      const overlay = document.createElement("div");
      overlay.className = "cosmic-grid-overlay";
      document.body.appendChild(overlay);
      setTimeout(() => overlay.remove(), 450);
    }

    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      window.dispatchEvent(
        new CustomEvent("soi-achievement", { detail: "night-owl" }),
      );
    }
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#events", label: "Problem Statements" },
    { href: "#timeline", label: "Timeline" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for sticky navbar

      for (const link of links) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-2.5">
            {/* Playful 'Click Here' indicator pointing to the right */}
            <span className="font-mono text-[9px] font-bold text-accent animate-pulse uppercase tracking-wider select-none shrink-0 border-[1.5px] border-ink bg-card px-1.5 py-0.5 shadow-brutal-sm">
              CLICK HERE ➜
            </span>
            <button
              onClick={handleToggleTheme}
              className="grid h-9 w-9 place-items-center border-[3px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)] cursor-pointer select-none hover:scale-[1.05] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--ink)] transition-all shrink-0"
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
            >
              <span className="font-display text-sm select-none">SOI</span>
            </button>
            <a href="#home" className="flex items-center">
              <span className="hidden font-display text-sm uppercase tracking-tight md:inline">
                Summer of Innovation
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 md:gap-3">
            {links.map((l) => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`border-[2px] border-ink px-3 py-1.5 font-display text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] ${
                    isActive
                      ? "bg-accent text-accent-foreground -translate-x-[1.5px] -translate-y-[1.5px] shadow-[3.5px_3.5px_0_0_var(--ink)]"
                      : "bg-card text-ink hover:bg-peach hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button (Restored to its original layout position) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-11 w-11 place-items-center border-[3px] border-ink bg-card text-ink shadow-[2.5px_2.5px_0_0_var(--ink)] md:hidden cursor-pointer hover:bg-peach active:translate-x-0 active:translate-y-0 select-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-xs md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-peach border-l-[3px] border-ink shadow-[-6px_0_0_0_var(--ink)] p-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-[3px] border-ink pb-4">
            <span className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center border-[3px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)]">
                <span className="font-display text-sm">SOI</span>
              </span>
              <span className="font-display text-sm uppercase tracking-tight">
                Menu
              </span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="grid h-10 w-10 place-items-center border-[3px] border-ink bg-card text-ink shadow-[2px_2px_0_0_var(--ink)] cursor-pointer hover:bg-peach active:translate-x-0 active:translate-y-0"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-8">
            {links.map((l) => {
              const isActive = activeSection === l.href.substring(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-[3px] border-ink px-4 py-3.5 font-display text-sm uppercase tracking-wide transition-all shadow-[4px_4px_0_0_var(--ink)] text-left flex items-center justify-between ${
                    isActive
                      ? "bg-accent text-accent-foreground -translate-x-[2px] -translate-y-[2px] shadow-[6px_6px_0_0_var(--ink)]"
                      : "bg-card text-ink hover:bg-peach active:translate-x-0 active:translate-y-0"
                  }`}
                >
                  <span>{l.label}</span>
                  <span className="font-mono text-xs font-bold">→</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="border-t-[2px] border-dashed border-ink/20 pt-4 text-center">
          <span className="font-display text-[9px] uppercase tracking-wider text-foreground/50">
            Summer of Innovation '26
          </span>
        </div>
      </div>
    </>
  );
}
