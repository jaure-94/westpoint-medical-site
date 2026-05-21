import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Stethoscope, Heart, Sparkles, Pill, Activity, Scan, ArrowUpRight } from "lucide-react";
import dental from "@/assets/clinic/dental-1.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import aesthetics from "@/assets/clinic/aesthetics.jpg";
import resus from "@/assets/clinic/resuscitation.jpg";
import pharmacyImg from "@/assets/clinic/pharmacy.jpg";
import radiologyImg from "@/assets/clinic/radiology.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WestPoint Medical" },
      { name: "description", content: "General practice, dental, aesthetics & wellness, 24-hour pharmacy, emergency resuscitation, and longevity programs." },
    ],
  }),
  component: Services,
});

const groups = [
  {
    title: "General Practice",
    img: consult,
    icon: Stethoscope,
    blurb: "Same-day consultations, chronic care, screenings, vaccinations, travel medicine and referrals.",
    items: ["Consultations", "Chronic conditions", "Screenings & checkups", "Vaccinations", "Travel medicine"],
  },
  {
    title: "Dental",
    img: dental,
    icon: Heart,
    blurb: "Modern dental suites for routine and advanced care, in a calm room that doesn't feel like a clinic.",
    items: ["Cleanings & hygiene", "Fillings & restorations", "Root canal therapy", "Crowns & bridges", "Cosmetic dentistry"],
  },
  {
    title: "Aesthetics & Wellness",
    img: aesthetics,
    icon: Sparkles,
    blurb: "A dedicated wing for skin, body and longevity treatments delivered by trained medical staff.",
    items: ["Skin consultations", "Injectables", "IV wellness drips", "Body contouring", "Longevity programs"],
  },
  {
    title: "Emergency & Resuscitation",
    img: resus,
    icon: Activity,
    blurb: "A fully equipped resuscitation room with 24-hour medical staff on-site for urgent care.",
    items: ["24/7 emergency cover", "Resuscitation room", "Stabilisation & transfer", "Trauma care", "On-site doctor"],
  },
];


function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">What we do</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.98]">
          Joined-up care for <span className="italic text-gradient-green">every chapter.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          From a 3am pharmacy run to a planned dental restoration, the same team and the same record. Less repeating yourself, more being looked after.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 space-y-6">
        {groups.map((g, i) => {
          const Icon = g.icon;
          const reverse = i % 2 === 1;
          return (
            <article key={g.title} className="grid md:grid-cols-12 gap-6 rounded-3xl border border-border bg-card p-6 md:p-10 hover:shadow-soft transition-shadow">
              <div className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img src={g.img} alt={g.title} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">0{i + 1} — Service</span>
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl">{g.title}</h2>
                <p className="mt-4 text-muted-foreground max-w-xl">{g.blurb}</p>
                <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl max-w-xl">And the supporting cast.</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-background p-6 border border-border">
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-4 font-display text-xl">{title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto">Not sure what you need?</h2>
        <p className="mt-5 text-muted-foreground max-w-lg mx-auto">Tell us a little and we&apos;ll point you at the right room and the right person.</p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow">
          Talk to us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
}
