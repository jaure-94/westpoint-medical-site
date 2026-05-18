import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowUpRight, Heart, Stethoscope, Sparkles, Pill, Clock, ShieldCheck, Phone, Calendar, Star } from "lucide-react";
import { motion } from "motion/react";
import consultation from "@/assets/clinic/consultation.jpg";
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

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, ease, delay: 0.08 * i } }),
};

function Home() {
  return (
    <Layout>
      {/* HERO — rounded dark-green stage with overlapping form card, inspired by the reference */}
      <section className="px-3 pt-3 pb-24 md:pb-32">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-ink text-cream">
          {/* ambient layers */}
          <div className="absolute inset-0 opacity-[0.05] bg-grain pointer-events-none" />
          <div className="absolute -top-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-primary/25 blur-3xl pointer-events-none" />
          {/* faint oversized logo mark, like the reference footer */}
          <svg viewBox="0 0 40 40" className="pointer-events-none absolute -right-20 top-1/3 h-[28rem] w-[28rem] opacity-[0.05]" aria-hidden>
            <path d="M14 4h7v10h10v7H21v10h-7V21H4v-7h10z" fill="currentColor" className="text-primary-glow" />
          </svg>

          <div className="relative grid lg:grid-cols-12 gap-8 px-6 md:px-12 pt-14 md:pt-20 pb-10">
            {/* LEFT — copy */}
            <motion.div
              className="lg:col-span-7 lg:pr-8"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cream/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-glow opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
                </span>
                Now open · 24 hours
              </motion.div>

              <motion.h1 variants={fadeUp} className="mt-7 font-display font-semibold text-[2.75rem] sm:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-tight">
                Heal. Restore. <br className="hidden sm:block" />
                <span className="text-primary-glow font-light italic">Thrive Again.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-7 max-w-lg text-base md:text-[1.05rem] leading-relaxed text-cream/70">
                Personalised medical and wellness care designed to restore your strength, vitality and confidence — under one calm, considered roof, around the clock.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-5">
                <a href="tel:+263780969577" className="group inline-flex items-center gap-3 text-cream">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-glow text-ink transition-transform group-hover:scale-110">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-cream/50">24h reception</span>
                    <span className="block font-display text-xl">+263 780 969 577</span>
                  </span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — photo */}
            <motion.div
              className="lg:col-span-5 relative min-h-[24rem] lg:min-h-[34rem]"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease }}
            >
              <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                <img src={consultation} alt="A WestPoint clinician with a patient" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
              </div>

              {/* floating trust card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease }}
                className="absolute -bottom-4 right-4 md:right-6 flex items-center gap-3 rounded-2xl bg-cream/95 backdrop-blur px-4 py-3 text-ink shadow-soft"
              >
                <div className="flex -space-x-2">
                  {[aesthetics, dental, wall].map((src, i) => (
                    <img key={i} src={src} alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-cream" />
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <div className="text-xs text-ink/70">Trusted by 1,000+ patients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* BOTTOM — overlapping appointment card + meta strip */}
          <div className="relative grid lg:grid-cols-12 gap-8 px-6 md:px-12 pb-12 md:pb-16">
            <motion.form
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease }}
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-7 lg:-mt-24 rounded-[1.5rem] bg-cream text-ink p-6 md:p-8 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl md:text-2xl">Book an appointment</h3>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  <Calendar className="h-3 w-3" /> Same-day slots
                </span>
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field label="Your name" placeholder="Jane Moyo" />
                <Field label="Phone" placeholder="+263 ..." />
                <Field label="Service" placeholder="General consult" />
                <Field label="Preferred date" placeholder="dd / mm / yyyy" />
              </div>
              <button className="group mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-transform hover:scale-[1.02]">
                Request appointment
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.form>

            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="lg:col-span-5 grid grid-cols-3 gap-6 self-end border-t border-cream/10 pt-8"
            >
              {[
                { k: "24/7", v: "Emergency care" },
                { k: "4+", v: "Specialties" },
                { k: "1k+", v: "Patients served" },
              ].map((s) => (
                <motion.div key={s.v} variants={fadeUp}>
                  <dt className="font-display text-3xl md:text-4xl text-cream">{s.k}</dt>
                  <dd className="mt-1 text-[10px] uppercase tracking-[0.22em] text-cream/50">{s.v}</dd>
                </motion.div>
              ))}
            </motion.dl>
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
