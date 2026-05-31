import { team, techTeam } from "./data";
import kratgyaJainPhoto from "@/assets/kratgya-jain.jpg";
import nidhishDoshiPhoto from "@/assets/nidhish-doshi.jpg";
import balamuraliVbPhoto from "@/assets/balamurali-vb.jpg";
import harshPhoto from "@/assets/harsh.jpg";
import kaustubhMishraPhoto from "@/assets/kaustubh-mishra.jpg";
import priyanshuNimbalkarPhoto from "@/assets/priyanshu-nimbalkar.jpg";
import emilBenPhoto from "@/assets/emil-ben.jpeg";
import haridarshanRPhoto from "@/assets/haridarshan-r.jpeg";
import maanasKNPhoto from "@/assets/maanas-khatokar-n.jpeg";
import rushilKrishnaPhoto from "@/assets/rushil-krishna.jpg";
import aadityaKumarPhoto from "@/assets/aaditya-kumar.jpg";
import gouravSherikarPhoto from "@/assets/gourav-sherikar.jpg";
import viditParikhPhoto from "@/assets/vidit-parikh.jpg";
import anantTripathiPhoto from "@/assets/anant-tripathi.jpg";
import sreejitaChatterjeePhoto from "@/assets/sreejita-chatterjee.jpg";
import tusharHegdePhoto from "@/assets/tushar-hegde.jpg";
import soumyaBasuliPhoto from "@/assets/soumya-basuli.jpg";
import shrikantSonawanePhoto from "@/assets/shrikant-sonawane.jpg";
import aashishMPhoto from "@/assets/aashish-m.jpg";
import rajatGuptaPhoto from "@/assets/rajat-gupta.jpg";
import rithikaPhoto from "@/assets/rithika-athawade.jpg";
import harshChauhanPhoto from "@/assets/harsh-chauhan.jpg";

const memberPhotos: Record<string, string> = {
  "Kratgya Jain": kratgyaJainPhoto,
  "Nidhish Doshi": nidhishDoshiPhoto,
  "Balamurali V B": balamuraliVbPhoto,
  Harsh: harshPhoto,
  "Kaustubh Mishra": kaustubhMishraPhoto,
  "Priyanshu Nimbalkar": priyanshuNimbalkarPhoto,
  "Emil Ben": emilBenPhoto,
  "Haridarshan R": haridarshanRPhoto,
  "Manas Khatokar N": maanasKNPhoto,
  "Rushil Krishna Sai Narendula": rushilKrishnaPhoto,
  "Aaditya Kumar": aadityaKumarPhoto,
  "Gourav Sherikar": gouravSherikarPhoto,
  "Vidit Parikh": viditParikhPhoto,
  "Anant Tripathi": anantTripathiPhoto,
  "Sreejita Chatterjee": sreejitaChatterjeePhoto,
  "Tushar Hegde": tusharHegdePhoto,
  "Soumya Basuli": soumyaBasuliPhoto,
  "Shrikant Sonawane": shrikantSonawanePhoto,
  "Aashish M": aashishMPhoto,
  "Rajat Gupta": rajatGuptaPhoto,
  "Rithika Athawade": rithikaPhoto,
  "Harsh Chauhan": harshChauhanPhoto,
};

const tilePalette = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-card text-ink border-ink",
  "bg-peach-deep text-ink border-ink",
];

const getClubEmail = (club: string) => {
  if (club === "Coding Club") return "codingclub@iitdh.ac.in";
  if (club === "AI Club") return "aiclub@iitdh.ac.in";
  if (
    club === "Space Data Science Club" ||
    club === "Space and Data Science Club"
  )
    return "space.ds.club@iitdh.ac.in";
  if (club === "Robotics Club") return "robotics@iitdh.ac.in";
  if (club === "Motorsports Club" || club === "InGene Motorsport")
    return "ingene@iitdh.ac.in";
  if (club === "Design Club" || club === "Abhikalpa Design Club")
    return "abhikalpa.dc@iitdh.ac.in";
  if (club === "Finance Club") return "finance.club@iitdh.ac.in";
  if (club === "Electronics Club") return "electronicsclub@iitdh.ac.in";
  if (club === "Astronomy Club") return "astronomyclub@iitdh.ac.in";
  return "gstech@iitdh.ac.in";
};

const getClubInitials = (club: string) => {
  if (club === "Coding Club") return "CC";
  if (club === "AI Club") return "AI";
  if (
    club === "Space Data Science Club" ||
    club === "Space and Data Science Club"
  )
    return "SDS";
  if (club === "Robotics Club") return "RC";
  if (
    club === "Motorsports Club" ||
    club === "InGene Motorsport" ||
    club.includes("Motorsport")
  )
    return "MC";
  if (
    club === "Design Club" ||
    club === "Abhikalpa Design Club" ||
    club.includes("Design")
  )
    return "DC";
  if (club === "Finance Club") return "FC";
  if (club === "Electronics Club") return "EC";
  if (club === "Astronomy Club") return "AC";
  return "CO";
};

