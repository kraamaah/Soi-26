import { useState, useEffect } from "react";
import { X, Sparkles, Trophy } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  desc: string;
  icon: string;
  requirement: string;
}

const achievementsList: Achievement[] = [
  {
    id: "night-owl",
    title: "Night Owl",
    desc: "Embrace the cosmic midnight theme.",
    icon: "🌙",
    requirement: "Toggle Solar Retro Cyber Dark Mode.",
  },
  {
    id: "curious-builder",
    title: "Curious Builder",
    desc: "Ask all the right questions.",
    icon: "💡",
    requirement: "Open and read at least 3 FAQ sections.",
  },
  {
    id: "arcade-master",
    title: "Arcade Master",
    desc: "Discover the hidden sanctuary.",
    icon: "🕹️",
    requirement: "Discover and trigger the secret web arcade game.",
  },
  {
    id: "pdf-explorer",
    title: "PDF Explorer",
    desc: "Read the guidelines carefully.",
    icon: "📄",
    requirement: "View the Guidelines PDF of 3 or more Problem Statements.",
  },
  {
    id: "social-connector",
    title: "Social Connector",
    desc: "Connect with the SOI community.",
    icon: "🌐",
    requirement: "Click both WhatsApp and Instagram links in the footer.",
  },
];

const playRetroChime = () => {
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const playNote = (freq: number, start: number, duration: number) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square"; // classic 8-bit sound
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0.06, start);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(start);
      osc.stop(start + duration);
    };

    // Synthesize quick rising retro arpeggio: C5 -> E5 -> G5 -> C6
    playNote(523.25, now, 0.12);
    playNote(659.25, now + 0.08, 0.12);
    playNote(783.99, now + 0.16, 0.12);
    playNote(1046.50, now + 0.24, 0.25);
  } catch (err) {
    console.warn("Audio Context not allowed or supported on this system:", err);
  }
};

