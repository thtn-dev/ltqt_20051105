import { Container, Flex, Tag, Text, useColorMode } from "@chakra-ui/react";
import "./App.css";
import { useEffect } from "react";
import ScrollIndicator from "./components/ScrollIndicator";
import { motion } from "framer-motion";
import HeartBackground from "./components/HeartBackground/HeartBackground";
import Modal001 from "./components/Modal001/Modal001";
// import LoveTree from "./components/LoveTree";
// import Letter from "./components/Letter/Letter";

function App() {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode("light");
  }, [setColorMode]);
  return (
    <Container maxW="container.sm" p="0">
      <Flex
        h="100vh"
        maxH="100dvh"
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        bgGradient="linear(to-t, #e65758, #771D32)"
        color={"white"}
        overflow={"hidden"}
        pos={"relative"}
      >
        <HeartBackground />
        <Modal001 />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Tag mb={2} borderRadius={"full"} px={3} py={2}>
            <Text fontWeight="bold" fontSize="lg" color={"#771D32"}>
              Kéo xuống dưới!
            </Text>
          </Tag>
        </motion.div>
        <ScrollIndicator />
      </Flex>
      {/* <Flex h="100vh" maxH="100vh">
        <LoveTree />
      </Flex>
      <Flex
        bg="pink.700"
        h="100vh"
        maxH="100vh"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Letter />
      </Flex> */}
    </Container>
  );
}

export default App;
