// Projets — remplacez image, textes et liens ici.
// layout : "full" | "right" | "left" | "panel" (composition de la carte).
// aspect / position (facultatifs) : format du cadre et cadrage de l'image, pour les mises en page "left" et "right".
const stack = ["React.js", "Node.js", "Express.js"];

export const projects = [
  {
    n: "01", name: "ANTIXOR", type: "Pâtisserie artisanale", layout: "full",
    tagline: "Site vitrine et commande pour une pâtisserie artisanale.",
    description: "Un site gourmand pour ANTIXOR Baked.com : produits, recettes et commande en quelques clics, avec un contact WhatsApp direct.",
    image: "/assets/images/projects/antixor.jpg", position: "object-[82%_50%] sm:object-[70%_50%] lg:object-center", stack, link: "https://cookiesfood.netlify.app/",
  },
  {
    n: "02", name: "Couvreur Andernos", type: "Artisan couvreur", layout: "right",
    tagline: "Site vitrine pour un couvreur en Gironde.",
    description: "Un site qui inspire confiance à un artisan couvreur d’Andernos-les-Bains : services, chiffres clés, avis clients et devis gratuit ou appel en un clic.",
    image: "/assets/images/projects/couvreur-andernos.jpg", aspect: "aspect-[4/3] sm:aspect-[3/2]", position: "object-[10%_50%]", stack, link: "https://couvreur-toiture.netlify.app/",
  },
  {
    n: "03", name: "Urgensia", type: "Pré-triage médical", layout: "left",
    tagline: "Plateforme de pré-triage médical.",
    description: "Une plateforme numérique de pré-triage pour les établissements de santé du Bénin, basée sur le Système Manchester, qui oriente rapidement les patients aux urgences.",
    image: "/assets/images/projects/urgensia.jpg", aspect: "aspect-[4/3] sm:aspect-[16/9]", position: "object-left", stack, link: "https://urgensia.netlify.app/",
  },
  {
    n: "04", name: "Peintre Marseille", type: "Artisan peintre", layout: "panel",
    tagline: "Site vitrine pour un peintre en bâtiment.",
    description: "Un site clair et rassurant pour un artisan peintre à Marseille : prestations, méthode, avis clients et demande de devis gratuit en un clic.",
    image: "/assets/images/projects/peintre-marseille.jpg", position: "object-[78%_50%] sm:object-left", stack, link: "https://peintre-en-batiment-marseille.netlify.app/",
  },
  {
    n: "05", name: "G2 Sigma", type: "Rénovation & maintenance", layout: "right",
    tagline: "Site vitrine pour une entreprise tous corps d’état.",
    description: "Le site de G2 Sigma, spécialiste de la rénovation et de la maintenance multi-technique partout en France : services, réalisations et demande de devis.",
    image: "/assets/images/projects/g2-sigma.jpg", position: "object-[18%_50%]", stack, link: "https://g2sigma.com/",
  },
  {
    n: "06", name: "Stellion Avocats", type: "Cabinet d’avocats", layout: "left",
    tagline: "Site vitrine pour un cabinet d’avocats.",
    description: "Un site sobre et élégant pour Stellion Avocats, cabinet boutique en droit de la concurrence et de la distribution.",
    image: "/assets/images/projects/stellion-avocats.jpg", position: "object-[82%_50%]", stack, link: "https://www.stellion-avocats.fr/",
  },
];
