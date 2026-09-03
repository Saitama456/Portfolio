import SplitText from "./SplitText";
import { useState } from "react";
import { motion } from "motion/react";

function Welcome() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showLadies, setShowLadies] = useState(false);

    const icons= [
        "bi-github",
        "bi-code-slash",
        "bi-steam",
    ];

    const containerVariants= {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
            }
        }
    };
    
    const iconsVariants= {
        hidden: {
            opacity: 0,
            scale: 0,
            y:30,
        },
        show: {
            opacity:1,
            scale:1,
            y:0,
            transition: {
                duration:0.5,
                ease:"backOut",
            }
        }
    }

    const handleIconsComplete= () => {
        setTimeout(() => {
            setShowWelcome(true);
        }, 300);
    }

    const handleWelcomeComplete= () => {
        setTimeout(() => {
            setShowLadies(true);
        }, 500);
    };
    

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-1.5 bg-black -translate-y-20">
        {/* Icons */}
        <motion.div
        className="flex gap-6 mb-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        onAnimationComplete={handleIconsComplete}
        >
            {icons.map((icon, index)=> (
                <motion.i 
                key={index}
                className={`bi ${icon} text-3xl text-white`}
                variants={iconsVariants}
                />
            ))}
        </motion.div>


           {/* WELCOME */}
    {showWelcome && (
        <SplitText
            text="Welcome"
            className="text-6xl font-bold text-white"
            delay={60}
            duration={0.8}
            ease="back.out(1.7)"
            splitType="chars"
            from={{ opacity: 0, y: 120, scale: 0.6, rotate: -10 }}
            to={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleWelcomeComplete}
        />
        )}  
           {/* Ladies and gentlemen */}
        {showLadies && (
            <SplitText
                text="Ladies and Gentlemen"
                className="text-6xl font-bold text-white"
                delay={70}
                duration={1}
                ease="back.out(1.7)"
                splitType="chars"
                from={{ opacity: 0, y: 120, scale: 0.6, rotate: -10 }}
                to={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
        
            />
        )}
    </div>
  );

}
export default Welcome;