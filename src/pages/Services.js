import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTools, FaCar, FaCog, FaChevronDown,
  FaCheckCircle, FaTag, FaGift, FaSnowflake, FaSun,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

// Photo stock pneus
import pneusStock from "../assets/pneus_stock.jpeg";

// Logos marques
import logoMichelin    from "../assets/michelin_logo.png";
import logoBridgestone from "../assets/bridgestone_logo.png";
import logoPirelli     from "../assets/pirelli_logo.png";
import logoContinental from "../assets/continentale_logo.png";
import logoUniroyal    from "../assets/uniroyal_logo.png";
import logoGoodyear    from "../assets/good_year_logo.png";
import logoDunlop      from "../assets/dunlop_logo.png";
import logoPetlas      from "../assets/petlas_logo.png";
import logoVredestein  from "../assets/vredestein_logo.png";

const brands = [
  { name: "Michelin",     logo: logoMichelin,    dark: false },
  { name: "Bridgestone",  logo: logoBridgestone, dark: true  },
  { name: "Pirelli",      logo: logoPirelli,     dark: true  },
  { name: "Continental",  logo: logoContinental, dark: false },
  { name: "Uniroyal",     logo: logoUniroyal,    dark: false },
  { name: "Goodyear",     logo: logoGoodyear,    dark: true  },
  { name: "Dunlop",       logo: logoDunlop,      dark: true  },
  { name: "Petlas",       logo: logoPetlas,      dark: false },
  { name: "Vredestein",   logo: logoVredestein,  dark: false },
];

const occasionCategories = [
  { icon: <FaSun />,       label: "Pneus été",              desc: "Grip optimal sur route sèche et mouillée" },
  { icon: <FaSnowflake />, label: "Pneus hiver",            desc: "Sécurité maximale par temps froid et neige" },
  { icon: <GiCarWheel />,  label: "Pneus avec jantes alu",  desc: "Ensemble complet pneu + jante aluminium" },
  { icon: <FaCar />,       label: "Pneus sans jantes",      desc: "Pneu seul, toutes dimensions disponibles" },
];

const services = [
  {
    id: "mecanique",
    icon: <FaTools />,
    title: "Petite Mécanique",
    badge: null,
    description: "Interventions rapides et soignées sur votre véhicule.",
    content: (
      <ul className="sv-list">
        {[
          "Freins (plaquettes, disques, tambours)",
          "Vidange d'huile moteur",
          "Remplacement bougies",
          "Amortisseurs",
          "Batterie",
          "Courroie de distribution",
          "Filtres (air, huile, habitacle)",
          "Éclairage (ampoules, feux)",
        ].map((item) => (
          <li key={item}><FaCheckCircle className="sv-check" /><span>{item}</span></li>
        ))}
      </ul>
    ),
  },
  {
    id: "occasion",
    icon: <FaCar />,
    title: "Pneus d'Occasion",
    badge: { icon: <FaTag />, text: "À partir de 25€", free: false },
    description: "Large choix de pneus d'occasion sélectionnés et contrôlés, disponibles immédiatement.",
    content: (
      <>
        <div className="sv-photo-wrap">
          <img src={pneusStock} alt="Stock pneus" className="sv-photo" />
        </div>
        <div className="sv-occ-grid">
          {occasionCategories.map(({ icon, label, desc }) => (
            <div key={label} className="sv-occ-card">
              <span className="sv-occ-icon">{icon}</span>
              <div>
                <p className="sv-occ-label">{label}</p>
                <p className="sv-occ-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "neufs",
    icon: <GiCarWheel />,
    title: "Pneus Neufs",
    badge: { icon: <FaTag />, text: "Prix sur demande", free: false },
    description: "Grandes marques disponibles immédiatement. Toutes dimensions.",
    content: (
      <>
        <div className="sv-photo-wrap">
          <img src={pneusStock} alt="Pneus neufs" className="sv-photo" />
        </div>
        <p className="sv-brands-title">Marques disponibles :</p>
        <div className="sv-brands-grid">
          {brands.map(({ name, logo, dark }) => (
            <div key={name} className={`sv-brand-card ${dark ? "sv-brand-card--dark" : ""}`}>
              <img src={logo} alt={name} className="sv-brand-logo" />
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "montage",
    icon: <FaCog />,
    title: "Montage & Équilibrage",
    badge: { icon: <FaGift />, text: "GRATUIT", free: true },
    description: "Montage professionnel rapide et précis, effectué sur place.",
    content: (
      <ul className="sv-list">
        {[
          "Montage sur jante",
          "Équilibrage électronique",
          "Contrôle de pression inclus",
          "Fait en quelques minutes",
        ].map((item) => (
          <li key={item}><FaCheckCircle className="sv-check" /><span>{item}</span></li>
        ))}
      </ul>
    ),
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="sv-section">
      <div className="sv-header">
        <span className="sv-line" />
        <h2 className="sv-title">NOS SERVICES</h2>
        <span className="sv-line" />
      </div>

      <div className="sv-grid">
        {services.map((s) => (
          <motion.div
            key={s.id}
            className={`sv-card ${open === s.id ? "sv-card--open" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button className="sv-card-header" onClick={() => toggle(s.id)}>
              <div className="sv-card-left">
                <span className="sv-icon">{s.icon}</span>
                <span className="sv-card-title">{s.title}</span>
              </div>
              <div className="sv-card-right">
                {s.badge && (
                  <span className={`sv-badge ${s.badge.free ? "sv-badge--free" : ""}`}>
                    {s.badge.icon}&nbsp;{s.badge.text}
                  </span>
                )}
                <FaChevronDown className={`sv-chevron ${open === s.id ? "sv-chevron--up" : ""}`} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {open === s.id && (
                <motion.div
                  className="sv-card-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <p className="sv-desc">{s.description}</p>
                  {s.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
