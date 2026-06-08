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
  whatsapp?: string;
  pdf?: string;
  deadline?: string;
  regLink?: string;
};

export const isEventActive = (dateStr: string) => {
  try {
    const cleanDateStr = dateStr.replace(/(st|nd|rd|th)/g, "");
    const eventTime = new Date(cleanDateStr).getTime();
    const now = new Date().getTime();
    return now >= eventTime;
  } catch {
    return false;
  }
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
    whatsapp: "https://chat.whatsapp.com/DDTS4N4AjNWLh0WEQVZT98",
    pdf: "https://drive.google.com/file/d/1u8Smu3r4QA6jEcHf5ey_-Es-gTMuNVrI/view?usp=drive_link",
    deadline: "17th July 2026",
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdJZz6Kffp2YRWVxyYPI3APWCOPZxTImDMhe1AFjN4yW1NMIw/viewform",
  },
  {
    num: "02",
    title: "Beyond Bits",
    desc: "Design a RTL-based compression system to optimize communication bandwidth. Can you successfully modulate, compress, transmit, and recover complex signals with zero data loss?",
    image: beyondBits,
    club: "Electronics Club",
    date: "2nd June 2026",
    timeline: "2nd June - 12th July 2026",
    prizes: "Merch + Prize Money (2500 + 1500 + 1000)",
    domains: ["VLSI", "Communication System"],
    whatsapp: "https://chat.whatsapp.com/Fa8iDnnLVZ4KlVdF1Wks7I",
    pdf: "https://drive.google.com/file/d/1r50Q60oS8WS4bwQ7CtpkOl3uTJzU4pdm/view?usp=sharing",
    deadline: "12th July 2026",
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSegRfbErNfAkmX3x9z6NJo6GC0wsweLrJO7bqm2lG8FK3p1tw/viewform",
  },
  {
    num: "03",
    title: "Cartographer",
    desc: "Develop a cooperative SLAM algorithm for dual-robot exploration in simulation. How efficiently can your robotic agents map and search an unknown 2D space?",
    image: cartographer,
    club: "Robotics Club",
    date: "2nd June 2026",
    timeline: "2nd June - 8th July 2026",
    prizes: "Merch + 3x Robu/Robocraze Gift Card (1000 INR)",
    domains: ["Robotics & Automation", "Software Engineering"],
    whatsapp: "https://chat.whatsapp.com/KlvDNJIMBht93eIixIgmZn",
    pdf: "https://docs.google.com/document/d/10hs3gmmsqlMCe41vGo6jyu69GcYFGaoM/edit?usp=sharing&ouid=109853900077698808251&rtpof=true&sd=true",
    deadline: "8th July 2026",
    regLink: "https://forms.gle/2svhBaADbrKSHSCdA",
  },
  {
    num: "04",
    title: "PromptWise",
    desc: "Design an adaptive prompt selector that dynamically optimizes queries under strict token budgets. Let's maximize LLM response quality while slashing latency!",
    image: promptSelection,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 24th July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Generative AI"],
    whatsapp: "https://chat.whatsapp.com/EvJOwKhBeiIAXoLEPK9gMI",
    pdf: "https://drive.google.com/file/d/19lnyMq49yFnSUahw7_bn4tUrd6DDcR-T/view?usp=sharing",
    deadline: "24th July 2026",
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdCedWHZ1mOXEn4ssCzHNzn2wYGNUuQDG3FgcJZVnxgR2f90A/viewform",
  },
  {
    num: "05",
    title: "CacheMind",
    desc: "Build a two-tier RAG storage system with adaptive vector caching. Can you slash embedding storage and retrieval costs without compromising output performance?",
    image: vectorCaching,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 24th July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Data Engineering"],
    whatsapp: "https://chat.whatsapp.com/GC2B0ZsAkNILO8IwYgikKo",
    pdf: "https://drive.google.com/file/d/1hOzFtEwXUG61vRe40e3NcyQJHfU99BkW/view?usp=sharing",
    deadline: "24th July 2026",
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf83z_XLiUT72DxV2quaQJsaa6-6VQoe4n3fdUHrqnTfVJ1HQ/viewform",
  },
  {
    num: "06",
    title: "MediGuide",
    desc: "Create a smart symptom-triage conversational agent. Classify patient symptoms and automatically schedule matching doctor slots to revolutionize access to care.",
    image: doctorTriage,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 24th July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Healthcare Tech"],
    whatsapp: "https://chat.whatsapp.com/JrbnscP1nRrIv85RI3ggRl",
    pdf: "https://drive.google.com/file/d/1T18yTYYhrnY_uGRdBpEaVk9Afw2A_FyX/view?usp=sharing",
    deadline: "24th July 2026",
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSf3zlHxDOzA1ZzwmEXnqv1W070SKj_mWuBzsWNEKd_m6s6jcw/viewform",
  },
  {
    num: "07",
    title: "PolyLearn",
    desc: "Break down the mathematical barriers of geometric deep learning. Extend rigid structures to irregular and arbitrary shapes to power advanced graphics and robotics.",
    image: geometricLearning,
    club: "AI Club",
    date: "2nd June 2026",
    timeline: "2nd June - 24th July 2026",
    prizes: "Certificate + Faculty Guidance / Continued Work Opportunity",
    domains: ["Artificial Intelligence & ML", "Computer Vision"],
    whatsapp: "https://chat.whatsapp.com/JSe4AakDRwyA3x7i0lw5xp",
    pdf: "https://drive.google.com/file/d/1s5XsoksMdg5WRGuWV3dvO7URCFNkTKG4/view?usp=sharing",
    deadline: "24th July 2026",
    regLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd7eIFDj8-IQxr6H86O2PGazp7E0pFNXkknMbPp3B21SrJp_Q/viewform",
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
    whatsapp: "https://chat.whatsapp.com/DGWijtO3F6kC7PBNKye5EP",
    pdf: "https://drive.google.com/file/d/13RIpdieFrNYg-RVJ-M2Su-NcjvqJrKy3/view?usp=sharing",
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
    whatsapp: "https://chat.whatsapp.com/LYK6m8jTvPh9MjDeQ2pfLP",
    pdf: "https://drive.google.com/file/d/1WlxsbkkhgyGWLQUi4iknge9NPrBX6DS7/view?usp=sharing",
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
    whatsapp: "https://chat.whatsapp.com/Ej7FvmSVH3P1eKKhK9Cy5I",
    pdf: "https://drive.google.com/file/d/1hCTOGAE1hDk4YhLraNX2iXFipOf_YlSA/view?usp=sharing",
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
    whatsapp: "https://chat.whatsapp.com/KdL3HuORynJBUAUuXbg8sj",
    pdf: "https://drive.google.com/file/d/1Q25nCBVeAkdEWcDgsxXNiRTNU7OvriCo/view?usp=sharing",
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
    whatsapp: "https://chat.whatsapp.com/FuhhCXVVCdVDJbP2rHTAMm",
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
    whatsapp: "https://chat.whatsapp.com/HVPEqAOPWLe7C7BYgjR5Cn",
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
    whatsapp: "https://chat.whatsapp.com/LU2uvZb2B3nArc45qtiT6J",
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
    whatsapp: "https://chat.whatsapp.com/FpMV8lXKL7K9QnJy10CWZw",
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
    whatsapp: "https://chat.whatsapp.com/CT5ozR4rSRA2EaVqXODpV7",
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
    whatsapp: "https://chat.whatsapp.com/E2KFXYMTDDlDi5onvyawmi",
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
    whatsapp: "https://chat.whatsapp.com/LaY2b7B3hlh4tiAMY3j8uk",
  },
];

