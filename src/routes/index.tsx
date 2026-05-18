import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowUpRight, Heart, Stethoscope, Sparkles, Pill, Clock, ShieldCheck } from "lucide-react";
import exteriorNight from "@/assets/clinic/exterior-night.jpg";
import wall from "@/assets/clinic/health-wellness-wall.jpg";
import consult from "@/assets/clinic/consultation.jpg";
import dental from "@/assets/clinic/dental-2.jpg";
import aesthetics from "@/assets/clinic/aesthetics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WestPoint Medical — Health. Wellness. Longevity." },
      { name: "description", content: "A 24-hour modern medical and wellness clinic. General practice, dental, aesthetics & pharmacy under one calm, considered roof." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now open 24 hours
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]">
              A quieter kind of <span className="text-gradient-green italic">care.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              WestPoint Medical brings general practice, dental, aesthetics and a 24-hour pharmacy together inside one calm, modern facility — built around how it feels to be looked after well.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                Book a visit <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium hover:bg-muted">
                Explore services
              </Link>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { k: "24/7", v: "Emergency care" },
                { k: "4", v: "Specialties" },
                { k: "1", v: "Roof" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <img src={exteriorNight} alt="WestPoint Medical exterior, illuminated at night" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-cream/70">WestPoint Centre</div>
                  <div className="font-display text-2xl">Harare, Zimbabwe</div>
                </div>
                <div className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium">24h</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block aspect-square w-40 overflow-hidden rounded-2xl shadow-soft border-4 border-background">
              <img src={wall} alt="Health Wellness Longevity wall" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-12">
          {[
            { word: "Health", desc: "Acute and preventative medicine, delivered with patience and precision." },
            { word: "Wellness", desc: "Aesthetics, longevity programs and daily habits that compound." },
            { word: "Longevity", desc: "Care that thinks in decades, not appointments." },
          ].map((p, i) => (
            <div key={p.word} className="group">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">0{i + 1}</div>
              <div className="mt-3 font-display text-4xl md:text-5xl">{p.word}<span className="text-primary">.</span></div>
              <p className="mt-4 text-muted-foreground max-w-xs">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Our care</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-xl">Everything you need, under one considered roof.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary">All services <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Stethoscope, title: "General Practice", img: consult },
            { icon: Heart, title: "Dental Care", img: dental },
            { icon: Sparkles, title: "Aesthetics & Wellness", img: aesthetics },
            { icon: Pill, title: "24h Pharmacy", img: wall },
          ].map(({ icon: Icon, title, img }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <Icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-xl">{title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="border-t border-border bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-10">
          {[
            { icon: Clock, title: "Always open", body: "Round-the-clock medical staff and on-site pharmacy. We are here when you need us — including at 3am." },
            { icon: ShieldCheck, title: "Modern standards", body: "Equipment, sterilisation and protocols held to international standards across every room." },
            { icon: Heart, title: "Human first", body: "We invested in the building so we could invest more attention in you. Every detail is intentional." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="h-6 w-6 text-primary-glow" />
              <div className="mt-4 font-display text-2xl">{title}</div>
              <p className="mt-3 text-sm text-cream/70 max-w-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl max-w-3xl mx-auto">
          Care, the way it should have always felt.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Walk in, call, or book online. We&apos;ll take it from there.
        </p>
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow">Book a visit <ArrowUpRight className="h-4 w-4" /></Link>
          <a href="tel:+263780969577" className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium hover:bg-muted">Call +263 780 969 577</a>
        </div>
      </section>
    </Layout>
  );
}
