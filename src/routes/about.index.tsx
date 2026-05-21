import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
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
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">About us</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.98]">
          We made a clinic that <span className="italic text-gradient-green">feels</span> like rest.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          WestPoint Medical is a new, modern facility built around a simple belief: the building you walk into shapes the care you receive. So we designed every room, hallway and finish with the same intention we bring to clinical work.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-12 gap-4">
          <img src={exterior} alt="WestPoint Medical entrance" className="md:col-span-8 aspect-[16/10] w-full object-cover rounded-3xl" />
          <img src={wall} alt="Health Wellness Longevity wall" className="md:col-span-4 aspect-[3/4] md:aspect-auto w-full object-cover rounded-3xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl">Our philosophy</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg text-foreground/80">
          <p>Healthcare in our region rarely feels designed for the person on the receiving end. We wanted to change that — not with slogans, but with floor plans, lighting, signage, and quiet rooms.</p>
          <p>Health, Wellness, and Longevity guide every decision. From the 24-hour pharmacy at the front, to dental and consultation suites that look more like studios than clinics, to an aesthetics &amp; wellness wing built for the long game.</p>
          <p>We&apos;re a small, considered team. You&apos;ll see the same faces. You&apos;ll be remembered.</p>
        </div>
      </section>

      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            { k: "01", t: "Built, not branded", d: "The space came before the marketing. Walk in and see the difference." },
            { k: "02", t: "Always staffed", d: "Doctors, nurses and pharmacists on-site, 24 hours a day, every day of the year." },
            { k: "03", t: "Joined-up care", d: "Your GP, dentist, aesthetician and pharmacist sharing one roof and one record." },
          ].map((v) => (
            <div key={v.k}>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{v.k}</div>
              <div className="mt-3 font-display text-2xl">{v.t}</div>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden bg-ink text-background">
        <div className="absolute inset-0 bg-grain opacity-[0.12]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Direction</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.02]">
              Where we're <span className="italic text-gradient-green">going</span>, and why.
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Vision</div>
              <p className="mt-5 text-lg leading-relaxed text-background/85">
                To be Zimbabwe's leading network of modern medical centers — rooted in community, driven by innovation, and dedicated to delivering compassionate, world-class healthcare.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.25em] text-primary-glow">Mission</div>
              <p className="mt-5 text-base leading-relaxed text-background/85">
                To provide accessible, high-quality healthcare through modern facilities, advanced technology and a team that genuinely cares — promoting wellness, restoring dignity, and creating a welcoming environment where every patient is valued, from our local communities to every corner of Zimbabwe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Our values</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.02]">
              Ten quiet promises we keep.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-muted-foreground text-lg">
            Not posters on a wall — operating principles. They shape how we hire, how we design our rooms, and how we answer the phone at 3am.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden ring-1 ring-border">
          {values.map(({ n, t, d, Icon }) => (
            <div key={n} className="bg-card p-8 flex flex-col gap-4 transition-colors hover:bg-accent/30">
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs tracking-[0.25em] text-muted-foreground">{n}</span>
              </div>
              <div className="font-display text-xl">{t}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-4">
        <img src={consult} alt="Consultation room interior" className="aspect-[4/5] w-full object-cover rounded-3xl" />
        <div className="flex flex-col justify-end p-2 md:p-10">
          <h2 className="font-display text-4xl md:text-5xl">Come and see for yourself.</h2>
          <p className="mt-5 text-muted-foreground max-w-md">The fastest way to understand WestPoint is to walk in. We&apos;ll make you a coffee.</p>
          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow">
              Plan a visit <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