export type TeamGroup = {
  club: string;
  members: string[];
  coordinatorCount?: number;
};

export const team: TeamGroup[] = [
  {
    club: "Coding Club",
    members: [
      "Gourav Sherikar",
      "Nidhish Doshi",
      "Aaditya Kumar",
      "Rushil Krishna Sai Narendula",
      "Kratgya Jain",
    ],
  },
  { club: "AI Club", members: ["Sreejita Chatterjee"] },
  {
    club: "Space and Data Science Club",
    coordinatorCount: 2,
    members: [
      "Balamurali V B",
      "T Dhanunjaya Rao",
      "Kaustubh Mishra",
      "Priyanshu Nimbalkar",
      "Dev",
      "Jami Sai Harshit",
      "Sameer Chakrawarti",
      "Affan P",
    ],
  },
  {
    club: "Robotics Club",
    members: ["Tushar Hegde", "Soumya Basuli", "Shrikant Sonawane"],
  },
  { club: "Motorsports Club", members: ["Nageswar Dusi", "Soumya Shaw"] },
  { club: "Design Club", members: ["Rajat Gupta", "Aashish M"] },
  { club: "Finance Club", members: ["Samarth M", "Yash Dube", "Prajwal B"] },
  {
    club: "Electronics Club",
    members: ["Manas Khatokar N", "Haridarshan R", "Emil Ben", "Harsh"],
  },
  { club: "Astronomy Club", members: ["Rithika Athawade", "Harsh Chauhan"] },
];

export type TechTeamMember = { name: string; designation: string };

export const techTeam: TechTeamMember[] = [
  { name: "Vidit Parikh", designation: "Ex-GenSec" },
  { name: "Anant Tripathi", designation: "GenSec" },
];