const getClubTitle = (club: string) => {
  if (club === "Coding Club") return "Coding Coordinator";
  if (club === "AI Club") return "AI Coordinator";
  if (
    club === "Space Data Science Club" ||
    club === "Space and Data Science Club"
  )
    return "Space DS Coordinator";
  if (club === "Robotics Club") return "Robotics Coordinator";
  if (
    club === "Motorsports Club" ||
    club === "InGene Motorsport" ||
    club.includes("Motorsport")
  )
    return "Motorsports Coordinator";
  if (
    club === "Design Club" ||
    club === "Abhikalpa Design Club" ||
    club.includes("Design")
  )
    return "Design Coordinator";
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
    <section
      id="team"
      className="border-b-[3px] border-ink py-20 bg-background conic-pattern"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12">
          <span className="font-display text-xs uppercase tracking-widest text-primary">
            The Crew
          </span>
          <h2 className="mt-2 font-display text-4xl uppercase md:text-6xl">
            Meet the Team
          </h2>
        </div>

        <div className="space-y-14">
          {team.map((group, i) => {
            const email = getClubEmail(group.club);
            const memberCount = group.members.length;
            const labelText =
              memberCount === 1 ? "1 Coordinator" : `${memberCount} Members`;
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
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                  {group.members.map((member, memberIdx) => {
                    const initials = getInitialsFromName(member);
                    const isCoord = memberIdx < (group.coordinatorCount ?? 1);
                    const photo = memberPhotos[member];
                    return (
                      <div
                        key={member}
                        className="border-[3px] border-ink bg-card shadow-brutal-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] flex flex-col h-full"
                      >
                        <div
                          className={`grid aspect-square place-items-center border-b-[3px] border-ink shrink-0 ${
                            photo
                              ? "bg-card overflow-hidden"
                              : tilePalette[
                                  (i + memberIdx) % tilePalette.length
                                ]
                          }`}
                        >
                          {photo ? (
                            <img
                              src={photo}
                              alt={member}
                              className="w-full h-full object-cover select-none"
                              loading="lazy"
                            />
                          ) : (
                            <span className="font-display text-xl sm:text-3xl select-none">
                              {initials}
                            </span>
                          )}
                        </div>
                        <div className="p-2 sm:p-3 flex flex-col flex-1 justify-between gap-1">
                          <div>
                            <p className="font-display text-[11px] sm:text-sm leading-tight text-foreground break-words font-medium">
                              {member}
                            </p>
                            <p className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider text-foreground/50 mt-1">
                              {isCoord ? "Coordinator" : "Core Member"}
                            </p>
                          </div>
                          <a
                            href={`mailto:${email}`}
                            className="text-[9px] sm:text-[11px] uppercase tracking-wide text-foreground/60 hover:text-primary font-bold flex items-center gap-1 mt-2 transition-colors"
                          >
                            ✉ {isCoord ? "Email" : "Contact"}
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

        {/* Tech Team Section */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="border-[3px] border-ink bg-accent px-3 py-1 font-display text-xs uppercase text-accent-foreground shadow-brutal-sm">
              Tech Team
            </span>
            <span className="h-[3px] flex-1 bg-ink" />
            <span className="font-display text-xs uppercase text-foreground/60">
              {techTeam.length} Members
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {techTeam.map((member) => {
              const initials = member.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .substring(0, 2)
                .toUpperCase();
              const photo = memberPhotos[member.name];
              return (
                <div
                  key={member.name}
                  className="border-[3px] border-ink bg-card shadow-brutal-sm transition-transform hover:translate-x-[2px] hover:translate-y-[2px] flex flex-col h-full"
                >
                  <div
                    className={`grid aspect-square place-items-center border-b-[3px] border-ink shrink-0 ${
                      photo
                        ? "bg-card overflow-hidden"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {photo ? (
                      <img
                        src={photo}
                        alt={member.name}
                        className="w-full h-full object-cover select-none"
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-display text-xl sm:text-3xl select-none">
                        {initials}
                      </span>
                    )}
                  </div>
                  <div className="p-2 sm:p-3 flex flex-col flex-1 justify-between gap-1">
                    <div>
                      <p className="font-display text-[11px] sm:text-sm leading-tight text-foreground break-words font-medium">
                        {member.name}
                      </p>
                      <p className="text-[8px] sm:text-[9px] uppercase font-bold tracking-wider text-foreground/50 mt-1">
                        {member.designation}
                      </p>
                    </div>
                    <a
                      href="mailto:gstech@iitdh.ac.in"
                      className="text-[9px] sm:text-[11px] uppercase tracking-wide text-foreground/60 hover:text-primary font-bold flex items-center gap-1 mt-2 transition-colors"
                    >
                      ✉ Contact
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
