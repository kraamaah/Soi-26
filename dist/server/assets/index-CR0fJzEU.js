import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FileText } from "lucide-react";
function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  const links = [
    { href: "#home", label: "Home" },
    { href: "#events", label: "Problem Statements" },
    { href: "#timeline", label: "Timeline" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const link of links) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b-[3px] border-ink bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8", children: [
    /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center border-[3px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)]", children: /* @__PURE__ */ jsx("span", { className: "font-display text-sm", children: "SOI" }) }),
      /* @__PURE__ */ jsx("span", { className: "hidden font-display text-sm uppercase tracking-tight md:inline", children: "Summer of Innovation" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "flex items-center gap-1.5 md:gap-3", children: links.map((l) => {
      const isActive = activeSection === l.href.substring(1);
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: l.href,
          className: `border-[2px] border-ink px-2.5 py-1 font-display text-[10px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] md:px-3 md:py-1.5 ${isActive ? "bg-accent text-accent-foreground -translate-x-[1.5px] -translate-y-[1.5px] shadow-[3.5px_3.5px_0_0_var(--ink)]" : "bg-card text-ink hover:bg-peach hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"}`,
          children: l.label
        },
        l.href
      );
    }) })
  ] }) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function BrutalCard({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "border-[3px] border-ink bg-card shadow-brutal transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px]",
        className
      ),
      ...props,
      children
    }
  );
}
function Sparkle({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      className,
      fill: "currentColor",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx("path", { d: "M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" })
    }
  );
}
function SoiLogo({ className = "w-full h-auto" }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 500 350",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `${className} select-none soi-logo-container`,
      children: [
        /* @__PURE__ */ jsx("style", { children: `
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
      ` }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsx(
            "pattern",
            {
              id: "mountain-shading",
              width: "8",
              height: "8",
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ jsx(
                "line",
                {
                  x1: "0",
                  y1: "0",
                  x2: "0",
                  y2: "8",
                  stroke: "var(--color-ink)",
                  strokeWidth: "1.2",
                  opacity: "0.3"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("mask", { id: "wrench-clip-mask", children: [
            /* @__PURE__ */ jsx("rect", { x: "-40", y: "-95", width: "80", height: "150", fill: "white" }),
            /* @__PURE__ */ jsx("path", { d: "M-10,-86 L10,-86 L12,-66 L-12,-66 Z", fill: "black" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "24", r: "7.5", fill: "black" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "soi-gear", children: [
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(0 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(30 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(60 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(90 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(120 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(150 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(180 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(210 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(240 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(270 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(300 250 125)" }),
          /* @__PURE__ */ jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(330 250 125)" }),
          /* @__PURE__ */ jsx("circle", { cx: "250", cy: "125", r: "56", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "4" }),
          /* @__PURE__ */ jsx("circle", { cx: "250", cy: "125", r: "40", fill: "none", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeDasharray: "6 5" }),
          /* @__PURE__ */ jsx("circle", { cx: "250", cy: "125", r: "24", fill: "var(--color-card)", stroke: "var(--color-ink)", strokeWidth: "3.5" }),
          /* @__PURE__ */ jsx("circle", { cx: "250", cy: "125", r: "10", fill: "var(--color-ink)" })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "soi-mountain soi-mountain-left", children: [
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "30,210 140,110 230,210",
              fill: "var(--color-peach-deep)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "30,210 140,110 230,210",
              fill: "url(#mountain-shading)",
              stroke: "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "soi-mountain soi-mountain-right", children: [
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "270,210 370,120 470,210",
              fill: "var(--color-peach-deep)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "270,210 370,120 470,210",
              fill: "url(#mountain-shading)",
              stroke: "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "soi-mountain soi-mountain-center", children: [
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "130,210 250,80 250,210",
              fill: "var(--color-card)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "250,80 370,210 250,210",
              fill: "var(--color-card)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "polygon",
            {
              points: "250,80 370,210 250,210",
              fill: "url(#mountain-shading)",
              stroke: "none"
            }
          ),
          /* @__PURE__ */ jsx("line", { x1: "250", y1: "80", x2: "250", y2: "210", stroke: "var(--color-ink)", strokeWidth: "3.5" })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "soi-tool-left", transform: "translate(152, 160) rotate(-22 0 40) scale(1.15)", children: [
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "-8",
              y: "-60",
              width: "16",
              height: "100",
              rx: "5",
              fill: "var(--color-peach-deep)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5"
            }
          ),
          /* @__PURE__ */ jsx("rect", { x: "-8", y: "0", width: "16", height: "40", rx: "3.5", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsx("line", { x1: "-8", y1: "10", x2: "8", y2: "10", stroke: "var(--color-card)", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "-8", y1: "20", x2: "8", y2: "20", stroke: "var(--color-card)", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "-8", y1: "30", x2: "8", y2: "30", stroke: "var(--color-card)", strokeWidth: "2" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M-28,-82 L20,-82 C24,-82 26,-79 26,-75 L26,-63 C26,-59 24,-56 20,-56 L-28,-56 Z",
              fill: "var(--color-primary)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M-28,-82 C-46,-80 -54,-65 -54,-60 C-40,-64 -32,-64 -28,-56 Z",
              fill: "var(--color-primary)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx("rect", { x: "26", y: "-76", width: "8", height: "14", rx: "2", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3" })
        ] }),
        /* @__PURE__ */ jsxs("g", { className: "soi-tool-right", transform: "translate(340, 160) rotate(22 0 40) scale(1.15)", children: [
          /* @__PURE__ */ jsxs("g", { mask: "url(#wrench-clip-mask)", children: [
            /* @__PURE__ */ jsx(
              "rect",
              {
                x: "-8",
                y: "-62",
                width: "16",
                height: "86",
                rx: "5.5",
                fill: "var(--color-primary)",
                stroke: "var(--color-ink)",
                strokeWidth: "3.5"
              }
            ),
            /* @__PURE__ */ jsx("rect", { x: "-3.5", y: "-42", width: "7", height: "50", rx: "2", fill: "var(--color-ink)", opacity: "0.22" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "-62", r: "20", fill: "var(--color-primary)", stroke: "var(--color-ink)", strokeWidth: "3.5" }),
            /* @__PURE__ */ jsx("circle", { cx: "0", cy: "24", r: "16", fill: "var(--color-primary)", stroke: "var(--color-ink)", strokeWidth: "3.5" })
          ] }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M-10,-86 L10,-86 L12,-66 L-12,-66",
              fill: "none",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsx("circle", { cx: "0", cy: "24", r: "7.5", fill: "none", stroke: "var(--color-ink)", strokeWidth: "3.5" })
        ] }),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx("line", { x1: "28", y1: "190", x2: "472", y2: "190", stroke: "var(--color-ink)", strokeWidth: "4.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "\n            M35,190 l8,-12 M60,190 l8,-12 M85,190 l8,-12 M110,190 l8,-12\n            M135,190 l8,-12 M160,190 l8,-12 M185,190 l8,-12 M210,190 l8,-12 M235,190 l8,-12\n            M260,190 l8,-12 M285,190 l8,-12 M310,190 l8,-12 M335,190 l8,-12 M360,190 l8,-12\n            M385,190 l8,-12 M410,190 l8,-12 M435,190 l8,-12 M460,190 l8,-12\n          ",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinecap: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx("rect", { x: "26", y: "196", width: "460", height: "150", fill: "var(--color-ink)", rx: "6" }),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "20",
              y: "190",
              width: "460",
              height: "150",
              fill: "var(--color-card)",
              stroke: "var(--color-ink)",
              strokeWidth: "4.5",
              rx: "6"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "28",
              y: "198",
              width: "444",
              height: "134",
              fill: "var(--color-primary)",
              fillOpacity: "0.06",
              stroke: "var(--color-ink)",
              strokeWidth: "2.5",
              rx: "4.5"
            }
          ),
          /* @__PURE__ */ jsx("line", { x1: "117", y1: "198", x2: "117", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsx("line", { x1: "206", y1: "198", x2: "206", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsx("line", { x1: "295", y1: "198", x2: "295", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsx("line", { x1: "384", y1: "198", x2: "384", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsx("line", { x1: "28", y1: "265", x2: "472", y2: "265", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsx("line", { x1: "28", y1: "199.5", x2: "472", y2: "199.5", stroke: "var(--color-accent)", strokeWidth: "4.5" }),
          /* @__PURE__ */ jsx("text", { x: "36", y: "217", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "SYS_STATUS // ACTIVE" }),
          /* @__PURE__ */ jsx("text", { x: "376", y: "217", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "EDITION_07 // 2026" }),
          /* @__PURE__ */ jsx("text", { x: "36", y: "313", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "LATENCY // 6.7ms" }),
          /* @__PURE__ */ jsx("text", { x: "386", y: "313", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "FRQ // 4.20Ghz" }),
          /* @__PURE__ */ jsxs("svg", { x: "28", y: "212", width: "444", height: "106", viewBox: "0 0 444 106", children: [
            /* @__PURE__ */ jsx("g", { className: "soi-oscilloscope-wave-1", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M -40,53 Q 10,23 60,53 T 160,53 T 260,53 T 360,53 T 460,53 T 560,53 T 660,53 T 760,53 T 860,53",
                fill: "none",
                stroke: "var(--color-primary)",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                opacity: "0.85"
              }
            ) }),
            /* @__PURE__ */ jsx("g", { className: "soi-oscilloscope-wave-2", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M -40,53 Q 10,83 60,53 T 160,53 T 260,53 T 360,53 T 460,53 T 560,53 T 660,53 T 760,53 T 860,53",
                fill: "none",
                stroke: "var(--color-accent)",
                strokeWidth: "1.5",
                strokeDasharray: "4 4",
                strokeLinecap: "round",
                opacity: "0.75"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("circle", { cx: "250", cy: "265", r: "14", fill: "none", stroke: "var(--color-accent)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.7" }),
          /* @__PURE__ */ jsx("circle", { cx: "250", cy: "265", r: "6", fill: "none", stroke: "var(--color-accent)", strokeWidth: "2.2" }),
          /* @__PURE__ */ jsx("line", { x1: "250", y1: "250", x2: "250", y2: "280", stroke: "var(--color-accent)", strokeWidth: "1.5", opacity: "0.8" }),
          /* @__PURE__ */ jsx("line", { x1: "235", y1: "265", x2: "265", y2: "265", stroke: "var(--color-accent)", strokeWidth: "1.5", opacity: "0.8" }),
          /* @__PURE__ */ jsx("circle", { cx: "33", cy: "203", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsx("circle", { cx: "467", cy: "203", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsx("circle", { cx: "33", cy: "337", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsx("circle", { cx: "467", cy: "337", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsx("polygon", { points: "360,190 395,190 295,340 260,340", fill: "white", fillOpacity: "0.22" }),
          /* @__PURE__ */ jsx("polygon", { points: "400,190 415,190 315,340 300,340", fill: "white", fillOpacity: "0.22" })
        ] })
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "home", className: "relative overflow-hidden border-b-[3px] border-ink conic-pattern", children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block border-[3px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase tracking-widest shadow-brutal-sm", children: "Seventh Edition · 2026" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl", children: [
        "Summer",
        /* @__PURE__ */ jsx("br", {}),
        "of ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Innovation" }),
        /* @__PURE__ */ jsx("br", {}),
        "2026"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-md border-l-[4px] border-primary pl-4 text-lg text-foreground/80", children: "This Summer, build skills that outlast the season." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#events",
            className: "inline-flex items-center border-[3px] border-ink bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground shadow-brutal transition-transform hover:translate-x-[2px] hover:translate-y-[2px]",
            children: "Explore Problem Statements →"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#timeline",
            className: "inline-flex items-center border-[3px] border-ink bg-card px-6 py-3 font-display text-sm uppercase tracking-wide shadow-brutal transition-transform hover:translate-x-[2px] hover:translate-y-[2px]",
            children: "See Timeline"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Sparkle, { className: "absolute -left-6 top-12 h-6 w-6 text-accent" }),
      /* @__PURE__ */ jsx(Sparkle, { className: "absolute -right-2 top-2 h-4 w-4 text-primary" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative p-2 md:p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 -rotate-1 border-[3px] border-ink bg-accent/10 rounded-lg conic-pattern", "aria-hidden": true }),
      /* @__PURE__ */ jsx("div", { className: "relative w-full border-[3px] border-ink bg-card p-6 shadow-brutal-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(SoiLogo, { className: "w-full h-auto max-w-md md:max-w-lg" }) }),
      /* @__PURE__ */ jsx(Sparkle, { className: "absolute -right-4 -top-6 h-8 w-8 text-primary animate-pulse" }),
      /* @__PURE__ */ jsx(Sparkle, { className: "absolute -bottom-4 -left-4 h-6 w-6 text-accent animate-pulse" })
    ] })
  ] }) });
}
function Overview() {
  return /* @__PURE__ */ jsx("section", { id: "overview", className: "border-b-[3px] border-ink bg-peach-deep/40 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-10 flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "h-[3px] w-12 bg-ink" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl uppercase md:text-5xl", children: "Overview" })
    ] }),
    /* @__PURE__ */ jsxs(BrutalCard, { className: "relative p-8 md:p-12", children: [
      /* @__PURE__ */ jsx(Sparkle, { className: "absolute -top-4 -left-4 h-8 w-8 text-accent" }),
      /* @__PURE__ */ jsx(Sparkle, { className: "absolute -bottom-4 -right-4 h-8 w-8 text-primary" }),
      /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl md:text-3xl", children: "Welcome to Summer of Innovation'26." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-sm md:text-base text-accent uppercase tracking-wider", children: "The Summer I turned techy ^_^" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-relaxed text-foreground/85", children: "This is where theory meets raw creation. For the next two months, you’ll team up with fellow builders, designers, and thinkers to hack, build, and break things—virtually, of course (please leave your household appliances in one piece!). Our technical clubs have put together a series of real-world challenges designed to stretch your skills to the limit. Whether you obsess over clean code, mechanical design, pixels, or hardware, this is your sandbox. Grab your tools, find your team, and let's build something unforgettable." }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 border-t-[2px] border-dashed border-ink pt-6 font-display text-xl text-primary", children: "Are you ready to rise to the challenge? Let the Summer of Innovation begin!" })
    ] })
  ] }) });
}
const pathmatrix = "/assets/event-pathmatrix-r2ggct_L.png";
const beyondBits = "/assets/event-beyond-bits-DloTdoDC.png";
const cartographer = "/assets/event-cartographer-kd5xQ_Sj.png";
const promptSelection = "/assets/event-prompt-selection-Df2stT8q.png";
const vectorCaching = "/assets/event-vector-caching-BbASoFT4.png";
const doctorTriage = "/assets/event-doctor-triage-BDMrk4bH.png";
const geometricLearning = "/assets/event-geometric-learning-Ci8nrGH1.png";
const geoSnap = "/assets/event-geo-snap-BA4Yuguy.png";
const glyphcraft = "/assets/event-glyphcraft-CoHHH7UB.png";
const kigumiDesign = "/assets/event-kigumi-design-Cfsv1KGK.png";
const ironGrip = "/assets/event-iron-grip-CTPCzeHt.png";
const materialSnap = "/assets/event-material-snap-CQoyAcla.png";
const orbitron = "/assets/event-orbitron-DCHb9saB.png";
const cyberLeg = "/assets/event-cyber-leg-DUTY8vyl.png";
const ebpfSentinel = "/assets/event-ebpf-sentinel-BsXV8iWC.png";
const compounding = "/assets/event-compounding-8SOY34hz.png";
const realmshift = "/assets/event-realmshift-QI1bqUhQ.png";
const powercube = "/assets/event-powercube-C886JSYD.png";
const events = [
  {
    num: "01",
    title: "PathMatrix",
    desc: "Build an intelligent route optimization and dynamic ride-sharing engine. Can your algorithms balance distance, real-time requests, and user satisfaction with live visualization?",
    image: pathmatrix,
    club: "Coding Club",
    date: "2nd June 2026",
    timeline: "2nd June - 17th July 2026",
    prizes: "Merch + Prize Money (1800 + 1200 + 600)",
    domains: ["Software Engineering", "Algorithms & Optimization"]
  },
  {
    num: "02",
    title: "Beyond Bits",
    desc: "Design a hardware-based compression system to optimize communication bandwidth. Can you successfully modulate, compress, transmit, and recover complex signals with zero data loss?",
    image: beyondBits,
    club: "Electronics Club",
    date: "2nd June 2026",
    timeline: "2nd June - 12th July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Embedded Systems", "Telecommunications"]
  },
  {
    num: "03",
    title: "Cartographer",
    desc: "Develop a cooperative SLAM algorithm for dual-robot exploration in simulation. How efficiently can your robotic agents map and search an unknown 2D space?",
    image: cartographer,
    club: "Robotics Club",
    date: "2nd June 2026",
    timeline: "2nd June - 14th July 2026",
    prizes: "Merch + 3x Robu/Robocraze Gift Card (1000 INR)",
    domains: ["Robotics & Automation", "Software Engineering"]
  },
  {
    num: "04",
    title: "Learning Efficient Prompt Selection for Large Language Models",
    desc: "Design an adaptive prompt selector that dynamically optimizes queries under strict token budgets. Let's maximize LLM response quality while slashing latency!",
    image: promptSelection,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Generative AI"]
  },
  {
    num: "05",
    title: "Cost-Efficient Retrieval-Augmented Generation using Adaptive Vector Caching",
    desc: "Build a two-tier RAG storage system with adaptive vector caching. Can you slash embedding storage and retrieval costs without compromising output performance?",
    image: vectorCaching,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Data Engineering"]
  },
  {
    num: "06",
    title: "AI-Based Intelligent Doctor Appointment and Triage System",
    desc: "Create a smart symptom-triage conversational agent. Classify patient symptoms and automatically schedule matching doctor slots to revolutionize access to care.",
    image: doctorTriage,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Healthcare Tech"]
  },
  {
    num: "07",
    title: "Extending a Geometric Learning Framework to Arbitrary Shapes",
    desc: "Break down the mathematical barriers of geometric deep learning. Extend rigid structures to irregular and arbitrary shapes to power advanced graphics and robotics.",
    image: geometricLearning,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Computer Vision"]
  },
  {
    num: "08",
    title: "Geo Snap",
    desc: "Train AI models on multispectral Sentinel-2 satellite data to classify land usage. Exploding land structure variances? Decode them using EuroSAT imagery!",
    image: geoSnap,
    club: "Space Data Science Club",
    date: "9th June 2026",
    timeline: "9th June - 23rd June 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Artificial Intelligence & ML", "Aerospace & Space Tech"]
  },
  {
    num: "09",
    title: "GlyphCraft",
    desc: "Design, draw, and digitize your own custom typeface from scratch. Refine Bezier curves, establish baseline contrasts, and export a ready-to-use vector font!",
    image: glyphcraft,
    club: "Design Club",
    date: "9th June 2026",
    timeline: "9th June - 31st July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["UI/UX & Brand Design"]
  },
  {
    num: "10",
    title: "Kigumi Design",
    desc: "Engineer a compact, folding furniture system in SolidWorks. Can you model seamless continuous folding linkages that pack perfectly into a suitcase under 15kg?",
    image: kigumiDesign,
    club: "Design Club",
    date: "9th June 2026",
    timeline: "9th June - 31st July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Mechanical Engineering", "Product Design & CAD"]
  },
  {
    num: "11",
    title: "Iron Grip",
    desc: "Design a durable passive arm for robotic tool manipulation. Balance strict geometric constraints with ease of manufacturing, reliability, and speed.",
    image: ironGrip,
    club: "Robotics Club",
    date: "9th June 2026",
    timeline: "9th June - 14th July 2026",
    prizes: "Merch + 3x Robu/Robocraze Gift Card (1000 INR)",
    domains: ["Robotics & Automation", "Product Design & CAD"]
  },
  {
    num: "12",
    title: "MaterialSnap",
    desc: "Reverse-engineer materials and manufacturing processes for a pool of 25 objects. Analyze material selections, map processes in a comparative table, and detail the technical reasoning for each.",
    image: materialSnap,
    club: "Ingene (Motorsports) Club",
    date: "16th June 2026",
    timeline: "16th June - 7th July 2026",
    prizes: "Merch + Goodies for Top 3 (Juniors & Seniors)",
    domains: ["Mechanical Engineering", "Materials Science"]
  },
  {
    num: "13",
    title: "Orbitron",
    desc: "Compute a multi-body celestial simulator governed by physical laws. Can your gravity simulation model stable orbits, flybys, and chaotic planetary systems?",
    image: orbitron,
    club: "Astronomy Club",
    date: "16th June 2026",
    timeline: "16th June - 16th July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Aerospace & Space Tech", "Astrophysics & Simulation"]
  },
  {
    num: "14",
    title: "Cyber Leg",
    desc: "Design and tune a robust Height Control System for a 2-DOF robotic leg in MATLAB. Can you filter high-frequency sensor noise while keeping energy consumption low?",
    image: cyberLeg,
    club: "Robotics Club",
    date: "16th June 2026",
    timeline: "16th June - 21st July 2026",
    prizes: "Merch + 3x Robu/Robocraze Gift Card (1000 INR)",
    domains: ["Robotics & Automation", "Control Systems"]
  },
  {
    num: "15",
    title: "eBPF Sentinel",
    desc: "Build a custom, kernel-level firewall using eBPF. Create configurable syscall blocklists and packet-filters to secure dynamic networks with ultra-low latency.",
    image: ebpfSentinel,
    club: "Coding Club",
    date: "23rd June 2026",
    timeline: "23rd June - 17th July 2026",
    prizes: "Merch + Prize Money (1800 + 1200)",
    domains: ["Software Engineering", "Cybersecurity"]
  },
  {
    num: "16",
    title: "Art of Compounding",
    desc: "Bridge the gap between investing and trading strategies. Implement one portfolio allocation and one active trading strategy, and compare their performance.",
    image: compounding,
    club: "Finance Club",
    date: "30th June 2026",
    timeline: "30th June - 10th July 2026",
    prizes: "Merch + Prize Money (2000 + 1000 + 500)",
    domains: ["Quantitative Finance"]
  },
  {
    num: "17",
    title: "RealmShift Odyssey",
    desc: "Design a rule-shifting game that changes mechanics across three unique realms. Focus on creative level dynamics and deliver a polished, playable build!",
    image: realmshift,
    club: "Coding Club",
    date: "7th July 2026",
    timeline: "7th July - 17th July 2026",
    prizes: "Merch + Prize Money (1800 + 1200)",
    domains: ["Software Engineering", "Game Development"]
  },
  {
    num: "18",
    title: "PowerCube",
    desc: "Architect a basic CubeSat Electrical Power System with SolidWorks integration. Model active solar charging cycles and load-balancing in extreme conditions.",
    image: powercube,
    club: "Space Data Science Club",
    date: "7th July 2026",
    timeline: "7th July - 21st July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Aerospace & Space Tech", "Embedded Systems"]
  }
];
const team = [
  { club: "Coding Club", members: ["Amogh R", "Eshwar R", "Ahamed Noor"] },
  { club: "AI Club", members: ["Nihar Sagar G"] },
  {
    club: "Space Data Science Club",
    members: [
      "Nishant Mehta",
      "Dev Kaushal",
      "Richa Rajashekhar",
      "Surya Prakash S",
      "Shreya Bhat",
      "Anushaa B",
      "Affan Pathan",
      "Ajitesh Manan Jha",
      "Balamurali V B",
      "Manushree I R",
      "Maitreyee Kumbhojkar",
      "Aniruddh Pandav"
    ]
  },
  { club: "Robotics Club", members: ["Vidit Parikh"] },
  { club: "Motorsports Club", members: ["Soumya Shaw"] },
  { club: "Design Club", members: ["Saipushkar Nagaraj"] },
  { club: "Finance Club", members: ["Yash Sanjeev Halbhavi"] },
  { club: "Electronics Club", members: ["Raghav S", "Meera K"] },
  { club: "Astronomy Club", members: ["Aryan P", "Tanvi L"] }
];
function Events() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [clubFilter, setClubFilter] = useState("All");
  const clubs = ["All", ...Array.from(new Set(events.map((e) => e.club)))];
  const getShortClubName = (club) => {
    if (club === "All") return "All Clubs";
    if (club === "Coding Club") return "Coding";
    if (club === "Electronics Club") return "Electronics";
    if (club === "Robotics Club") return "Robotics";
    if (club === "AI Club") return "AI";
    if (club === "Space Data Science Club") return "Space DS";
    if (club === "Design Club") return "Design";
    if (club === "Ingene (Motorsports) Club") return "Motorsports";
    if (club === "Astronomy Club") return "Astronomy";
    if (club === "Finance Club") return "Finance";
    return club;
  };
  const isEventActive = (dateStr) => {
    return false;
  };
  const filteredEvents = events.filter((e) => {
    const matchesStatus = statusFilter === "All" || statusFilter === "Active" && isEventActive(e.date) || statusFilter === "Upcoming" && !isEventActive(e.date);
    const matchesClub = clubFilter === "All" || e.club === clubFilter;
    return matchesStatus && matchesClub;
  });
  const activeCount = events.filter((e) => isEventActive(e.date)).length;
  return /* @__PURE__ */ jsx("section", { id: "events", className: "border-b-[3px] border-ink py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl uppercase md:text-6xl", children: "Problem Statements" }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 border-[3px] border-ink bg-card px-4 py-2.5 shadow-brutal-sm self-start sm:self-auto", children: /* @__PURE__ */ jsxs("span", { className: "font-display text-xs md:text-sm uppercase tracking-wide", children: [
        "Active: ",
        activeCount
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-10 border-[3px] border-ink bg-card p-5 shadow-brutal flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-xs uppercase tracking-wider text-foreground/70 mr-1 font-bold", children: "Status:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["All", "Active", "Upcoming"].map((status) => {
          const isActive = statusFilter === status;
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setStatusFilter(status),
              className: `border-[2px] border-ink px-3 py-1.5 font-display text-[10px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] cursor-pointer ${isActive ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-[3.5px_3.5px_0_0_var(--ink)]" : "bg-background hover:bg-peach hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"}`,
              children: status === "All" ? "All Drops" : status === "Active" ? "Active Drops" : "Upcoming Drops"
            },
            status
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start gap-3 border-t-2 border-dashed border-ink/10 pt-4", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-xs uppercase tracking-wider text-foreground/70 mr-1 font-bold mt-1.5", children: "Clubs:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: clubs.map((club) => {
          const isActive = clubFilter === club;
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setClubFilter(club),
              className: `border-[2px] border-ink px-3 py-1.5 font-display text-[10px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] cursor-pointer ${isActive ? "bg-accent text-accent-foreground -translate-x-[1px] -translate-y-[1px] shadow-[3.5px_3.5px_0_0_var(--ink)]" : "bg-background hover:bg-peach hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"}`,
              children: getShortClubName(club)
            },
            club
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2", children: filteredEvents.map((e, i) => /* @__PURE__ */ jsx(
      "div",
      {
        id: `ps-${e.num}`,
        className: "transition-all duration-500 ease-out scroll-mt-24",
        children: /* @__PURE__ */ jsxs(BrutalCard, { className: "flex flex-col overflow-hidden h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative border-b-[3px] border-ink bg-peach overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: e.image,
                alt: e.title,
                width: 1024,
                height: 768,
                loading: "lazy",
                className: "aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "absolute left-4 top-4 border-[3px] border-ink bg-card px-3 py-1 font-display text-2xl shadow-brutal-sm", children: e.num }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `absolute right-4 top-4 border-[3px] border-ink px-2 py-1 font-display text-[10px] uppercase shadow-brutal-sm ${i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-accent"}`,
                children: e.date
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-xl leading-snug md:text-2xl", children: e.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-foreground/80", children: e.desc }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 border-t border-dashed border-ink/20 pt-3 flex flex-wrap gap-1.5", children: e.domains.map((dom) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "inline-block border-2 border-ink bg-accent/20 px-2 py-0.5 font-display text-[9px] font-bold uppercase shadow-brutal-xs",
                children: dom
              },
              dom
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between border-t-[2px] border-ink pt-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wide text-foreground/60", children: e.club }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2.5", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-[#25D366] text-white shadow-brutal-sm transition-transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0",
                    title: "Join WhatsApp Group",
                    children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "h-5 w-5 fill-current", children: /* @__PURE__ */ jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" }) })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#",
                    className: "grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-accent text-ink shadow-brutal-sm transition-transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0",
                    title: "View Guidelines PDF",
                    children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" })
                  }
                )
              ] })
            ] })
          ] })
        ] })
      },
      e.num
    )) }),
    filteredEvents.length === 0 && /* @__PURE__ */ jsx("div", { className: "border-[3px] border-ink bg-card p-12 text-center shadow-brutal mt-8", children: /* @__PURE__ */ jsx("p", { className: "font-display text-xl uppercase text-foreground/60", children: "No problem statements found matching these filters." }) })
  ] }) });
}
const staticStars = [
  { size: 1.5, x: 25, y: 35 },
  { size: 2.5, x: 75, y: 20 },
  { size: 2, x: 45, y: 75 },
  { size: 1.5, x: 85, y: 65 }
];
const getStarsForCard = (cardIndex) => {
  return Array.from({ length: 15 }).map((_, i) => {
    const seed = cardIndex * 15 + i;
    const angle = seed * 73 % 360;
    const duration = 6 + seed * 11 % 15;
    const delay = 1 + seed * 3 % 10;
    const alpha = (25 + seed * 7 % 35) / 100;
    const size = 1.2 + seed * 2 % 2.5;
    const distance = 25 + seed * 13 % 95;
    return { angle, duration, delay, alpha, size, distance };
  });
};
function Timeline() {
  const [selectedDate, setSelectedDate] = useState("All");
  const [modalEvent, setModalEvent] = useState(null);
  const containerRef = useRef(null);
  const handleTimelineCardClick = (e) => {
    const targetId = `ps-${e.num}`;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-[6px]", "ring-primary", "scale-[1.03]", "z-30", "relative");
      setTimeout(() => {
        element.classList.remove("ring-[6px]", "ring-primary", "scale-[1.03]", "z-30", "relative");
      }, 2e3);
    }
  };
  const filterDates = [
    "All",
    "2nd June",
    "9th June",
    "16th June",
    "23rd June",
    "30th June",
    "7th July"
  ];
  const filteredEvents = events.filter((e) => {
    if (selectedDate === "All") return true;
    return e.date.startsWith(selectedDate);
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        // Trigger as soon as 5% of the card is visible
        rootMargin: "0px 0px -40px 0px"
        // Trigger slightly before it enters the viewport fully
      }
    );
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll(".timeline-item");
      items.forEach((item) => observer.observe(item));
    }
    return () => observer.disconnect();
  }, [filteredEvents]);
  return /* @__PURE__ */ jsxs("section", { id: "timeline", className: "border-b-[3px] border-ink bg-peach-deep/20 py-20 relative overflow-hidden conic-pattern", children: [
    /* @__PURE__ */ jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "mx-auto max-w-7xl px-4 md:px-8 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-display text-xs uppercase tracking-widest text-primary", children: "Two Months · Eighteen Challenges" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl uppercase md:text-6xl", children: "Timeline" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("span", { className: "border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm", children: [
            "Active Drops: ",
            filteredEvents.length
          ] }),
          /* @__PURE__ */ jsx("span", { className: "border-[2px] border-ink bg-card px-3 py-1 font-display text-xs uppercase shadow-brutal-sm", children: "Total PS: 18" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-12 border-[3px] border-ink bg-card p-4 shadow-brutal flex flex-wrap gap-2.5 items-center justify-start", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-xs uppercase tracking-wider text-foreground/70 mr-2 font-bold", children: "Drop Dates:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: filterDates.map((date) => {
          const isActive = selectedDate === date;
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setSelectedDate(date);
              },
              className: `border-[2px] border-ink px-3 py-1.5 font-display text-xs uppercase tracking-wide transition-all shadow-brutal-sm cursor-pointer ${isActive ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-brutal" : "bg-background hover:bg-peach hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-0 active:translate-y-0"}`,
              children: date
            },
            date
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative ml-4 md:ml-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-3 bottom-3 w-[4px] bg-ink/10" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-0 top-3 bottom-3 w-[4px] bg-primary timeline-line-draw origin-top"
          },
          selectedDate
        ),
        /* @__PURE__ */ jsx("ol", { className: "space-y-6", children: filteredEvents.map((e, index) => {
          return /* @__PURE__ */ jsxs(
            "li",
            {
              className: "relative pl-8 md:pl-12 timeline-item",
              style: { transitionDelay: `${index * 40}ms` },
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleTimelineCardClick(e),
                    className: `absolute -left-[16px] top-1.5 grid h-8 w-8 place-items-center border-[3px] border-ink font-display text-xs shadow-brutal-sm cursor-pointer transition-all duration-300 active:scale-95 z-20 ${index % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-background text-ink"}`,
                    title: "View details",
                    children: e.num
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onClick: () => handleTimelineCardClick(e),
                    className: "galaxy-card p-4 shadow-brutal-sm cursor-pointer transition-all duration-300",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "card-spark", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsx("div", { className: "card-backdrop", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsx("div", { className: "card-galaxy__static", "aria-hidden": "true", children: staticStars.map((s, idx) => /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "card-star card-star--static",
                          style: {
                            "--size": s.size,
                            "--x": `${s.x}%`,
                            "--y": `${s.y}%`,
                            "--alpha": 0.22
                          }
                        },
                        idx
                      )) }),
                      /* @__PURE__ */ jsx("div", { className: "card-galaxy", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "card-galaxy__ring", children: getStarsForCard(index).map((s, idx) => /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "card-star",
                          style: {
                            "--angle": `${s.angle}deg`,
                            "--duration": s.duration,
                            "--delay": s.delay,
                            "--alpha": s.alpha,
                            "--size": s.size,
                            "--distance": s.distance
                          }
                        },
                        idx
                      )) }) }),
                      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
                          /* @__PURE__ */ jsx("h3", { className: "font-display text-base md:text-lg", children: e.title }),
                          /* @__PURE__ */ jsx("span", { className: "border-[2px] border-ink bg-background px-2.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider shadow-brutal-sm", children: e.date })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "mt-1 text-[10px] font-bold uppercase tracking-wide text-foreground/60", children: e.club })
                      ] })
                    ]
                  }
                )
              ]
            },
            e.num
          );
        }) })
      ] }),
      filteredEvents.length === 0 && /* @__PURE__ */ jsx("div", { className: "border-[3px] border-ink bg-card p-10 text-center shadow-brutal animate-slide-up-fade", children: /* @__PURE__ */ jsx("p", { className: "font-display text-xl uppercase text-foreground/60", children: "No releases scheduled for this date." }) })
    ] }),
    modalEvent && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-ink/35 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all duration-300",
        onClick: () => setModalEvent(null),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "border-[4px] border-ink bg-card p-6 md:p-8 max-w-lg w-full shadow-brutal relative animate-modal-pop",
            onClick: (s) => s.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setModalEvent(null),
                  className: "absolute -right-3 -top-3 h-9 w-9 border-[3px] border-ink bg-primary text-primary-foreground font-display text-lg shadow-brutal-sm cursor-pointer flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-0 active:translate-y-0 transition-all",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm inline-block", children: modalEvent.date }),
                /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl md:text-3xl leading-tight", children: modalEvent.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-xs font-bold uppercase tracking-wide text-primary", children: modalEvent.club }),
                /* @__PURE__ */ jsx("div", { className: "mt-5 border-t-2 border-dashed border-ink/20 pt-4", children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-foreground/90 font-medium", children: modalEvent.desc }) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 border-t-2 border-ink pt-5", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2.5 text-xs", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-display uppercase border-2 border-ink bg-background px-2 py-0.5 font-bold shadow-brutal-sm", children: "Timeline" }),
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] font-bold text-foreground/90", children: modalEvent.timeline })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2.5 text-xs", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-display uppercase border-2 border-ink bg-accent px-2 py-0.5 font-bold shadow-brutal-sm", children: "Rewards" }),
                    /* @__PURE__ */ jsx("span", { className: "font-mono text-[11px] font-bold text-primary", children: modalEvent.prizes })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-start gap-2.5 text-xs", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-display uppercase border-2 border-ink bg-card px-2 py-0.5 font-bold shadow-brutal-sm", children: "Domains" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: modalEvent.domains.map((dom) => /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] font-bold text-foreground/80 bg-accent/20 border border-ink/20 px-2 py-0.5", children: dom }, dom)) })
                  ] })
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}
const tilePalette = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-card text-ink border-ink",
  "bg-peach-deep text-ink border-ink"
];
const getClubEmail = (club) => {
  if (club === "Coding Club") return "codingclub@iitdh.ac.in";
  if (club === "AI Club") return "aiclub@iitdh.ac.in";
  if (club === "Space Data Science Club") return "space.ds.club@iitdh.ac.in";
  if (club === "Robotics Club") return "robotics@iitdh.ac.in";
  if (club === "Motorsports Club" || club === "InGene Motorsport") return "ingene@iitdh.ac.in";
  if (club === "Design Club" || club === "Abhikalpa Design Club") return "abhikalpa.dc@iitdh.ac.in";
  if (club === "Finance Club") return "finance.club@iitdh.ac.in";
  if (club === "Electronics Club") return "electronicsclub@iitdh.ac.in";
  if (club === "Astronomy Club") return "astronomyclub@iitdh.ac.in";
  return "gstech@iitdh.ac.in";
};
const getClubInitials = (club) => {
  if (club === "Coding Club") return "CC";
  if (club === "AI Club") return "AI";
  if (club === "Space Data Science Club") return "SDS";
  if (club === "Robotics Club") return "RC";
  if (club === "Motorsports Club" || club === "InGene Motorsport" || club.includes("Motorsport")) return "MC";
  if (club === "Design Club" || club === "Abhikalpa Design Club" || club.includes("Design")) return "DC";
  if (club === "Finance Club") return "FC";
  if (club === "Electronics Club") return "EC";
  if (club === "Astronomy Club") return "AC";
  return "CO";
};
const getClubTitle = (club) => {
  if (club === "Coding Club") return "Coding Coordinator";
  if (club === "AI Club") return "AI Coordinator";
  if (club === "Space Data Science Club") return "Space DS Coordinator";
  if (club === "Robotics Club") return "Robotics Coordinator";
  if (club === "Motorsports Club" || club === "InGene Motorsport" || club.includes("Motorsport")) return "Motorsports Coordinator";
  if (club === "Design Club" || club === "Abhikalpa Design Club" || club.includes("Design")) return "Design Coordinator";
  if (club === "Finance Club") return "Finance Coordinator";
  if (club === "Electronics Club") return "Electronics Coordinator";
  if (club === "Astronomy Club") return "Astronomy Coordinator";
  return "Club Coordinator";
};
function Team() {
  return /* @__PURE__ */ jsx("section", { id: "team", className: "border-b-[3px] border-ink py-20 bg-background conic-pattern", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("span", { className: "font-display text-xs uppercase tracking-widest text-primary", children: "The Crew" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 font-display text-4xl uppercase md:text-6xl", children: "Meet the Team" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-14", children: team.map((group, i) => {
      const email = getClubEmail(group.club);
      const initials = getClubInitials(group.club);
      const title = getClubTitle(group.club);
      return /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "border-[3px] border-ink bg-primary px-3 py-1 font-display text-xs uppercase text-primary-foreground shadow-brutal-sm", children: group.club }),
          /* @__PURE__ */ jsx("span", { className: "h-[3px] flex-1 bg-ink" }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xs uppercase text-foreground/60", children: "1 Coordinator" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "border-[3px] border-ink bg-card shadow-brutal-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px]",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `grid aspect-square place-items-center border-b-[3px] border-ink ${tilePalette[i % tilePalette.length]}`,
                  children: /* @__PURE__ */ jsx("span", { className: "font-display text-3xl", children: initials })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-3", children: [
                /* @__PURE__ */ jsx("p", { className: "font-display text-sm leading-tight", children: title }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `mailto:${email}`,
                    className: "mt-1 inline-block text-[11px] uppercase tracking-wide text-foreground/60 hover:text-primary",
                    children: "✉ Email Coordinator"
                  }
                )
              ] })
            ]
          }
        ) })
      ] }, group.club);
    }) })
  ] }) });
}
function Footer() {
  const contacts = [
    { name: "GenSec Technical Affairs", email: "gstech@iitdh.ac.in" },
    { name: "Coding Club", email: "codingclub@iitdh.ac.in" },
    { name: "AI Club", email: "aiclub@iitdh.ac.in" },
    { name: "Space Data Science Club", email: "space.ds.club@iitdh.ac.in" },
    { name: "Robotics Club", email: "robotics@iitdh.ac.in" },
    { name: "Electronics Club", email: "electronicsclub@iitdh.ac.in" },
    { name: "InGene Motorsport", email: "ingene@iitdh.ac.in" },
    { name: "Abhikalpa Design Club", email: "abhikalpa.dc@iitdh.ac.in" },
    { name: "Astronomy Club", email: "astronomyclub@iitdh.ac.in" },
    { name: "Finance Club", email: "finance.club@iitdh.ac.in" }
  ];
  return /* @__PURE__ */ jsxs("footer", { id: "contact", className: "bg-ink text-card", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl uppercase md:text-5xl", children: [
            "Let's Build ",
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Summer." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-card/70 max-w-sm leading-relaxed", children: "Have questions or want to collaborate? Reach out to the respective clubs or the technical secretariat." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-xs uppercase tracking-widest text-accent mb-3", children: "Follow SoI" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: ["IG", "TW", "GH", "IN"].map((s) => /* @__PURE__ */ jsx(
            "a",
            {
              href: "#",
              className: "grid h-10 w-10 place-items-center border-[3px] border-card bg-primary font-display text-xs text-primary-foreground hover:bg-accent hover:text-ink transition-colors shadow-brutal-sm",
              children: s
            },
            s
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-xs uppercase tracking-widest text-accent mb-6", children: "Technical Council" }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-x-8 gap-y-6 sm:grid-cols-2", children: contacts.map((c) => /* @__PURE__ */ jsxs("div", { className: "border-l-[3px] border-accent pl-4 py-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-sm tracking-wide text-card", children: c.name }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `mailto:${c.email}`,
              className: "text-xs text-card/60 hover:text-accent font-mono block mt-1 transition-colors",
              children: c.email
            }
          )
        ] }, c.email)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "border-t-[3px] border-card/30 px-4 py-5 text-center text-xs uppercase tracking-widest text-card/60 md:px-8", children: "© 2026 Summer of Innovation · Built with conviction" })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground conic-pattern", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Overview, {}),
      /* @__PURE__ */ jsx(Events, {}),
      /* @__PURE__ */ jsx(Timeline, {}),
      /* @__PURE__ */ jsx(Team, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
