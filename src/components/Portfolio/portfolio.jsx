import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = ["Projects", "Certificates", "Tech Stack"];

const projects = [
  {
    title: "Project Portfolio",
    description: "Portfolio es una colección de documentos, trabajos y proyectos.",
    image: null, // aquí pondrás la imagen/preview del proyecto
  },
  // agrega más proyectos aquí
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <section
      id="portfolio"
      className="relative min-h-screen w-full overflow-hidden scroll-mt-24 py-24"
    >
      <motion.div
        className="relative z-10 w-full flex flex-col items-center px-8 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          Portfolio Showcase
        </h2>
        <p className="text-white/50 text-sm md:text-base text-center mt-3 max-w-lg">
          Explora mi trayectoria a través de proyectos, certificaciones y experiencia técnica.
        </p>

        {/* Selector de pestañas */}
        <div className="flex items-center gap-2 mt-10 bg-white/5 border border-white/10 rounded-full p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 text-sm rounded-full transition-colors ${
                activeTab === tab
                  ? "text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Contenido según pestaña activa */}
        <div className="w-full max-w-6xl mt-12">
          <AnimatePresence mode="wait">
            {activeTab === "Projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-white/30 transition-colors"
                  >
                    <div className="aspect-video bg-black/40 flex items-center justify-center text-white/30 text-sm">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        "Preview"
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold text-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "Certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white/50 text-center py-10"
              >
                Aquí van tus certificados
              </motion.div>
            )}

            {activeTab === "Tech Stack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-white/50 text-center py-10"
              >
                Aquí va tu stack tecnológico
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Portfolio;