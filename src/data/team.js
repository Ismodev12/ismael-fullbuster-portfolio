// Équipe — les personnes avec qui Ismael travaille.
// Pour chaque personne : nom, poste, photo et lien facultatif (LinkedIn…).
// Les photos sont détourées (fond transparent, format .webp) et rangées dans public/assets/images/team/.
// Pour une nouvelle personne, une photo classique (.jpg) fonctionne aussi.
const photo = (file) => `/assets/images/team/${file}`;

export const team = [
  { name: "Lisette OBOGNON", role: "Développeuse backend", photo: photo("lisette-cut.webp"), link: "" },
  { name: "Bhilal CHITOU", role: "Développeur JS full-stack", photo: photo("bhilal-cut.webp"), link: "" },
  { name: "Elvire FADEGNON", role: "Développeuse Laravel & React", photo: photo("elvire-cut.webp"), link: "" },
  { name: "Eurydoxie Yantikoua", role: "Designeuse UI/UX & développeuse frontend", photo: photo("eurydoxie-cut.webp"), link: "" },
  // face (facultatif) : point de zoom de la pastille ronde, quand le visage n'est pas en haut de la photo.
  // Photo manquante : les initiales s'affichent à la place.
  { name: "Jolidon HOUNGUE", role: "Web designer & développeur front-end UI/UX", photo: photo("jolidon-cut.webp"), face: "50% 48%", link: "" },
  { name: "Rachid AGBANDOU", role: "CEO d’Ecomdev & développeur web", photo: photo("rachid-cut.webp"), face: "50% 55%", link: "" },
  { name: "Kephy Kassa", role: "Experte analyste en cybersécurité", photo: photo("kephy-cut.webp"), link: "" },
];
