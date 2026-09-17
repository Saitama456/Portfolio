import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import perfilImg from "../../assets/images/perfil.jpeg";
import AnimatedLink from "../ui/AnimatedLink";
import { scrollToSection } from "../../utils/smoothScroll";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden">
      {/* Contenido */}
      <div className="relative z-10 min-h-screen w-full flex items-center px-8 md:px-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: texto */}
          <div className="flex flex-col gap-5">
            <span className="text-xs text-white/40 font-['Press_Start_2P']">
              ABOUT ME
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1]">
              Andres Felipe
              <br />
              Suarez Navarro
            </h2>

            <div>
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Estudiante de octavo semestre de Ingeniería de Sistemas en la
                Universidad de la Costa (CUC), con interés en el desarrollo
                de software, soporte técnico y administración de sistemas.
              </p>

              <AnimatePresence>
                {showMore && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed overflow-hidden mt-2"
                  >
                    Cuento con conocimientos en Python, hardware,
                    mantenimiento de equipos y bases de programación. Me
                    caracterizo por ser responsable, analítico, con
                    facilidad para aprender nuevas tecnologías y trabajar en
                    equipo. Busco realizar mis prácticas profesionales para
                    fortalecer mis conocimientos y aportar soluciones a la
                    organización.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                onClick={() => setShowMore(!showMore)}
                className="text-white/70 text-sm font-medium underline underline-offset-4 hover:text-white transition-colors mt-2"
              >
                {showMore ? "Leer menos" : "Leer más"}
              </button>
            </div>

            <blockquote className="italic text-white/50 text-sm md:text-base border-l-2 border-white/20 pl-4 max-w-md">
              "Turning ideas into clean, modern, and meaningful digital
              experiences."
            </blockquote>

            <div className="flex gap-4 mt-2">
              <AnimatedLink
                href="/cv.pdf"
                download="ANDRES.pdf"
                className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Download CV
              </AnimatedLink>

              <AnimatedLink
                href="#portfolio"
                onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-projects-tab"));
                scrollToSection("portfolio", 100, 900);
              }}
                className="flex items-center gap-2 border border-white/20 text-white text-sm px-5 py-3 rounded-lg hover:border-white/40 transition-colors"
              >
                ↗ View Projects
              </AnimatedLink>
            </div>
            <AnimatedLink
              href="#certificates"
                onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-certificates-tab"));
                scrollToSection("portfolio", 100, 900);
              }}
              className="flex items-center justify-between gap-2 border border-white/10 bg-white/5 text-white/80 text-sm px-5 py-3 rounded-lg hover:border-white/30 transition-colors w-full max-w-md"
            >
              <span className="flex items-center gap-2">
                <i className="bi bi-award"></i> Certificados
              </span>
              <span>↗</span>
            </AnimatedLink>
          </div>
          {/* Columna derecha: foto circular */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10">
              <img
                src={perfilImg}
                alt="Foto de perfil"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;