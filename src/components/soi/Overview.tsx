import { BrutalCard, Sparkle } from "./BrutalCard";

export function Overview() {
  return (
    <section
      id="overview"
      className="border-b-[3px] border-ink bg-peach-deep/40 py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-[3px] w-12 bg-ink" />
          <h2 className="font-display text-4xl uppercase md:text-5xl">
            Overview
          </h2>
        </div>
        <BrutalCard className="relative p-5 sm:p-8 md:p-12">
          <Sparkle className="absolute -top-4 -left-4 h-8 w-8 text-accent" />
          <Sparkle className="absolute -bottom-4 -right-4 h-8 w-8 text-primary" />
          <h3 className="font-display text-2xl md:text-3xl">
            Welcome to Summer of Innovation'26.
          </h3>
          <p className="mt-2 font-display text-sm md:text-base text-accent uppercase tracking-wider">
            The Summer I turned techy ^_^
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            This is where theory meets raw creation. For the next two months,
            you’ll team up with fellow builders, designers, and thinkers to
            hack, build, and break things—virtually, of course (please leave
            your household appliances in one piece!). Our technical clubs have
            put together a series of real-world challenges designed to stretch
            your skills to the limit. Whether you obsess over clean code,
            mechanical design, pixels, or hardware, this is your sandbox. Grab
            your tools, find your team, and let's build something unforgettable.
          </p>
          <p className="mt-6 border-t-[2px] border-dashed border-ink pt-6 font-display text-xl text-primary">
            Are you ready to rise to the challenge? Let the Summer of Innovation
            begin!
          </p>
        </BrutalCard>
      </div>
    </section>
  );
}
