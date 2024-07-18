import {
  Box,
  Container,
  Flex,
  Image,
  Tag,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import "./App.css";
import { useEffect } from "react";
import ScrollIndicator from "./components/ScrollIndicator";
import { motion } from "framer-motion";
import HeartBackground from "./components/HeartBackground/HeartBackground";
import Modal001 from "./components/Modal001/Modal001";
import Letter from "./components/Letter/Letter";
import Center from "./components/Center";

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
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          pos={"absolute"}
          bottom={10}
        >
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
            <Tag as={"a"} href="#s2" mb={2} borderRadius={"full"} px={3} py={2}>
              <Text fontWeight="bold" fontSize="md" color={"#771D32"}>
                Bấm để xuống dưới!
              </Text>
            </Tag>
          </motion.div>
          <ScrollIndicator />
        </Flex>
      </Flex>
      <Box h={"80rem"} bgGradient="linear(to-t, #0a2342, #e65758)" />
      <Box
        id="s2"
        h="100dvh"
        maxH="100dvh"
        bgGradient="linear(to-t,#283e51,#0a2342)"
        pos={"relative"}
      >
        <Image
          src="2iiB.gif"
          h="100%"
          w={"100%"}
          pos={"absolute"}
          top={0}
          left={0}
        />
        <Center />
      </Box>
      <Box h={"80rem"} bgGradient="linear(to-t,  #e65758,#283e51)" />
      <Flex
        id="s3"
        h="100dvh"
        maxH="100dvh"
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient="linear(to-t, pink.500, #e65758)"
      >
        <Letter />
      </Flex>
    </Container>
  );
}

export default App;
