// Informations personnelles — tout se modifie ici.
export const site = {
  name: "Ismael Fullbuster",
  role: "Développeur web full-stack JS",
  email: "ismael.fullbuster@example.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  // Notification par e-mail à chaque nouveau visiteur (une seule fois par personne).
  // 1. Créez une clé gratuite sur https://web3forms.com avec l'adresse qui doit recevoir les alertes.
  // 2. Collez-la ci-dessous. Clé vide = notifications désactivées.
  visitNotification: { accessKey: "" },
  images: {
    // Portrait détouré (fond transparent : PNG ou WebP).
    hero: "/assets/images/hero/ismael-hero.webp",
    about: "/assets/images/about/ismael-about.jpg",
  },
};

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "06", label: "Projets réalisés" },
  { value: "03", label: "Technologies principales" },
  { value: "15+", label: "Interfaces conçues" },
  { value: "100%", label: "Passion du développement" },
];

export const aboutFacts = [
  { label: "Basé en", value: "Afrique de l’Ouest" },
  { label: "Rôle", value: "Développeur full-stack JS" },
  { label: "Spécialité", value: "React · Node.js · Express" },
  { label: "Approche", value: "Simple · Utile · Élégant" },
];

export const process = [
  { n: "01", title: "Découvrir", text: "Comprendre votre activité, vos objectifs et vos clients." },
  { n: "02", title: "Concevoir", text: "Dessiner une expérience claire et la valider avec vous." },
  { n: "03", title: "Développer", text: "Construire le site, avec des démos régulières." },
  { n: "04", title: "Lancer", text: "Tester, mettre en ligne et vous former à la prise en main." },
];
