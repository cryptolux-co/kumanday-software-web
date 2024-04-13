import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const descriptions = [
  "Diseño\ny Presencia Digital",
  "Inteligencia Artificial\ny Ciencia de Datos",
  "Desarrollo\nde Aplicaciones",
  "Arquitectura\nde Sistemas",
];

export const SlidingTitle: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-center text-4xl font-bold sm:text-start lg:text-5xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {descriptions[index].split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </motion.div>
      </AnimatePresence>
    </h1>
  );
};
