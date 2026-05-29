import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/soi/Nav";
import { Hero } from "@/components/soi/Hero";
import { Overview } from "@/components/soi/Overview";
import { Events } from "@/components/soi/Events";
import { Timeline } from "@/components/soi/Timeline";
import { Team } from "@/components/soi/Team";
import { Footer } from "@/components/soi/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summer of Innovation'26 — Innovate this Summer" },
      {
        name: "description",
        content:
          "The seventh edition of Summer of Innovation: two months, eight technical challenges across AI, robotics, design, motorsports, finance and space.",
      },
      { property: "og:title", content: "Summer of Innovation'26" },
      {
        property: "og:description",
        content:
          "Eight challenges, two months, one summer of building. Join the seventh edition.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground conic-pattern">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Events />
        <Timeline />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
