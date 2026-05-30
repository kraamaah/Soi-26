import { useState, useEffect } from "react";
import { events } from "./data";
import { BrutalCard } from "./BrutalCard";
import { FileText } from "lucide-react";

export function Events() {
  const [statusFilter, setStatusFilter] = useState<"All" | "Active" | "Upcoming">("All");
  const [clubFilter, setClubFilter] = useState<string>("All");
  const [viewedPdfs, setViewedPdfs] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("soi_viewed_pdfs");
      if (stored) {
        try {
          setViewedPdfs(JSON.parse(stored));
        } catch {
          // ignore
        }
      }
    }
  }, []);

  const handlePdfClick = (psNum: string) => {
    setViewedPdfs((prev) => {
      if (prev.includes(psNum)) return prev;
      const next = [...prev, psNum];
      localStorage.setItem("soi_viewed_pdfs", JSON.stringify(next));

      if (next.length >= 3) {
        window.dispatchEvent(new CustomEvent("soi-achievement", { detail: "pdf-explorer" }));
      }
      return next;
    });
  };

  // Dynamic list of unique clubs based on events data
  const clubs = ["All", ...Array.from(new Set(events.map((e) => e.club)))];

  // Helper to get compact display labels for clubs
  const getShortClubName = (club: string) => {
    if (club === "All") return "All Clubs";
    if (club === "Coding Club") return "Coding";
    if (club === "Electronics Club") return "Electronics";
    if (club === "Robotics Club") return "Robotics";
    if (club === "AI Club") return "AI";
    if (club === "Space Data Science Club" || club === "Space and Data Science Club") return "Space DS";
    if (club === "Design Club") return "Design";
    if (club === "Ingene (Motorsports) Club") return "Motorsports";
    if (club === "Astronomy Club") return "Astronomy";
    if (club === "Finance Club") return "Finance";
    return club;
  };

  // Determine if a release date is simulated as "Active" or "Upcoming"
  // Compares system clock dynamically to the drop date to see if the PS PDF is uploaded.
  const isEventActive = (dateStr: string) => {
    try {
      // Remove ordinal suffixes (st, nd, rd, th) to parse cleanly (e.g. "2nd June 2026" -> "2 June 2026")
      const cleanDateStr = dateStr.replace(/(st|nd|rd|th)/g, "");
      const eventTime = new Date(cleanDateStr).getTime();
      const now = new Date().getTime();
      return now >= eventTime;
    } catch {
      return false;
    }
  };

  // Perform dynamic filtering based on selections
  const filteredEvents = events.filter((e) => {
    const matchesStatus =
      statusFilter === "All" ||
      (statusFilter === "Active" && isEventActive(e.date)) ||
      (statusFilter === "Upcoming" && !isEventActive(e.date));

    const matchesClub = clubFilter === "All" || e.club === clubFilter;

    return matchesStatus && matchesClub;
  });

  const activeCount = events.filter((e) => isEventActive(e.date)).length;

  return (
    <section id="events" className="border-b-[3px] border-ink py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl uppercase md:text-6xl">Problem Statements</h2>
          </div>
          <div className="flex items-center gap-3 border-[3px] border-ink bg-card px-4 py-2.5 shadow-brutal-sm self-start sm:self-auto">
            <span className="font-display text-xs md:text-sm uppercase tracking-wide">
              Active: {activeCount}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 border-[3px] border-ink bg-card p-4 sm:p-5 shadow-brutal flex flex-col gap-4">
          {/* Status Filters */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <span className="font-display text-xs uppercase tracking-wider text-foreground/70 font-bold shrink-0">
              Status:
            </span>
            <div className="flex overflow-x-auto pb-1.5 scrollbar-none snap-x gap-2.5 md:flex-wrap md:pb-0">
              {(["All", "Active", "Upcoming"] as const).map((status) => {
                const isActive = statusFilter === status;
                return (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] cursor-pointer snap-start min-h-[40px] flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-[3.5px_3.5px_0_0_var(--ink)]"
                        : "bg-background hover:bg-peach hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
                    }`}
                  >
                    {status === "All" ? "All Drops" : status === "Active" ? "Active Drops" : "Upcoming Drops"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Club Filters */}
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-3 border-t-2 border-dashed border-ink/10 pt-4">
            <span className="font-display text-xs uppercase tracking-wider text-foreground/70 font-bold shrink-0 md:mt-2.5">
              Clubs:
            </span>
            <div className="flex overflow-x-auto pb-1.5 scrollbar-none snap-x gap-2.5 md:flex-wrap md:pb-0">
              {clubs.map((club) => {
                const isActive = clubFilter === club;
                return (
                  <button
                    key={club}
                    onClick={() => setClubFilter(club)}
                    className={`border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] cursor-pointer snap-start min-h-[40px] flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-accent text-accent-foreground -translate-x-[1px] -translate-y-[1px] shadow-[3.5px_3.5px_0_0_var(--ink)]"
                        : "bg-background hover:bg-peach hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"
                    }`}
                  >
                    {getShortClubName(club)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredEvents.map((e, i) => (
            <div
              id={`ps-${e.num}`}
              key={e.num}
              className="transition-all duration-500 ease-out scroll-mt-24"
            >
              <BrutalCard className="flex flex-col overflow-hidden h-full">
                <div className="relative border-b-[3px] border-ink bg-peach overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 border-[3px] border-ink bg-card px-3 py-1 font-display text-2xl shadow-brutal-sm">
                    {e.num}
                  </span>
                  <span
                    className={`absolute right-4 top-4 border-[3px] border-ink px-2 py-1 font-display text-[10px] uppercase shadow-brutal-sm ${
                      i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-accent"
                    }`}
                  >
                    {e.date}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl leading-snug md:text-2xl">{e.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{e.desc}</p>
                  
                  {/* Dynamic Multi-disciplinary Domain Badges */}
                  <div className="mt-4 border-t border-dashed border-ink/20 pt-3 flex flex-wrap gap-1.5">
                    {e.domains.map((dom) => (
                      <span 
                        key={dom} 
                        className="inline-block border-2 border-ink bg-accent/20 px-2 py-0.5 font-display text-[9px] font-bold uppercase shadow-brutal-xs"
                      >
                        {dom}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t-[2px] border-ink pt-4">
                    <span className="text-xs font-bold uppercase tracking-wide text-foreground/60">
                      {e.club}
                    </span>
                    
                    {/* WhatsApp and PDF Guidelines Buttons */}
                    <div className="flex gap-2.5">
                      {/* WhatsApp Logo Link */}
                      <a
                        href={e.whatsapp || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-[#25D366] text-white shadow-brutal-sm transition-transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0"
                        title="Join WhatsApp Group"
                      >
                        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" />
                        </svg>
                      </a>
                      {/* PDF Document Logo Link */}
                      <a
                        href="#"
                        onClick={(evt) => {
                          evt.preventDefault();
                          if (isEventActive(e.date)) {
                            handlePdfClick(e.num);
                            alert(`[PS_${e.num}.PDF] Initializing download for the complete Problem Statement & Guidelines PDF! 📄`);
                          } else {
                            alert(`Unavailable!! wait till ${e.date}`);
                          }
                        }}
                        className="grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-accent text-ink shadow-brutal-sm transition-transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0"
                        title="View PS PDF"
                      >
                        <FileText className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </BrutalCard>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="border-[3px] border-ink bg-card p-12 text-center shadow-brutal mt-8">
            <p className="font-display text-xl uppercase text-foreground/60">
              No problem statements found matching these filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
