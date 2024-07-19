import {
  Box,
  Step,
  Stepper,
  useSteps,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepSeparator,
  Image,
  Tag,
  Text,
  Flex,
} from "@chakra-ui/react";
import AnimatedCounter from "./CountUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import data from "../data/lottie/cute.json";
import Lottie from "lottie-react";
import ScrollIndicator from "./ScrollIndicator";

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

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

const steps = [{ title: "03/04/2024" }, { title: getFormattedDate() }];
function Center() {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Box w={"100%"} h="100%" position={"relative"}>
      <Box textAlign={"center"} w={"100%"} position={"absolute"} top={32}>
        <Text fontSize={28} fontWeight={"800"} color={"whiteAlpha.700"} mb={4}>
          Gặp{" "}
          <Text as="span" color={"pink.400"}>
            Quỳnh Thương
          </Text>{" "}
          được
        </Text>
        <AnimatedCounter
          from={0}
          to={calculateDaysPassed("2024-04-03")}
          duration={5}
        />
      </Box>
      <Box color="white" mx={4} py={12}>
        <Stepper
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          size="md"
          colorScheme="red"
          index={activeStep}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={
                    <FontAwesomeIcon icon={faHeart} beatFade size="lg" />
                  }
                  incomplete={<FontAwesomeIcon icon={faHeart} size="lg" />}
                  active={<FontAwesomeIcon icon={faHeart} size="lg" />}
                />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box pos={"absolute"} bottom={0}>
        <Image src="land.png" w="100%" />
        <Box w={40} pos={"absolute"} bottom={14} right={0}>
          <Lottie animationData={data} />
        </Box>
      </Box>
      <Flex
        w={"100%"}
        bottom={10}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        position={"absolute"}
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
          <Tag as={"a"} href="#s3" mb={2} borderRadius={"full"} px={1} py={1}>
            <Text fontWeight="800" fontSize="sm" color={"gray.800"}>
              Bấm để xuống dưới!
            </Text>
          </Tag>
        </motion.div>
        <ScrollIndicator />
      </Flex>
    </Box>
  );
}

export default Center;
