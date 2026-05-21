import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TeamMemberCard, type TeamMember } from "@/components/site/TeamMemberCard";
import keith from "@/assets/team/keith-ndlovu.jpeg";
import essabelle from "@/assets/team/essabelle-rushwaya.jpeg";
import isabella from "@/assets/team/isabella-chaniwa.jpeg";
import margie from "@/assets/team/margie-musekiwa.jpeg";
import chelsy from "@/assets/team/chelsy-chada.jpeg";
import mitchelle from "@/assets/team/mitchelle-jeke.jpeg";
import nigel from "@/assets/team/nigel-ndlovu.jpeg";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — WestPoint Medical" },
      { name: "description", content: "Meet the clinicians, dentists, nurses and care professionals behind WestPoint Medical." },
      { property: "og:title", content: "Meet Our Team — WestPoint Medical" },
      { property: "og:description", content: "The people behind your care at WestPoint Medical." },
    ],
  }),
  component: Team,
});

const team: readonly TeamMember[] = [
  { name: "Keith Ndlovu", title: "Founder & CEO", image: keith },
  { name: "Chelsy Paidamoyo Chada", title: "Medical Administrative Assistant / Receptionist", image: chelsy },
  { name: "Isabella Chaniwa", title: "Supervising Beauty Therapist", image: isabella },
  { name: "Essabelle Rushwaya", title: "Dental Assistant", image: essabelle },
  { name: "Margie Mirriam Musekiwa", title: "Nurse Assistant", image: margie },
  { name: "Mitchelle Jeke", title: "Nurse Assistant", image: mitchelle },
  { name: "Nigel Ndlovu", title: "Administrator", image: nigel },
];

function Team() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
        <div className="text-xs uppercase tracking-[0.25em] text-primary">Our people</div>
        <h1 className="mt-4 font-display text-5xl md:text-7xl max-w-4xl leading-[0.98]">
          Meet our <span className="italic text-gradient-green">team</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          The clinicians, dentists, nurses and care professionals who make WestPoint feel like home.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
