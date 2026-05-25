import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowUpRight,
  Heart,
  Stethoscope,
  Sparkles,
  Pill,
  Clock,
  ShieldCheck,
  Phone,
  Calendar,
  CheckCircle2,
} from "lucide-react";

import exteriorDay from "@/assets/clinic/exterior-day.jpg";
import exteriorWide from "@/assets/clinic/WestPoint-4.jpg.jpeg";
import pharmacy from "@/assets/clinic/pharmacy.jpeg";
import consultation from "@/assets/clinic/consultation.jpg";
import dental from "@/assets/clinic/dental-2.jpg";
import dental1 from "@/assets/clinic/dental-1.jpg";
import aesthetics from "@/assets/clinic/aesthetics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WestPoint Medical — Health. Wellness. Longevity." },
      {
        name: "description",
        content:
          "A 24-hour modern medical and wellness clinic. General practice, dental, aesthetics & pharmacy under one calm, considered roof.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: exteriorDay, fetchPriority: "high" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <Pillars />
      <Services />
      <Story />
      <Values />
      <CtaBlock />
    </Layout>
  );
}

/* ─────────────────────────────────────────────────────────── HERO ── */
function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full overflow-hidden bg-ink text-cream min-h-[100svh] flex flex-col">
        <div className="absolute inset-0 -z-0">
          <img
            src={exteriorDay}
            alt="WestPoint Medical clinic exterior"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/55 to-ink/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
        <div className="pointer-events-none absolute -top-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-primary/15 blur-3xl" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between gap-4 px-5 pt-8 text-[9px] uppercase tracking-[0.24em] text-cream/60 sm:px-6 sm:text-[10px] sm:tracking-[0.28em] md:px-12 md:pt-10 lg:px-16">
          <span>Harare · Zimbabwe</span>
          <span className="hidden sm:inline">Est. 2024 · Health · Wellness · Longevity</span>
          <span>24 / 7</span>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1500px] flex-1 px-5 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 md:pt-24 pb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream/75 hero-load-in">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
              Now open · Doors never close
            </div>

            <h1 className="mt-6 sm:mt-8 font-display font-medium text-[2.5rem] leading-[0.98] tracking-tight sm:text-[4.5rem] lg:text-[6.25rem] hero-load-in hero-load-in-delay-1">
              A new standard
              <br />
              of <span className="text-primary-glow font-display font-bold">care.</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg hero-load-in hero-load-in-delay-2">
              Personalised medical and wellness care designed to restore your strength,
              vitality and confidence — under one calm, considered roof, around the clock.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 hero-load-in hero-load-in-delay-3">
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary-glow px-7 py-3.5 text-sm font-medium text-ink"
              >
                Book a visit
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+263780969577"
                className="inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-cream/20 px-5 py-3 text-cream backdrop-blur"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium tracking-wide">+263 780 969 577</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-4 border-t border-cream/10 px-5 sm:px-6 py-6 text-cream/70 md:px-12 lg:px-16">
          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.28em]">
            <span className="inline-block h-px w-8 bg-cream/30" />
            Scroll to explore
          </div>
          <dl className="flex w-full items-center justify-between gap-4 sm:w-auto sm:gap-8 md:gap-12">
            {[
              { k: "24/7", v: "Emergency" },
              { k: "4+", v: "Specialties" },
              { k: "1k+", v: "Patients" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-xl sm:text-2xl md:text-3xl text-cream">{s.k}</dt>
                <dd className="text-[10px] uppercase tracking-[0.22em] text-cream/50">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── MARQUEE ── */
function Marquee() {
  const items = [
    "Accident and Emergency",
    "Consultation",
    "Dental Surgery",
    "Radiology",
    "Pharmacy",
    "Aesthetics and Wellness"
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 text-center font-display text-lg text-foreground/70 sm:gap-x-8 sm:px-6 sm:text-xl md:text-2xl">
        {items.map((it) => (
          <span key={it} className="flex items-center gap-3 sm:gap-4">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────── PILLARS ── */
function Pillars() {
  const pillars = [
    { word: "Health", desc: "Acute and preventative medicine, delivered with patience and precision." },
    { word: "Wellness", desc: "Aesthetics, longevity programs and daily habits that compound." },
    { word: "Longevity", desc: "Care that thinks in decades, not appointments." },
  ];
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:gap-12 sm:px-6 sm:py-24 md:grid-cols-3 md:px-8 md:py-32 lg:px-16">
        {pillars.map((p, i) => (
          <Reveal key={p.word} delay={i * 120} className="group">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">0{i + 1}</div>
            <div className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl">
              {p.word}
              <span className="text-primary">.</span>
            </div>
            <p className="mt-5 text-muted-foreground max-w-xs leading-relaxed">{p.desc}</p>
            <div className="mt-6 h-px w-16 bg-primary" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── SERVICES ── */
function Services() {
  const items = [
    { icon: Stethoscope, title: "General Practice", img: consultation, tag: "Walk-in & booked", blurb: "Same-day consultations, chronic care, screenings and referrals from a team that remembers you." },
    { icon: Heart, title: "Dental Care", img: dental, tag: "Modern surgery", blurb: "Routine and advanced dentistry in a calm, modern suite — gentle hands, sharp tools." },
    { icon: Sparkles, title: "Aesthetics & Wellness", img: aesthetics, tag: "Looking & feeling", blurb: "Skin, body and longevity treatments delivered by trained beauty therapists and medical staff." },
    { icon: Pill, title: "24h Pharmacy", img: pharmacy, tag: "Always stocked", blurb: "Prescriptions, OTC and dispensing support — open every hour of the day and night." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:px-16">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-14">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Our care</div>
          <h2 className="mt-3 font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl">
            Everything you need, <span className="italic text-primary">under one roof.</span>
          </h2>
        </div>
        <div>
          <Link to="/services" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium hover:text-primary">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <ServiceCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── STORY ── */
function Story() {
  const bullets = [
    "Modern, internationally-benchmarked equipment",
    "Sterilisation and protocols you can rely on",
    "Calm, considered interiors designed for comfort",
    "Same-day appointments, day or night",
  ];

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-36">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <img
              src={exteriorWide}
              alt="WestPoint exterior"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-[34rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
          <div className="absolute -top-6 left-6 md:-top-8 md:left-8 hidden md:flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-2 text-[10px] uppercase tracking-[0.22em] shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Built for you
          </div>
        </Reveal>

        <div>
          <Reveal className="text-xs uppercase tracking-[0.25em] text-primary">Why WestPoint</Reveal>
          <Reveal as="h2" delay={80} className="mt-4 font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
            A quieter kind of care, <span className="italic text-primary">held to a higher bar.</span>
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground">
            We invested in the building so we could invest more attention in you. Every
            finish, every room, every protocol — chosen with intention.
          </Reveal>

          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <Reveal as="li" key={b} delay={240 + i * 60} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/85">{b}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={520} className="mt-10">
            <Link to="/about" className="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-foreground hover:text-primary">
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── VALUES ── */
function Values() {
  const items = [
    { icon: Clock, title: "Always open", body: "Round-the-clock medical staff and on-site pharmacy. We are here when you need us — including at 3am." },
    { icon: ShieldCheck, title: "Modern standards", body: "Equipment, sterilisation and protocols held to international standards across every room." },
    { icon: Heart, title: "Human first", body: "We invested in the building so we could invest more attention in you. Every detail is intentional." },
    { icon: Calendar, title: "Same-day care", body: "Walk in, call, or book online." },
  ];
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={dental1} alt="" loading="lazy" decoding="async" fetchPriority="low" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:px-16">
        <Reveal className="mb-10 max-w-2xl sm:mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Our promise</div>
          <h2 className="mt-3 font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
            Four things you can <span className="italic text-primary-glow">always</span> expect.
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100} className="rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur p-6">
              <Icon className="h-6 w-6 text-primary-glow" />
              <div className="mt-5 font-display text-xl">{title}</div>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── CTA ── */
function CtaBlock() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24 md:py-32">
        <Reveal className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          Ready when you are
        </Reveal>
        <Reveal as="h2" delay={100} className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">
          Care, the way it should have <span className="italic text-primary">always felt.</span>
        </Reveal>
        <Reveal as="p" delay={200} className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
          Walk in, call, or book online. We&apos;ll take it from there.
        </Reveal>
        <Reveal delay={300} className="mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3">
          <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary/90">
            Book a visit <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href="tel:+263780969577" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium hover:bg-muted">
            Call +263 780 969 577
          </a>
        </Reveal>
      </div>
    </section>
  );
}
