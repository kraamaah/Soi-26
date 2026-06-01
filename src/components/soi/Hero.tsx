import { useState, useRef, useEffect } from "react";
import { Sparkle } from "./BrutalCard";
import { SoiLogo } from "./SoiLogo";
import { EasterEggGame } from "./EasterEggGame";

export function Hero() {
  const [clicks, setClicks] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const TARGET_DATE = new Date("2026-06-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isExpired: true }));
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleOpenArcade = () => {
      setShowGame(true);
      window.dispatchEvent(
        new CustomEvent("soi-achievement", { detail: "arcade-master" }),
      );
    };
    window.addEventListener("soi-open-arcade", handleOpenArcade);
    return () => window.removeEventListener("soi-open-arcade", handleOpenArcade);
  }, []);

  const handleLogoClick = () => {
    if (clickTimeout.current) clearTimeout(clickTimeout.current);

    setClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setShowGame(true);
        window.dispatchEvent(
          new CustomEvent("soi-achievement", { detail: "arcade-master" }),
        );
        return 0;
      }
      return next;
    });

    clickTimeout.current = setTimeout(() => {
      setClicks(0);
    }, 2000);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b-[3px] border-ink conic-pattern"
    >
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

          {/* Retro Countdown Timer */}
          <div className="mt-8 border-[3px] border-ink bg-card p-4 shadow-brutal-sm max-w-md relative overflow-hidden conic-pattern">
            {/* Retro scanline grid overlay */}
            <div
              className="absolute inset-0 bg-repeat bg-center opacity-[0.03] pointer-events-none dots-grid"
              aria-hidden
            />
            <div className="relative flex items-center justify-between border-b-[2px] border-ink pb-2 mb-3">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping inline-block" />
                {timeLeft.isExpired
                  ? "BUILD SEASON IS LIVE"
                  : "BUILD SEASON LAUNCHING IN"}
              </span>
              <span className="font-mono text-[10px] font-bold text-foreground/50">
                EDITION_07.SYS
              </span>
            </div>

            {timeLeft.isExpired ? (
              <a
                href="#events"
                className="relative flex items-center justify-center py-2 bg-primary text-primary-foreground border-[2px] border-ink font-display text-sm uppercase tracking-wider shadow-brutal-sm hover:bg-primary/95 transition-all block text-center cursor-pointer select-none hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0"
              >
                SoI is LIVE, check out the Drops
              </a>
            ) : (
              <div className="relative grid grid-cols-4 gap-2 text-center">
                {/* Days */}
                <div className="border-[2px] border-ink bg-background p-2.5 shadow-brutal-sm flex flex-col items-center">
                  <span className="font-display text-2xl md:text-3xl text-primary leading-none">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-foreground/60 uppercase tracking-widest mt-1">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="border-[2px] border-ink bg-background p-2.5 shadow-brutal-sm flex flex-col items-center">
                  <span className="font-display text-2xl md:text-3xl text-accent leading-none">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-foreground/60 uppercase tracking-widest mt-1">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div className="border-[2px] border-ink bg-background p-2.5 shadow-brutal-sm flex flex-col items-center">
                  <span className="font-display text-2xl md:text-3xl text-primary leading-none">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-foreground/60 uppercase tracking-widest mt-1">
                    Mins
                  </span>
                </div>

                {/* Seconds */}
                <div className="border-[2px] border-ink bg-accent/5 p-2.5 shadow-brutal-sm flex flex-col items-center border-dashed border-accent">
                  <span className="font-display text-2xl md:text-3xl text-accent leading-none animate-pulse">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest mt-1">
                    Secs
                  </span>
                </div>
              </div>
            )}
          </div>
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
          <div
            className="absolute -inset-1 -rotate-1 border-[3px] border-ink bg-accent/10 rounded-lg conic-pattern"
            aria-hidden
          />
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
