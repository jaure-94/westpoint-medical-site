import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Stethoscope, Heart, Sparkles, Pill, Activity, Scan, ArrowUpRight } from "lucide-react";
import dental from "@/assets/clinic/dental-1.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import aesthetics from "@/assets/clinic/aesthetics.jpg";
import resus from "@/assets/clinic/resuscitation.jpg";
import pharmacyImg from "@/assets/clinic/pharmacy-2.jpeg";
import radiologyImg from "@/assets/clinic/radiology.jpeg";
import dentalLogo from "@/assets/clinic/logos/dental.png";
import wellnessLogo from "@/assets/clinic/logos/wellness.png";
import emergencyLogo from "@/assets/clinic/logos/emergency.png";
import pharmaciesLogo from "@/assets/clinic/logos/pharmacies.png";
import radiologyLogo from "@/assets/clinic/logos/radiology.png";

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
    title: "Emergency & Resuscitation",
    img: resus,
    icon: Activity,
    logo: emergencyLogo,
    blurb: "A fully equipped resuscitation room with 24-hour medical staff on-site for urgent care.",
    items: ["24/7 emergency cover", "Resuscitation room", "Stabilisation & transfer", "Trauma care", "On-site doctor"],
  },
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
    logo: dentalLogo,
    blurb: "Modern dental suites for routine and advanced care, in a calm room that doesn't feel like a clinic.",
    items: ["Cleanings & hygiene", "Fillings & restorations", "Root canal therapy", "Crowns & bridges", "Cosmetic dentistry"],
  },
  {
    title: "Radiology",
    img: radiologyImg,
    icon: Scan,
    logo: radiologyLogo,
    blurb: "State-of-the-art diagnostic imaging including X-ray, ultrasound and CT with rapid turnaround and specialist reporting.",
    items: ["X-ray imaging", "Ultrasound", "Rapid reporting", "Specialist referrals"],
  },
  {
    title: "Pharmacies",
    img: pharmacyImg,
    icon: Pill,
    logo: pharmaciesLogo,
    blurb: "24-hour pharmacy services with dispensing, OTC support and expert medication guidance available around the clock.",
    items: ["24/7 dispensing", "OTC medications", "Prescription support", "Medication counselling", "Health supplements"],
  },
  {
    title: "Aesthetics & Wellness",
    img: aesthetics,
    icon: Sparkles,
    logo: wellnessLogo,
    blurb: "A dedicated wing for skin, body and longevity treatments delivered by trained medical staff.",
    items: ["Skin consultations", "Laser weight loss", "Laser treatments", "IV bar", "Massages", "Facial treatments", "Manicures and pedicures"],
  },
];


function Services() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">What we do</div>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[0.98]">
          Joined-up care for <span className="italic text-gradient-green">every chapter.</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground">
          From a 3am pharmacy run to a planned dental restoration, the same team and the same record. Less repeating yourself, more being looked after.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pb-16 sm:pb-20 space-y-5 sm:space-y-6">
        {groups.map((g, i) => {
          const Icon = g.icon;
          const reverse = i % 2 === 1;
          return (
            <article key={g.title} className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-soft transition-shadow">
              <div className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl sm:rounded-2xl">
                  <img src={g.img} alt={g.title} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                {g.logo ? (
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="inline-flex items-center justify-center rounded-xl bg-white ring-1 ring-border px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm">
                      <img
                        src={g.logo}
                        alt={`${g.title} logo`}
                        className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">0{i + 1} — Service</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">0{i + 1} — Service</span>
                  </div>
                )}
                <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl">{g.title}</h2>
                <p className="mt-3 sm:mt-4 text-muted-foreground max-w-xl">{g.blurb}</p>
                <ul className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 max-w-md">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 py-20 sm:py-24 md:py-32 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl max-w-2xl mx-auto">Not sure what you need?</h2>
        <p className="mt-4 sm:mt-5 text-muted-foreground max-w-lg mx-auto">Tell us a little and we&apos;ll point you at the right room and the right person.</p>
        <Link to="/contact" className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-medium text-primary-foreground shadow-glow min-h-[44px]">
          Talk to us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
}
