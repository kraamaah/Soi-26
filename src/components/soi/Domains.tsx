import { useState } from "react";
import { events, SoiEvent } from "./data";
import { BrutalCard } from "./BrutalCard";
import { FileText } from "lucide-react";

export function Domains() {
  // Extract all unique domains dynamically from the events
  const allDomains = Array.from(
    new Set(events.flatMap((e) => e.domains))
  ).sort((a, b) => a.localeCompare(b));

  const [selectedDomain, setSelectedDomain] = useState<string>(allDomains[0] || "");
  const [modalEvent, setModalEvent] = useState<SoiEvent | null>(null);

  // Filter events that cover the selected domain
  const matchingEvents = events.filter((e) =>
    e.domains.includes(selectedDomain)
  );

  return (
    <section id="domains" className="border-b-[3px] border-ink bg-accent/5 py-20 relative overflow-hidden">
      <style>{`
        @keyframes scaleUp {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scale-up {
          opacity: 0;
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
      `}</style>

      <div className="absolute inset-0 peach-grid opacity-[0.03]" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative">
        <div className="mb-12">
          <span className="font-display text-xs uppercase tracking-widest text-primary">
            Explore Disciplines
          </span>
          <h2 className="mt-2 font-display text-4xl uppercase md:text-6xl">Domains</h2>
        </div>

        {/* Dynamic Domain Cloud Grid */}
        <div className="mb-12 border-[3px] border-ink bg-card p-4 sm:p-6 shadow-brutal flex flex-col gap-2">
          <p className="font-display text-xs uppercase tracking-wider text-foreground/60 mb-2 font-bold">
            💡 Select a domain to discover corresponding challenges:
          </p>
          <div className="flex overflow-x-auto pb-1.5 scrollbar-none snap-x gap-2.5 md:flex-wrap md:pb-0">
            {allDomains.map((dom) => {
              const isActive = selectedDomain === dom;
              const count = events.filter((e) => e.domains.includes(dom)).length;

              return (
                <button
                  key={dom}
                  onClick={() => setSelectedDomain(dom)}
                  className={`border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all shadow-brutal-sm cursor-pointer snap-start min-h-[40px] flex items-center gap-2 shrink-0 ${
                    isActive
                      ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-brutal"
                      : "bg-background hover:bg-peach hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-0 active:translate-y-0"
                  }`}
                >
                  <span>{dom}</span>
                  <span className={`px-1.5 py-0.5 text-[9px] font-mono border ${isActive ? "border-primary-foreground bg-primary-foreground/20 text-primary-foreground" : "border-ink bg-peach text-ink font-bold"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Results Grid */}
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm">
              Matches: {matchingEvents.length} Problem Statement{matchingEvents.length === 1 ? "" : "s"}
            </span>
            <span className="h-[2px] flex-1 bg-ink/20" />
          </div>

          <div 
            key={selectedDomain} // Reset animation triggers on tag change
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {matchingEvents.map((e, index) => (
              <div
                key={e.num}
                onClick={() => setModalEvent(e)}
                className="border-[3px] border-ink p-5 bg-card shadow-brutal-sm cursor-pointer hover:bg-peach/10 hover:-translate-y-1 hover:translate-x-1 hover:shadow-brutal-md transition-all duration-300 animate-scale-up flex flex-col justify-between"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-7 w-7 place-items-center border-[2px] border-ink bg-primary text-primary-foreground font-display text-xs shadow-brutal-xs">
                      {e.num}
                    </span>
                    <span className="border-[2px] border-ink bg-background px-2 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider shadow-brutal-xs">
                      {e.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg leading-snug hover:text-primary transition-colors">
                    {e.title}
                  </h3>
                  
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-foreground/60">
                    {e.club}
                  </p>

                  <p className="mt-3 text-sm text-foreground/80 line-clamp-3 leading-relaxed">
                    {e.desc}
                  </p>
                </div>

                <div>
                  {/* Small tag representations inside the matching results card */}
                  <div className="mt-4 border-t border-dashed border-ink/20 pt-3 flex flex-wrap gap-1">
                    {e.domains.map((dom) => (
                      <span 
                        key={dom} 
                        className={`inline-block border border-ink text-[8px] font-bold uppercase px-1.5 py-0.5 ${
                          dom === selectedDomain ? "bg-accent" : "bg-card"
                        }`}
                      >
                        {dom}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t-[2px] border-ink pt-3" onClick={(s) => s.stopPropagation()}>
                    <span className="text-[10px] font-bold uppercase tracking-wide text-foreground/50">
                      Explore Guidelines
                    </span>
                    <div className="flex gap-2">
                      {/* WhatsApp Button */}
                      <a
                        href="#"
                        className="grid h-8 w-8 place-items-center border-[2px] border-ink bg-[#25D366] text-white shadow-brutal-xs transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-0 active:translate-y-0"
                        title="Join WhatsApp Group"
                      >
                        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" />
                        </svg>
                      </a>
                      {/* PDF guidelines Button */}
                      <a
                        href="#"
                        className="grid h-8 w-8 place-items-center border-[2px] border-ink bg-accent text-ink shadow-brutal-xs transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-0 active:translate-y-0"
                        title="View Guidelines PDF"
                      >
                        <FileText className="h-4.5 w-4.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="font-display uppercase border-2 border-ink bg-background px-2 py-0.5 font-bold shadow-brutal-sm">
                    Timeline
                  </span>
                  <span className="font-mono text-[11px] font-bold text-foreground/90">{modalEvent.timeline}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="font-display uppercase border-2 border-ink bg-accent px-2 py-0.5 font-bold shadow-brutal-sm">
                    Rewards
                  </span>
                  <span className="font-mono text-[11px] font-bold text-primary">{modalEvent.prizes}</span>
                </div>
                <div className="flex flex-wrap items-start gap-2.5 text-xs">
                  <span className="font-display uppercase border-2 border-ink bg-card px-2 py-0.5 font-bold shadow-brutal-sm">
                    Domains
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {modalEvent.domains.map((dom) => (
                      <span key={dom} className="font-mono text-[10px] font-bold text-foreground/80 bg-accent/20 border border-ink/20 px-2 py-0.5">
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
