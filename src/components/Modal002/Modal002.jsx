import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Button,
  Text,
  Tag,
} from "@chakra-ui/react";

import PropTypes from "prop-types";
import AnimatedList from "../AnimatedList";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import data from "../../data/lottie/mlove.json";
import Lottie from "lottie-react";
Modal002.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
const items = [
  "Quỳnh Thương dễ thương",
  "Quỳnh Thương đáng iu",
  "Quỳnh Thương ngoan hiền",
  "Quỳnh Thương lì",
  "Quỳnh Thương ngủ nhiều",
];

const MotionBox = motion(Box);

const AnimatedBox = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateBox = async () => {
      await new Promise((resolve) => setTimeout(resolve, 6000));
      await controls.start({ scale: [0, 1.2, 1], opacity: [0, 1, 1] });
    };

    animateBox();
  }, [controls]);

  return (
    <MotionBox
      w={"100%"}
      h="100%"
      initial={{ scale: 0, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionBox>
  );
};

function Modal002({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx={6} height={"30rem"} pos={"relative"} bg={"transparent"}>
        <ModalBody
          bgGradient={"linear(to-t, pink.100, red.100)"}
          p={1}
          zIndex={99}
          borderRadius={"sm"}
          overflow={"hidden"}
        >
          <Box
            h="100%"
            borderWidth="3px"
            borderColor="red.800"
            borderStyle={"dotted"}
            borderRadius={"sm"}
            position={"relative"}
          >
            <Box pos={"absolute"} mx="auto" w={"100%"} h="100%">
              <AnimatedList items={items} />
            </Box>
            <AnimatedBox>
              <Box
                w={"100%"}
                h="100%"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                pos={"relative"}
              >
                <Tag
                  zIndex={2}
                  mx={3}
                  mb={12}
                  py={4}
                  borderRadius={"xl"}
                  boxShadow={"md"}
                >
                  <Text fontWeight={800} textAlign={"center"} fontSize={32}>
                    <Text as="span" color={"red.600"}>
                      Quỳnh Thương
                    </Text>{" "}
                    làm người yêu anh nha!!!
                  </Text>
                </Tag>
                <Button
                  onClick={() => {
                    console.log("click");
                    setVisible(true);
                  }}
                  fontWeight={800}
                  fontSize={24}
                  colorScheme={"red"}
                  borderRadius={"full"}
                  mx={12}
                  py={8}
                  zIndex={3}
                >
                  Đồng ý
                </Button>
                <Box
                  pos={"absolute"}
                  h={"100%"}
                  w={"100%"}
                  zIndex={1}
                  opacity={0.9}
                  visibility={visible ? "visible" : "hidden"}
                >
                  <Lottie animationData={data} width={"60%"} />
                </Box>
              </Box>
            </AnimatedBox>
          </Box>
        </ModalBody>
        <Box
          pos="absolute"
          height={"100%"}
          w={"100%"}
          left={0}
          bg="red.700"
          transform="rotate(-9deg) skewY(-1deg) scaleY(1.05)"
          zIndex={1}
          borderRadius={"sm"}
        ></Box>
      </ModalContent>
    </Modal>
  );
}

export default Modal002;
