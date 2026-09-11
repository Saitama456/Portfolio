import { motion } from "motion/react";

export default function AnimatedLink({
  children,
  className = "",
  stiffness = 300,
  damping = 15,
  ...props
}) {
  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95, y: 1 }}
      transition={{ type: "spring", stiffness, damping }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}