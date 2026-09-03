import SplitText from "./SplitText";
import { useState } from "react";

function Welcome() {
    const [showLadies, setShowLadies] = useState(false);
    const handleAnimationComplete = () => {
        console.log("All letters have animated!");
        setTimeout(() => {
        setShowLadies(true);
        },    300);
    };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-1.5 bg-black">
           {/* WELCOME */}
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
            onLetterAnimationComplete={handleAnimationComplete}
        />
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