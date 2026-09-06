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

            {!showWelcome && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Navbar />
                </motion.div>
            )}
            <Hero />
        </main>
    );
}

export default App;