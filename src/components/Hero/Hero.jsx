import CRTWarp from "../background.jsx/CRTWarp";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold">Tu nombre / título</h1>
        <p className="mt-4 text-lg">Descripción corta</p>
      </div>
    </section>
  );
}

export default Hero;