import { useState, useRef } from "react";
import { Sparkle } from "./BrutalCard";
import { SoiLogo } from "./SoiLogo";
import { EasterEggGame } from "./EasterEggGame";

export function Hero() {
  const [clicks, setClicks] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleLogoClick = () => {
    if (clickTimeout.current) clearTimeout(clickTimeout.current);

    setClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setShowGame(true);
        return 0;
      }
      return next;
    });

    clickTimeout.current = setTimeout(() => {
      setClicks(0);
    }, 2000);
  };

  return (
    <section id="home" className="relative overflow-hidden border-b-[3px] border-ink conic-pattern">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-28">
        <div className="relative">
          <span className="inline-block border-[3px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase tracking-widest shadow-brutal-sm">
            Seventh Edition · 2026
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl leading-[0.95] md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight break-normal">
            Summer
            <br />
            of <span className="text-primary">Innovation</span>
            <br />
            2026
          </h1>
          <p className="mt-6 max-w-md border-l-[4px] border-primary pl-4 text-lg text-foreground/80">
            This Summer, build skills that outlast the season.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#events"
              className="inline-flex items-center border-[3px] border-ink bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground shadow-brutal transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Explore Problem Statements →
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center border-[3px] border-ink bg-card px-6 py-3 font-display text-sm uppercase tracking-wide shadow-brutal transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              See Timeline
            </a>
          </div>
          <Sparkle className="absolute -left-6 top-12 h-6 w-6 text-accent" />
          <Sparkle className="absolute -right-2 top-2 h-4 w-4 text-primary" />
        </div>

        <div className="relative p-2 md:p-6">
          <div className="absolute -inset-1 -rotate-1 border-[3px] border-ink bg-accent/10 rounded-lg conic-pattern" aria-hidden />
          <div 
            onClick={handleLogoClick}
            className="relative w-full border-[3px] border-ink bg-card p-6 shadow-brutal-lg flex items-center justify-center cursor-pointer select-none hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200"
            title="Click me 5 times for a surprise!"
          >
            <SoiLogo className="w-full h-auto max-w-md md:max-w-lg" />
          </div>
          <Sparkle className="absolute -right-4 -top-6 h-8 w-8 text-primary animate-pulse" />
          <Sparkle className="absolute -bottom-4 -left-4 h-6 w-6 text-accent animate-pulse" />
        </div>
      </div>

      {showGame && <EasterEggGame onClose={() => setShowGame(false)} />}
    </section>
  );
}
