import { useEffect } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MotionBox = motion(Box);
const AnimatedList = ({ items }) => {
  const controls = useAnimation();

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -600 },
  };

  useEffect(() => {
    const animateItems = async () => {
      await controls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await controls.start("exit");
    };

    animateItems();
  }, [controls]);

  return (
    <VStack spacing={2} height={"100%"} justifyContent={"space-around"} p={4}>
      {items.map((item, index) => (
        <MotionBox
          key={index}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{ duration: 1, delay: index * 0.2 }}
          boxShadow={"md"}
          borderRadius={"lg"}
          w={"100%"}
          p={3}
          bg={"white"}
          zIndex={99}
        >
          <Box display={"inline"} pr="2" color="red.700">
            <FontAwesomeIcon icon={faHeart} size="lg" beat />
          </Box>
          <Text as="span" fontWeight={"800"} color={"red.700"}>
            {item}
          </Text>
        </MotionBox>
      ))}
    </VStack>
  );
};

export default AnimatedList;
