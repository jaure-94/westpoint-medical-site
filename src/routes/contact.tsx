import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import exterior from "@/assets/clinic/exterior-sign.jpg";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WestPoint Medical" },
      { name: "description", content: "Visit, call or book an appointment with WestPoint Medical. Open 24 hours, every day." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">Get in touch</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.98]">
          We&apos;re <span className="italic text-gradient-green">here.</span> Day or night.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={exterior} alt="WestPoint Medical exterior" className="aspect-[4/3] w-full object-cover" />
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 space-y-5">
            {[
              { Icon: MapPin, label: "Visit", value: "WestPoint Centre, Harare, Zimbabwe" },
              { Icon: Phone, label: "Call", value: "+263 780 969 577", href: "tel:+263780969577" },
              { Icon: Mail, label: "Email", value: "care@westpointmedical.co", href: "mailto:care@westpointmedical.co" },
              { Icon: Clock, label: "Hours", value: "Open 24 hours, every day" },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</div>
                  {href ? (
                    <a href={href} className="mt-1 block font-display text-lg hover:text-primary">{value}</a>
                  ) : (
                    <div className="mt-1 font-display text-lg">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 md:p-10 space-y-6"
          >
            <h2 className="font-display text-3xl">Send us a message</h2>
            <p className="text-sm text-muted-foreground -mt-3">We typically respond within the hour during clinic hours.</p>

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
            </button>
          </form>
        </div>
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
