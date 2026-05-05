import { motion } from "framer-motion";
import {
  FaTools,
  FaCar,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowDown,
  FaCog,
} from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";

import Services from "./Services";
import "../styles/main.css";
import pneus from "../assets/backround garage.webp";

const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const servicesList = [
  { icon: <FaTools />, label: "Petite mécanique" },
  { icon: <FaCar />, label: "Pneus d'occasion" },
  { icon: <GiCarWheel />, label: "Pneus neufs" },
  { icon: <FaCog />, label: "Montage & équilibrage" },
];

function Home() {
  return (
    <div className="gp-wrapper">

      {/* HERO */}
      <div className="gp-container">
        <img src={pneus} alt="garage" className="gp-bg" />
        <div className="gp-overlay" />

        <motion.div className="gp-content" variants={stagger} initial="hidden" animate="show">

          <motion.div className="gp-logo" variants={fadeUp}>
            <div className="gp-logo-icon"><GiCarWheel /></div>
            <span className="gp-logo-text">GoldPneus</span>
          </motion.div>

          <motion.div className="gp-headline" variants={fadeUp}>
            <h2><em>PETITE</em> MÉCANIQUE</h2>
            <div className="gp-divider" />
            <div className="gp-badge">PNEUS</div>
            <div className="gp-divider" />
            <h2>D'OCCASION &amp; <em>NEUFS</em></h2>
          </motion.div>

          <motion.ul className="gp-services" variants={stagger}>
            {servicesList.map(({ icon, label }) => (
              <motion.li key={label} className="gp-service" variants={fadeUp}>
                <span className="gp-service-icon">{icon}</span>
                <span>{label}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="gp-address" variants={fadeUp}>
            <FaMapMarkerAlt className="gp-pin" />
            <div>
              <p>Chaussée de Châtelet 208</p>
              <p>6042 Charleroi</p>
            </div>
          </motion.div>

          <motion.a href="tel:0485228121" className="gp-phone" variants={fadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <FaPhone />
            <span>0485 22 81 21</span>
          </motion.a>

          <motion.div className="gp-tagline" variants={fadeUp}>
            <span className="gp-line" />
            <p>RAPIDE&nbsp;•&nbsp;SÉRIEUX&nbsp;•&nbsp;PRIX ACCESSIBLES !</p>
            <span className="gp-line" />
          </motion.div>

        </motion.div>

        <div className="gp-scroll" onClick={scrollDown}><FaArrowDown /></div>
      </div>

      {/* SERVICES */}
      <Services />

    </div>
  );
}

export default Home;
