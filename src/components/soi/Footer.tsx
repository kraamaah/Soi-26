export function Footer() {
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
    { name: "Finance Club", email: "finance.club@iitdh.ac.in" },
  ];

  return (
    <footer id="contact" className="bg-ink text-card">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Column 1: Info and Socials */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl uppercase md:text-5xl">
                Let's Build <span className="text-accent">Summer.</span>
              </h2>
              <p className="mt-3 text-sm text-card/70 max-w-sm leading-relaxed">
                Have questions or want to collaborate? Reach out to the respective clubs or the technical secretariat.
              </p>
            </div>
            
            <div>
              <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">Follow SoI</p>
              <div className="flex gap-3">
                {["IG", "TW", "GH", "IN"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="grid h-10 w-10 place-items-center border-[3px] border-card bg-primary font-display text-xs text-primary-foreground hover:bg-accent hover:text-ink transition-colors shadow-brutal-sm"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columns 2 & 3: Rich Contacts Grid */}
          <div className="lg:col-span-2">
            <p className="font-display text-xs uppercase tracking-widest text-accent mb-6">Technical Council</p>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {contacts.map((c) => (
                <div key={c.email} className="border-l-[3px] border-accent pl-4 py-1">
                  <p className="font-display text-sm tracking-wide text-card">{c.name}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-xs text-card/60 hover:text-accent font-mono block mt-1 transition-colors"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t-[3px] border-card/30 px-4 py-5 text-center text-xs uppercase tracking-widest text-card/60 md:px-8">
        © 2026 Summer of Innovation · Built with conviction
      </div>
    </footer>
  );
}
