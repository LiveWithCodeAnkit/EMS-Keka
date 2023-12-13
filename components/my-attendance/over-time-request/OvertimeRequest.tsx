import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CiCircleAlert } from "react-icons/ci";
import OvertimeLogs from "./OvertimeLogs";
import ApplyOvertime from "./ApplyOvertime";

const OvertimeRequest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Text fontWeight="semibold" fontSize="22px">
              Overtime Requests
            </Text>
            <CiCircleAlert fontSize="28px" />
          </Box>
          <Button
            colorScheme="twitter"
            onClick={() => {
              onOpen();
            }}
          >
            Apply Overtime
          </Button>
        </Box>
        <OvertimeLogs />
      </Box>

      {/* //apply overtime */}
      <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Overtime(OT) Request
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <ApplyOvertime onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* //apply overtime */}
    </>
  );
};
export default OvertimeRequest;
