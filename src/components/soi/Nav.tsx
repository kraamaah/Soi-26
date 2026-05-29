import { useState, useEffect } from "react";

export function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#events", label: "Problem Statements" },
    { href: "#timeline", label: "Timeline" },
    { href: "#team", label: "Team" },
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
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center border-[3px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)]">
            <span className="font-display text-sm">SOI</span>
          </span>
          <span className="hidden font-display text-sm uppercase tracking-tight md:inline">
            Summer of Innovation
          </span>
        </a>
        <nav className="flex items-center gap-1.5 md:gap-3">
          {links.map((l) => {
            const isActive = activeSection === l.href.substring(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`border-[2px] border-ink px-2.5 py-1 font-display text-[10px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] md:px-3 md:py-1.5 ${
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
      </div>
    </header>
  );
}
