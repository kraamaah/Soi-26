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
  if (club === "Space Data Science Club" || club === "Space and Data Science Club") return "space.ds.club@iitdh.ac.in";
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
  if (club === "Space Data Science Club" || club === "Space and Data Science Club") return "SDS";
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
  if (club === "Space Data Science Club" || club === "Space and Data Science Club") return "Space DS Coordinator";
  if (club === "Robotics Club") return "Robotics Coordinator";
  if (club === "Motorsports Club" || club === "InGene Motorsport" || club.includes("Motorsport")) return "Motorsports Coordinator";
  if (club === "Design Club" || club === "Abhikalpa Design Club" || club.includes("Design")) return "Design Coordinator";
  if (club === "Finance Club") return "Finance Coordinator";
  if (club === "Electronics Club") return "Electronics Coordinator";
  if (club === "Astronomy Club") return "Astronomy Coordinator";
  return "Club Coordinator";
};

const getInitialsFromName = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
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
            const memberCount = group.members.length;
            const labelText = memberCount === 1 ? "1 Coordinator" : `${memberCount} Members`;
            return (
              <div key={group.club}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="border-[3px] border-ink bg-primary px-3 py-1 font-display text-xs uppercase text-primary-foreground shadow-brutal-sm">
                    {group.club}
                  </span>
                  <span className="h-[3px] flex-1 bg-ink" />
                  <span className="font-display text-xs uppercase text-foreground/60">
                    {labelText}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {group.members.map((member, memberIdx) => {
                    const initials = getInitialsFromName(member);
                    const isCoord = memberIdx === 0;
                    return (
                      <div
                        key={member}
                        className="border-[3px] border-ink bg-card shadow-brutal-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] flex flex-col h-full"
                      >
                        <div
                          className={`grid aspect-square place-items-center border-b-[3px] border-ink shrink-0 ${
                            tilePalette[(i + memberIdx) % tilePalette.length]
                          }`}
                        >
                          <span className="font-display text-2xl sm:text-3xl select-none">{initials}</span>
                        </div>
                        <div className="p-3 flex flex-col flex-1 justify-between gap-1">
                          <div>
                            <p className="font-display text-xs sm:text-sm leading-tight text-foreground break-words">
                              {member}
                            </p>
                            <p className="text-[9px] uppercase font-bold tracking-wider text-foreground/50 mt-1">
                              {isCoord ? "Coordinator" : "Core Member"}
                            </p>
                          </div>
                          <a
                            href={`mailto:${email}`}
                            className="text-[10px] sm:text-[11px] uppercase tracking-wide text-foreground/60 hover:text-primary font-bold flex items-center gap-1 mt-2 transition-colors"
                          >
                            ✉ {isCoord ? "Email Coord" : "Contact"}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
