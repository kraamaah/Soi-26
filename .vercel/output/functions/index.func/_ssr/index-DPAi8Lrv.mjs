import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { X, M as Menu, F as FileText, T as Trophy, S as Sparkles, R as RefreshCw, P as Play } from "../_libs/lucide-react.mjs";
function Nav() {
  const [activeSection, setActiveSection] = reactExports.useState("home");
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("soi_theme") || "light";
    }
    return "light";
  });
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("soi_theme", theme);
  }, [theme]);
  const handleToggleTheme = (e) => {
    if (typeof window !== "undefined") {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const particleCount = 18;
      const colors = ["var(--primary)", "var(--accent)", "#2747FF", "#FF6A3D", "#ff58b6"];
      for (let i = 0; i < particleCount; i++) {
        const el = document.createElement("div");
        el.className = "cosmic-particle";
        const angle = i * 2 * Math.PI / particleCount + (Math.random() - 0.5) * 0.35;
        const distance = 90 + Math.random() * 110;
        const tx = `${Math.cos(angle) * distance}px`;
        const ty = `${Math.sin(angle) * distance}px`;
        const rot = `${(Math.random() - 0.5) * 720}deg`;
        el.style.setProperty("--tx", tx);
        el.style.setProperty("--ty", ty);
        el.style.setProperty("--rot", rot);
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.borderRadius = Math.random() > 0.5 ? "50%" : "0px";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 600);
      }
      const overlay = document.createElement("div");
      overlay.className = "cosmic-grid-overlay";
      document.body.appendChild(overlay);
      setTimeout(() => overlay.remove(), 450);
    }
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      window.dispatchEvent(new CustomEvent("soi-achievement", { detail: "night-owl" }));
    }
  };
  const links = [
    { href: "#home", label: "Home" },
    { href: "#events", label: "Problem Statements" },
    { href: "#timeline", label: "Timeline" },
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b-[3px] border-ink bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] font-bold text-accent animate-pulse uppercase tracking-wider select-none shrink-0 border-[1.5px] border-ink bg-card px-1.5 py-0.5 shadow-brutal-sm", children: "CLICK HERE ➜" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleToggleTheme,
            className: "grid h-9 w-9 place-items-center border-[3px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)] cursor-pointer select-none hover:scale-[1.05] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--ink)] transition-all shrink-0",
            title: `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm select-none", children: "SOI" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#home", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-display text-sm uppercase tracking-tight md:inline", children: "Summer of Innovation" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1.5 md:gap-3", children: links.map((l) => {
        const isActive = activeSection === l.href.substring(1);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: `border-[2px] border-ink px-3 py-1.5 font-display text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] ${isActive ? "bg-accent text-accent-foreground -translate-x-[1.5px] -translate-y-[1.5px] shadow-[3.5px_3.5px_0_0_var(--ink)]" : "bg-card text-ink hover:bg-peach hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"}`,
            children: l.label
          },
          l.href
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: "grid h-11 w-11 place-items-center border-[3px] border-ink bg-card text-ink shadow-[2.5px_2.5px_0_0_var(--ink)] md:hidden cursor-pointer hover:bg-peach active:translate-x-0 active:translate-y-0 select-none",
          "aria-label": "Toggle navigation menu",
          children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }) }),
    isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 bg-ink/40 backdrop-blur-xs md:hidden",
        onClick: () => setIsOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `fixed inset-y-0 right-0 z-50 w-4/5 max-w-sm bg-peach border-l-[3px] border-ink shadow-[-6px_0_0_0_var(--ink)] p-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${isOpen ? "translate-x-0" : "translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b-[3px] border-ink pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center border-[3px] border-ink bg-primary text-primary-foreground shadow-[2px_2px_0_0_var(--ink)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm", children: "SOI" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm uppercase tracking-tight", children: "Menu" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setIsOpen(false),
                  className: "grid h-10 w-10 place-items-center border-[3px] border-ink bg-card text-ink shadow-[2px_2px_0_0_var(--ink)] cursor-pointer hover:bg-peach active:translate-x-0 active:translate-y-0",
                  "aria-label": "Close menu",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-4 mt-8", children: links.map((l) => {
              const isActive = activeSection === l.href.substring(1);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: l.href,
                  onClick: () => setIsOpen(false),
                  className: `border-[3px] border-ink px-4 py-3.5 font-display text-sm uppercase tracking-wide transition-all shadow-[4px_4px_0_0_var(--ink)] text-left flex items-center justify-between ${isActive ? "bg-accent text-accent-foreground -translate-x-[2px] -translate-y-[2px] shadow-[6px_6px_0_0_var(--ink)]" : "bg-card text-ink hover:bg-peach active:translate-x-0 active:translate-y-0"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-bold", children: "→" })
                  ]
                },
                l.href
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t-[2px] border-dashed border-ink/20 pt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[9px] uppercase tracking-wider text-foreground/50", children: "Summer of Innovation '26" }) })
        ]
      }
    )
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function BrutalCard({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      className,
      fill: "currentColor",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" })
    }
  );
}
function SoiLogo({ className = "w-full h-auto" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 500 350",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `${className} select-none soi-logo-container`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "pattern",
            {
              id: "mountain-shading",
              width: "8",
              height: "8",
              patternTransform: "rotate(45 0 0)",
              patternUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("mask", { id: "wrench-clip-mask", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-40", y: "-95", width: "80", height: "150", fill: "white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M-10,-86 L10,-86 L12,-66 L-12,-66 Z", fill: "black" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "24", r: "7.5", fill: "black" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "soi-gear", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(0 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(30 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(60 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(90 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(120 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(150 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(180 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(210 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(240 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(270 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(300 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "241,69 244,53 256,53 259,69", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeLinejoin: "round", transform: "rotate(330 250 125)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "125", r: "56", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "125", r: "40", fill: "none", stroke: "var(--color-ink)", strokeWidth: "3.5", strokeDasharray: "6 5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "125", r: "24", fill: "var(--color-card)", stroke: "var(--color-ink)", strokeWidth: "3.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "125", r: "10", fill: "var(--color-ink)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "soi-mountain soi-mountain-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "30,210 140,110 230,210",
              fill: "var(--color-peach-deep)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "30,210 140,110 230,210",
              fill: "url(#mountain-shading)",
              stroke: "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "soi-mountain soi-mountain-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "270,210 370,120 470,210",
              fill: "var(--color-peach-deep)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "270,210 370,120 470,210",
              fill: "url(#mountain-shading)",
              stroke: "none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "soi-mountain soi-mountain-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "130,210 250,80 250,210",
              fill: "var(--color-card)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "250,80 370,210 250,210",
              fill: "var(--color-card)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "polygon",
            {
              points: "250,80 370,210 250,210",
              fill: "url(#mountain-shading)",
              stroke: "none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "250", y1: "80", x2: "250", y2: "210", stroke: "var(--color-ink)", strokeWidth: "3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "soi-tool-left", transform: "translate(152, 160) rotate(-22 0 40) scale(1.15)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-8", y: "0", width: "16", height: "40", rx: "3.5", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "-8", y1: "10", x2: "8", y2: "10", stroke: "var(--color-card)", strokeWidth: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "-8", y1: "20", x2: "8", y2: "20", stroke: "var(--color-card)", strokeWidth: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "-8", y1: "30", x2: "8", y2: "30", stroke: "var(--color-card)", strokeWidth: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M-28,-82 L20,-82 C24,-82 26,-79 26,-75 L26,-63 C26,-59 24,-56 20,-56 L-28,-56 Z",
              fill: "var(--color-primary)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M-28,-82 C-46,-80 -54,-65 -54,-60 C-40,-64 -32,-64 -28,-56 Z",
              fill: "var(--color-primary)",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "26", y: "-76", width: "8", height: "14", rx: "2", fill: "var(--color-accent)", stroke: "var(--color-ink)", strokeWidth: "3" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "soi-tool-right", transform: "translate(340, 160) rotate(22 0 40) scale(1.15)", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("g", { mask: "url(#wrench-clip-mask)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M -10,-76 L -11,-62 L 11,-62 L 10,-76 L 16,-74 A 20,20 0 0,1 8,-43.67 L 8,10 A 16,16 0 1,1 -8,10 L -8,-43.67 A 20,20 0 0,1 -16,-74 Z",
              fill: "var(--color-primary)"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "-3.5", y: "-42", width: "7", height: "50", rx: "2", fill: "var(--color-ink)", opacity: "0.22" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "M -10,-76 L -11,-62 L 11,-62 L 10,-76 L 16,-74 A 20,20 0 0,1 8,-43.67 L 8,10 A 16,16 0 1,1 -8,10 L -8,-43.67 A 20,20 0 0,1 -16,-74 Z",
              fill: "none",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "0", cy: "24", r: "7.5", fill: "none", stroke: "var(--color-ink)", strokeWidth: "3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "28", y1: "190", x2: "472", y2: "190", stroke: "var(--color-ink)", strokeWidth: "4.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              d: "\r\n            M35,190 l8,-12 M60,190 l8,-12 M85,190 l8,-12 M110,190 l8,-12\r\n            M135,190 l8,-12 M160,190 l8,-12 M185,190 l8,-12 M210,190 l8,-12 M235,190 l8,-12\r\n            M260,190 l8,-12 M285,190 l8,-12 M310,190 l8,-12 M335,190 l8,-12 M360,190 l8,-12\r\n            M385,190 l8,-12 M410,190 l8,-12 M435,190 l8,-12 M460,190 l8,-12\r\n          ",
              stroke: "var(--color-ink)",
              strokeWidth: "3.5",
              strokeLinecap: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "26", y: "196", width: "460", height: "150", fill: "var(--color-ink)", rx: "6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "117", y1: "198", x2: "117", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "206", y1: "198", x2: "206", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "295", y1: "198", x2: "295", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "384", y1: "198", x2: "384", y2: "332", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "28", y1: "265", x2: "472", y2: "265", stroke: "var(--color-ink)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.12" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "28", y1: "199.5", x2: "472", y2: "199.5", stroke: "var(--color-accent)", strokeWidth: "4.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "36", y: "217", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "SYS_STATUS // ACTIVE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "376", y: "217", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "EDITION_07 // 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "36", y: "313", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "LATENCY // 6.7ms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "386", y: "313", fontFamily: "Space Grotesk, system-ui, sans-serif", fontSize: "7.5", fontWeight: "900", fill: "var(--color-ink)", letterSpacing: "0.05em", opacity: "0.85", children: "FRQ // 4.20Ghz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { x: "28", y: "212", width: "444", height: "106", viewBox: "0 0 444 106", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { className: "soi-oscilloscope-wave-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { className: "soi-oscilloscope-wave-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "265", r: "14", fill: "none", stroke: "var(--color-accent)", strokeWidth: "1.5", strokeDasharray: "3 3", opacity: "0.7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "250", cy: "265", r: "6", fill: "none", stroke: "var(--color-accent)", strokeWidth: "2.2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "250", y1: "250", x2: "250", y2: "280", stroke: "var(--color-accent)", strokeWidth: "1.5", opacity: "0.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "235", y1: "265", x2: "265", y2: "265", stroke: "var(--color-accent)", strokeWidth: "1.5", opacity: "0.8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "33", cy: "203", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "467", cy: "203", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "33", cy: "337", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "467", cy: "337", r: "1.8", fill: "var(--color-ink)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "360,190 395,190 295,340 260,340", fill: "white", fillOpacity: "0.22" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "400,190 415,190 315,340 300,340", fill: "white", fillOpacity: "0.22" })
        ] })
      ]
    }
  );
}
function EasterEggGame({ onClose }) {
  const [gameState, setGameState] = reactExports.useState("START");
  const [score, setScore] = reactExports.useState(0);
  const [highScore, setHighScore] = reactExports.useState(() => {
    const saved = localStorage.getItem("soi_arcade_highscore");
    return saved ? parseInt(saved, 10) : 0;
  });
  const canvasRef = reactExports.useRef(null);
  const gameLoopRef = reactExports.useRef(null);
  const playSound = (type) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
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
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);
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
    }
  };
  const player = reactExports.useRef({
    x: 50,
    y: 150,
    width: 32,
    height: 32,
    velocityY: 0,
    gravity: 0.6,
    jumpStrength: -11,
    isGrounded: false
  });
  const obstacles = reactExports.useRef([]);
  const obstacleTimer = reactExports.useRef(0);
  const gameSpeed = reactExports.useRef(5);
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
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
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
  reactExports.useEffect(() => {
    if (gameState !== "PLAYING") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let localScore = 0;
    const updatePhysics = () => {
      const p = player.current;
      p.velocityY += p.gravity;
      p.y += p.velocityY;
      const groundY = canvas.height - 40 - p.height;
      if (p.y >= groundY) {
        p.y = groundY;
        p.velocityY = 0;
        p.isGrounded = true;
      }
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
          passed: false
        });
      }
      const mobileMode = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);
      const baseSpeed = mobileMode ? 6.5 : 3.8;
      const progressionFactor = mobileMode ? 0.08 : 0.045;
      gameSpeed.current = baseSpeed + localScore * progressionFactor;
      obstacles.current.forEach((obs) => {
        obs.x -= obs.speed;
        if (p.x < obs.x + obs.width && p.x + p.width > obs.x && p.y < obs.y + obs.height && p.y + p.height > obs.y) {
          playSound("crash");
          setGameState("GAME_OVER");
          if (localScore > highScore) {
            setHighScore(localScore);
            localStorage.setItem("soi_arcade_highscore", localScore.toString());
          }
        }
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
      ctx.fillStyle = "#FFE9D6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#1C1C24";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 40);
      ctx.lineTo(canvas.width, canvas.height - 40);
      ctx.stroke();
      ctx.strokeStyle = "rgba(28, 28, 36, 0.15)";
      ctx.lineWidth = 2;
      for (let i = 0; i < canvas.width; i += 24) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height - 40);
        ctx.lineTo(i - 10, canvas.height);
        ctx.stroke();
      }
      const p = player.current;
      ctx.fillStyle = "#FFFAF2";
      ctx.strokeStyle = "#1C1C24";
      ctx.lineWidth = 3.5;
      ctx.fillRect(p.x, p.y, p.width, p.height);
      ctx.strokeRect(p.x, p.y, p.width, p.height);
      ctx.fillStyle = "#2747FF";
      ctx.fillRect(p.x + 6, p.y + 6, 8, 8);
      ctx.fillStyle = "#FF6A3D";
      ctx.fillRect(p.x + 18, p.y + 6, 8, 8);
      ctx.fillStyle = "#1C1C24";
      ctx.fillRect(p.x + 6, p.y + 18, 20, 4);
      ctx.fillStyle = "#FF6A3D";
      obstacles.current.forEach((obs) => {
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/65 p-4 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg border-[4px] border-ink bg-card p-6 shadow-brutal-lg select-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center justify-between border-b-[3px] border-ink pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center border-[2px] border-ink bg-primary text-primary-foreground font-display text-sm shadow-brutal-sm", children: "🎮" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg uppercase tracking-wide text-ink", children: "SOI GEAR RUNNER" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-peach text-ink shadow-brutal-sm hover:-translate-x-[1px] hover:-translate-y-[1px] active:translate-x-0 active:translate-y-0 cursor-pointer",
          "aria-label": "Exit Game",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        onClick: handleJump,
        className: "relative overflow-hidden border-[3.5px] border-ink cursor-pointer select-none bg-peach-deep/10 shadow-inner",
        style: { height: "240px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "canvas",
            {
              ref: canvasRef,
              width: 460,
              height: 240,
              className: "h-full w-full block"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 flex gap-4 select-none pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[2px] border-ink bg-card px-2.5 py-1 font-display text-[10px] uppercase shadow-brutal-sm flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Score:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold text-primary", children: score })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[2px] border-ink bg-accent px-2.5 py-1 font-display text-[10px] uppercase shadow-brutal-sm text-accent-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-bold", children: highScore })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 border-[2px] border-ink bg-card px-2.5 py-1 font-display text-[9px] uppercase shadow-brutal-sm pointer-events-none opacity-60", children: "Space / Click to Jump" }),
          gameState === "GAME_OVER" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-ink/75 p-6 text-center animate-scale-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-2xl uppercase tracking-wider text-accent mb-1 drop-shadow-md", children: "GAME OVER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-primary-foreground/95 mb-4", children: "You crashed into a technical gear!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  startGame();
                },
                className: "inline-flex items-center gap-2 border-[2.5px] border-ink bg-primary text-primary-foreground px-4 py-2 font-display text-xs uppercase shadow-brutal cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-3.5 w-3.5" }),
                  "Try Again"
                ]
              }
            ) })
          ] }),
          gameState === "START" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center bg-ink/70 p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 grid h-12 w-12 place-items-center border-[3px] border-ink bg-accent text-accent-foreground font-display text-xl rotate-6 animate-pulse", children: "⚙️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl uppercase tracking-wider text-primary-foreground mb-1", children: "GEAR RUNNER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[11px] text-primary-foreground/80 mb-5 max-w-xs", children: "Jump over the incoming technical gears and wrenches. Build a high score!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  startGame();
                },
                className: "inline-flex items-center gap-2 border-[2.5px] border-ink bg-primary text-primary-foreground px-5 py-2.5 font-display text-xs uppercase shadow-brutal cursor-pointer hover:-translate-x-[1px] hover:-translate-y-[1px]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 fill-current" }),
                  "Play Game"
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-body text-[10px] text-foreground/60", children: [
      "A secret Technical Council Easter Egg.",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "font-bold underline text-primary hover:text-accent transition-colors",
          children: "Click Here"
        }
      )
    ] }) })
  ] }) });
}
function Hero() {
  const [clicks, setClicks] = reactExports.useState(0);
  const [showGame, setShowGame] = reactExports.useState(false);
  const clickTimeout = reactExports.useRef(null);
  const TARGET_DATE = (/* @__PURE__ */ new Date("2026-06-02T00:00:00")).getTime();
  const [timeLeft, setTimeLeft] = reactExports.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });
  reactExports.useEffect(() => {
    const calculateTime = () => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const difference = TARGET_DATE - now;
      if (difference <= 0) {
        setTimeLeft((prev) => ({ ...prev, isExpired: true }));
        return;
      }
      const days = Math.floor(difference / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      const minutes = Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60));
      const seconds = Math.floor(difference % (1e3 * 60) / 1e3);
      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1e3);
    return () => clearInterval(interval);
  }, []);
  const handleLogoClick = () => {
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    setClicks((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setShowGame(true);
        window.dispatchEvent(new CustomEvent("soi-achievement", { detail: "arcade-master" }));
        return 0;
      }
      return next;
    });
    clickTimeout.current = setTimeout(() => {
      setClicks(0);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative overflow-hidden border-b-[3px] border-ink conic-pattern", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block border-[3px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase tracking-widest shadow-brutal-sm", children: "Seventh Edition · 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-4xl sm:text-5xl leading-[0.95] md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight break-normal", children: [
          "Summer",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Innovation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md border-l-[4px] border-primary pl-4 text-lg text-foreground/80", children: "This Summer, build skills that outlast the season." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border-[3px] border-ink bg-card p-4 shadow-brutal-sm max-w-md relative overflow-hidden conic-pattern", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-repeat bg-center opacity-[0.03] pointer-events-none dots-grid", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between border-b-[2px] border-ink pb-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-bold text-accent uppercase tracking-wider animate-pulse flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-accent animate-ping inline-block" }),
              "BUILD SEASON LAUNCHING IN"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold text-foreground/50", children: "EDITION_07.SYS" })
          ] }),
          timeLeft.isExpired ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex items-center justify-center py-2 bg-primary text-primary-foreground border-[2px] border-ink font-display text-sm uppercase tracking-wider shadow-brutal-sm", children: "🚀 SOI 2026 IS NOW LIVE!" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid grid-cols-4 gap-2 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[2px] border-ink bg-background p-2.5 shadow-brutal-sm flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl md:text-3xl text-primary leading-none", children: String(timeLeft.days).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] font-bold text-foreground/60 uppercase tracking-widest mt-1", children: "Days" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[2px] border-ink bg-background p-2.5 shadow-brutal-sm flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl md:text-3xl text-accent leading-none", children: String(timeLeft.hours).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] font-bold text-foreground/60 uppercase tracking-widest mt-1", children: "Hours" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[2px] border-ink bg-background p-2.5 shadow-brutal-sm flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl md:text-3xl text-primary leading-none", children: String(timeLeft.minutes).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] font-bold text-foreground/60 uppercase tracking-widest mt-1", children: "Mins" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-[2px] border-ink bg-accent/5 p-2.5 shadow-brutal-sm flex flex-col items-center border-dashed border-accent", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl md:text-3xl text-accent leading-none animate-pulse", children: String(timeLeft.seconds).padStart(2, "0") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] font-bold text-accent uppercase tracking-widest mt-1", children: "Secs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#events",
              className: "inline-flex items-center border-[3px] border-ink bg-primary px-6 py-3 font-display text-sm uppercase tracking-wide text-primary-foreground shadow-brutal transition-transform hover:translate-x-[2px] hover:translate-y-[2px]",
              children: "Explore Problem Statements →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#timeline",
              className: "inline-flex items-center border-[3px] border-ink bg-card px-6 py-3 font-display text-sm uppercase tracking-wide shadow-brutal transition-transform hover:translate-x-[2px] hover:translate-y-[2px]",
              children: "See Timeline"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute -left-6 top-12 h-6 w-6 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute -right-2 top-2 h-4 w-4 text-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-2 md:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 -rotate-1 border-[3px] border-ink bg-accent/10 rounded-lg conic-pattern", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            onClick: handleLogoClick,
            className: "relative w-full border-[3px] border-ink bg-card p-6 shadow-brutal-lg flex items-center justify-center cursor-pointer select-none hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200",
            title: "Click me 5 times for a surprise!",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SoiLogo, { className: "w-full h-auto max-w-md md:max-w-lg" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute -right-4 -top-6 h-8 w-8 text-primary animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute -bottom-4 -left-4 h-6 w-6 text-accent animate-pulse" })
      ] })
    ] }),
    showGame && /* @__PURE__ */ jsxRuntimeExports.jsx(EasterEggGame, { onClose: () => setShowGame(false) })
  ] });
}
function Overview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "overview", className: "border-b-[3px] border-ink bg-peach-deep/40 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[3px] w-12 bg-ink" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl uppercase md:text-5xl", children: "Overview" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(BrutalCard, { className: "relative p-5 sm:p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute -top-4 -left-4 h-8 w-8 text-accent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkle, { className: "absolute -bottom-4 -right-4 h-8 w-8 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl", children: "Welcome to Summer of Innovation'26." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-sm md:text-base text-accent uppercase tracking-wider", children: "The Summer I turned techy ^_^" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg leading-relaxed text-foreground/85", children: "This is where theory meets raw creation. For the next two months, you’ll team up with fellow builders, designers, and thinkers to hack, build, and break things—virtually, of course (please leave your household appliances in one piece!). Our technical clubs have put together a series of real-world challenges designed to stretch your skills to the limit. Whether you obsess over clean code, mechanical design, pixels, or hardware, this is your sandbox. Grab your tools, find your team, and let's build something unforgettable." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 border-t-[2px] border-dashed border-ink pt-6 font-display text-xl text-primary", children: "Are you ready to rise to the challenge? Let the Summer of Innovation begin!" })
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
    domains: ["Software Engineering", "Algorithms & Optimization"],
    whatsapp: "https://chat.whatsapp.com/DDTS4N4AjNWLh0WEQVZT98"
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
    domains: ["VLSI", "Communication System"],
    whatsapp: "https://chat.whatsapp.com/Fa8iDnnLVZ4KlVdF1Wks7I"
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
    domains: ["Robotics & Automation", "Software Engineering"],
    whatsapp: "https://chat.whatsapp.com/KlvDNJIMBht93eIixIgmZn"
  },
  {
    num: "04",
    title: "PromptWise",
    desc: "Design an adaptive prompt selector that dynamically optimizes queries under strict token budgets. Let's maximize LLM response quality while slashing latency!",
    image: promptSelection,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Generative AI"],
    whatsapp: "https://chat.whatsapp.com/EvJOwKhBeiIAXoLEPK9gMI"
  },
  {
    num: "05",
    title: "CacheMind",
    desc: "Build a two-tier RAG storage system with adaptive vector caching. Can you slash embedding storage and retrieval costs without compromising output performance?",
    image: vectorCaching,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Data Engineering"],
    whatsapp: "https://chat.whatsapp.com/GC2B0ZsAkNILO8IwYgikKo"
  },
  {
    num: "06",
    title: "MediGuide",
    desc: "Create a smart symptom-triage conversational agent. Classify patient symptoms and automatically schedule matching doctor slots to revolutionize access to care.",
    image: doctorTriage,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Healthcare Tech"],
    whatsapp: "https://chat.whatsapp.com/JrbnscP1nRrIv85RI3ggRl"
  },
  {
    num: "07",
    title: "PolyLearn",
    desc: "Break down the mathematical barriers of geometric deep learning. Extend rigid structures to irregular and arbitrary shapes to power advanced graphics and robotics.",
    image: geometricLearning,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 31st July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Computer Vision"],
    whatsapp: "https://chat.whatsapp.com/JSe4AakDRwyA3x7i0lw5xp"
  },
  {
    num: "08",
    title: "Geo Snap",
    desc: "Train AI models on multispectral Sentinel-2 satellite data to classify land usage. Exploding land structure variances? Decode them using EuroSAT imagery!",
    image: geoSnap,
    club: "Space and Data Science Club",
    date: "9th June 2026",
    timeline: "9th June - 23rd June 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Artificial Intelligence & ML", "Aerospace & Space Tech"],
    whatsapp: "https://chat.whatsapp.com/DGWijtO3F6kC7PBNKye5EP"
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
    domains: ["UI/UX & Brand Design"],
    whatsapp: "https://chat.whatsapp.com/LYK6m8jTvPh9MjDeQ2pfLP"
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
    domains: ["Mechanical Engineering", "Product Design & CAD"],
    whatsapp: "https://chat.whatsapp.com/Ej7FvmSVH3P1eKKhK9Cy5I"
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
    domains: ["Robotics & Automation", "Product Design & CAD"],
    whatsapp: "https://chat.whatsapp.com/KdL3HuORynJBUAUuXbg8sj"
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
    domains: ["Mechanical Engineering", "Materials Science"],
    whatsapp: "https://chat.whatsapp.com/FuhhCXVVCdVDJbP2rHTAMm"
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
    domains: ["Aerospace & Space Tech", "Astrophysics & Simulation"],
    whatsapp: "https://chat.whatsapp.com/HVPEqAOPWLe7C7BYgjR5Cn"
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
    domains: ["Robotics & Automation", "Control Systems"],
    whatsapp: "https://chat.whatsapp.com/LU2uvZb2B3nArc45qtiT6J"
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
    domains: ["Software Engineering", "Cybersecurity"],
    whatsapp: "https://chat.whatsapp.com/FpMV8lXKL7K9QnJy10CWZw"
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
    domains: ["Quantitative Finance"],
    whatsapp: "https://chat.whatsapp.com/CT5ozR4rSRA2EaVqXODpV7"
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
    domains: ["Software Engineering", "Game Development"],
    whatsapp: "https://chat.whatsapp.com/E2KFXYMTDDlDi5onvyawmi"
  },
  {
    num: "18",
    title: "PowerCube",
    desc: "Architect a basic CubeSat Electrical Power System with SolidWorks integration. Model active solar charging cycles and load-balancing in extreme conditions.",
    image: powercube,
    club: "Space and Data Science Club",
    date: "7th July 2026",
    timeline: "7th July - 21st July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["Aerospace & Space Tech", "Embedded Systems"],
    whatsapp: "https://chat.whatsapp.com/LaY2b7B3hlh4tiAMY3j8uk"
  }
];
const team = [
  { club: "Coding Club", members: ["Nidhish Doshi", "Gourav Sherikar", "Aaditya Kumar", "Rushil Krishna Sai Narendula", "Kratgya Jain"] },
  { club: "AI Club", members: ["Nihar Sagar G", "Sreejita Chatterjee"] },
  {
    club: "Space and Data Science Club",
    members: ["Balamurali V B", "Kaustubh Mishra", "T Dhanunjaya Rao", "Priyanshu Nimbalkar"]
  },
  { club: "Robotics Club", members: ["Tushar Hegde", "Soumya Basuli", "Shrikant Sonawane"] },
  { club: "Motorsports Club", members: ["Nageswar Dusi", "Soumya Shaw"] },
  { club: "Design Club", members: ["Aashish M", "Rajat Gupta"] },
  { club: "Finance Club", members: ["Samarth M"] },
  { club: "Electronics Club", members: ["Manas Khatokar N", "Haridarshan R", "Emil Ben", "Harsh"] },
  { club: "Astronomy Club", members: ["Harsh Chauhan", "Rithika Athawade"] }
];
function Events() {
  const [statusFilter, setStatusFilter] = reactExports.useState("All");
  const [clubFilter, setClubFilter] = reactExports.useState("All");
  const clubs = ["All", ...Array.from(new Set(events.map((e) => e.club)))];
  const getShortClubName = (club) => {
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
  const isEventActive = (dateStr) => {
    return false;
  };
  const filteredEvents = events.filter((e) => {
    const matchesStatus = statusFilter === "All" || statusFilter === "Active" && isEventActive(e.date) || statusFilter === "Upcoming" && !isEventActive(e.date);
    const matchesClub = clubFilter === "All" || e.club === clubFilter;
    return matchesStatus && matchesClub;
  });
  const activeCount = events.filter((e) => isEventActive(e.date)).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "events", className: "border-b-[3px] border-ink py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl uppercase md:text-6xl", children: "Problem Statements" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 border-[3px] border-ink bg-card px-4 py-2.5 shadow-brutal-sm self-start sm:self-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xs md:text-sm uppercase tracking-wide", children: [
        "Active: ",
        activeCount
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 border-[3px] border-ink bg-card p-4 sm:p-5 shadow-brutal flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-center md:gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-wider text-foreground/70 font-bold shrink-0", children: "Status:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto pb-1.5 scrollbar-none snap-x gap-2.5 md:flex-wrap md:pb-0", children: ["All", "Active", "Upcoming"].map((status) => {
          const isActive = statusFilter === status;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setStatusFilter(status),
              className: `border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] cursor-pointer snap-start min-h-[40px] flex items-center justify-center shrink-0 ${isActive ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-[3.5px_3.5px_0_0_var(--ink)]" : "bg-background hover:bg-peach hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"}`,
              children: status === "All" ? "All Drops" : status === "Active" ? "Active Drops" : "Upcoming Drops"
            },
            status
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 md:flex-row md:items-start md:gap-3 border-t-2 border-dashed border-ink/10 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-wider text-foreground/70 font-bold shrink-0 md:mt-2.5", children: "Clubs:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto pb-1.5 scrollbar-none snap-x gap-2.5 md:flex-wrap md:pb-0", children: clubs.map((club) => {
          const isActive = clubFilter === club;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setClubFilter(club),
              className: `border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all shadow-[2px_2px_0_0_var(--ink)] cursor-pointer snap-start min-h-[40px] flex items-center justify-center shrink-0 ${isActive ? "bg-accent text-accent-foreground -translate-x-[1px] -translate-y-[1px] shadow-[3.5px_3.5px_0_0_var(--ink)]" : "bg-background hover:bg-peach hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-[3px_3px_0_0_var(--ink)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--ink)]"}`,
              children: getShortClubName(club)
            },
            club
          );
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-2", children: filteredEvents.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        id: `ps-${e.num}`,
        className: "transition-all duration-500 ease-out scroll-mt-24",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrutalCard, { className: "flex flex-col overflow-hidden h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-b-[3px] border-ink bg-peach overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 border-[3px] border-ink bg-card px-3 py-1 font-display text-2xl shadow-brutal-sm", children: e.num }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `absolute right-4 top-4 border-[3px] border-ink px-2 py-1 font-display text-[10px] uppercase shadow-brutal-sm ${i % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-accent"}`,
                children: e.date
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl leading-snug md:text-2xl", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm leading-relaxed text-foreground/80", children: e.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 border-t border-dashed border-ink/20 pt-3 flex flex-wrap gap-1.5", children: e.domains.map((dom) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block border-2 border-ink bg-accent/20 px-2 py-0.5 font-display text-[9px] font-bold uppercase shadow-brutal-xs",
                children: dom
              },
              dom
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t-[2px] border-ink pt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wide text-foreground/60", children: e.club }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: e.whatsapp || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-[#25D366] text-white shadow-brutal-sm transition-transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0",
                    title: "Join WhatsApp Group",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-5 w-5 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" }) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#",
                    className: "grid h-9 w-9 place-items-center border-[2.5px] border-ink bg-accent text-ink shadow-brutal-sm transition-transform hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-none active:translate-x-0 active:translate-y-0",
                    title: "View Guidelines PDF",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" })
                  }
                )
              ] })
            ] })
          ] })
        ] })
      },
      e.num
    )) }),
    filteredEvents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-[3px] border-ink bg-card p-12 text-center shadow-brutal mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl uppercase text-foreground/60", children: "No problem statements found matching these filters." }) })
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
  const [selectedDate, setSelectedDate] = reactExports.useState("All");
  const [modalEvent, setModalEvent] = reactExports.useState(null);
  const containerRef = reactExports.useRef(null);
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
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "timeline", className: "border-b-[3px] border-ink bg-peach-deep/20 py-20 relative overflow-hidden conic-pattern", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: containerRef, className: "mx-auto max-w-7xl px-4 md:px-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-widest text-primary", children: "Two Months · Eighteen Challenges" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl uppercase md:text-6xl", children: "Timeline" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm", children: "Active Drops: 0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-[2px] border-ink bg-card px-3 py-1 font-display text-xs uppercase shadow-brutal-sm", children: "Total PS: 18" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 border-[3px] border-ink bg-card p-4 shadow-brutal flex flex-col gap-2 md:flex-row md:items-center md:justify-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-wider text-foreground/70 font-bold shrink-0", children: "Drop Dates:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto pb-1.5 scrollbar-none snap-x gap-2.5 md:flex-wrap md:pb-0", children: filterDates.map((date) => {
          const isActive = selectedDate === date;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setSelectedDate(date);
              },
              className: `border-[2px] border-ink px-4 py-2 font-display text-[11px] md:text-xs uppercase tracking-wide transition-all shadow-brutal-sm cursor-pointer snap-start min-h-[40px] flex items-center justify-center shrink-0 ${isActive ? "bg-primary text-primary-foreground -translate-x-[1px] -translate-y-[1px] shadow-brutal" : "bg-background hover:bg-peach hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-0 active:translate-y-0"}`,
              children: date
            },
            date
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative ml-4 md:ml-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-3 bottom-3 w-[4px] bg-ink/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute left-0 top-3 bottom-3 w-[4px] bg-primary timeline-line-draw origin-top"
          },
          selectedDate
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-6", children: filteredEvents.map((e, index) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "relative pl-8 md:pl-12 timeline-item",
              style: { transitionDelay: `${index * 40}ms` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => handleTimelineCardClick(e),
                    className: `absolute -left-[16px] top-1.5 grid h-8 w-8 place-items-center border-[3px] border-ink font-display text-xs shadow-brutal-sm cursor-pointer transition-all duration-300 active:scale-95 z-20 ${index % 2 === 0 ? "bg-primary text-primary-foreground" : "bg-background text-ink"}`,
                    title: "View details",
                    children: e.num
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    onClick: () => handleTimelineCardClick(e),
                    className: "galaxy-card p-4 shadow-brutal-sm cursor-pointer transition-all duration-300",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-spark", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-backdrop", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-galaxy__static", "aria-hidden": "true", children: staticStars.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-galaxy", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-galaxy__ring", children: getStarsForCard(index).map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base md:text-lg", children: e.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-[2px] border-ink bg-background px-2.5 py-0.5 font-display text-[9px] font-bold uppercase tracking-wider shadow-brutal-sm", children: e.date })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] font-bold uppercase tracking-wide text-foreground/60", children: e.club })
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
      filteredEvents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-[3px] border-ink bg-card p-10 text-center shadow-brutal animate-slide-up-fade", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl uppercase text-foreground/60", children: "No releases scheduled for this date." }) })
    ] }),
    modalEvent && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 bg-ink/35 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all duration-300",
        onClick: () => setModalEvent(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-[4px] border-ink bg-card p-5 sm:p-6 md:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-brutal relative animate-modal-pop scrollbar-none",
            onClick: (s) => s.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setModalEvent(null),
                  className: "absolute -right-2 -top-2 sm:-right-3 sm:-top-3 h-10 w-10 border-[3px] border-ink bg-primary text-primary-foreground font-display text-lg shadow-brutal-sm cursor-pointer flex items-center justify-center hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none active:translate-x-0 active:translate-y-0 transition-all z-10",
                  children: "✕"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-[2px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase shadow-brutal-sm inline-block", children: modalEvent.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-2xl md:text-3xl leading-tight", children: modalEvent.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs font-bold uppercase tracking-wide text-primary", children: modalEvent.club }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 border-t-2 border-dashed border-ink/20 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-foreground/90 font-medium", children: modalEvent.desc }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 border-t-2 border-ink pt-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2.5 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase border-2 border-ink bg-background px-2 py-0.5 font-bold shadow-brutal-sm", children: "Timeline" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] font-bold text-foreground/90", children: modalEvent.timeline })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2.5 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase border-2 border-ink bg-accent px-2 py-0.5 font-bold shadow-brutal-sm", children: "Rewards" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] font-bold text-primary", children: modalEvent.prizes })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-2.5 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase border-2 border-ink bg-card px-2 py-0.5 font-bold shadow-brutal-sm", children: "Domains" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: modalEvent.domains.map((dom) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold text-foreground/80 bg-accent/20 border border-ink/20 px-2 py-0.5", children: dom }, dom)) })
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
const kratgyaJainPhoto = "/assets/kratgya-jain-DgLf6JfR.jpg";
const nidhishDoshiPhoto = "/assets/nidhish-doshi-JZIUduW5.jpg";
const balamuraliVbPhoto = "/assets/balamurali-vb-Cb5w3t1p.jpg";
const harshPhoto = "/assets/harsh-CeRgMIyh.jpg";
const kaustubhMishraPhoto = "/assets/kaustubh-mishra-B_yf-FTk.jpg";
const priyanshuNimbalkarPhoto = "/assets/priyanshu-nimbalkar-B_zd3Pj5.jpg";
const emilBenPhoto = "/assets/emil-ben-shUbzIFY.jpeg";
const haridarshanRPhoto = "/assets/haridarshan-r-B0uc_gmX.jpeg";
const maanasKNPhoto = "/assets/maanas-khatokar-n-B81jPYId.jpeg";
const rushilKrishnaPhoto = "/assets/rushil-krishna-CZp1wyBW.jpg";
const aadityaKumarPhoto = "/assets/aaditya-kumar-Doqm09BZ.jpg";
const gouravSherikarPhoto = "/assets/gourav-sherikar-djWCDyb2.jpg";
const memberPhotos = {
  "Kratgya Jain": kratgyaJainPhoto,
  "Nidhish Doshi": nidhishDoshiPhoto,
  "Balamurali V B": balamuraliVbPhoto,
  "Harsh": harshPhoto,
  "Kaustubh Mishra": kaustubhMishraPhoto,
  "Priyanshu Nimbalkar": priyanshuNimbalkarPhoto,
  "Emil Ben": emilBenPhoto,
  "Haridarshan R": haridarshanRPhoto,
  "Manas Khatokar N": maanasKNPhoto,
  "Rushil Krishna Sai Narendula": rushilKrishnaPhoto,
  "Aaditya Kumar": aadityaKumarPhoto,
  "Gourav Sherikar": gouravSherikarPhoto
};
const tilePalette = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-card text-ink border-ink",
  "bg-peach-deep text-ink border-ink"
];
const getClubEmail = (club) => {
  if (club === "Coding Club") return "codingclub@iitdh.ac.in";
  if (club === "AI Club") return "aiclub@iitdh.ac.in";
  if (club === "Space Data Science Club" || club === "Space and Data Science Club") return "space.ds.club@iitdh.ac.in";
  if (club === "Robotics Club") return "robotics@iitdh.ac.in";
  if (club === "Motorsports Club" || club === "InGene Motorsport") return "ingene@iitdh.ac.in";
  if (club === "Design Club" || club === "Abhikalpa Design Club") return "abhikalpa.dc@iitdh.ac.in";
  if (club === "Finance Club") return "finance.club@iitdh.ac.in";
  if (club === "Electronics Club") return "electronicsclub@iitdh.ac.in";
  if (club === "Astronomy Club") return "astronomyclub@iitdh.ac.in";
  return "gstech@iitdh.ac.in";
};
const getInitialsFromName = (name) => {
  return name.split(" ").map((word) => word[0]).join("").substring(0, 2).toUpperCase();
};
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "team", className: "border-b-[3px] border-ink py-20 bg-background conic-pattern", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-widest text-primary", children: "The Crew" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl uppercase md:text-6xl", children: "Meet the Team" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-14", children: team.map((group, i) => {
      const email = getClubEmail(group.club);
      const memberCount = group.members.length;
      const labelText = memberCount === 1 ? "1 Coordinator" : `${memberCount} Members`;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-[3px] border-ink bg-primary px-3 py-1 font-display text-xs uppercase text-primary-foreground shadow-brutal-sm", children: group.club }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[3px] flex-1 bg-ink" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase text-foreground/60", children: labelText })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6", children: group.members.map((member, memberIdx) => {
          const initials = getInitialsFromName(member);
          const isCoord = memberIdx === 0;
          const photo = memberPhotos[member];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "border-[3px] border-ink bg-card shadow-brutal-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] flex flex-col h-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `grid aspect-square place-items-center border-b-[3px] border-ink shrink-0 ${photo ? "bg-card overflow-hidden" : tilePalette[(i + memberIdx) % tilePalette.length]}`,
                    children: photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: photo,
                        alt: member,
                        className: "w-full h-full object-cover select-none",
                        loading: "lazy"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl sm:text-3xl select-none", children: initials })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex flex-col flex-1 justify-between gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs sm:text-sm leading-tight text-foreground break-words", children: member }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase font-bold tracking-wider text-foreground/50 mt-1", children: isCoord ? "Coordinator" : "Core Member" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${email}`,
                      className: "text-[10px] sm:text-[11px] uppercase tracking-wide text-foreground/60 hover:text-primary font-bold flex items-center gap-1 mt-2 transition-colors",
                      children: [
                        "✉ ",
                        isCoord ? "Email Coord" : "Contact"
                      ]
                    }
                  )
                ] })
              ]
            },
            member
          );
        }) })
      ] }, group.club);
    }) })
  ] }) });
}
const faqData = [
  {
    question: "What is Summer of Innovation?",
    answer: "Summer of Innovation (SoI) is a premier 2-month summer technical program organized by the Technical Council of IIT Dharwad. It provides students a platform to work on challenging, industry-inspired problem statements spanning artificial intelligence, space technology, software engineering, robotics, mechanical design, motorsports, and quantitative finance."
  },
  {
    question: "Who is eligible to participate?",
    answer: "Participation is open to all students of IIT Dharwad across all years, branches, and programs (both UG and PG). Interested external student builders and developers are also welcome to join the community, collaborate, and submit solutions to the challenges."
  },
  {
    question: "What is the team size allowed for the challenges?",
    answer: "Team size regulations vary depending on the specific problem statement. Some challenges are designed for individual solvers, while others allow teams of 2 to 4 members. Please refer to the specific description and WhatsApp community groups of your chosen problem statement for detailed rules."
  },
  {
    question: "Can I participate in multiple problem statements?",
    answer: "Yes! You are free to register for and submit solutions to multiple problem statements. However, because of the high technical complexity and strict timelines of the challenges, we highly recommend focusing on 1 or 2 projects to deliver high-quality submissions."
  },
  {
    question: "How do the drops work and how are solutions submitted?",
    answer: "Problem Statements (PS) are released dynamically in sequential 'drops' as detailed in the timeline. Each project has its own dedicated GitHub repository or submission portal. All code, design models, and documentations must be committed to the official channels before the specified deadline."
  },
  {
    question: "Are there registration fees or prizes?",
    answer: "No, participation in all Summer of Innovation '26 events is completely free! The top performing teams in each challenge will receive exciting rewards including official merch, cash prizes, gift vouchers, and opportunities for continued faculty mentorship and research collaborations."
  },
  {
    question: "Is there any prerequisite knowledge required to participate?",
    answer: "No strict prerequisites are required! While some challenges are advanced, many are beginner-friendly and designed to be excellent learning opportunities. Each challenge has dedicated mentors, resources, and discussion channels to support you in learning as you build."
  },
  {
    question: "Can I change my team members after registering?",
    answer: "Yes, team changes are permitted during the initial phases of the problem statements. Please coordinate directly with the respective challenge leads or organizers in the dedicated WhatsApp group to update your team's details."
  },
  {
    question: "Will I receive a certificate of participation?",
    answer: "Yes! All participants who submit a functional, valid solution that meets the baseline evaluation criteria will receive an official Certificate of Participation from the Technical Council, IIT Dharwad."
  },
  {
    question: "Where can I ask doubts or get support during the project?",
    answer: "Each problem statement has a dedicated WhatsApp discussion group. You can join the group via the green WhatsApp buttons on the cards to chat directly with organizers, ask technical doubts, find team members, and get support."
  },
  {
    question: "Are the deadlines strict, and where can I check the dates?",
    answer: "Yes, submission deadlines are strict to maintain a fair evaluation environment. You can check the specific release date and deadline duration for each challenge directly on its respective problem statement card under the 'Timeline' label, as well as the release schedules under the main 'Timeline' section."
  },
  {
    question: "Do I need to submit a technical report along with my code or designs?",
    answer: "Yes! High-quality documentation and reports are major evaluation parameters. Besides working codebase repositories or 3D models, we highly value comprehensive write-ups, analysis diagrams, performance tables, and technical reasoning."
  },
  {
    question: "Can I use open-source templates or third-party packages?",
    answer: "Absolutely! You are free to leverage open-source libraries, APIs, and frameworks unless explicitly restricted by a specific challenge description. However, you must credit all external materials and clearly detail your original contributions."
  },
  {
    question: "Is there hardware support provided for robotics or electronics challenges?",
    answer: "Yes! Solvers showing high progress in the initial virtual simulation phases of hardware-centric challenges can request budget reimbursements, component sourcing, or makerspace lab access. Reach out directly to challenge leads in your WhatsApp group for guidance."
  }
];
function Faq() {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const [openedFaqs, setOpenedFaqs] = reactExports.useState([]);
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index && !openedFaqs.includes(index)) {
      const nextOpened = [...openedFaqs, index];
      setOpenedFaqs(nextOpened);
      if (nextOpened.length >= 3) {
        window.dispatchEvent(new CustomEvent("soi-achievement", { detail: "curious-builder" }));
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "border-b-[3px] border-ink py-20 bg-background conic-pattern relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-widest text-primary", children: "Got Questions?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl uppercase md:text-6xl", children: "Frequently Asked Questions" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqData.map((item, idx) => {
      const isOpen = openIndex === idx;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "border-[3px] border-ink bg-card shadow-brutal transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleFaq(idx),
                className: "w-full flex items-center justify-between p-5 text-left font-display text-base md:text-lg uppercase tracking-wide cursor-pointer transition-colors hover:bg-peach/30 select-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pr-4", children: item.question }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `grid h-8 w-8 shrink-0 place-items-center border-[2px] border-ink font-mono text-base font-bold transition-all shadow-brutal-sm ${isOpen ? "bg-accent text-accent-foreground rotate-180" : "bg-primary text-primary-foreground"}`,
                      children: isOpen ? "−" : "+"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] border-t-[3px] border-ink" : "max-h-0"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 font-body text-sm md:text-base leading-relaxed text-foreground/80 bg-peach/10", children: item.answer })
              }
            )
          ]
        },
        idx
      );
    }) })
  ] }) });
}
const instagramLogo = "/assets/instagram-logo-fnnznYNF.png";
function Footer() {
  const contacts = [
    { name: "General Secretary Technical Affairs", email: "gstech@iitdh.ac.in" },
    { name: "Coding Club", email: "codingclub@iitdh.ac.in" },
    { name: "AI Club", email: "aiclub@iitdh.ac.in" },
    { name: "Space and Data Science Club", email: "space.ds.club@iitdh.ac.in" },
    { name: "Robotics Club", email: "robotics@iitdh.ac.in" },
    { name: "Electronics Club", email: "electronicsclub@iitdh.ac.in" },
    { name: "InGene Motorsport", email: "ingene@iitdh.ac.in" },
    { name: "Abhikalpa Design Club", email: "abhikalpa.dc@iitdh.ac.in" },
    { name: "Astronomy Club", email: "astronomyclub@iitdh.ac.in" },
    { name: "Finance Club", email: "finance.club@iitdh.ac.in" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { id: "contact", className: "bg-ink text-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-16 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl uppercase md:text-5xl", children: [
            "Let's Build ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Summer." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-card/70 max-w-sm leading-relaxed", children: "Have questions or want to collaborate? Reach out to the respective clubs or the technical secretariat." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-widest text-accent mb-3", children: "WhatsApp Community" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://chat.whatsapp.com/HPh2VvStSX9DfLYvkB9rCH",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 border-[3px] border-card bg-[#25D366] px-4 py-2.5 font-display text-xs uppercase text-white shadow-brutal-sm transition-all hover:bg-accent hover:text-ink hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-md active:translate-x-0 active:translate-y-0",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4.5 w-4.5 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Join Community" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-widest text-accent mb-3", children: "Follow SoI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://chat.whatsapp.com/HPh2VvStSX9DfLYvkB9rCH",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "grid h-10 w-10 place-items-center border-[3px] border-card bg-[#25D366] text-white shadow-brutal-sm transition-colors hover:opacity-90",
                  title: "WhatsApp Community",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-5 w-5 fill-current", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.instagram.com/soi_iitdh",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "grid h-10 w-10 place-items-center border-[3px] border-card overflow-hidden shadow-brutal-sm transition-opacity hover:opacity-90",
                  title: "Instagram",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: instagramLogo, alt: "Instagram", className: "h-full w-full object-cover" })
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs uppercase tracking-widest text-accent mb-6", children: "Technical Council" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-x-8 gap-y-6 sm:grid-cols-2", children: contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-[3px] border-accent pl-4 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm tracking-wide text-card", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t-[3px] border-card/30 px-4 py-5 text-center text-xs uppercase tracking-widest text-card/60 md:px-8", children: "© 2026 Summer of Innovation · Built with conviction" })
  ] });
}
const achievementsList = [
  {
    id: "night-owl",
    title: "Night Owl",
    desc: "Embrace the cosmic midnight theme.",
    icon: "🌙",
    requirement: "Toggle Solar Retro Cyber Dark Mode."
  },
  {
    id: "curious-builder",
    title: "Curious Builder",
    desc: "Ask all the right questions.",
    icon: "💡",
    requirement: "Open and read at least 3 FAQ sections."
  },
  {
    id: "arcade-master",
    title: "Arcade Master",
    desc: "Discover the hidden sanctuary.",
    icon: "🕹️",
    requirement: "Discover and trigger the secret web arcade game."
  }
];
const playRetroChime = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const playNote = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.06, start);
      gain.gain.exponentialRampToValueAtTime(1e-4, start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };
    playNote(523.25, now, 0.12);
    playNote(659.25, now + 0.08, 0.12);
    playNote(783.99, now + 0.16, 0.12);
    playNote(1046.5, now + 0.24, 0.25);
  } catch (err) {
    console.warn("Audio Context not allowed or supported on this system:", err);
  }
};
function Achievements() {
  const [unlockedIds, setUnlockedIds] = reactExports.useState([]);
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [toast, setToast] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("soi_achievements");
      if (stored) {
        try {
          setUnlockedIds(JSON.parse(stored));
        } catch {
        }
      }
    }
  }, []);
  reactExports.useEffect(() => {
    const handleAchievementUnlock = (e) => {
      const customEvent = e;
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
    window.addEventListener("soi-achievement", handleAchievementUnlock);
    return () => {
      window.removeEventListener("soi-achievement", handleAchievementUnlock);
    };
  }, []);
  const unlockedCount = unlockedIds.length;
  const isAllUnlocked = unlockedCount === achievementsList.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "fixed bottom-4 right-4 z-[45] flex h-13 w-13 items-center justify-center border-[3px] border-ink bg-[#FFD700] text-ink shadow-[3px_3px_0_0_var(--ink)] cursor-pointer select-none hover:scale-105 active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0_0_var(--ink)] transition-all animate-bounce",
        title: "Summer Achievements & Rewards",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-6 w-6" }),
          unlockedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-ink bg-accent text-[9px] font-bold text-ink shadow-brutal-sm", children: unlockedCount })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `fixed bottom-20 right-4 z-[45] w-[90%] max-w-sm border-[3px] border-ink bg-card p-5 shadow-brutal transition-all duration-300 transform ${isOpen ? "translate-y-0 opacity-100 scale-100 pointer-events-auto" : "translate-y-4 opacity-0 scale-95 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-repeat bg-center opacity-[0.02] pointer-events-none dots-grid", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between border-b-[2px] border-ink pb-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xs uppercase tracking-wider text-accent flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-[#FFD700]" }),
              "SOLVER ACHIEVEMENTS"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsOpen(false),
                className: "grid h-7 w-7 place-items-center border-[2px] border-ink bg-background text-ink shadow-brutal-sm hover:bg-peach/30 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-[2px] border-ink bg-background p-2 text-center mb-4 shadow-brutal-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-bold uppercase tracking-wider", children: [
            "REWARDS UNLOCKED: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-display text-sm", children: unlockedCount }),
            " / ",
            achievementsList.length
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative space-y-3", children: achievementsList.map((a) => {
            const isUnlocked = unlockedIds.includes(a.id);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `border-[2px] border-ink p-3 shadow-brutal-sm flex gap-3 items-center transition-all ${isUnlocked ? "bg-accent/10 border-ink" : "bg-background/40 opacity-70 border-dashed"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `grid h-10 w-10 shrink-0 place-items-center border-[2px] border-ink font-display text-2xl shadow-brutal-sm select-none ${isUnlocked ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground grayscale"}`,
                      children: isUnlocked ? a.icon : "🔒"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-wide truncate", children: a.title }),
                      isUnlocked && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8px] font-bold text-accent bg-accent/20 px-1 py-0.2 border border-accent uppercase tracking-widest shrink-0 animate-pulse", children: "✓ OK" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[11px] leading-tight text-foreground/75 mt-0.5", children: a.desc }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[9px] font-bold text-foreground/45 mt-1 border-t border-ink/5 pt-1", children: [
                      "Req: ",
                      a.requirement
                    ] })
                  ] })
                ]
              },
              a.id
            );
          }) }),
          isAllUnlocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-[2px] border-ink bg-[#FFD700] text-ink p-3 mt-4 text-center shadow-brutal-sm animate-pulse border-double", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-wider", children: "🏆 ULTIMATE SOLVER UNLOCKED!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] mt-0.5 text-ink/80", children: "You are ready for the Summer of Innovation 2026!" })
          ] })
        ]
      }
    ),
    toast && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed top-20 right-4 z-[9999] flex items-center gap-3 border-[3px] border-ink bg-primary text-primary-foreground p-4 shadow-brutal animate-bounce max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center border-[2.5px] border-ink bg-card text-2xl shadow-brutal-sm shrink-0", children: toast.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8px] font-bold uppercase tracking-widest text-[#FFD700] animate-pulse", children: "★ REWARD UNLOCKED ★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs uppercase tracking-wide mt-0.5", children: toast.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-[10px] text-primary-foreground/80 leading-none mt-0.5", children: "Check your Achievements panel!" })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground conic-pattern", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Overview, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Events, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {})
  ] });
}
export {
  Index as component
};
