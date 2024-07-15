import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const ScrollIndicator = () => {
  return (
    <Box>
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FontAwesomeIcon icon={faAngleDoubleDown} size="2xl" color="white" />
      </motion.div>
    </Box>
  );
};

export default ScrollIndicator;
