import {
  Box,
  Step,
  Stepper,
  useSteps,
  StepIndicator,
  StepStatus,
  StepTitle,
  StepSeparator,
} from "@chakra-ui/react";
import AnimatedCounter from "./CountUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
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
    index: 1,
    count: steps.length,
  });

  return (
    <Box w={"100%"} h="100%" position={"relative"}>
      <Box textAlign={"center"} w={"100%"} position={"absolute"} top={32}>
        <AnimatedCounter
          from={0}
          to={calculateDaysPassed("2024-04-03")}
          duration={5}
        />
      </Box>
      <Box color="white" mx={12} py={12}>
        <Stepper
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          size="lg"
          colorScheme="red"
          index={activeStep}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<FontAwesomeIcon icon={faHeart} beatFade />}
                  incomplete={<FontAwesomeIcon icon={faHeart} />}
                  active={<FontAwesomeIcon icon={faHeart} />}
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
    </Box>
  );
}

export default Center;
