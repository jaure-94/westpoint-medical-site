import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { TeamMemberCard, type TeamMember } from "@/components/site/TeamMemberCard";
import teamGroup from "@/assets/clinic/team.jpg";
import keith from "@/assets/team/dr-keith-ndlovu.jpeg";
import essabelle from "@/assets/team/essabelle-rushwaya.jpeg";
import isabella from "@/assets/team/isabella-chaniwa.jpeg";
import margie from "@/assets/team/margie-musekiwa.jpeg";
import chelsy from "@/assets/team/chelsy-chada.jpeg";
import mitchelle from "@/assets/team/mitchelle-jeke.jpeg";
import nigel from "@/assets/team/nigel-ndlovu.jpeg";
import portia from "@/assets/team/portia-chimuka.jpeg";
import priscilla from "@/assets/team/priscilla-matibiri.jpeg";
import chido from "@/assets/team/chido-mufandaedza.jpeg";
import resilience from "@/assets/team/resilience-mkwangwanyah.jpeg";
import seraphim from "@/assets/team/seraphim-gumbura.jpeg";
import tariro from "@/assets/team/tariro-chauya.jpeg";
import telitah from "@/assets/team/telitah-chimutanda.jpeg";
import thembi from "@/assets/team/thembi-nkala.jpeg";
import vanessa from "@/assets/team/vanessa-shumba.jpg.jpeg";
import lisa from "@/assets/team/dr-lisa-vinu.jpg.jpg";
import amanda from "@/assets/team/amanda-charewa.jpeg";

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

const founder: TeamMember = {
  name: "Dr. Keith Ndlovu",
  title: "Founder & CEO",
  image: keith,
};

const team: readonly TeamMember[] = [
  { name: "Dr. Lisa Vinu", title: "Dentist", image: lisa },
  { name: "Telitah Eunice Chimutanda", title: "Supervising Pharmacist", image: telitah },
  { name: "Seraphim Gumbura", title: "Pharmacist", image: seraphim },
  { name: "Chido Mufandaedza", title: "Radiographer", image: chido },
  { name: "Thembi Nkala", title: "Nurse", image: thembi },
  { name: "Priscilla Matibiri", title: "Medical Administrative Assistant", image: priscilla },
  { name: "Amanda Charewa", title: "Medical Administrative Assistant", image: amanda },
  { name: "Tariro Shubeti", title: "Medical Administrative Assistant" },
  { name: "Portia Chimuka", title: "Dispensary Assistant", image: portia },
  { name: "Mitchelle Jeke", title: "Nurse Assistant", image: mitchelle },
  { name: "Isabella Chaniwa", title: "Supervising Beauty Therapist", image: isabella },
  { name: "Tariro Prudence Chauya", title: "Beauty Therapist", image: tariro },
  { name: "Vanessa Shumba", title: "Beauty Therapist", image: vanessa },
  { name: "Margie Miriam Musekiwa", title: "Nurse Assistant", image: margie },
  { name: "Essabelle Rushwaya", title: "Dental Assistant", image: essabelle },
  { name: "Chelsy Paidamoyo Chada", title: "Medical Administrative Assistant", image: chelsy },
  { name: "Resilience Mkwangwanyah", title: "Media Manager & Graphics Designer", image: resilience },
  { name: "Nigel Ndlovu", title: "Administrator", image: nigel },
];

function Team() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative w-full min-h-[60svh] sm:min-h-[58svh]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={teamGroup}
            alt="The WestPoint Medical team"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40 sm:from-ink/85 sm:via-ink/60 sm:to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent sm:from-ink/70 sm:via-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28 text-cream">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.28em] text-primary-glow hero-load-in">
            Our people
          </div>
          <h1 className="mt-4 sm:mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl leading-[0.95] hero-load-in hero-load-in-delay-1">
            Meet our <span className="italic text-gradient-green">team</span>.
          </h1>
          <p className="mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-cream/80 hero-load-in hero-load-in-delay-2">
            The clinicians, dentists, nurses and care professionals who make WestPoint feel like home.
          </p>
        </div>
      </section>

      {/* Founder spotlight */}
      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-border/60">
                <TeamMemberCard member={founder} hideCaption className="aspect-[4/5]" loading="eager" fetchPriority="high" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={80} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Leadership
            </Reveal>
            <Reveal as="h2" delay={160} className="mt-4 sm:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              {founder.name}
            </Reveal>
            <Reveal delay={240} className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground">
              {founder.title}
            </Reveal>
            <Reveal as="p" delay={320} className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base text-muted-foreground">
              Setting the tone for a modern standard of care — where clinical excellence,
              warmth and quiet confidence meet under one roof.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pb-6 sm:pb-8">
        <Reveal className="flex items-center gap-3 sm:gap-4">
          <div className="h-px flex-1 bg-border/70" />
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">The team</div>
          <div className="h-px flex-1 bg-border/70" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8 lg:px-16 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m) => (
            <div key={m.name}>
              <TeamMemberCard member={m} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
