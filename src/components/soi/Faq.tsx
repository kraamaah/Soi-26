import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is Summer of Innovation?",
    answer:
      "Summer of Innovation (SoI) is a premier 2-month summer technical program organized by the Technical Council of IIT Dharwad. It provides students a platform to work on challenging, industry-inspired problem statements spanning artificial intelligence, space technology, software engineering, robotics, mechanical design, motorsports, and quantitative finance.",
  },
  {
    question: "Who is eligible to participate?",
    answer:
      "Participation is open to all students of IIT Dharwad across all years, branches, and programs (both UG and PG). Interested external student builders and developers are also welcome to join the community, collaborate, and submit solutions to the challenges.",
  },
  {
    question: "What is the team size allowed for the challenges?",
    answer:
      "Team size regulations vary depending on the specific problem statement. Some challenges are designed for individual solvers, while others allow teams of 2 to 4 members. Please refer to the specific description and WhatsApp community groups of your chosen problem statement for detailed rules.",
  },
  {
    question: "Can I participate in multiple problem statements?",
    answer:
      "Yes! You are free to register for and submit solutions to multiple problem statements. However, because of the high technical complexity and strict timelines of the challenges, we highly recommend focusing on 1 or 2 projects to deliver high-quality submissions.",
  },
  {
    question: "How do the drops work and how are solutions submitted?",
    answer:
      "Problem Statements (PS) are released dynamically in sequential 'drops' as detailed in the timeline. Each project has its own dedicated GitHub repository or submission portal. All code, design models, and documentations must be committed to the official channels before the specified deadline.",
  },
  {
    question: "Are there registration fees or prizes?",
    answer:
      "No, participation in all Summer of Innovation '26 events is completely free! The top performing teams in each challenge will receive exciting rewards including official merch, cash prizes, gift vouchers, and opportunities for continued faculty mentorship and research collaborations.",
  },
  {
    question: "Is there any prerequisite knowledge required to participate?",
    answer:
      "No strict prerequisites are required! While some challenges are advanced, many are beginner-friendly and designed to be excellent learning opportunities. Each challenge has dedicated mentors, resources, and discussion channels to support you in learning as you build.",
  },
  {
    question: "Can I change my team members after registering?",
    answer:
      "Yes, team changes are permitted during the initial phases of the problem statements. Please coordinate directly with the respective challenge leads or organizers in the dedicated WhatsApp group to update your team's details.",
  },
  {
    question: "Will I receive a certificate of participation?",
    answer:
      "Yes! All participants who submit a functional, valid solution that meets the baseline evaluation criteria will receive an official Certificate of Participation from the Technical Council, IIT Dharwad.",
  },
  {
    question: "Where can I ask doubts or get support during the project?",
    answer:
      "Each problem statement has a dedicated WhatsApp discussion group. You can join the group via the green WhatsApp buttons on the cards to chat directly with organizers, ask technical doubts, find team members, and get support.",
  },
  {
    question: "Are the deadlines strict, and where can I check the dates?",
    answer:
      "Yes, submission deadlines are strict to maintain a fair evaluation environment. You can check the specific release date and deadline duration for each challenge directly on its respective problem statement card under the 'Timeline' label, as well as the release schedules under the main 'Timeline' section.",
  },
  {
    question:
      "Do I need to submit a technical report along with my code or designs?",
    answer:
      "Yes! High-quality documentation and reports are major evaluation parameters. Besides working codebase repositories or 3D models, we highly value comprehensive write-ups, analysis diagrams, performance tables, and technical reasoning.",
  },
  {
    question: "Can I use open-source templates or third-party packages?",
    answer:
      "Absolutely! You are free to leverage open-source libraries, APIs, and frameworks unless explicitly restricted by a specific challenge description. However, you must credit all external materials and clearly detail your original contributions.",
  },
  {
    question:
      "Is there hardware support provided for robotics or electronics challenges?",
    answer:
      "Yes! Solvers showing high progress in the initial virtual simulation phases of hardware-centric challenges can request budget reimbursements, component sourcing, or makerspace lab access. Reach out directly to challenge leads in your WhatsApp group for guidance.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openedFaqs, setOpenedFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    if (openIndex !== index && !openedFaqs.includes(index)) {
      const nextOpened = [...openedFaqs, index];
      setOpenedFaqs(nextOpened);
      if (nextOpened.length >= 3) {
        window.dispatchEvent(
          new CustomEvent("soi-achievement", { detail: "curious-builder" }),
        );
      }
    }
  };

  return (
    <section
      id="faq"
      className="border-b-[3px] border-ink py-20 bg-background conic-pattern relative overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="font-display text-xs uppercase tracking-widest text-primary">
            Got Questions?
          </span>
          <h2 className="mt-2 font-display text-4xl uppercase md:text-6xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-[3px] border-ink bg-card shadow-brutal transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-base md:text-lg uppercase tracking-wide cursor-pointer transition-colors hover:bg-peach/30 select-none"
                >
                  <span className="pr-4">{item.question}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center border-[2px] border-ink font-mono text-base font-bold transition-all shadow-brutal-sm ${
                      isOpen
                        ? "bg-accent text-accent-foreground rotate-180"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[300px] border-t-[3px] border-ink"
                      : "max-h-0"
                  }`}
                >
                  <div className="p-5 font-body text-sm md:text-base leading-relaxed text-foreground/80 bg-peach/10">
                    {item.answer}
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
