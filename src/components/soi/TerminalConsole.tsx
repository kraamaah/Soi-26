import { useState, useEffect, useRef } from "react";
import { X, ChevronRight } from "lucide-react";
import { events, isEventActive } from "./data";

interface HistoryLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "system";
}

export function TerminalConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([
    { text: "SOI_CHRONO.SYS [Version 7.0.2026]", type: "system" },
    { text: "(c) 2026 Technical Council. All rights reserved.", type: "system" },
    { text: "", type: "system" },
    { text: "Welcome to Summer of Innovation 2026 Console.", type: "system" },
    { text: "Type 'help' for available command vectors.", type: "system" },
    { text: "", type: "system" },
  ]);

  const historyEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Play chiptune synthesizer tone
  const playBeep = (freq: number, duration = 0.08, type: OscillatorType = "sine") => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context blocked
    }
  };

  // Sound on keypress
  const handleKeyPressSound = () => {
    const pitch = 700 + Math.random() * 400;
    playBeep(pitch, 0.03, "triangle");
  };

  // Auto scroll to bottom
  useEffect(() => {
    if (historyEndRef.current) {
      historyEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addLine = (text: string, type: HistoryLine["type"] = "output") => {
    setHistory((prev) => [...prev, { text, type }]);
  };

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    addLine(`soi_user> ${trimmed}`, "input");
    setInputVal("");
    playBeep(440, 0.08, "square"); // Command submit chime

    const parts = trimmed.toLowerCase().split(" ");
    const command = parts[0];

    switch (command) {
      case "help":
        addLine("AVAILABLE SYSTEM VECTORS:", "system");
        addLine("  status      - Display real-time season progress & active drops count");
        addLine("  challenges  - List all 18 Summer of Innovation problem statements");
        addLine("  contact     - View SOI community Whatsapp & Social channels");
        addLine("  credits     - Show Technical Council clubs & builders credits");
        addLine("  cls / clear - Flush terminal buffer history");
        addLine("  exit        - Terminate terminal session drawer");
        addLine("  [PS Name]   - Type any challenge name (e.g., 'pathmatrix') to open its PDF document", "system");
        break;

      case "cls":
      case "clear":
        setHistory([]);
        break;

      case "exit":
        setIsOpen(false);
        break;

      case "credits":
        addLine("SUMMER OF INNOVATION TECHNICAL council CLUBS:", "system");
        addLine("  - Coding Club");
        addLine("  - AI Club");
        addLine("  - Space and Data Science Club");
        addLine("  - Robotics Club");
        addLine("  - Motorsports Club");
        addLine("  - Design Club");
        addLine("  - Finance Club");
        addLine("  - Electronics Club");
        addLine("  - Astronomy Club");
        addLine("", "system");
        addLine("an4nt created this website ^_^", "success");
        break;

      case "contact":
        addLine("SOI COMMUNITY CHANNELS:", "system");
        addLine("  - Whatsapp Link  : https://chat.whatsapp.com/DDTS4N4AjNWLh0WEQVZT98");
        addLine("  - Instagram Link : https://instagram.com/tech_iitg");
        addLine("Type these links into your browser or click them directly on the footer!", "system");
        break;

      case "status": {
        const START_DATE = new Date("2026-06-02T00:00:00").getTime();
        const END_DATE = new Date("2026-07-31T23:59:59").getTime();
        const now = new Date().getTime();
        const elapsed = now - START_DATE;
        const total = END_DATE - START_DATE;
        const percent = Math.min(100, Math.max(0, (elapsed / total) * 100));
        const days = Math.max(0, Math.ceil((END_DATE - now) / (1000 * 60 * 60 * 24)));
        const activeCount = events.filter((e) => isEventActive(e.date)).length;

        // Create elegant ASCII bar
        const totalBars = 20;
        const activeBars = Math.round((percent / 100) * totalBars);
        const barStr = "█".repeat(activeBars) + "░".repeat(totalBars - activeBars);

        addLine("SOI_CHRONO_STATUS.DAT:", "system");
        addLine(`  [${barStr}] ${percent.toFixed(1)}% ELAPSED`, "success");
        addLine(`  DAYS_REMAINING : ${days} DAYS`, "success");
        addLine(`  ACTIVE_DROPS   : ${activeCount} DROPS`, "success");
        addLine("  SYS_STATUS     : ACTIVE_SOLVING_PHASE", "system");
        break;
      }

      case "challenges":
      case "ps":
        addLine("18 CHALLENGES CURRENTLY ON TRACK:", "system");
        events.forEach((ev) => {
          addLine(`  [${ev.num}] ${ev.title.padEnd(20)} | ${ev.club}`, "output");
        });
        break;

      default: {
        const matchingEvent = events.find(
          (ev) => ev.title.toLowerCase() === trimmed.toLowerCase()
        );
        if (matchingEvent) {
          if (matchingEvent.pdf) {
            addLine(`OPENING ${matchingEvent.title.toUpperCase()} PROBLEM STATEMENT DOCUMENT...`, "success");
            try {
              window.open(matchingEvent.pdf, "_blank");
            } catch {
              addLine("ERROR: Browser blocked popup window.", "error");
            }
          } else {
            addLine(`ERROR: PDF document for '${matchingEvent.title}' is not released yet.`, "error");
          }
        } else {
          addLine(`COMMAND VECTOR NOT FOUND: '${command}'. Type 'help' for instructions.`, "error");
          playBeep(220, 0.15, "sawtooth"); // error tone
        }
        break;
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    handleKeyPressSound();
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <>
      <style>{`
        .term-history-line-system { color: #8888ff; }
        .term-history-line-input { color: #ffffff; }
        .term-history-line-output { color: #a3a3a3; }
        .term-history-line-error { color: #ff5555; }
        .term-history-line-success { color: #55ff55; }

        @keyframes term-blink-block {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .term-cursor-blink {
          animation: term-blink-block 0.9s infinite;
        }
      `}</style>

      {/* Floating Toggle Button - Stacks perfectly above Achievements on the bottom-right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[74px] right-4 z-[45] flex h-13 w-13 items-center justify-center border-[3px] border-ink bg-[#1b181e] text-[#25D366] font-mono text-base font-bold shadow-[3px_3px_0_0_var(--ink)] cursor-pointer select-none hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_var(--ink)] transition-all shrink-0"
        title="Open Command Terminal console"
      >
        <span>&gt;_</span>
      </button>

      {/* Terminal Drawer Window - Stacks beautifully above both stacked floating buttons */}
      <div
        className={`fixed bottom-[136px] right-4 left-4 sm:left-auto sm:w-[460px] z-[45] border-[3px] border-ink bg-[#1b181e] text-[#25D366] p-4 shadow-brutal transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Retro dot grid background overlay */}
        <div
          className="absolute inset-0 bg-repeat bg-center opacity-[0.015] pointer-events-none dots-grid"
          aria-hidden
        />

        <div className="relative flex items-center justify-between border-b-[2px] border-ink/40 pb-2.5 mb-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="h-2 w-2 rounded-full bg-[#25D366] animate-ping" />
            <span>TERMINAL://SOI_CHRONO.SYS</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="grid h-6 w-6 place-items-center border-[1.5px] border-ink bg-[#1b181e] text-white hover:bg-red-500/20 hover:text-red-500 transition-colors"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* History buffer view */}
        <div className="relative h-[250px] overflow-y-auto font-mono text-[11px] leading-relaxed border-b border-ink/20 pb-2 mb-3 scrollbar-none space-y-1">
          {history.map((h, i) => (
            <div key={i} className={`term-history-line-${h.type} whitespace-pre-wrap`}>
              {h.text}
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        {/* Input area prompt */}
        <div className="relative flex items-center font-mono text-[11px] bg-black/35 border border-ink/20 p-2">
          <span className="text-[#a3a3a3] shrink-0 mr-1.5 flex items-center">
            soi_user
            <ChevronRight className="h-3 w-3 inline ml-0.5 text-[#25D366]" />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white border-none outline-none caret-transparent focus:ring-0 p-0"
            maxLength={60}
            placeholder="type command here..."
          />
          <span className="h-3.5 w-2 bg-[#25D366] ml-0.5 term-cursor-blink" />
        </div>
      </div>
    </>
  );
}