export function Achievements() {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<{ title: string; icon: string } | null>(null);
  const [clickedSocials, setClickedSocials] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("soi_achievements");
      if (stored) {
        try {
          setUnlockedIds(JSON.parse(stored));
        } catch {
          // ignore parsing error
        }
      }

      const storedSocials = localStorage.getItem("soi_clicked_socials");
      if (storedSocials) {
        try {
          setClickedSocials(JSON.parse(storedSocials));
        } catch {
          // ignore
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleAchievementUnlock = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const id = customEvent.detail;

      setUnlockedIds((prev) => {
        if (prev.includes(id)) return prev;
        const next = [...prev, id];
        localStorage.setItem("soi_achievements", JSON.stringify(next));

        const achievement = achievementsList.find((a) => a.id === id);
        if (achievement) {
          setToast({ title: achievement.title, icon: achievement.icon });
          playRetroChime();
          
          setTimeout(() => {
            setToast(null);
          }, 4500);
        }
        return next;
      });
    };

    const handleSocialClick = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const platform = customEvent.detail;

      setClickedSocials((prev) => {
        if (prev.includes(platform)) return prev;
        const next = [...prev, platform];
        localStorage.setItem("soi_clicked_socials", JSON.stringify(next));

        // Unlock Social Connector if both clicked
        if (next.includes("whatsapp") && next.includes("instagram")) {
          window.dispatchEvent(new CustomEvent("soi-achievement", { detail: "social-connector" }));
        }
        return next;
      });
    };

    window.addEventListener("soi-achievement", handleAchievementUnlock);
    window.addEventListener("soi-social-click", handleSocialClick);

    return () => {
      window.removeEventListener("soi-achievement", handleAchievementUnlock);
      window.removeEventListener("soi-social-click", handleSocialClick);
    };
  }, []);

  const unlockedCount = unlockedIds.length;
  const isAllUnlocked = unlockedCount === achievementsList.length;

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[45] flex h-13 w-13 items-center justify-center border-[3px] border-ink bg-[#FFD700] text-ink shadow-[3px_3px_0_0_var(--ink)] cursor-pointer select-none hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_var(--ink)] transition-all animate-bounce"
        title="Summer Achievements & Rewards"
      >
        <Trophy className="h-6 w-6" />
        {unlockedCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-ink bg-accent text-[9px] font-bold text-ink shadow-brutal-sm">
            {unlockedCount}
          </span>
        )}
      </button>

      {/* Slide-out Drawer */}
      <div
        className={`fixed bottom-20 right-4 z-[45] w-[90%] max-w-sm border-[3px] border-ink bg-card p-5 shadow-brutal transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-4 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Scans lines retro background overlay */}
        <div className="absolute inset-0 bg-repeat bg-center opacity-[0.02] pointer-events-none dots-grid" aria-hidden />
        
        <div className="relative flex items-center justify-between border-b-[2px] border-ink pb-3 mb-4">
          <span className="font-display text-xs uppercase tracking-wider text-accent flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-[#FFD700]" />
            SOLVER ACHIEVEMENTS
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="grid h-7 w-7 place-items-center border-[2px] border-ink bg-background text-ink shadow-brutal-sm hover:bg-peach/30 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Locked count indicator */}
        <div className="relative border-[2px] border-ink bg-background p-2 text-center mb-4 shadow-brutal-sm">
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            REWARDS UNLOCKED: <span className="text-primary font-display text-sm">{unlockedCount}</span> / {achievementsList.length}
          </span>
        </div>

        {/* Achievement Grid */}
        <div className="relative space-y-3 max-h-[350px] overflow-y-auto pr-1 scrollbar-none">
          {achievementsList.map((a) => {
            const isUnlocked = unlockedIds.includes(a.id);
            return (
              <div
                key={a.id}
                className={`border-[2px] border-ink p-3 shadow-brutal-sm flex gap-3 items-center transition-all ${
                  isUnlocked ? "bg-accent/10 border-ink" : "bg-background/40 opacity-70 border-dashed"
                }`}
              >
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center border-[2px] border-ink font-display text-2xl shadow-brutal-sm select-none ${
                    isUnlocked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground grayscale"
                  }`}
                >
                  {isUnlocked ? a.icon : "🔒"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-xs uppercase tracking-wide truncate">
                      {a.title}
                    </span>
                    {isUnlocked && (
                      <span className="font-mono text-[8px] font-bold text-accent bg-accent/20 px-1 py-0.2 border border-accent uppercase tracking-widest shrink-0 animate-pulse">
                        ✓ OK
                      </span>
                    )}
                  </div>
                  <p className="font-body text-[11px] leading-tight text-foreground/75 mt-0.5">
                    {a.desc}
                  </p>
                  <p className="font-mono text-[9px] font-bold text-foreground/45 mt-1 border-t border-ink/5 pt-1">
                    Req: {a.requirement}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ultimate Easter Egg Completion State */}
        {isAllUnlocked && (
          <div className="relative border-[2px] border-ink bg-[#FFD700] text-ink p-3 mt-4 text-center shadow-brutal-sm animate-pulse border-double">
            <span className="font-display text-xs uppercase tracking-wider">
              🏆 ULTIMATE SOLVER UNLOCKED!
            </span>
            <p className="font-body text-[10px] mt-0.5 text-ink/80">
              You are ready for the Summer of Innovation 2026!
            </p>
          </div>
        )}
      </div>

      {/* Achievement Unlocked Toast Notification */}
      {toast && (
        <div className="fixed top-20 right-4 z-[9999] flex items-center gap-3 border-[3px] border-ink bg-primary text-primary-foreground p-4 shadow-brutal animate-bounce max-w-sm">
          <div className="grid h-11 w-11 place-items-center border-[2.5px] border-ink bg-card text-2xl shadow-brutal-sm shrink-0">
            {toast.icon}
          </div>
          <div>
            <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-[#FFD700] animate-pulse">
              ★ REWARD UNLOCKED ★
            </div>
            <div className="font-display text-xs uppercase tracking-wide mt-0.5">
              {toast.title}
            </div>
            <p className="font-body text-[10px] text-primary-foreground/80 leading-none mt-0.5">
              Check your Achievements panel!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
