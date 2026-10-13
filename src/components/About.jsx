import { aboutFacts, site } from "../data/site.js";
import { Media, Reveal, Spark } from "./ui.jsx";

export default function About() {
  return (
    <section id="about" className="shell py-24 sm:py-32">
      <Reveal className="eyebrow text-accent">( À propos )</Reveal>
      <Reveal as="h2" delay={80} className="mt-8 font-display text-mega font-bold">
        Curieux.<br />
        <span className="lg:pl-[12%]">Créatif.</span><br />
        <span className="text-accent">En constante<br className="sm:hidden" /> évolution.</span>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-10">
        <Reveal className="group relative lg:col-span-4">
          <Media src={site.images.about} alt={`${site.name} au travail`} className="aspect-[4/5] rounded-panel" imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
          <div className="absolute -bottom-8 -right-3 grid h-28 w-28 place-items-center rounded-full bg-accent text-ink sm:-right-8 sm:h-36 sm:w-36">
            <Spark className="h-14 w-14 animate-spin-slow sm:h-20 sm:w-20" />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-6 lg:pt-10">
          <Reveal className="font-display text-2xl leading-snug tracking-tight sm:text-3xl sm:leading-[1.25]">
            Je suis Ismael Fullbuster, développeur web full-stack JavaScript, passionné par la création d’expériences numériques modernes.{" "}
            <span className="text-mist-dim">J’aime apprendre, expérimenter et transformer des problèmes complexes en interfaces simples et intuitives.</span>
          </Reveal>
          <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2">
            {aboutFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 80} className="border-t border-bone/15 py-7 sm:pr-6">
                <dt className="eyebrow text-accent">{f.label}</dt>
                <dd className="mt-3 font-display text-xl sm:text-2xl">{f.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
