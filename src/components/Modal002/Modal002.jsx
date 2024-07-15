import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

Modal002.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

function Modal002({ isOpen, onClose }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx={6} height={"30rem"} pos={"relative"} bg={"transparent"}>
        <ModalBody
          bgGradient={"linear(to-t, pink.200, red.200)"}
          p={3}
          zIndex={99}
          borderRadius={"xl"}
          overflow={"hidden"}
        >
          <Box
            h="100%"
            borderWidth="5px"
            borderColor="red.800"
            borderStyle={"dotted"}
            borderRadius={"md"}
          ></Box>
        </ModalBody>
        <Box
          pos="absolute"
          height={"100%"}
          w={"100%"}
          left={0}
          bg="red.700"
          transform="rotate(-9deg) skewY(-1deg) scaleY(1.05)"
          zIndex={1}
          borderRadius={"xl"}
        ></Box>
      </ModalContent>
    </Modal>
  );
}

export default Modal002;
