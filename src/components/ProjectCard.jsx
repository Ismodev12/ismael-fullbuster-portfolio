import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui.jsx";

// Lien externe (site en ligne) : ouverture dans un nouvel onglet.
const ext = (link) => (/^https?:/.test(link || "") ? { target: "_blank", rel: "noreferrer" } : {});
const domain = (link) => (/^https?:/.test(link || "") ? new URL(link).hostname.replace(/^www\./, "") : "bientôt en ligne");

/* Trois ambiances qui alternent d'une carte à l'autre : sombre, clair, vert. */
const themes = [
  { card: "bg-[#141414] text-bone ring-1 ring-bone/10", muted: "text-mist", pill: "bg-accent text-ink", line: "border-bone/20", btn: "bg-accent text-ink", chrome: "bg-[#222] text-bone/55", bar: "bg-bone/10" },
  { card: "bg-bone text-ink", muted: "text-moss", pill: "bg-ink text-accent", line: "border-ink/20", btn: "bg-ink text-accent", chrome: "bg-white text-ink/50", bar: "bg-ink/[0.06]" },
  { card: "bg-accent text-ink", muted: "text-ink/70", pill: "bg-ink text-accent", line: "border-ink/25", btn: "bg-ink text-accent", chrome: "bg-white/70 text-ink/55", bar: "bg-ink/[0.07]" },
];

/* Badge rond au texte qui tourne en continu (touche « motion design »). */
function SpinBadge({ className = "" }) {
  return (
    <span className={`pointer-events-none grid h-28 w-28 place-items-center rounded-full bg-ink text-accent shadow-2xl transition-transform duration-700 ease-[cubic-bezier(.2,1.3,.4,1)] group-hover/mock:scale-110 sm:h-32 sm:w-32 ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs><path id="pj-circle" d="M50 50m-37 0a37 37 0 1 1 74 0a37 37 0 1 1-74 0" /></defs>
        <text className="fill-current font-display text-[10.5px] font-bold uppercase tracking-[0.32em]">
          <textPath href="#pj-circle">Voir le site · En ligne · </textPath>
        </text>
      </svg>
      <Arrow className="h-6 w-6 transition-transform duration-500 group-hover/mock:rotate-45" />
    </span>
  );
}

/* Fenêtre de navigateur : barre d'adresse + capture du site, qui s'incline vers le curseur. */
function Browser({ p, t }) {
  const ref = useRef(null);
  const tilt = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -7}deg`);
    ref.current.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 9}deg`);
  };
  const reset = () => { ref.current.style.setProperty("--rx", "0deg"); ref.current.style.setProperty("--ry", "0deg"); };
  return (
    <a href={p.link} {...ext(p.link)} aria-label={`Voir le site ${p.name}`} onMouseMove={tilt} onMouseLeave={reset} className="group/mock relative block [perspective:1400px]">
      <div
        ref={ref}
        className="pj-tilt overflow-hidden rounded-[1.25rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,.6)] ring-1 ring-black/10"
      >
        <div className={`flex items-center gap-3 px-4 py-2.5 sm:py-3 ${t.chrome}`}>
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <span className={`flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-1 text-xs ${t.bar}`}>
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
            <span className="truncate">{domain(p.link)}</span>
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden bg-white">
          <img
            src={p.image} alt={`${p.name} — ${p.tagline}`} loading="lazy"
            className={`pj-shot absolute inset-x-0 top-0 h-[112%] w-full object-cover ${p.position || ""}`}
          />
          <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover/mock:bg-ink/10" />
        </div>
      </div>
      <SpinBadge className="absolute -bottom-8 -right-3 hidden sm:grid lg:-right-8" />
    </a>
  );
}

/* Nom du projet : chaque mot remonte depuis un masque, l'un après l'autre. */
function Title({ text }) {
  return (
    <h3 className="mt-6 font-display text-[clamp(2.4rem,5.2vw,5.25rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:mt-8">
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.06em] align-bottom">
          <span className="pj-word inline-block" style={{ "--wd": `${150 + i * 110}ms` }}>{w}&nbsp;</span>
        </span>
      ))}
    </h3>
  );
}

export default function ProjectCard({ project: p, index, total }) {
  const t = themes[index % themes.length];
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref} data-in={inView ? "" : undefined}
      className={`pj-card relative grid gap-8 overflow-hidden rounded-panel p-5 sm:p-8 lg:min-h-[min(80svh,46rem)] lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12 ${t.card}`}
    >
      {/* Grand numéro en filigrane */}
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-[0.18em] -left-[0.04em] select-none font-display text-[clamp(9rem,24vw,22rem)] font-bold leading-none tracking-[-0.06em] opacity-[0.05]">{p.n}</span>

      {/* Fiche */}
      <div className="relative order-2 flex flex-col lg:order-1 lg:col-span-5 lg:self-stretch lg:py-2">
        <div className="pj-fade flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-3.5 py-1.5 font-display text-sm font-bold ${t.pill}`}>{p.n} <span className="opacity-60">/ {String(total).padStart(2, "0")}</span></span>
          <span className="eyebrow">{p.type}</span>
        </div>
        <Title text={p.name} />
        <p className={`pj-fade mt-5 max-w-md text-lg leading-relaxed [--fd:450ms] ${t.muted}`}>{p.description}</p>
        <ul className="pj-fade mt-7 flex flex-wrap gap-2 [--fd:550ms]">
          {p.stack.map((s) => <li key={s} className={`rounded-full border px-3.5 py-1.5 text-sm ${t.line}`}>{s}</li>)}
        </ul>
        <a
          href={p.link} {...ext(p.link)}
          className={`pj-fade group/btn mt-8 inline-flex w-fit items-center gap-3 rounded-full py-2 pl-6 pr-2 font-display text-sm font-bold uppercase tracking-[0.14em] transition-transform duration-300 [--fd:650ms] hover:-translate-y-0.5 lg:mt-auto ${t.btn}`}
        >
          Voir le site
          <span className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-current/25 transition-transform duration-500 group-hover/btn:rotate-45"><Arrow className="h-4 w-4" /></span>
        </a>
      </div>

      {/* Aperçu dans une fenêtre de navigateur */}
      <div className="pj-mock relative order-1 lg:order-2 lg:col-span-7">
        <Browser p={p} t={t} />
      </div>
    </article>
  );
}
