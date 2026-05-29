import lunar from "@/assets/event-lunar.png";
import robo from "@/assets/event-robomapper.png";
import poster from "@/assets/event-poster.png";
import adv from "@/assets/event-adversarl.png";
import mars from "@/assets/event-mars.png";
import newton from "@/assets/event-newton.png";
import algo from "@/assets/event-algo.png";
import fraud from "@/assets/event-fraud.png";

// New high-quality customized illustrations
import pathmatrix from "@/assets/event-pathmatrix.png";
import beyondBits from "@/assets/event-beyond-bits.png";
import cartographer from "@/assets/event-cartographer.png";
import promptSelection from "@/assets/event-prompt-selection.png";
import vectorCaching from "@/assets/event-vector-caching.png";
import doctorTriage from "@/assets/event-doctor-triage.png";
import geometricLearning from "@/assets/event-geometric-learning.png";
import geoSnap from "@/assets/event-geo-snap.png";
import glyphcraft from "@/assets/event-glyphcraft.png";
import kigumiDesign from "@/assets/event-kigumi-design.png";
import ironGrip from "@/assets/event-iron-grip.png";
import materialSnap from "@/assets/event-material-snap.png";
import orbitron from "@/assets/event-orbitron.png";
import cyberLeg from "@/assets/event-cyber-leg.png";
import ebpfSentinel from "@/assets/event-ebpf-sentinel.png";
import compounding from "@/assets/event-compounding.png";
import realmshift from "@/assets/event-realmshift.png";
import powercube from "@/assets/event-powercube.png";

export type SoiEvent = {
  num: string;
  title: string;
  desc: string;
  image: string;
  club: string;
  date: string;
  timeline: string;
  prizes: string;
  domains: string[];
};

export const events: SoiEvent[] = [
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
    domains: ["Embedded Systems", "Telecommunications"],
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
    domains: ["Artificial Intelligence & ML", "Generative AI"],
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
    domains: ["Artificial Intelligence & ML", "Data Engineering"],
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
    domains: ["Artificial Intelligence & ML", "Healthcare Tech"],
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
    domains: ["Artificial Intelligence & ML", "Computer Vision"],
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
    domains: ["Artificial Intelligence & ML", "Aerospace & Space Tech"],
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
    domains: ["Aerospace & Space Tech", "Embedded Systems"],
  },
];

export type TeamGroup = { club: string; members: string[] };

export const team: TeamGroup[] = [
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
      "Aniruddh Pandav",
    ],
  },
  { club: "Robotics Club", members: ["Vidit Parikh"] },
  { club: "Motorsports Club", members: ["Soumya Shaw"] },
  { club: "Design Club", members: ["Saipushkar Nagaraj"] },
  { club: "Finance Club", members: ["Yash Sanjeev Halbhavi"] },
  { club: "Electronics Club", members: ["Raghav S", "Meera K"] },
  { club: "Astronomy Club", members: ["Aryan P", "Tanvi L"] },
];
