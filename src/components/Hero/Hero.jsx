import CRTWarp from "../background.jsx/CRTWarp";
import ProfileCard from "../ProfileCard/ProfileCard";
import perfilImg from "../../assets/images/perfil.jpeg";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <CRTWarp
          color="#c755f7"
          backgroundColor="#05010a"
          speed={0.5}
          curvature={0.25}
          scanlineStrength={0.25}
          scanlineFrequency={200}
          waveAmplitude={0.3}
          waveFrequency={2.5}
          bloom={1.5}
          bloomRadius={1}
          noise={0.1}
          vignette={0}
          brightness={1.25}
          pixelation={1}
          rgbShift={0.015}
          mouseReact
          mouseStrength={0.5}
          dpr={1}
          fps={30}
          paused={false}
        />
      </div>

      {/* Contenido encima del fondo */}
      <motion.div
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3,
      }}>
        <div className="relative z-10 min-h-screen w-full flex items-center px-8 md:px-20 pt-32">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: texto */}
            <div className="flex flex-col gap-6">
              <span className="text-sm text-white/50 font-['Press_Start_2P']">
                ● AVAILABLE FOR WORK
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Frontend
                <br />
                Developer
              </h1>

              <p className="text-sm text-white/40 font-['Press_Start_2P']">
                Fresh Graduate
              </p>

              <p className="text-white/70 max-w-md">
                Creando sitios web modernos con un diseño limpio, responsivo y
                elegante. Transformando ideas en experiencias digitales
                atractivas y fáciles de usar.
              </p>

              <div className="flex gap-3">
                <span className="border border-white/20 rounded-full px-4 py-1 text-xs text-white/70">
                  TypeScript
                </span>
                <span className="border border-white/20 rounded-full px-4 py-1 text-xs text-white/70">
                  React.js
                </span>
                <span className="border border-white/20 rounded-full px-4 py-1 text-xs text-white/70">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Columna derecha: ProfileCard */}
            <div className="flex justify-center">
              <ProfileCard
                avatarUrl={perfilImg}
                innerGradient="linear-gradient(145deg,#2a2a2a8c 0%,#4a4a4a44 100%)"
                behindGlowColor="rgba(120, 120, 120, 0.5)"
                name="Andrez Suarez"
                title="Frontend Developer"
                handle="Az.dev"
                status="Online"
                contactText="Contact"
                showUserInfo={true}
                behindGlowEnabled={true}
                enableTilt={true}
                onContactClick={() => console.log("contacto clickeado")}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;