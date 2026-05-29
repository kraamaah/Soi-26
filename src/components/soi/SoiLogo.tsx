import React from "react";
 
export function SoiLogo({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none soi-logo-container`}
    >
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes wave-glide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200px); }
        }
        .soi-logo-container {
          overflow: visible;
        }
        .soi-gear {
          transform-origin: 250px 125px;
          animation: spin-slow 35s linear infinite;
          transition: animation-duration 0.4s ease;
        }
        .soi-logo-container:hover .soi-gear {
          animation-duration: 10s;
        }
        .soi-mountain {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .soi-mountain-left {
          transform-origin: 130px 210px;
        }
        .soi-mountain-right {
          transform-origin: 370px 210px;
        }
        .soi-mountain-center {
          transform-origin: 250px 210px;
        }
        .soi-logo-container:hover .soi-mountain-left {
          transform: translate(-4px, 1px) scale(0.99);
        }
        .soi-logo-container:hover .soi-mountain-right {
          transform: translate(4px, 1px) scale(0.99);
        }
        .soi-logo-container:hover .soi-mountain-center {
          transform: translate(0, -4px) scale(1.01);
        }
        .soi-oscilloscope-wave-1 {
          animation: wave-glide 5s linear infinite;
        }
        .soi-oscilloscope-wave-2 {
          animation: wave-glide 3.5s linear infinite reverse;
        }
      `}</style>
 
      <defs>
        {/* Clean Neo-Brutalist Diagonal Shading Hatch Pattern */}
        <pattern
          id="mountain-shading"
          width="8"
          height="8"
          patternTransform="rotate(45 0 0)"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="var(--color-ink)"
            strokeWidth="1.2"
            opacity="0.3"
          />
        </pattern>
 
        {/* Dynamic Mask for Wrench Head Cutouts to Support True Background Transparency */}
        <mask id="wrench-clip-mask">
          {/* White covers kept areas */}
          <rect x="-40" y="-95" width="80" height="150" fill="white" />
          {/* Black cuts out the shape holes completely */}
          <path d="M-10,-86 L10,-86 L12,-66 L-12,-66 Z" fill="black" />
          <circle cx="0" cy="24" r="7.5" fill="black" />
        </mask>
      </defs>
 
      {/* ======================================================== */}
      {/* 1. BACKGROUND GRAPHICS: GEAR, MOUNTAINS, TOOLS */}
      {/* ======================================================== */}
 
      {/* A. CENTRAL SUN GEAR (Lowered to center 250, 125) */}
      <g className="soi-gear">
        {/* 12 Custom Gear Teeth rotated around (250, 125) */}
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(0 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(30 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(60 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(90 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(120 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(150 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(180 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(210 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(240 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(270 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(300 250 125)" />
        <polygon points="241,69 244,53 256,53 259,69" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" transform="rotate(330 250 125)" />
 
        {/* Core Circular Disk */}
        <circle cx="250" cy="125" r="56" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="4" />
        
        {/* Concentric blueprint ring gauges */}
        <circle cx="250" cy="125" r="40" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeDasharray="6 5" />
        <circle cx="250" cy="125" r="24" fill="var(--color-card)" stroke="var(--color-ink)" strokeWidth="3.5" />
        <circle cx="250" cy="125" r="10" fill="var(--color-ink)" />
      </g>
 
      {/* B. OVERLAPPING SCI-FI CONTRAST MOUNTAINS */}
      {/* Left Mountain */}
      <g className="soi-mountain soi-mountain-left">
        <polygon
          points="30,210 140,110 230,210"
          fill="var(--color-peach-deep)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <polygon
          points="30,210 140,110 230,210"
          fill="url(#mountain-shading)"
          stroke="none"
        />
      </g>
 
      {/* Right Mountain */}
      <g className="soi-mountain soi-mountain-right">
        <polygon
          points="270,210 370,120 470,210"
          fill="var(--color-peach-deep)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <polygon
          points="270,210 370,120 470,210"
          fill="url(#mountain-shading)"
          stroke="none"
        />
      </g>
 
      {/* Center Mountain */}
      <g className="soi-mountain soi-mountain-center">
        {/* Left Side: Solid Light */}
        <polygon
          points="130,210 250,80 250,210"
          fill="var(--color-card)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Right Side: Solid Shaded Hatching */}
        <polygon
          points="250,80 370,210 250,210"
          fill="var(--color-card)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <polygon
          points="250,80 370,210 250,210"
          fill="url(#mountain-shading)"
          stroke="none"
        />
        {/* Central Ridge Line */}
        <line x1="250" y1="80" x2="250" y2="210" stroke="var(--color-ink)" strokeWidth="3.5" />
      </g>
 
      {/* C. LEFT TECTONIC CLAW HAMMER (Shifted upward and slightly inside) */}
      <g className="soi-tool-left" transform="translate(152, 160) rotate(-22 0 40) scale(1.15)">
        {/* Handle Shaft */}
        <rect
          x="-8"
          y="-60"
          width="16"
          height="100"
          rx="5"
          fill="var(--color-peach-deep)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
        />
        {/* Heavy Ink Grip Cover */}
        <rect x="-8" y="0" width="16" height="40" rx="3.5" fill="var(--color-ink)" />
        <line x1="-8" y1="10" x2="8" y2="10" stroke="var(--color-card)" strokeWidth="2" />
        <line x1="-8" y1="20" x2="8" y2="20" stroke="var(--color-card)" strokeWidth="2" />
        <line x1="-8" y1="30" x2="8" y2="30" stroke="var(--color-card)" strokeWidth="2" />
 
        {/* Hammer Head Main Body */}
        <path
          d="M-28,-82 L20,-82 C24,-82 26,-79 26,-75 L26,-63 C26,-59 24,-56 20,-56 L-28,-56 Z"
          fill="var(--color-primary)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Claw Sweep (Left Side) */}
        <path
          d="M-28,-82 C-46,-80 -54,-65 -54,-60 C-40,-64 -32,-64 -28,-56 Z"
          fill="var(--color-primary)"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Striking Face Cylinder (Right Side) */}
        <rect x="26" y="-76" width="8" height="14" rx="2" fill="var(--color-accent)" stroke="var(--color-ink)" strokeWidth="3" />
      </g>
 
      {/* D. RIGHT CHROME-VANADIUM DOUBLE-ENDED WRENCH (Shifted upward and slightly inside) */}
      <g className="soi-tool-right" transform="translate(340, 160) rotate(22 0 40) scale(1.15)">

        {/* Wrench body fill rendered with mask for inner hole transparency */}
        <g mask="url(#wrench-clip-mask)">
          <path
            d="M -10,-76 L -11,-62 L 11,-62 L 10,-76 L 16,-74 A 20,20 0 0,1 8,-43.67 L 8,10 A 16,16 0 1,1 -8,10 L -8,-43.67 A 20,20 0 0,1 -16,-74 Z"
            fill="var(--color-primary)"
          />
        </g>

        {/* Inset Core Shaft Accent */}
        <rect x="-3.5" y="-42" width="7" height="50" rx="2" fill="var(--color-ink)" opacity="0.22" />

        {/* Wrench Outer Continuous Outline */}
        <path
          d="M -10,-76 L -11,-62 L 11,-62 L 10,-76 L 16,-74 A 20,20 0 0,1 8,-43.67 L 8,10 A 16,16 0 1,1 -8,10 L -8,-43.67 A 20,20 0 0,1 -16,-74 Z"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Closed Ring interior hole outline */}
        <circle cx="0" cy="24" r="7.5" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" />
      </g>
 
      {/* E. GROUND HATCHING */}
      <g>
        {/* Bold ground anchor line */}
        <line x1="28" y1="190" x2="472" y2="190" stroke="var(--color-ink)" strokeWidth="4.5" strokeLinecap="round" />
        
        {/* Stylized ground slashes */}
        <path
          d="
            M35,190 l8,-12 M60,190 l8,-12 M85,190 l8,-12 M110,190 l8,-12
            M135,190 l8,-12 M160,190 l8,-12 M185,190 l8,-12 M210,190 l8,-12 M235,190 l8,-12
            M260,190 l8,-12 M285,190 l8,-12 M310,190 l8,-12 M335,190 l8,-12 M360,190 l8,-12
            M385,190 l8,-12 M410,190 l8,-12 M435,190 l8,-12 M460,190 l8,-12
          "
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
 
      {/* ======================================================== */}
      {/* 2. FOREGROUND PANEL LAYERS: RETRO SIGNBOARD & WAVE OVERLAYS */}
      {/* ======================================================== */}
      <g>
        {/* Bold drop shadow block */}
        <rect x="26" y="196" width="460" height="150" fill="var(--color-ink)" rx="6" />
        
        {/* Main Signboard Card Frame */}
        <rect
          x="20"
          y="190"
          width="460"
          height="150"
          fill="var(--color-card)"
          stroke="var(--color-ink)"
          strokeWidth="4.5"
          rx="6"
        />
        
        {/* Internal high-contrast blueprint window */}
        <rect
          x="28"
          y="198"
          width="444"
          height="134"
          fill="var(--color-primary)"
          fillOpacity="0.06"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          rx="4.5"
        />

        {/* Subtle grid ticks inside the blueprint window */}
        <line x1="117" y1="198" x2="117" y2="332" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.12" />
        <line x1="206" y1="198" x2="206" y2="332" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.12" />
        <line x1="295" y1="198" x2="295" y2="332" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.12" />
        <line x1="384" y1="198" x2="384" y2="332" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.12" />
        
        <line x1="28" y1="265" x2="472" y2="265" stroke="var(--color-ink)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.12" />

        {/* Orange Accent Header Strip representing live feed */}
        <line x1="28" y1="199.5" x2="472" y2="199.5" stroke="var(--color-accent)" strokeWidth="4.5" />

        {/* Monospace System Specifications & Data feeds */}
        <text x="36" y="217" fontFamily="Space Grotesk, system-ui, sans-serif" fontSize="7.5" fontWeight="900" fill="var(--color-ink)" letterSpacing="0.05em" opacity="0.85">SYS_STATUS // ACTIVE</text>
        <text x="376" y="217" fontFamily="Space Grotesk, system-ui, sans-serif" fontSize="7.5" fontWeight="900" fill="var(--color-ink)" letterSpacing="0.05em" opacity="0.85">EDITION_07 // 2026</text>
        <text x="36" y="313" fontFamily="Space Grotesk, system-ui, sans-serif" fontSize="7.5" fontWeight="900" fill="var(--color-ink)" letterSpacing="0.05em" opacity="0.85">LATENCY // 6.7ms</text>
        <text x="386" y="313" fontFamily="Space Grotesk, system-ui, sans-serif" fontSize="7.5" fontWeight="900" fill="var(--color-ink)" letterSpacing="0.05em" opacity="0.85">FRQ // 4.20Ghz</text>

        {/* Sub-viewport clipping for animating wave feeds at bottom-center of card */}
        <svg x="28" y="212" width="444" height="106" viewBox="0 0 444 106">
          {/* Animated Wave 1: Cobalt Main Sine */}
          <g className="soi-oscilloscope-wave-1">
            <path
              d="M -40,53 Q 10,23 60,53 T 160,53 T 260,53 T 360,53 T 460,53 T 560,53 T 660,53 T 760,53 T 860,53"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.85"
            />
          </g>
          {/* Animated Wave 2: Accent Orange Secondary dashed wave */}
          <g className="soi-oscilloscope-wave-2">
            <path
              d="M -40,53 Q 10,83 60,53 T 160,53 T 260,53 T 360,53 T 460,53 T 560,53 T 660,53 T 760,53 T 860,53"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
              opacity="0.75"
            />
          </g>
        </svg>

        {/* Concentric targets crosshairs at center-bottom */}
        <circle cx="250" cy="265" r="14" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
        <circle cx="250" cy="265" r="6" fill="none" stroke="var(--color-accent)" strokeWidth="2.2" />
        <line x1="250" y1="250" x2="250" y2="280" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.8" />
        <line x1="235" y1="265" x2="265" y2="265" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.8" />

        {/* Tech panel rivet circles in four corners */}
        <circle cx="33" cy="203" r="1.8" fill="var(--color-ink)" />
        <circle cx="467" cy="203" r="1.8" fill="var(--color-ink)" />
        <circle cx="33" cy="337" r="1.8" fill="var(--color-ink)" />
        <circle cx="467" cy="337" r="1.8" fill="var(--color-ink)" />

        {/* Premium diagonal glossy screen reflections */}
        <polygon points="360,190 395,190 295,340 260,340" fill="white" fillOpacity="0.22" />
        <polygon points="400,190 415,190 315,340 300,340" fill="white" fillOpacity="0.22" />
      </g>
    </svg>
  );
}
