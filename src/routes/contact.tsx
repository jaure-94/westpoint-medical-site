import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import exterior from "@/assets/clinic/exterior-sign.jpg";
import { useState } from "react";
import { motion } from "motion/react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WestPoint Medical" },
      { name: "description", content: "Visit, call or book an appointment with WestPoint Medical. Open 24 hours, every day." },
    ],
  }),
  component: Contact,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const } }),
};

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative w-full min-h-[78svh] overflow-hidden">
        <img
          src={exterior}
          alt="WestPoint Medical exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1500px] px-6 pt-32 md:pt-40 pb-20 md:pb-28 text-cream">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.28em] text-primary-glow"
          >
            Get in touch
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl max-w-4xl leading-[0.95]"
          >
            We&apos;re <span className="italic text-gradient-green">here.</span>
            <br className="hidden md:block" /> Day or night.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base md:text-lg text-cream/80"
          >
            A modern medical home in the heart of Harare — open 24 hours,
            every day. Walk in, call ahead, or send us a note below.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="tel:+263780969577"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> Call +263 780 969 577
            </a>
            <a
              href="#message"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/5 px-6 py-3 text-sm font-medium text-cream backdrop-blur hover:bg-cream/10"
            >
              Send a message <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Floating info cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-30 mx-auto max-w-[1500px] px-6 -mb-24 md:-mb-28"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-border bg-border shadow-soft">
            {[
              { Icon: MapPin, label: "Visit", value: "WestPoint Centre, Harare" },
              { Icon: Phone, label: "Call", value: "+263 780 969 577", href: "tel:+263780969577" },
              { Icon: Mail, label: "Email", value: "care@westpointmedical.co", href: "mailto:care@westpointmedical.co" },
              { Icon: Clock, label: "Hours", value: "Open 24 / 7" },
            ].map(({ Icon, label, value, href }) => {
              const content = (
                <div className="group h-full bg-card p-6 transition-colors hover:bg-accent/40">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="mt-4 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</div>
                  <div className="mt-1 font-display text-base md:text-lg leading-snug">{value}</div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">{content}</a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* MAP + FORM */}
      <section className="mx-auto max-w-[1500px] px-6 pt-32 md:pt-40 pb-24 grid lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="text-xs uppercase tracking-[0.24em] text-primary">Find us</div>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            A short drive from anywhere in <span className="italic text-gradient-green">Harare</span>.
          </h2>
          <p className="text-muted-foreground">
            Easy parking on-site, wheelchair access, and a calm, welcoming reception waiting for you.
          </p>
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="WestPoint Medical location"
              src="https://www.google.com/maps?q=-17.8045736,30.9724211&z=17&hl=en&output=embed"
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.div
          id="message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6 shadow-soft"
          >
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-primary">Send a message</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">How can we help?</h2>
              <p className="mt-2 text-sm text-muted-foreground">We typically respond within the hour during clinic hours.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What do you need help with?</label>
              <select className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>General consultation</option>
                <option>Dental appointment</option>
                <option>Aesthetics & wellness</option>
                <option>Pharmacy enquiry</option>
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              {sent ? "Thanks — we'll be in touch" : "Send message"}
              {!sent && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>
        </motion.div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        id={name} name={name} type={type} required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
