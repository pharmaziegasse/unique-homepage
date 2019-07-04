//** Static Files */
import logo_dark from "./black.png";
import logo_light from "./white.png";

//** Navigation Items */
export const navitems = [
  { href: "#why", text: "Warum PHARMAZIEGASSE<sup>®</sup>?", active: false, type: "text" },
  {
    href: "#method",
    text: "Wie funktioniert es?",
    active: false,
    type: "text"
  },
  { href: "#pricing", text: "Preise", active: false, type: "text" },
  { href: "#about", text: "Über uns", active: false, type: "text" },
  { href: "/getting-started", text: "Loslegen", active: false, type: "button" }
];

export const logos = [{ light: logo_light, dark: logo_dark }];
