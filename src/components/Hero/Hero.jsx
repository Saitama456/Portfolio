import CRTWarp from "../background.jsx/CRTWarp";
import ProfileCard from "../ProfileCard/ProfileCard";
import perfilImg from "../../assets/images/perfil.jpeg";
import pokeballPattern from "../../assets/images/pokeball-pattern.svg";
import { motion } from "motion/react";

function Hero() {
  
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <CRTWarp
          color="#808080"
          backgroundColor="#0a0a0a"
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

      {/* Contenido encima del fondo, con animación de entrada */}
      <motion.div
        className="relative z-10 min-h-screen w-full flex items-center px-8 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay: 0.3,
        }}
      >
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: texto */}
          <div className="flex flex-col gap-5 pt-16">
            <span className="text-sm text-white/50 font-['Press_Start_2P']">
              ● AVAILABLE FOR WORK
            </span>

            <h1 className="text-6x1 md:text-7xl font-bold text-white leading-[1.1]">
              Frontend
              <br />
              Developer
            </h1>

            <p className="text-base text-white/40 font-['Press_Start_2P'] mt-2">
              Fresh Graduate
            </p>

            <p className="text-white/60 text-sm md:text-lg max-w-lg leading-relaxed">
              Creando sitios web modernos con un diseño limpio, responsivo y
              elegante. Transformando ideas en experiencias digitales
              atractivas y fáciles de usar.
            </p>

            <div className="flex gap-3 mt-2">
              <span className="border border-white/20 rounded-full px-5 py-2 text-xs text-white/70">
                TypeScript
              </span>
              <span className="border border-white/20 rounded-full px-5 py-2 text-xs text-white/70">
                React.js
              </span>
              <span className="border border-white/20 rounded-full px-5 py-2 text-xs text-white/70">
                Tailwind
              </span>
            </div>
          </div>

          {/* Columna derecha: ProfileCard */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -100,
                right: 100,
              }}
              dragElastic={0.3}
              whileDrag={{ scale: 1.05 }}
              dragSnapToOrigin
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              className="cursor-grab active:cursor-grabbing">
              <ProfileCard
                avatarUrl={perfilImg}
                iconUrl={pokeballPattern}
                innerGradient="linear-gradient(180deg,#000000cc 0%,#1a1a1a99 50%,#0d0d0d00 100%)"
                behindGlowColor="rgba(120, 120, 120, 0.5)"
                behindGlowEnabled={true}
                showUserInfo={false}
                name="Andrez Suarez"
                title="Frontend Developer"
                enableTilt={true}
              />
            </motion.div>
          </div>
        </div>
              {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 font-['Press_Start_2P'] text-[8px]"
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white">SCROLL</span>
          <span className="text-sm text-white">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;