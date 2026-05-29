import { team } from "./data";

const tilePalette = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-card text-ink border-ink",
  "bg-peach-deep text-ink border-ink",
];

const getClubEmail = (club: string) => {
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

const getClubInitials = (club: string) => {
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

const getClubTitle = (club: string) => {
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

export function Team() {
  return (
    <section id="team" className="border-b-[3px] border-ink py-20 bg-background conic-pattern">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12">
          <span className="font-display text-xs uppercase tracking-widest text-primary">
            The Crew
          </span>
          <h2 className="mt-2 font-display text-4xl uppercase md:text-6xl">Meet the Team</h2>
        </div>

        <div className="space-y-14">
          {team.map((group, i) => {
            const email = getClubEmail(group.club);
            const initials = getClubInitials(group.club);
            const title = getClubTitle(group.club);
            return (
              <div key={group.club}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="border-[3px] border-ink bg-primary px-3 py-1 font-display text-xs uppercase text-primary-foreground shadow-brutal-sm">
                    {group.club}
                  </span>
                  <span className="h-[3px] flex-1 bg-ink" />
                  <span className="font-display text-xs uppercase text-foreground/60">
                    1 Coordinator
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  <div
                    className="border-[3px] border-ink bg-card shadow-brutal-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    <div
                      className={`grid aspect-square place-items-center border-b-[3px] border-ink ${
                        tilePalette[i % tilePalette.length]
                      }`}
                    >
                      <span className="font-display text-3xl">{initials}</span>
                    </div>
                    <div className="p-3">
                      <p className="font-display text-sm leading-tight">{title}</p>
                      <a
                        href={`mailto:${email}`}
                        className="mt-1 inline-block text-[11px] uppercase tracking-wide text-foreground/60 hover:text-primary"
                      >
                        ✉ Email Coordinator
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
