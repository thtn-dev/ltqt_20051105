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
} from "@chakra-ui/react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Modal001() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onClose();
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
          backdropFilter="blur(16px) hue-rotate(38deg)"
        />
        <ModalContent
          mx={3}
          borderRadius={"1.25rem"}
          bg="red.800"
          color="white"
        >
          <ModalHeader>Câu hỏi</ModalHeader>
          <ModalBody>
            <Text>
              Bạn có phải là <b>Quỳnh Thương</b> không?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleClick}
              colorScheme="gray"
              color={"red.800"}
              w="100%"
              mr={3}
              borderRadius={"full"}
              isLoading={isLoading}
              spinner={<FontAwesomeIcon size="2x" icon={faEllipsis} fade />}
            >
              Đúng vậy
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modal001;
