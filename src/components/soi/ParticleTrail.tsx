import { useEffect, useRef } from "react";

export function ParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const colors = [
      "var(--primary)",
      "var(--accent)",
      "#2747FF",
      "#FF6A3D",
      "#ff58b6",
      "#FFD700",
    ];

    const handleMouseMove = (e: MouseEvent) => {
      // Spawn 1 particle per mousemove for an elegant and performant trail
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        size: 5 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 0.5, // slightly drifting upwards
        alpha: 1,
        decay: 0.025 + Math.random() * 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = "#1b181e"; // ink border
        ctx.lineWidth = 1.5;

        // Draw solid pixelated retro square
        ctx.beginPath();
        ctx.rect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
