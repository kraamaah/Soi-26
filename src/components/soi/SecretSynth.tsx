import { useState, useEffect } from "react";
import { X, Sparkles, Music, Volume2 } from "lucide-react";

interface Note {
  key: string;
  char: string;
  note: string;
  freq: number;
  color: string;
  activeColor: string;
}

const notesList: Note[] = [
  { key: "a", char: "A", note: "C4", freq: 261.63, color: "bg-background text-foreground", activeColor: "bg-primary text-primary-foreground -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "s", char: "S", note: "D4", freq: 293.66, color: "bg-background text-foreground", activeColor: "bg-accent text-accent-foreground -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "d", char: "D", note: "E4", freq: 329.63, color: "bg-background text-foreground", activeColor: "bg-[#FFD700] text-ink -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "f", char: "F", note: "F4", freq: 349.23, color: "bg-background text-foreground", activeColor: "bg-[#25D366] text-white -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "g", char: "G", note: "G4", freq: 392.00, color: "bg-background text-foreground", activeColor: "bg-[#ff58b6] text-white -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "h", char: "H", note: "A4", freq: 440.00, color: "bg-background text-foreground", activeColor: "bg-primary text-primary-foreground -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "j", char: "J", note: "B4", freq: 493.88, color: "bg-background text-foreground", activeColor: "bg-accent text-accent-foreground -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
  { key: "k", char: "K", note: "C5", freq: 523.25, color: "bg-background text-foreground", activeColor: "bg-[#FFD700] text-ink -translate-y-1 shadow-[4px_4px_0_0_var(--ink)]" },
];

export function SecretSynth() {
  const [showSynth, setShowSynth] = useState(false);
  const [oscType, setOscType] = useState<OscillatorType>("square");
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const playFreq = (freq: number, type: OscillatorType = oscType) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch (err) {
      console.warn("Synth failed to play note:", err);
    }
  };

  useEffect(() => {
    let keyBuffer = "";
    const handleGlobalKeys = (e: KeyboardEvent) => {
      const char = e.key.toLowerCase();
      if (char.length === 1 && /[a-z]/i.test(char)) {
        keyBuffer = (keyBuffer + char).slice(-3);
        if (keyBuffer === "soi") {
          setShowSynth(true);
          // Play a friendly introductory chord
          playFreq(523.25, "sine");
          setTimeout(() => playFreq(659.25, "sine"), 80);
          setTimeout(() => playFreq(783.99, "sine"), 160);
          setTimeout(() => playFreq(1046.50, "sine"), 240);
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeys);
    return () => window.removeEventListener("keydown", handleGlobalKeys);
  }, [oscType]);

  useEffect(() => {
    if (!showSynth) return;

    const handleSynthKeys = (e: KeyboardEvent) => {
      const char = e.key.toLowerCase();
      const noteItem = notesList.find((n) => n.key === char);
      if (noteItem) {
        playFreq(noteItem.freq);
        setActiveKey(noteItem.key);
        setTimeout(() => setActiveKey(null), 150);
      }
    };

    window.addEventListener("keydown", handleSynthKeys);
    return () => window.removeEventListener("keydown", handleSynthKeys);
  }, [showSynth, oscType]);

  const handleKeyClick = (n: Note) => {
    playFreq(n.freq);
    setActiveKey(n.key);
    setTimeout(() => setActiveKey(null), 150);
  };

  return (
    <>
      {/* Hidden synth drawer popup */}
      <div
        className={`fixed bottom-20 left-4 z-[45] w-[90%] max-w-md border-[3px] border-ink bg-card p-5 shadow-brutal transition-all duration-300 transform ${
          showSynth
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Retro dots overlay */}
        <div className="absolute inset-0 bg-repeat bg-center opacity-[0.02] pointer-events-none dots-grid" aria-hidden />

        <div className="relative flex items-center justify-between border-b-[2px] border-ink pb-3 mb-4">
          <span className="font-display text-xs uppercase tracking-wider text-primary flex items-center gap-1.5 animate-pulse">
            <Music className="h-4 w-4 text-accent" />
            SECRET CHIPTUNE SYNTH
          </span>
          <button
            onClick={() => setShowSynth(false)}
            className="grid h-7 w-7 place-items-center border-[2px] border-ink bg-background text-ink shadow-brutal-sm hover:bg-peach/30 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="relative font-body text-[11px] text-foreground/70 mb-4 leading-relaxed">
          Unlock complete! You found the secret soundboard. Trigger notes by clicking or pressing keys <span className="font-mono font-bold text-accent">A, S, D, F, G, H, J, K</span> on your keyboard!
        </p>

        {/* Waveform Selector */}
        <div className="relative border-[2px] border-ink bg-background p-2.5 mb-4 shadow-brutal-sm flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-foreground/50 flex items-center gap-1">
            <Volume2 className="h-3.5 w-3.5" />
            WAVEFORM TYPE:
          </span>
          <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
            {(["square", "sine", "triangle", "sawtooth"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setOscType(type)}
                className={`border-[1.5px] border-ink px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  oscType === type
                    ? "bg-accent text-accent-foreground shadow-brutal-xs"
                    : "bg-card hover:bg-peach/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Piano Octave Keys */}
        <div className="relative grid grid-cols-8 gap-1.5 pt-2">
          {notesList.map((n) => {
            const isActive = activeKey === n.key;
            return (
              <button
                key={n.key}
                onClick={() => handleKeyClick(n)}
                className={`border-[2px] border-ink py-4 font-display text-xs transition-all cursor-pointer flex flex-col items-center justify-between min-h-[90px] shadow-[2px_2px_0_0_var(--ink)] select-none ${
                  isActive ? n.activeColor : n.color + " hover:bg-peach/30 active:translate-y-0 active:shadow-[1px_1px_0_0_var(--ink)]"
                }`}
              >
                <span className="font-mono text-[9px] font-bold opacity-45">{n.note}</span>
                <span className="font-display text-xs">{n.char}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
