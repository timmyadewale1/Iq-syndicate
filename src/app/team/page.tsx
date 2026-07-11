import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the team behind IQ Syndicate — a founding group with deep expertise in climate finance, platform development, private credit, business development, and development impact.",
};

// Ordered by seniority: Partners → Heads → Leads
const team = [
  {
    name: "Ghenzini Edet",
    file: "Ghenzini Edet",
    role: "Partner",
    focus: null,
    bio: null,
    tone: "photo-duotone-burgundy",
  },
  {
    name: "Gift Adaugo",
    file: "Gift Adaugo",
    role: "Partner",
    focus: null,
    bio: null,
    tone: "photo-duotone-forest",
  },
  {
    name: "Anietie Udoaka",
    file: "Anietie Udoaka",
    role: "Head",
    focus: "Platform & Product Development",
    bio: "Anietie is a software engineer and mobile development leader with a track record of building products used by millions. Bringing a unique blend of technical depth and scientific rigor — grounded in a B.Sc. in Biotechnology — Anietie has spent his career at the intersection of engineering and impact, leading mobile teams that shipped high-stakes fintech and travel applications at scale.",
    tone: "photo-duotone-gold",
  },
  {
    name: "Ilem Ukam",
    file: "Ilem Ilem",
    role: "Head",
    focus: "Risk & Private Credit",
    bio: null,
    tone: "photo-duotone-burgundy",
  },
  {
    name: "Regina Godwin",
    file: "Regina Godwin",
    role: "Head",
    focus: "Insights, Market Research & AI Intelligence",
    bio: null,
    tone: "photo-duotone-forest",
  },
  {
    name: "James Nwefuru",
    file: "James Nwefuru",
    role: "Head",
    focus: "Renewable Energy Business Development",
    bio: null,
    tone: "photo-duotone-gold",
  },
];

const roleChip: Record<string, string> = {
  Partner: "bg-primary text-white",
  Head:    "bg-forest text-white",
  Lead:    "bg-gold-dark text-white",
};

const partners = team.filter((m) => m.role === "Partner");
const rest     = team.filter((m) => m.role !== "Partner");

export default function TeamPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────
          HERO — warm cream, headline only (the grid
          of faces below IS the visual centrepiece).
      ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-cream pb-16 pt-36 md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-gold-light/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/6 blur-3xl"
          aria-hidden
        />
        <Container className="relative z-10">
          <Reveal direction="up">
            <p className="institutional-eyebrow">The Team</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 max-w-3xl text-charcoal">
              The People Behind IQ Syndicate
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-7 text-ink/72">
              A founding group united by a conviction that the financing gap
              for African climate ventures can be closed — bringing together
              expertise in climate finance, platform engineering, private
              credit, market intelligence, and business development.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          PARTNERS — two large portrait cards side by side
      ───────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((member, i) => (
              <Reveal key={member.name} direction={i === 0 ? "left" : "right"} delay={i * 90}>
                <div className="card-float group overflow-hidden rounded-3xl shadow-xl shadow-black/10">
                  {/* Photo */}
                  <div className="relative h-[400px] w-full overflow-hidden md:h-[460px]">
                    <Image
                      src={`/images/team/${member.file}.png`}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className={`absolute inset-0 ${member.tone} opacity-35`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                    {/* Role chip */}
                    <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg ${roleChip[member.role]}`}>
                      {member.role}
                    </span>
                  </div>

                  {/* Name strip */}
                  <div className="bg-cream px-7 py-6">
                    <h3 className="font-heading text-3xl text-charcoal">{member.name}</h3>
                    {member.focus && (
                      <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-primary">
                        {member.focus}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── Heads & Leads ── */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {rest.map((member, i) => {
              const hasBio = Boolean(member.bio);
              // Anietie (hasBio) spans 2 columns on md+
              return (
                <Reveal
                  key={member.name}
                  direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
                  delay={i * 80}
                  className={hasBio ? "md:col-span-2" : ""}
                >
                  <div
                    className={`card-float group overflow-hidden rounded-3xl shadow-xl shadow-black/10 ${
                      hasBio ? "flex flex-col md:flex-row" : ""
                    }`}
                  >
                    {/* Photo */}
                    <div
                      className={`relative overflow-hidden ${
                        hasBio
                          ? "h-72 shrink-0 md:h-auto md:w-[40%]"
                          : "h-[280px]"
                      }`}
                    >
                      <Image
                        src={`/images/team/${member.file}.png`}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className={`absolute inset-0 ${member.tone} opacity-35`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />

                      {/* Role chip */}
                      <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg ${roleChip[member.role]}`}>
                        {member.role}
                      </span>
                    </div>

                    {/* Text */}
                    <div className={`bg-cream p-6 ${hasBio ? "flex flex-col justify-center" : ""}`}>
                      <h3
                        className={`font-heading text-charcoal ${
                          hasBio ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                      >
                        {member.name}
                      </h3>
                      {member.focus && (
                        <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                          {member.focus}
                        </p>
                      )}
                      {member.bio && (
                        <p className="mt-4 text-[14px] leading-7 text-ink/70">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────
          CTA — burgundy card
      ───────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="card-float flex flex-col items-start justify-between gap-10 rounded-3xl bg-primary p-10 shadow-2xl shadow-primary/20 md:flex-row md:items-end md:p-14">
              <div className="max-w-lg">
                <h2 className="text-white">Want to work with us?</h2>
                <p className="mt-4 text-[15px] leading-7 text-white/82">
                  We are always open to conversations with climate founders,
                  institutional investors, and partner organisations building
                  Africa's climate future.
                </p>
              </div>
              <Link
                href="/apply"
                className="group inline-flex shrink-0 items-center gap-2 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Get in Touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}