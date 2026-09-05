import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Welcome from "./components/welcome/welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
    const [showWelcome, setShowWelcome] = useState(true);

    return (
        <main>
            <AnimatePresence>
                {showWelcome && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black"
                        exit={{
                            y: "-100%",
                            transition: {
                                duration: 0.8,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <Welcome
                            onComplete={() => setShowWelcome(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar />
            <Hero />
        </main>
    );
}

export default App;