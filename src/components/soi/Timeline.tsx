import { useState, useEffect, useRef } from "react";
import { events, SoiEvent, isEventActive } from "./data";

const staticStars = [
  { size: 1.5, x: 25, y: 35 },
  { size: 2.5, x: 75, y: 20 },
  { size: 2.0, x: 45, y: 75 },
  { size: 1.5, x: 85, y: 65 },
];

const getStarsForCard = (cardIndex: number) => {
  return Array.from({ length: 15 }).map((_, i) => {
    const seed = cardIndex * 15 + i;
    const angle = (seed * 73) % 360;
    const duration = 6 + ((seed * 11) % 15);
    const delay = 1 + ((seed * 3) % 10);
    const alpha = (25 + ((seed * 7) % 35)) / 100;
    const size = 1.2 + ((seed * 2) % 2.5);
    const distance = 25 + ((seed * 13) % 95);
    return { angle, duration, delay, alpha, size, distance };
  });
};

const getDeadlineStatus = (deadlineStr: string) => {
  try {
    const cleanStr = deadlineStr.replace(/(st|nd|rd|th)/g, "");
    const deadlineTime = new Date(cleanStr).getTime();
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ).getTime();
    const diffTime = deadlineTime - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { status: "closed", label: "Closed", critical: false };
    } else if (diffDays === 0) {
      return { status: "today", label: "DEADLINE TODAY!", critical: true };
    } else if (diffDays === 1) {
      return { status: "tomorrow", label: "1 Day Left!", critical: true };
    } else if (diffDays <= 7) {
      return {
        status: "approaching",
        label: `${diffDays} Days Left!`,
        critical: true,
      };
    } else {
      return {
        status: "future",
        label: `${diffDays} Days Left`,
        critical: false,
      };
    }
  } catch {
    return { status: "unknown", label: "", critical: false };
  }
};

