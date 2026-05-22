import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import { Layout } from "@/components/site/Layout";
import { useIsMobile } from "@/hooks/use-mobile";
import wall from "@/assets/clinic/health-wellness-wall.jpg";
import exterior from "@/assets/clinic/exterior-wide.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import {
  ArrowUpRight,
  Heart,
  Award,
  ShieldCheck,
  Lightbulb,
  Globe2,
  UserRound,
  Users,
  Sprout,
  HandHeart,
  HeartHandshake,
} from "lucide-react";

const values = [
  { n: "01", t: "Compassion", d: "We treat every patient with kindness, empathy, dignity and respect.", Icon: Heart },
  { n: "02", t: "Excellence", d: "We pursue the highest standards in healthcare, service delivery and professionalism.", Icon: Award },
  { n: "03", t: "Integrity", d: "We act with honesty, transparency, accountability and ethical responsibility at all times.", Icon: ShieldCheck },
  { n: "04", t: "Innovation", d: "We embrace modern medicine, technology and creative solutions to improve patient care.", Icon: Lightbulb },
  { n: "05", t: "Accessibility", d: "We believe quality healthcare should be available, affordable and reachable for every community.", Icon: Globe2 },
  { n: "06", t: "Patient-Centered Care", d: "Every decision we make prioritizes the comfort, safety and wellbeing of our patients.", Icon: UserRound },
  { n: "07", t: "Teamwork", d: "We collaborate across departments, professions and communities to achieve better outcomes together.", Icon: Users },
  { n: "08", t: "Growth", d: "We are committed to continuous learning, expansion and improving lives across Zimbabwe.", Icon: Sprout },
  { n: "09", t: "Respect", d: "We value every individual — patients, staff, partners and communities alike.", Icon: HandHeart },
  { n: "10", t: "Community Impact", d: "We aim to uplift and strengthen the communities we serve through trusted healthcare partnerships.", Icon: HeartHandshake },
];

const SPRING = { type: "spring" as const, stiffness: 100, damping: 20 };
const VIEWPORT = { once: true, margin: "-100px 0px" } as const;

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About — WestPoint Medical" },
      { name: "description", content: "We built WestPoint Medical as a calm, modern home for general practice, dental, aesthetics and pharmacy — all under one roof, open 24 hours." },
    ],
  }),
  component: About,
});

