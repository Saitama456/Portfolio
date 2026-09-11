
import perfilImg from "../../assets/images/perfil.jpeg";
import { motion } from "motion/react";

function About() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      

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

            <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
              Fresh Graduate en Ingeniería de Sistemas con pasión por el
              desarrollo frontend y el diseño UI moderno. Enfocado en crear
              sitios web limpios, responsivos y con una identidad visual
              fuerte para experiencias digitales óptimas.
            </p>

            <blockquote className="italic text-white/50 text-sm md:text-base border-l-2 border-white/20 pl-4 max-w-md">
              "Turning ideas into clean, modern, and meaningful digital
              experiences."
            </blockquote>

            <div className="flex gap-4 mt-2">
                <a
                    href="/cv.pdf"
                    download="ANDRES.pdf"
                    className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-3 rounded-lg hover:bg-white/90 transition-colors"
                >
                    Download CV
                </a>

                <a
                    href="#portfolio"
                    className="flex items-center gap-2 border border-white/20 text-white text-sm px-5 py-3 rounded-lg hover:border-white/40 transition-colors"
                >
                    ↗ View Projects
                </a>
            </div>   
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