import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — WestPoint Medical" },
      { name: "description", content: "Meet the clinicians, dentists and care team behind WestPoint Medical." },
    ],
  }),
  component: Team,
});

function Team() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">Our people</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.98]">
          Meet our <span className="italic text-gradient-green">team</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          The clinicians, dentists and care professionals who make WestPoint feel like home.
        </p>
      </section>
    </Layout>
  );
}
