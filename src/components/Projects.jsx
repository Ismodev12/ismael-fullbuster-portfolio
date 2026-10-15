import { useEffect, useRef } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import { Reveal } from "./ui.jsx";

/* Projets en « pile de cartes » (grands écrans) :
   chaque carte reste collée en haut de l'écran pendant que la suivante glisse par-dessus ;
   celle du dessous recule et s'assombrit au rythme du scroll.
   La capture du site bouge légèrement dans sa fenêtre (parallaxe).
   Sur mobile et si l'utilisateur réduit les animations, les cartes s'empilent simplement. */
export default function Projects() {
  const listRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let raf = 0;
    const update = () => {
      raf = 0;
      const items = [...listRef.current.children];
      const vh = window.innerHeight;
      items.forEach((li, i) => {
        const r = li.getBoundingClientRect();
        // Parallaxe de la capture : 0 quand la carte entre en bas, 1 quand elle atteint le haut.
        li.style.setProperty("--q", Math.min(1, Math.max(0, 1 - r.top / vh)).toFixed(3));
        if (!mq.matches) { li.style.setProperty("--p", 0); return; }
        const next = items[i + 1];
        if (!next) { li.style.setProperty("--p", 0); return; }
        // Recouvrement par la carte suivante : 0 → 1.
        const p = (r.bottom - next.getBoundingClientRect().top) / r.height;
        li.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(3));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="projects" className="shell py-24 sm:py-32">
      <div className="grid items-end gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <p className="eyebrow text-accent">( Projets — {String(projects.length).padStart(2, "0")} )</p>
          <h2 className="mt-8 font-display text-mega font-bold">Projets<br /><span className="lg:pl-[14%]">sélec<span className="text-accent">tionnés</span></span></h2>
        </Reveal>
        <Reveal delay={120} className="font-display text-xl leading-snug text-mist sm:text-2xl lg:col-span-4 lg:pb-4">
          Des sites en ligne, conçus pour de vrais clients. Faites défiler : chaque projet vient se poser sur le précédent.
        </Reveal>
      </div>

      <ol ref={listRef} className="mt-16 space-y-6 sm:mt-20 lg:space-y-[18svh] lg:pb-[6svh]">
        {projects.map((p, i) => (
          <li key={p.name} className="pj-item lg:sticky" style={{ top: `calc(6.5rem + ${i * 1.1}rem)` }}>
            <ProjectCard project={p} index={i} total={projects.length} />
          </li>
        ))}
      </ol>
    </section>
  );
}
