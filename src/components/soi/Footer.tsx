import instagramLogo from "@/assets/instagram-logo.png";

export function Footer() {
  const contacts = [
    { name: "GenSec Technical Affairs", email: "gstech@iitdh.ac.in" },
    { name: "Coding Club", email: "codingclub@iitdh.ac.in" },
    { name: "AI Club", email: "aiclub@iitdh.ac.in" },
    { name: "Space and Data Science Club", email: "space.ds.club@iitdh.ac.in" },
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
            
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">WhatsApp Community</p>
                <a
                  href="https://chat.whatsapp.com/HPh2VvStSX9DfLYvkB9rCH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-[3px] border-card bg-[#25D366] px-4 py-2.5 font-display text-xs uppercase text-white shadow-brutal-sm transition-all hover:bg-accent hover:text-ink hover:-translate-x-[1.5px] hover:-translate-y-[1.5px] hover:shadow-brutal-md active:translate-x-0 active:translate-y-0"
                >
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" />
                  </svg>
                  <span>Join Community</span>
                </a>
              </div>

              <div>
                <p className="font-display text-xs uppercase tracking-widest text-accent mb-3">Follow SoI</p>
                <div className="flex gap-3">
                  {/* WhatsApp social icon */}
                  <a
                    href="https://chat.whatsapp.com/HPh2VvStSX9DfLYvkB9rCH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center border-[3px] border-card bg-[#25D366] text-white shadow-brutal-sm transition-colors hover:opacity-90"
                    title="WhatsApp Community"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.005 5.277 5.282.003 11.758.003c3.132 0 6.077 1.218 8.291 3.432 2.215 2.214 3.431 5.159 3.43 8.292-.005 6.481-5.28 11.754-11.758 11.754-2.001-.002-3.968-.51-5.717-1.479L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.433 1.451 5.56 0 10.083-4.52 10.087-10.081.002-2.693-1.04-5.226-2.932-7.118C17.275 1.514 14.748.473 12.056.473c-5.563 0-10.085 4.52-10.09 10.081-.002 1.896.486 3.748 1.417 5.378l-1.015 3.703 3.793-.995zm11.206-7.81c-.287-.144-1.7-.84-1.962-.935-.263-.096-.454-.144-.645.144-.19.288-.737.936-.904 1.127-.167.19-.335.216-.622.072-.287-.144-1.21-.447-2.308-1.427-.855-.762-1.433-1.705-1.6-1.993-.167-.288-.018-.444.125-.586.13-.128.287-.335.43-.502.144-.167.19-.287.287-.48.096-.19.048-.36-.024-.503-.072-.143-.645-1.548-.884-2.124-.233-.56-.47-.482-.645-.49-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.005.983-1.005 2.399 0 1.416 1.03 2.784 1.173 2.976.143.19 2.026 3.1 4.908 4.34.686.295 1.22.47 1.637.602.689.218 1.316.187 1.811.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.167-1.368-.072-.12-.263-.192-.55-.336z" />
                    </svg>
                  </a>
                  {/* Instagram social icon */}
                  <a
                    href="https://www.instagram.com/tech.council.iitdh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center border-[3px] border-card overflow-hidden shadow-brutal-sm transition-opacity hover:opacity-90"
                    title="Instagram"
                  >
                    <img src={instagramLogo} alt="Instagram" className="h-full w-full object-cover" />
                  </a>
                </div>
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
