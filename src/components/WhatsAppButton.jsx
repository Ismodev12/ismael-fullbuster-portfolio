import { site } from "../data/site.js";
import { Icon } from "./ui.jsx";

/* Bouton WhatsApp flottant, en bas à droite : ouvre une discussion avec un message pré-rempli. */
export default function WhatsAppButton() {
  const text = encodeURIComponent("Bonjour Ismael, je viens de voir votre portfolio et j’aimerais parler d’un projet.");
  return (
    <a
      href={`https://wa.me/${site.whatsapp.number}?text=${text}`}
      target="_blank" rel="noreferrer" aria-label="Discuter sur WhatsApp"
      className="wa-btn group fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-accent text-ink shadow-[0_18px_40px_-12px_rgb(var(--c-accent)/.7)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-accent opacity-25 [animation-duration:2.4s]" />
      <Icon src="/assets/icons/whatsapp.svg" className="relative h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
