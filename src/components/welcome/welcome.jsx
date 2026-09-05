import Shuffle from "./Shuffle";
import { motion } from "motion/react";

function Welcome({ onComplete }) {

    const icons = [
        "bi-github",
        "bi-code-slash",
        "bi-steam",
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0,
            }
        }
    };

    const iconsVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 30,
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "backOut",
            }
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-1.5 bg-black font-['Press_Start_2P']">

            {/* ICONS */}
            <motion.div
                className="flex gap-6 mb-4"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {icons.map((icon, index) => (
                    <motion.i
                        key={index}
                        className={`bi ${icon} text-3xl text-white`}
                        variants={iconsVariants}
                    />
                ))}
            </motion.div>

            {/* WELCOME */}
            <Shuffle
                text="Welcome"
                className="text-5xl font-normal text-white font-['Press_Start_2P']"
                shuffleDirection="right"
                duration={0.8}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
            />

            {/* LADIES AND GENTLEMEN */}
            <Shuffle
                text="Ladies and Gentlemen"
                className="text-5xl font-normal text-white font-['Press_Start_2P']"
                shuffleDirection="right"
                duration={1}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                onShuffleComplete={() => {
                    setTimeout(() => {
                        onComplete();
                    }, 1500);
                }}
            />

        </div>
    );
}

export default Welcome;