function About() {
  const isMobile = useIsMobile();
  const yHero = isMobile ? 10 : 20;
  const yReveal = isMobile ? 15 : 30;

  const heroContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const heroItem: Variants = {
    hidden: { opacity: 0, y: yHero },
    show: { opacity: 1, y: 0, transition: SPRING },
  };
  const reveal: Variants = {
    hidden: { opacity: 0, y: yReveal },
    show: { opacity: 1, y: 0, transition: SPRING },
  };
  const revealContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <Layout>
      <motion.section
        className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-12"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={heroItem} className="text-xs uppercase tracking-[0.25em] text-primary">About us</motion.div>
        <motion.h1 variants={heroItem} className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[1.02] sm:leading-[0.98]">
          We made a clinic that <span className="italic text-gradient-green">feels</span> like rest.
        </motion.h1>
        <motion.p variants={heroItem} className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground">
          WestPoint Medical is a new, modern facility built around a simple belief: the building you walk into shapes the care you receive. So we designed every room, hallway and finish with the same intention we bring to clinical work.
        </motion.p>
      </motion.section>

      <motion.section
        className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-10 sm:py-12"
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <motion.img
            variants={reveal}
            src={exterior}
            alt="WestPoint Medical entrance"
            loading="lazy"
            decoding="async"
            className="md:col-span-8 aspect-[16/10] w-full object-cover rounded-2xl sm:rounded-3xl"
          />
          <motion.img
            variants={reveal}
            src={wall}
            alt="Health Wellness Longevity wall"
            loading="lazy"
            decoding="async"
            className="md:col-span-4 aspect-[16/10] md:aspect-auto w-full object-cover rounded-2xl sm:rounded-3xl"
          />
        </div>
      </motion.section>

      <motion.section
        className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.div variants={reveal} className="md:col-span-5">
          <h2 className="font-display text-3xl sm:text-4xl">Our philosophy</h2>
        </motion.div>
        <motion.div variants={reveal} className="md:col-span-7 space-y-5 sm:space-y-6 text-base sm:text-lg text-foreground/80">
          <p>Healthcare in our region rarely feels designed for the person on the receiving end. We wanted to change that — not with slogans, but with floor plans, lighting, signage, and quiet rooms.</p>
          <p>Health, Wellness, and Longevity guide every decision. From the 24-hour pharmacy at the front, to dental and consultation suites that look more like studios than clinics, to an aesthetics &amp; wellness wing built for the long game.</p>
          <p>We&apos;re a small, considered team. You&apos;ll see the same faces. You&apos;ll be remembered.</p>
        </motion.div>
      </motion.section>

      <section className="border-y border-border bg-cream">
        <motion.div
          className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {[
            { k: "01", t: "Built, not branded", d: "The space came before the marketing. Walk in and see the difference." },
            { k: "02", t: "Always staffed", d: "Doctors, nurses and pharmacists on-site, 24 hours a day, every day of the year." },
            { k: "03", t: "Joined-up care", d: "Your GP, dentist, aesthetician and pharmacist sharing one roof and one record." },
          ].map((v) => (
            <motion.div key={v.k} variants={reveal} className="sm:last:col-span-2 md:last:col-span-1">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{v.k}</div>
              <div className="mt-3 font-display text-2xl">{v.t}</div>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-ink text-background">
        <div className="absolute inset-0 bg-grain opacity-[0.12]" aria-hidden />
        <motion.div
          className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={reveal} className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Direction</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
              Where we&apos;re <span className="italic text-gradient-green">going</span>, and why.
            </h2>
          </motion.div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <motion.div variants={reveal} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Vision</div>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-background/85">
                To be Zimbabwe&apos;s leading network of modern medical centers — rooted in community, driven by innovation, and dedicated to delivering compassionate, world-class healthcare.
              </p>
            </motion.div>
            <motion.div variants={reveal} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Mission</div>
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-background/85">
                To provide accessible, high-quality healthcare through modern facilities, advanced technology and a team that genuinely cares — promoting wellness, restoring dignity, and creating a welcoming environment where every patient is valued, from our local communities to every corner of Zimbabwe.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 md:py-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-end"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          <motion.div variants={reveal} className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Our values</div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
              Ten quiet promises we keep.
            </h2>
          </motion.div>
          <motion.p variants={reveal} className="md:col-span-6 md:col-start-7 text-muted-foreground text-base sm:text-lg">
            Not posters on a wall — operating principles. They shape how we hire, how we design our rooms, and how we answer the phone at 3am.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden ring-1 ring-border"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
        >
          {values.map(({ n, t, d, Icon }) => (
            <motion.div
              key={n}
              variants={reveal}
              className="bg-card p-6 sm:p-8 flex flex-col gap-4 transition-colors hover:bg-accent/30"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs tracking-[0.25em] text-muted-foreground">{n}</span>
              </div>
              <div className="font-display text-xl">{t}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-4 items-stretch"
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
      >
        <motion.img
          variants={reveal}
          src={consult}
          alt="Consultation room interior"
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover rounded-2xl sm:rounded-3xl"
        />
        <motion.div variants={reveal} className="flex flex-col justify-end p-0 md:p-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Come and see for yourself.</h2>
          <p className="mt-5 text-muted-foreground max-w-md text-base sm:text-lg">The fastest way to understand WestPoint is to walk in. We&apos;ll make you a coffee.</p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow"
            >
              Plan a visit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </motion.section>

    </Layout>
  );
}
