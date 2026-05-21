import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import wall from "@/assets/clinic/health-wellness-wall.jpg";
import exterior from "@/assets/clinic/exterior-wide.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import team from "@/assets/clinic/team.jpg";
import { ArrowUpRight } from "lucide-react";

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

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <img src={team} alt="The WestPoint Medical team" className="w-full aspect-[21/9] object-cover rounded-3xl" />
      </section>
    </Layout>
  );
}
