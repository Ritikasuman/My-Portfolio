// src/Components/CustomCursor.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const tag = e.target.tagName.toLowerCase();
      const isTextElement = ["p", "span", "a", "h1", "h2", "h3", "h4", "h5", "h6", "button", "label", "li"].includes(tag);
      setVisible(isTextElement);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return visible ? (
    <motion.div
      className="custom-cursor"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  ) : null;
};

export default CustomCursor;
