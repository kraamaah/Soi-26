import { useState, useEffect, useRef } from "react";
import { X, Trophy, RefreshCw, Play } from "lucide-react";

interface EasterEggGameProps {
  onClose: () => void;
}

type GameState = "START" | "PLAYING" | "GAME_OVER";

export function EasterEggGame({ onClose }: EasterEggGameProps) {
  const [gameState, setGameState] = useState<GameState>("START");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("soi_arcade_highscore");
    return saved ? parseInt(saved, 10) : 0;
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number | null>(null);

  // Audio synthesizer for retro sounds
  const playSound = (type: "jump" | "score" | "crash") => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "jump") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15);
        osc.start();
        osc.stop(ctx.currentTime + 0.15);
      } else if (type === "score") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === "crash") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      // AudioContext blocked or unsupported
    }
  };

  // Game variables
  const player = useRef({
    x: 50,
    y: 150,
    width: 32,
    height: 32,
    velocityY: 0,
    gravity: 0.6,
    jumpStrength: -11,
    isGrounded: false,
  });

  const obstacles = useRef<Array<{ x: number; y: number; width: number; height: number; speed: number; passed: boolean }>>([]);
  const obstacleTimer = useRef(0);
  const gameSpeed = useRef(5);

  const handleJump = () => {
    if (gameState === "PLAYING" && player.current.isGrounded) {
      player.current.velocityY = player.current.jumpStrength;
      player.current.isGrounded = false;
      playSound("jump");
    } else if (gameState === "START") {
      startGame();
    } else if (gameState === "GAME_OVER") {
      startGame();
    }
  };

  // Listen to keyboard space/up keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleJump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState]);

  const startGame = () => {
    setGameState("PLAYING");
    setScore(0);
    obstacles.current = [];
    obstacleTimer.current = 0;

    // Detect device type to set optimal speed & responsive jump parameters
    const mobileMode = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
    gameSpeed.current = mobileMode ? 6.5 : 3.8;
    player.current.jumpStrength = mobileMode ? -12.5 : -11;
    player.current.gravity = mobileMode ? 0.72 : 0.6;

    const canvas = canvasRef.current;
    if (canvas) {
      player.current.y = canvas.height - 70;
      player.current.velocityY = 0;
      player.current.isGrounded = true;
    }
  };

  // Game loop
  useEffect(() => {
    if (gameState !== "PLAYING") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let localScore = 0;

    const updatePhysics = () => {
      const p = player.current;

      // Apply gravity
      p.velocityY += p.gravity;
      p.y += p.velocityY;

      const groundY = canvas.height - 40 - p.height;
      if (p.y >= groundY) {
        p.y = groundY;
        p.velocityY = 0;
        p.isGrounded = true;
      }

      // Spawning obstacles
      obstacleTimer.current++;
      const spawnInterval = Math.max(50, 95 - Math.floor(localScore / 10));
      if (obstacleTimer.current >= spawnInterval) {
        obstacleTimer.current = 0;
        const width = 24 + Math.random() * 16;
        const height = 24 + Math.random() * 20;
        obstacles.current.push({
          x: canvas.width,
          y: canvas.height - 40 - height,
          width,
          height,
          speed: gameSpeed.current,
          passed: false,
        });
      }

      // Speed progression dynamically scaled by device type
      const mobileMode = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
      const baseSpeed = mobileMode ? 6.5 : 3.8;
      const progressionFactor = mobileMode ? 0.08 : 0.045;
      gameSpeed.current = baseSpeed + localScore * progressionFactor;

      // Update and filter obstacles
      obstacles.current.forEach((obs) => {
        obs.x -= obs.speed;

        // Collision detection
        if (
          p.x < obs.x + obs.width &&
          p.x + p.width > obs.x &&
          p.y < obs.y + obs.height &&
          p.y + p.height > obs.y
        ) {
          // Collision!
          playSound("crash");
          setGameState("GAME_OVER");

          // Save high score
          if (localScore > highScore) {
            setHighScore(localScore);
            localStorage.setItem("soi_arcade_highscore", localScore.toString());
          }
        }

        // Score check
        if (!obs.passed && obs.x + obs.width < p.x) {
          obs.passed = true;
          localScore += 1;
          setScore(localScore);
          playSound("score");
        }
      });

      obstacles.current = obstacles.current.filter((obs) => obs.x > -obs.width);
    };

    const draw = () => {
      ctx.fillStyle = "#FFE9D6"; // Peach background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Floor line
      ctx.strokeStyle = "#1C1C24";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 40);
      ctx.lineTo(canvas.width, canvas.height - 40);
      ctx.stroke();

      // Ground pattern lines
      ctx.strokeStyle = "rgba(28, 28, 36, 0.15)";
      ctx.lineWidth = 2;
      for (let i = 0; i < canvas.width; i += 24) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height - 40);
        ctx.lineTo(i - 10, canvas.height);
        ctx.stroke();
      }

      // Draw player: A cute Neo-Brutalist Micro-chip/Robot square
      const p = player.current;
      ctx.fillStyle = "#FFFAF2"; // Cream fill
      ctx.strokeStyle = "#1C1C24";
      ctx.lineWidth = 3.5;
      ctx.fillRect(p.x, p.y, p.width, p.height);
      ctx.strokeRect(p.x, p.y, p.width, p.height);

      // Flat drop shadow inside player
      ctx.fillStyle = "#2747FF"; // Cobalt blue accents
      ctx.fillRect(p.x + 6, p.y + 6, 8, 8);
      ctx.fillStyle = "#FF6A3D"; // Orange accent
      ctx.fillRect(p.x + 18, p.y + 6, 8, 8);

      // Cute face elements
      ctx.fillStyle = "#1C1C24";
      ctx.fillRect(p.x + 6, p.y + 18, 20, 4);

      // Draw obstacles: Stylized Neo-brutalist jagged gears or blocks
      ctx.fillStyle = "#FF6A3D"; // Orange gear obstacles
      obstacles.current.forEach((obs) => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);

        // Gear/cross inner core details
        ctx.fillStyle = "#1C1C24";
        ctx.fillRect(obs.x + obs.width / 2 - 3, obs.y + obs.height / 2 - 3, 6, 6);
        ctx.fillStyle = "#FF6A3D";
      });
    };

    const loop = () => {
      updatePhysics();
      draw();
      if (gameState === "PLAYING") {
        gameLoopRef.current = requestAnimationFrame(loop);
      }
    };

    gameLoopRef.current = requestAnimationFrame(loop);

    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameState]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/65 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg border-[4px] border-ink bg-card p-6 shadow-brutal-lg select-none">
        
        {/* Header Bar */}
        <div className="mb-6 flex items-center justify-between border-b-[3px] border-ink pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border-[2px] border-ink bg-primary text-primary-foreground font-display text-sm shadow-brutal-sm">
              🎮
            </span>
            <h3 className="font-display text-lg uppercase tracking-wide text-ink">
              SOI GEAR RUNNER
            </h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-peach text-ink shadow-brutal-sm hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 cursor-pointer"
            aria-label="Exit Game"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Arcade Console Screen wrapper */}
        <div 
          onClick={handleJump}
          className="relative overflow-hidden border-[3.5px] border-ink cursor-pointer select-none bg-peach-deep/10 shadow-inner"
          style={{ height: "240px" }}
        >
          <canvas
            ref={canvasRef}
            width={460}
            height={240}
            className="h-full w-full block"
          />

          {/* HUD Score Overlay */}
          <div className="absolute left-4 top-4 flex gap-4 select-none pointer-events-none">
            <div className="border-[2px] border-ink bg-card px-2.5 py-1 font-display text-[10px] uppercase shadow-brutal-sm flex items-center gap-1.5">
              <span>Score:</span>
              <span className="font-mono font-bold text-primary">{score}</span>
            </div>
            <div className="border-[2px] border-ink bg-accent px-2.5 py-1 font-display text-[10px] uppercase shadow-brutal-sm text-accent-foreground flex items-center gap-1.5">
              <Trophy className="h-3 w-3" />
              <span>High:</span>
              <span className="font-mono font-bold">{highScore}</span>
            </div>
          </div>

          {/* Click to jump prompt */}
          <div className="absolute right-4 top-4 border-[2px] border-ink bg-card px-2.5 py-1 font-display text-[9px] uppercase shadow-brutal-sm pointer-events-none opacity-60">
            Space / Click to Jump
          </div>

          {/* Game Over Screen */}
          {gameState === "GAME_OVER" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/75 p-6 text-center animate-scale-up">
              <h4 className="font-display text-2xl uppercase tracking-wider text-accent mb-1 drop-shadow-md">
                GAME OVER
              </h4>
              <p className="font-body text-xs text-primary-foreground/95 mb-4">
                You crashed into a technical gear!
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    startGame();
                  }}
                  className="inline-flex items-center gap-2 border-[2.5px] border-ink bg-primary text-primary-foreground px-4 py-2 font-display text-xs uppercase shadow-brutal cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px]"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Try Again
                </button>
              </div>
            </div>
          )}

          {/* Start Screen */}
          {gameState === "START" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/70 p-6 text-center">
              <div className="mb-2 grid h-12 w-12 place-items-center border-[3px] border-ink bg-accent text-accent-foreground font-display text-xl rotate-6 animate-pulse">
                ⚙️
              </div>
              <h4 className="font-display text-xl uppercase tracking-wider text-primary-foreground mb-1">
                GEAR RUNNER
              </h4>
              <p className="font-body text-[11px] text-primary-foreground/80 mb-5 max-w-xs">
                Jump over the incoming technical gears and wrenches. Build a high score!
              </p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startGame();
                }}
                className="inline-flex items-center gap-2 border-[2.5px] border-ink bg-primary text-primary-foreground px-5 py-2.5 font-display text-xs uppercase shadow-brutal cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Play Game
              </button>
            </div>
          )}
        </div>

        {/* Footer controls hints */}
        <div className="mt-4 text-center">
          <p className="font-body text-[10px] text-foreground/60">
            A secret Technical Council Easter Egg. Created for builders.
          </p>
        </div>
      </div>
    </div>
  );
}
