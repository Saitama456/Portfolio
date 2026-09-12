import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import Welcome from "./components/welcome/welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import CRTWarp from "./components/background.jsx/CRTWarp";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);
    }, []);

    const handleWelcomeComplete = () => {
        window.scrollTo(0, 0);
        setShowWelcome(false);
    };

    return (
        <main className="relative">
            {/* Fondo único, solo visible después del Welcome */}
            {!showWelcome && (
                <div className="fixed inset-0 z-0">
                    <CRTWarp
                        color="#3b82f6"
                        backgroundColor="#050814"
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
            )}

            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black"
                        exit={{
                            y: "-100%",
                            transition: { duration: 0.8, ease: "easeInOut" },
                        }}
                    >
                        <Welcome onComplete={handleWelcomeComplete} />
                    </motion.div>
                )}
            </AnimatePresence>

            {!showWelcome && <Navbar />}

            <div className="relative z-10">
                <Hero />
                <About />
                <Portfolio />
                <Contact />
            </div>
        </main>
    );
}

export default App;