export function Timeline() {
  const [selectedDate, setSelectedDate] = useState<string>("All");
  const [modalEvent, setModalEvent] = useState<SoiEvent | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [nextDrop, setNextDrop] = useState<{
    time: number;
    displayDate: string;
  } | null>(null);
  const [countdownTime, setCountdownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setActiveCount(events.filter((e) => isEventActive(e.date)).length);
    setMounted(true);

    const START_DATE = new Date("2026-06-02T00:00:00").getTime();
    const END_DATE = new Date("2026-07-31T23:59:59").getTime();
    const now = new Date().getTime();
    const elapsed = now - START_DATE;
    const total = END_DATE - START_DATE;
    const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
    const days = Math.max(
      0,
      Math.ceil((END_DATE - now) / (1000 * 60 * 60 * 24)),
    );
    setProgressPercent(percent);
    setDaysRemaining(days);

    const getNextDrop = () => {
      const dropDates = [
        "2026-06-02T00:00:00",
        "2026-06-09T00:00:00",
        "2026-06-16T00:00:00",
        "2026-06-23T00:00:00",
        "2026-06-30T00:00:00",
        "2026-07-07T00:00:00",
      ];
      const currentTime = new Date().getTime();

      // Find the first date in the future
      for (const d of dropDates) {
        const time = new Date(d).getTime();
        if (time > currentTime) {
          const displayDate = new Date(d).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
          });
          return { time, displayDate };
        }
      }
      return null;
    };

    const next = getNextDrop();
    setNextDrop(next);

    if (!next) return;

    const calculateCountdown = (targetTime: number) => {
      const currentTime = new Date().getTime();
      const difference = targetTime - currentTime;

      if (difference <= 0) {
        return null;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      return { days: d, hours: h, minutes: m, seconds: s };
    };

    const initialTime = calculateCountdown(next.time);
    if (initialTime) {
      setCountdownTime(initialTime);
    }

    const interval = setInterval(() => {
      const timeRemaining = calculateCountdown(next.time);
      if (!timeRemaining) {
        const updatedNext = getNextDrop();
        setNextDrop(updatedNext);
        if (!updatedNext) {
          clearInterval(interval);
        }
        return;
      }
      setCountdownTime(timeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleTimelineCardClick = (e: SoiEvent) => {
    const targetId = `ps-${e.num}`;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });

      // Temporary high-velocity brutalist ring and scale pulse
      element.classList.add(
        "ring-[6px]",
        "ring-primary",
        "scale-[1.03]",
        "z-30",
        "relative",
      );

      setTimeout(() => {
        element.classList.remove(
          "ring-[6px]",
          "ring-primary",
          "scale-[1.03]",
          "z-30",
          "relative",
        );
      }, 2000);
    }
  };

  // Extract unique short dates
  const filterDates = [
    "All",
    "2nd June",
    "9th June",
    "16th June",
    "23rd June",
    "30th June",
    "7th July",
  ];

  // Filter events based on selected date
  const filteredEvents = events.filter((e) => {
    if (selectedDate === "All") return true;
    return e.date.startsWith(selectedDate);
  });

  // Setup Scroll-Trigger Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Trigger animation once
          }
        });
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the card is visible
        rootMargin: "0px 0px -40px 0px", // Trigger slightly before it enters the viewport fully
      },
    );

    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".timeline-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, [filteredEvents]); // Re-run when filters change to observe new list items

  return (
    <section
      id="timeline"
      className="border-b-[3px] border-ink bg-peach-deep/20 py-20 relative overflow-hidden conic-pattern"
    >
      <style>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .timeline-item.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-line-draw {
          height: 0%;
          animation: drawLine 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes drawLine {
          to { height: 100%; }
        }
        @keyframes modalPop {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(12px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-pop {
          animation: modalPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Galaxy Brutalist Card Styling */
        .galaxy-card {
          --active: 0;
          --cut: 3px;
          position: relative;
          background: var(--color-card);
          border: 3px solid var(--color-ink);
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
          z-index: 10;
        }

        .galaxy-card:hover {
          --active: 1;
          transform: translateY(-2px);
          box-shadow: 
            6px 6px 0 0 var(--color-ink),
            0 0 20px 4px rgba(39, 71, 255, 0.15);
        }

        .card-spark {
          position: absolute;
          inset: -3px;
          rotate: 0deg;
          overflow: hidden;
          mask: linear-gradient(white, transparent 50%);
          animation: flip 3.6s infinite steps(2, end);
          opacity: var(--active);
          transition: opacity 0.3s ease;
          z-index: 0;
          pointer-events: none;
        }

        @keyframes flip {
          to {
            rotate: 360deg;
          }
        }

        .card-spark:before {
          content: "";
          position: absolute;
          width: 200%;
          aspect-ratio: 1;
          top: 0%;
          left: 50%;
          z-index: -1;
          translate: -50% -15%;
          rotate: 0;
          transform: rotate(-90deg);
          background: conic-gradient(
            from 0deg,
            transparent 0 340deg,
            var(--color-primary) 350deg,
            var(--color-accent) 360deg
          );
          animation: rotate 1.8s linear infinite both;
        }

        .card-backdrop {
          position: absolute;
          inset: 0;
          background: var(--color-card);
          z-index: 1;
          transition: background 0.3s ease;
        }

        .galaxy-card:hover .card-backdrop {
          background: 
            radial-gradient(
              100% 100% at 100% 100%,
              rgba(255, 233, 214, 0.45) 0%,
              transparent 75%
            ),
            radial-gradient(
              120% 120% at 0% 0%,
              rgba(39, 71, 255, 0.06) 0%,
              transparent 80%
            ),
            var(--color-card);
        }

        @keyframes rotate {
          to {
            transform: rotate(90deg);
          }
        }

        .card-galaxy {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: var(--active);
          transition: opacity 0.3s ease;
          z-index: 2;
          pointer-events: none;
        }

        .card-galaxy__ring {
          height: 250%;
          width: 250%;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          transform: translate(-35%, -45%) rotateX(-20deg) rotateY(-25deg) rotateX(90deg);
          transform-style: preserve-3d;
        }

        .card-galaxy__static {
          position: absolute;
          inset: 0;
          opacity: var(--active);
          transition: opacity 0.3s ease;
          mask: radial-gradient(white, transparent);
          z-index: 2;
          pointer-events: none;
        }

        .card-star {
          height: calc(var(--size) * 1px);
          aspect-ratio: 1;
          background: var(--color-ink);
          border-radius: 50%;
          position: absolute;
          opacity: var(--alpha);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(10deg) rotate(0deg) translateY(calc(var(--distance) * 1px));
          animation: orbit calc(var(--duration) * 1s) calc(var(--delay) * -1s) infinite linear;
        }

        .card-star--static {
          animation: none;
          top: var(--y);
          left: var(--x);
          transform: translate(-50%, -50%);
          opacity: 0.22;
        }

        @keyframes shake-warning {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-1.5deg) scale(1.02); }
          75% { transform: rotate(1.5deg) scale(1.02); }
        }
        .animate-shake-warning {
          animation: shake-warning 0.25s infinite ease-in-out;
        }
      `}</style>
      <div
        ref={containerRef}
        className="mx-auto max-w-7xl px-4 md:px-8 relative"
      >
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-display text-xs uppercase tracking-widest text-primary">
              Two Months · Eighteen Challenges
            </span>
            <h2 className="mt-2 font-display text-4xl uppercase md:text-6xl">
              Timeline
            </h2>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm">
              Active Drops: {activeCount}
            </span>
            <span className="border-[2px] border-ink bg-card px-3 py-1 font-display text-xs uppercase shadow-brutal-sm">
              Total PS: 18
            </span>
          </div>
        </div>

        {/* Progress & Next Drop Countdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Summer Progress Tracker */}
          <div className="lg:col-span-2 border-[3px] border-ink bg-card p-4 sm:p-5 shadow-brutal relative overflow-hidden conic-pattern">
            {/* Retro scanline grid overlay */}
            <div
              className="absolute inset-0 bg-repeat bg-center opacity-[0.03] pointer-events-none dots-grid"
              aria-hidden
            />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b-2 border-ink pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
                </div>
                <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider ml-1.5">
                  SOI_CHRONO.SYS // ACTIVE_SOLVING_PHASE
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold text-foreground/50">
                BUILD_SEASON_TIMELINE
              </span>
            </div>

            <div className="relative space-y-3.5">
              {/* The Outer Brutalist Track */}
              <div className="h-7 w-full border-[2.5px] border-ink bg-background relative overflow-hidden shadow-brutal-xs flex items-center">
                {/* Inner progress bar */}
                <div
                  className="h-full bg-accent border-r-[2.5px] border-ink transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
                {/* Text indicator centered or inside the progress track */}
                <span className="absolute inset-0 flex items-center justify-center font-display text-[10px] sm:text-xs uppercase font-bold text-ink mix-blend-difference">
                  {progressPercent.toFixed(1)}% Elapsed
                </span>
              </div>

              {/* Labels and values display */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-xs font-bold uppercase pt-1">
                <a
                  href="https://youtube.com/shorts/0nsZDdlXm64?si=7Z6XvPFCM7dDBm95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-ink bg-background hover:bg-[#FFD700] hover:text-ink px-3 py-1 shadow-brutal-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all active:translate-x-0 active:translate-y-0 text-center cursor-pointer decoration-none"
                >
                  The Clock is ticking...
                </a>
                <div className="flex items-center gap-2 sm:self-end">
                  <span className="border-2 border-ink bg-accent text-accent-foreground px-2 py-1 shadow-brutal-xs animate-pulse">
                    {daysRemaining} Days Remaining
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Next Drop Countdown Card */}
          <div className="border-[3px] border-ink bg-card p-4 sm:p-5 shadow-brutal relative overflow-hidden conic-pattern flex flex-col justify-between">
            {/* Retro scanline grid overlay */}
            <div
              className="absolute inset-0 bg-repeat bg-center opacity-[0.03] pointer-events-none dots-grid"
              aria-hidden
            />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b-2 border-ink pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </div>
                <span className="font-mono text-xs font-bold text-foreground uppercase tracking-wider ml-1.5">
                  NEXT_DROP_COUNTDOWN.SYS
                </span>
              </div>
              <span className="font-mono text-[10px] font-bold text-foreground/50">
                RELEASE_SCHEDULE
              </span>
            </div>

            <div className="relative flex-1 flex flex-col justify-center py-2">
              {nextDrop ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase text-foreground/60">
                      Next Drop:
                    </span>
                    <span className="border-2 border-ink bg-accent text-accent-foreground px-2 py-0.5 font-display text-[10px] uppercase shadow-brutal-xs">
                      {nextDrop.displayDate}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="border-2 border-ink bg-background p-2 shadow-brutal-xs flex flex-col items-center">
                      <span className="font-display text-xl sm:text-2xl text-primary leading-none">
                        {String(countdownTime.days).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[8px] font-bold text-foreground/60 uppercase mt-1">
                        Days
                      </span>
                    </div>
                    <div className="border-2 border-ink bg-background p-2 shadow-brutal-xs flex flex-col items-center">
                      <span className="font-display text-xl sm:text-2xl text-accent leading-none">
                        {String(countdownTime.hours).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[8px] font-bold text-foreground/60 uppercase mt-1">
                        Hours
                      </span>
                    </div>
                    <div className="border-2 border-ink bg-background p-2 shadow-brutal-xs flex flex-col items-center">
                      <span className="font-display text-xl sm:text-2xl text-primary leading-none">
                        {String(countdownTime.minutes).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[8px] font-bold text-foreground/60 uppercase mt-1">
                        Mins
                      </span>
                    </div>
                    <div className="border-2 border-ink bg-accent/5 p-2 shadow-brutal-xs flex flex-col items-center border-dashed border-accent">
                      <span className="font-display text-xl sm:text-2xl text-accent leading-none animate-pulse">
                        {String(countdownTime.seconds).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[8px] font-bold text-accent uppercase mt-1">
                        Secs
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p className="font-display text-sm uppercase text-[#25D366]">
                    🚀 All drops are active!
                  </p>
                  <p className="font-mono text-[10px] text-foreground/60 uppercase mt-1">
                    Check out all the problem statements.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Date Filter Tabs */}
        <div className="mb-12 border-[3px] border-ink bg-card p-4 shadow-brutal flex flex-col gap-2 md:flex-row md:items-center md:justify-start">
          <span className="font-display text-xs uppercase tracking-wider text-foreground/70 font-bold shrink-0">
            Drop Dates:
          </span>
          <div className="flex overflow-x-auto px-1.5 pb-2.5 pr-4 scrollbar-none snap-x gap-2.5 md:flex-wrap md:px-0 md:pb-0 md:pr-0 md:overflow-visible">
            {filterDates.map((date) => {
              const isActive = selectedDate === date;
              return (
                <button
                  key={date}
                  onClick={() => {
                    setSelectedDate(date);
                  }}
                  className={`border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all cursor-pointer snap-start min-h-[40px] flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-brutal"
                      : "bg-background hover:bg-peach hover:-translate-x-[2px] hover:-translate-y-[2px] shadow-brutal-sm hover:shadow-brutal active:translate-x-0 active:translate-y-0"
                  }`}
                >
                  {date}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative ml-4 md:ml-8">
          {/* Animated Central vertical path line */}
          <div className="absolute left-0 top-3 bottom-3 w-[4px] bg-ink/10" />
          <div
            key={selectedDate} // Re-triggers drawing animation on filter change
            className="absolute left-0 top-3 bottom-3 w-[4px] bg-primary timeline-line-draw origin-top"
          />

          <ol className="space-y-6">
            {filteredEvents.map((e, index) => {
              return (
                <li
                  key={e.num}
                  className="relative pl-8 md:pl-12 timeline-item"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {/* Interactive timeline dot/badge */}
                  <button
                    onClick={() => handleTimelineCardClick(e)}
                    className={`absolute -left-[16px] top-1.5 grid h-8 w-8 place-items-center border-[3px] border-ink font-display text-xs shadow-brutal-sm cursor-pointer transition-all duration-300 active:scale-95 z-20 ${
                      index % 2 === 0
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-ink"
                    }`}
                    title="View details"
                  >
                    {e.num}
                  </button>

                  {/* Clean, stable timeline card with Galaxy Brutalist hover effects */}
                  <div
                    onClick={() => handleTimelineCardClick(e)}
                    className="galaxy-card p-4 shadow-brutal-sm cursor-pointer transition-all duration-300"
                  >
                    {/* Galaxy background components */}
                    <div className="card-spark" aria-hidden="true" />
                    <div className="card-backdrop" aria-hidden="true" />

                    {/* Static stars background */}
                    <div className="card-galaxy__static" aria-hidden="true">
                      {staticStars.map((s, idx) => (
                        <div
                          key={idx}
                          className="card-star card-star--static"
                          style={
                            {
                              "--size": s.size,
                              "--x": `${s.x}%`,
                              "--y": `${s.y}%`,
                              "--alpha": 0.22,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>

                    {/* Orbiting stars background */}
                    <div className="card-galaxy" aria-hidden="true">
                      <div className="card-galaxy__ring">
                        {getStarsForCard(index).map((s, idx) => (
                          <div
                            key={idx}
                            className="card-star"
                            style={
                              {
                                "--angle": `${s.angle}deg`,
                                "--duration": s.duration,
                                "--delay": s.delay,
                                "--alpha": s.alpha,
                                "--size": s.size,
                                "--distance": s.distance,
                              } as React.CSSProperties
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {/* Card Content - elevated above stars */}
                    <div className="relative z-10">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-display text-base md:text-lg">
                          {e.title}
                        </h3>
                        <span className="border-[2px] border-ink bg-background px-2.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider shadow-brutal-sm">
                          {e.date}
                        </span>
                      </div>

                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-foreground/60">
                        {e.club}
                      </p>

                      {e.deadline &&
                        (() => {
                          if (!mounted) {
                            return (
                              <div className="mt-2.5 flex items-center gap-1.5 animate-pulse">
                                <span className="inline-block border-2 border-ink bg-[#ff0000] text-white px-2 py-0.5 font-display text-[8px] font-bold uppercase shadow-brutal-xs">
                                  Deadline: {e.deadline}
                                </span>
                              </div>
                            );
                          }
                          const dl = getDeadlineStatus(e.deadline);
                          if (dl.critical) {
                            return (
                              <div className="mt-2.5 flex items-center gap-1.5 animate-shake-warning">
                                <span className="inline-block border-2 border-ink bg-[#ff0000] text-white px-2 py-0.5 font-display text-[8px] font-bold uppercase shadow-brutal-xs shadow-[0_0_8px_rgba(255,0,0,0.6)]">
                                  ⚠️ URGENT DEADLINE: {e.deadline} ({dl.label})
                                </span>
                              </div>
                            );
                          } else if (dl.status === "closed") {
                            return (
                              <div className="mt-2.5 flex items-center gap-1.5 opacity-60">
                                <span className="inline-block border-2 border-ink bg-muted text-muted-foreground px-2 py-0.5 font-display text-[8px] font-bold uppercase shadow-brutal-xs">
                                  🔒 Closed: {e.deadline}
                                </span>
                              </div>
                            );
                          } else {
                            return (
                              <div className="mt-2.5 flex items-center gap-1.5 animate-pulse">
                                <span className="inline-block border-2 border-ink bg-[#ff0000] text-white px-2 py-0.5 font-display text-[8px] font-bold uppercase shadow-brutal-xs">
                                  Deadline: {e.deadline} ({dl.label})
                                </span>
                              </div>
                            );
                          }
                        })()}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Empty state if filtering yields no events */}
        {filteredEvents.length === 0 && (
          <div className="border-[3px] border-ink bg-card p-10 text-center shadow-brutal animate-slide-up-fade">
            <p className="font-display text-xl uppercase text-foreground/60">
              No releases scheduled for this date.
            </p>
          </div>
        )}
      </div>

      {/* Pop-up Dialog Modal Overlay */}
      {modalEvent && (
        <div
          className="fixed inset-0 bg-ink/35 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setModalEvent(null)}
        >
          <div
            className="border-[4px] border-ink bg-card p-5 sm:p-6 md:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-brutal relative animate-modal-pop scrollbar-none"
            onClick={(s) => s.stopPropagation()} // Prevent modal closure when clicking inside the modal
          >
            {/* Brutalist Close button */}
            <button
              onClick={() => setModalEvent(null)}
              className="absolute -right-2 -top-2 sm:-right-3 sm:-top-3 h-10 w-10 border-[3px] border-ink bg-primary text-primary-foreground font-display text-lg shadow-brutal-sm cursor-pointer flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-0 active:translate-y-0 transition-all z-10"
            >
              ✕
            </button>

            <div>
              <span className="border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm inline-block">
                {modalEvent.date}
              </span>
              <h3 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
                {modalEvent.title}
              </h3>
              <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-primary">
                {modalEvent.club}
              </p>

              <div className="mt-5 border-t-2 border-dashed border-ink/20 pt-4">
                <p className="text-sm leading-relaxed text-foreground/90 font-medium">
                  {modalEvent.desc}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t-2 border-ink pt-5">
                {modalEvent.deadline &&
                  (() => {
                    if (!mounted) {
                      return (
                        <div className="flex flex-wrap items-center gap-2.5 text-xs animate-pulse">
                          <span className="font-display uppercase border-2 border-ink bg-[#ff0000] text-white px-2 py-0.5 font-bold shadow-brutal-sm">
                            Deadline
                          </span>
                          <span className="font-mono text-[11px] font-bold text-[#ff0000]">
                            {modalEvent.deadline}
                          </span>
                        </div>
                      );
                    }
                    const dl = getDeadlineStatus(modalEvent.deadline);
                    if (dl.critical) {
                      return (
                        <div className="flex flex-wrap items-center gap-2.5 text-xs animate-shake-warning">
                          <span className="font-display uppercase border-2 border-ink bg-[#ff0000] text-white px-2 py-0.5 font-bold shadow-brutal-sm shadow-[0_0_8px_rgba(255,0,0,0.5)]">
                            ⚠️ URGENT DEADLINE
                          </span>
                          <span className="font-mono text-[11px] font-bold text-[#ff0000] animate-pulse">
                            {modalEvent.deadline} ({dl.label})
                          </span>
                        </div>
                      );
                    } else if (dl.status === "closed") {
                      return (
                        <div className="flex flex-wrap items-center gap-2.5 text-xs opacity-60">
                          <span className="font-display uppercase border-2 border-ink bg-muted text-muted-foreground px-2 py-0.5 font-bold shadow-brutal-sm">
                            🔒 Closed
                          </span>
                          <span className="font-mono text-[11px] font-bold text-muted-foreground">
                            {modalEvent.deadline}
                          </span>
                        </div>
                      );
                    } else {
                      return (
                        <div className="flex flex-wrap items-center gap-2.5 text-xs animate-pulse">
                          <span className="font-display uppercase border-2 border-ink bg-[#ff0000] text-white px-2 py-0.5 font-bold shadow-brutal-sm">
                            Deadline
                          </span>
                          <span className="font-mono text-[11px] font-bold text-[#ff0000]">
                            {modalEvent.deadline} ({dl.label})
                          </span>
                        </div>
                      );
                    }
                  })()}
                {modalEvent.regLink && (
                  <a
                    href={modalEvent.regLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 bg-[#FFD700] text-ink border-[2.5px] border-ink font-display text-xs uppercase tracking-wider shadow-brutal-sm hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0 transition-all block cursor-pointer select-none mb-2 animate-bounce"
                  >
                    📝 Register for this Challenge
                  </a>
                )}
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="font-display uppercase border-2 border-ink bg-background px-2 py-0.5 font-bold shadow-brutal-sm">
                    Timeline
                  </span>
                  <span className="font-mono text-[11px] font-bold text-foreground/90">
                    {modalEvent.timeline}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="font-display uppercase border-2 border-ink bg-accent px-2 py-0.5 font-bold shadow-brutal-sm">
                    Rewards
                  </span>
                  <span className="font-mono text-[11px] font-bold text-primary">
                    {modalEvent.prizes}
                  </span>
                </div>
                <div className="flex flex-wrap items-start gap-2.5 text-xs">
                  <span className="font-display uppercase border-2 border-ink bg-card px-2 py-0.5 font-bold shadow-brutal-sm">
                    Domains
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {modalEvent.domains.map((dom) => (
                      <span
                        key={dom}
                        className="font-mono text-[10px] font-bold text-foreground/80 bg-accent/20 border border-ink/20 px-2 py-0.5"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
