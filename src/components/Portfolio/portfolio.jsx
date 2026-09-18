import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import redesPreview from "../../assets/images/redes-cisco.png";
import hardwarePreview from "../../assets/images/hardware-cisco.png";


const tabs = ["Projects", "Certificates", "Tech Stack"];

const projects = [
  {
    title: "Project Portfolio",
    description:
      "Portfolio es una colección de documentos, trabajos, proyectos, o logros que muestran las habilidades, experiencia y calidad del trabajo de alguien en un área específica. Sirve como evidencia real (no solo afirmaciones) al postularse a un trabajo, beca, o proyecto.",
    image: null,
    liveLink: null,
    codeLink: null,
    technologies: ["React.js", "Tailwind", "Motion"],
    keyFeatures: [
      "Website full animación",
      "Diseño moderno y elegante",
      "Sección de proyectos, certificados y stack tecnológico",
    ],
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

const techStack = [
  { name: "React.Js", icon: "devicon-react-original colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(()=> {
      const handler = () => setActiveTab("Certificates");
      const handleProjects = () => setActiveTab("Projects");
      window.addEventListener("open-certificates-tab", handler);
      window.addEventListener("open-projects-tab", handleProjects);
      return () => {
        window.removeEventListener("open-certificates-tab", handler);
        window.removeEventListener("open-projects-tab", handleProjects);
      };
   }, []);

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
                      <button
                        onClick={()=> setSelectedProject(project)}
                        className="mt-4 flex items-center gap-2 text-white/70 text-sm font-medium hover:text-white transition-colors"
                        >
                          Details <span>↗</span>
                        </button>
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
                className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center"
              >
                {techStack.map (({name, icon})=> (
                  <div
                  key={name}
                  className="flex flex-col items-center justify-center gap-2 w-24 h-24 md:w-28 md:h-28 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/10 transition-colors"
                  >
                    <i className={`${icon} text-3xl md:text-4xl`}></i>
                    <span className="ext-xs text-white/60 text-center">{name}</span>
                  </div>
                ))}
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

      {/* Modal de detalles del proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-100 bg-black/80 flex items-center justify-center p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 text-white/60 text-sm mb-6 hover:text-white transition-colors"
                >
                  ← Back
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                    <div className="w-10 h-1 bg-white/30 rounded-full mt-3 mb-4" />

                    <p className="text-white/60 text-sm leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="flex gap-3 mt-6">
                      <div className="flex items-center gap-2 border border-white/10 rounded-lg px-4 py-3">
                        <i className="bi bi-code-slash text-white/60"></i>
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {selectedProject.technologies.length}
                          </p>
                          <p className="text-white/40 text-xs">
                            Technologies Used
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 border border-white/10 rounded-lg px-4 py-3">
                        <i className="bi bi-layers text-white/60"></i>
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {selectedProject.keyFeatures.length}
                          </p>
                          <p className="text-white/40 text-xs">
                            Key Features
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      {selectedProject.liveLink ? (
                        <a
                          href={selectedProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-lg hover:border-white/30 transition-colors"
                        >
                          <i className="bi bi-box-arrow-up-right"></i> Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 border border-white/10 text-white/30 text-sm px-4 py-2 rounded-lg">
                          <i className="bi bi-box-arrow-up-right"></i> No Link
                        </span>
                      )}
                      {selectedProject.codeLink ? (
                        <a
                          href={selectedProject.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-lg hover:border-white/30 transition-colors"
                        >
                          <i className="bi bi-github"></i> Code
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 border border-white/10 text-white/30 text-sm px-4 py-2 rounded-lg">
                          <i className="bi bi-github"></i> No Link
                        </span>
                      )}
                    </div>

                    <div className="mt-6">
                      <p className="text-white/60 text-sm flex items-center gap-2 mb-3">
                        <i className="bi bi-code-slash"></i> Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="aspect-video bg-black/40 rounded-xl overflow-hidden flex items-center justify-center text-white/30 text-sm">
                      {selectedProject.image ? (
                        <img
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        "Preview"
                      )}
                    </div>

                    <div className="border border-white/10 rounded-xl p-5">
                      <p className="text-white font-semibold text-sm flex items-center gap-2 mb-3">
                        ⚙ Key Features
                      </p>
                      <ul className="flex flex-col gap-2">
                        {selectedProject.keyFeatures.map((feature, i) => (
                          <li
                            key={i}
                            className="text-white/60 text-sm flex items-start gap-2"
                          >
                            <span className="text-white/40">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;