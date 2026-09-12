import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import redesPreview from "../../assets/images/redes-cisco.png";
import hardwarePreview from "../../assets/images/hardware-cisco.png";


const tabs = ["Projects", "Certificates", "Tech Stack"];

const projects = [
  {
    title: "Project Portfolio",
    description: "Portfolio es una colección de documentos, trabajos y proyectos.",
    image: null,
  },
];

const certificates = [
  {
    title: "Conceptos básicos de redes",
    issuer: "Cisco Networking Academy",
    date: "27 Feb 2025",
    file: "/certificates/Redes_certificado.pdf",
    preview: redesPreview,
  },
  {
    title: "Conceptos Básicos de Hardware de Computadora",
    issuer: "Cisco Networking Academy",
    date: "13 May 2025",
    file: "/certificates/Computer_Hardware_Basics.pdf",
    preview: hardwarePreview
  },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [selectedCert, setSelectedCert] = useState(null);

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
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {certificates.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCert(cert)}
                    className="text-left group"
                  >
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-white/30 transition-colors aspect-4/3">
                      <img
                      src={cert.preview}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base">
                        {cert.title}
                      </h3>
                      <p className="text-white/50 text-sm mt-1">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  </button>
                ))}
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

      {/* Modal del certificado */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden w-full max-w-4xl h-[85vh] relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 z-10 bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
              <iframe
                src={selectedCert.file}
                title={selectedCert.title}
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;