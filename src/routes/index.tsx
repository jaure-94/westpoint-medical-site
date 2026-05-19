import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/ServiceCard";
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
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";

import exteriorDay from "@/assets/clinic/exterior-day.jpg";
import exteriorWide from "@/assets/clinic/exterior-wide.jpg";
import wall from "@/assets/clinic/health-wellness-wall.jpg";
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

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 1, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.08 * i },
  }),
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rotatingWords = ["Heal.", "Restore.", "Thrive."];
const revealViewport = { once: true, amount: 0, margin: "0px 0px -10% 0px" } as const;

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

/* ────────────────────────────────────────────────────────── HERO ── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWordIndex((p) => (p + 1) % rotatingWords.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full">
      <div
        ref={ref}
        className="relative w-full overflow-hidden bg-ink text-cream min-h-[100svh] flex flex-col"
      >
        {/* Parallax background image */}
        <motion.div style={{ y, scale }} className="absolute inset-0 -z-0">
          <img
            src={exteriorDay}
            alt="WestPoint Medical clinic exterior"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Gradient overlays — darker on the left, fading transparent to the right */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/55 to-ink/95"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
        <div className="pointer-events-none absolute -top-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-primary/15 blur-3xl" />

        {/* Top brand row */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 pt-8 text-[10px] uppercase tracking-[0.28em] text-cream/60 md:px-12 md:pt-10 lg:px-16">
          <span>Harare · Zimbabwe</span>
          <span className="hidden sm:inline">Est. 2024 · Health · Wellness · Longevity</span>
          <span>24 / 7</span>
        </div>

        {/* Main copy */}
        <div className="relative z-10 mx-auto w-full max-w-[1500px] flex-1 px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream/75"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
              </span>
              Now open · Doors never close
            </div>

            <h1
              className="hero-load-in hero-load-in-delay-1 mt-8 font-display font-medium text-[3rem] sm:text-[4.5rem] lg:text-[6.25rem] leading-[0.98] tracking-tight"
            >
              A new standard
              <br />
              of care to{" "}
              <span className="relative inline-block align-baseline overflow-hidden h-[1em] min-w-[5ch]">
                {rotatingWords.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ y: i === 0 ? "110%" : "-110%", opacity: 0 }}
                    animate={
                      wordIndex === i
                        ? { y: "0%", opacity: 1 }
                        : { y: "-110%", opacity: 0 }
                    }
                    transition={{ duration: 0.7, ease }}
                    className="absolute inset-0 text-primary-glow font-display font-bold"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p
              className="hero-load-in hero-load-in-delay-2 mt-8 max-w-xl text-base md:text-lg leading-relaxed text-cream/80"
            >
              Personalised medical and wellness care designed to restore your strength,
              vitality and confidence — under one calm, considered roof, around the clock.
            </p>

            <div className="hero-load-in hero-load-in-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary-glow px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                Book a visit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="tel:+263780969577"
                className="group inline-flex items-center gap-3 rounded-full border border-cream/20 px-5 py-3 text-cream backdrop-blur transition-colors hover:bg-cream/5"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-cream/10">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium tracking-wide">+263 780 969 577</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-6 border-t border-cream/10 px-6 py-6 text-cream/70 md:px-12 lg:px-16">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em]">
            <span className="inline-block h-px w-8 bg-cream/30" />
            Scroll to explore
          </div>
          <dl className="flex items-center gap-8 md:gap-12">
            {[
              { k: "24/7", v: "Emergency" },
              { k: "4+", v: "Specialties" },
              { k: "1k+", v: "Patients" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl md:text-3xl text-cream">{s.k}</dt>
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
    "General Practice",
    "Dental Care",
    "Aesthetics",
    "24h Pharmacy",
    "Wellness",
    "Emergency",
    "Longevity",
    "Consultations",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-background py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap text-xl md:text-2xl font-display text-foreground/70"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12">
            {it}
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          </span>
        ))}
      </motion.div>
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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        variants={stagger}
        className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-3 gap-12"
      >
        {pillars.map((p, i) => (
          <motion.div key={p.word} variants={fadeUp} className="group">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              0{i + 1}
            </div>
            <div className="mt-3 font-display text-4xl md:text-6xl">
              {p.word}
              <span className="text-primary">.</span>
            </div>
            <p className="mt-5 text-muted-foreground max-w-xs leading-relaxed">{p.desc}</p>
            <div className="mt-6 h-px w-12 bg-primary transition-all duration-500 group-hover:w-24" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── SERVICES ── */
function Services() {
  const items = [
    {
      icon: Stethoscope,
      title: "General Practice",
      img: consultation,
      tag: "Walk-in & booked",
      blurb: "Same-day consultations, chronic care, screenings and referrals from a team that remembers you.",
    },
    {
      icon: Heart,
      title: "Dental Care",
      img: dental,
      tag: "Modern surgery",
      blurb: "Routine and advanced dentistry in a calm, modern suite — gentle hands, sharp tools.",
    },
    {
      icon: Sparkles,
      title: "Aesthetics & Wellness",
      img: aesthetics,
      tag: "Looking & feeling",
      blurb: "Skin, body and longevity treatments delivered by trained medical staff, never technicians.",
    },
    {
      icon: Pill,
      title: "24h Pharmacy",
      img: wall,
      tag: "Always stocked",
      blurb: "Prescriptions, OTC and dispensing support — open every hour of the day and night.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        variants={stagger}
        className="flex flex-wrap items-end justify-between gap-6 mb-14"
      >
        <motion.div variants={fadeUp}>
          <div className="text-xs uppercase tracking-[0.25em] text-primary">Our care</div>
          <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-2xl leading-[1.05]">
            Everything you need, <span className="italic text-primary">under one roof.</span>
          </h2>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        variants={stagger}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((item) => (
          <motion.div key={item.title} variants={fadeUp}>
            <ServiceCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── STORY ── */
function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const bullets = [
    "Modern, internationally-benchmarked equipment",
    "Sterilisation and protocols you can rely on",
    "Calm, considered interiors designed for comfort",
    "Same-day appointments, day or night",
  ];

  return (
    <section ref={ref} className="relative bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial={{ opacity: 1, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={revealViewport}
          transition={{ duration: 1, ease }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-soft">
            <motion.img
              style={{ y }}
              src={exteriorWide}
              alt="WestPoint exterior"
              className="h-[28rem] md:h-[34rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>
          <div className="absolute -top-6 left-6 md:-top-8 md:left-8 hidden md:flex items-center gap-2 rounded-full bg-ink text-cream px-4 py-2 text-[10px] uppercase tracking-[0.22em] shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Built for you
          </div>
        </motion.div>

        {/* Copy side */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-primary">
            Why WestPoint
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]"
          >
            A quieter kind of care, <span className="italic text-primary">held to a higher bar.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg"
          >
            We invested in the building so we could invest more attention in you. Every
            finish, every room, every protocol — chosen with intention.
          </motion.p>

          <motion.ul variants={stagger} className="mt-8 space-y-3">
            {bullets.map((b) => (
              <motion.li key={b} variants={fadeUp} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/85">{b}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
            >
              Read our story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── VALUES ── */
function Values() {
  const items = [
    {
      icon: Clock,
      title: "Always open",
      body: "Round-the-clock medical staff and on-site pharmacy. We are here when you need us — including at 3am.",
    },
    {
      icon: ShieldCheck,
      title: "Modern standards",
      body: "Equipment, sterilisation and protocols held to international standards across every room.",
    },
    {
      icon: Heart,
      title: "Human first",
      body: "We invested in the building so we could invest more attention in you. Every detail is intentional.",
    },
    {
      icon: Calendar,
      title: "Same-day care",
      body: "Walk in, call, or book online — most days we'll see you within the hour.",
    },
  ];
  return (
    <section className="relative bg-ink text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={dental1} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        variants={stagger}
        className="relative mx-auto max-w-7xl px-6 py-24 md:py-32"
      >
        <motion.div variants={fadeUp} className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">
            Our promise
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">
            Four things you can <span className="italic text-primary-glow">always</span> expect.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, ease }}
              className="rounded-2xl border border-cream/10 bg-cream/5 backdrop-blur p-6"
            >
              <Icon className="h-6 w-6 text-primary-glow" />
              <div className="mt-5 font-display text-xl">{title}</div>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────── CTA ── */
function CtaBlock() {
  return (
    <section className="bg-background">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
        variants={stagger}
        className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          Ready when you are
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="mt-6 font-display text-4xl md:text-6xl max-w-3xl mx-auto leading-[1.02]"
        >
          Care, the way it should have <span className="italic text-primary">always felt.</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg"
        >
          Walk in, call, or book online. We&apos;ll take it from there.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-3 flex-wrap">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:bg-primary/90 transition-colors"
          >
            Book a visit <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+263780969577"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium hover:bg-muted transition-colors"
          >
            Call +263 780 969 577
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
