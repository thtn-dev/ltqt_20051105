import {
  Button,
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {
  faCircleQuestion,
  faEllipsis,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import data from "../../data/lottie/capybara_animation.json";

function Capybara() {
  return <Lottie animationData={data} loop={true} autoplay={true} />;
}

function Modal001({ onClickCb }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
      onClickCb();
    }, 1234);
  };

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInTop"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(9px) hue-rotate(38deg)"
        />
        <ModalContent
          mx={3}
          borderRadius={"1.25rem"}
          h={"16rem"}
          pos="relative"
          overflow={"hidden"}
          bg="blue.500"
          color={"white"}
        >
          <Box pos="absolute" w={32} right={0} bottom={"72px"}>
            <Capybara />
          </Box>
          <ModalHeader bg="orange.400" fontWeight={"bold"}>
            <FontAwesomeIcon icon={faCircleQuestion} />
            &nbsp;&nbsp;Cho hỏi cái này
          </ModalHeader>
          <ModalBody textAlign={"center"}>
            <Text fontSize={18} fontWeight={"600"}>
              Bạn có phải là{" "}
              <Text as="b" color={"yellow.300"}>
                Quỳnh Thương dễ thương
              </Text>{" "}
              không?
            </Text>
          </ModalBody>
          <ModalFooter bg="orange.400">
            <Button
              onClick={handleClick}
              colorScheme="gray"
              w="100%"
              mr={3}
              borderRadius={"full"}
              isLoading={isLoading}
              color={"orange.400"}
              spinner={<FontAwesomeIcon size="2x" icon={faEllipsis} fade />}
              rightIcon={<FontAwesomeIcon icon={faHeart} />}
              leftIcon={<FontAwesomeIcon icon={faHeart} />}
            >
              &nbsp;&nbsp;Đúng vậy&nbsp;&nbsp;
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modal001;
