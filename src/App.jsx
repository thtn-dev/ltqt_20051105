import {
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
import InfinitySlider from "./components/InfinitySilder/InfinitySlider";
import CountUp from "./components/CountUp";
function calculateDaysPassed(startDate) {
  // Chuyển đổi startDate thành đối tượng Date
  const start = new Date(startDate);
  // Lấy ngày hiện tại
  const today = new Date();

  // Đặt giờ, phút, giây, mili giây về 0 để so sánh chỉ ngày
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Tính hiệu số thời gian giữa hai ngày
  const differenceInTime = today.getTime() - start.getTime();

  // Chuyển đổi hiệu số thời gian thành số ngày
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
}
function App() {
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode("light");
  }, [setColorMode]);
  return (
    <Container maxW="container.sm" p="0">
      {/* <Flex
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
          <Tag as={"a"} href="#s2" mb={2} borderRadius={"full"} px={3} py={2}>
            <Text fontWeight="bold" fontSize="lg" color={"#771D32"}>
              Kéo xuống dưới!
            </Text>
          </Tag>
        </motion.div>
        <ScrollIndicator />
      </Flex> */}
      <Flex
        id="s2"
        h="100dvh"
        maxH="100dvh"
        bgGradient="linear(to-t,#283e51,#0a2342)"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* <Image src="2iiB.gif" /> */}
        {/* <InfinitySlider /> */}
        <CountUp
          from={0}
          to={calculateDaysPassed("2024-04-03")}
          duration={3.5}
        />
        <Text color={"white"} fontSize={"4rem"} fontWeight={"bold"}>
          &nbsp;ngày
        </Text>
      </Flex>
      {/* <Flex
        id="letter-ltqt"
        h="100dvh"
        maxH="100dvh"
        justifyContent={"center"}
        alignItems={"center"}
        bgGradient="linear(to-t, pink.500, #e65758)"
      >
        <Letter />
      </Flex> */}
    </Container>
  );
}

export default App;
