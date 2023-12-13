import React, { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import {
  Box,
  Button,
  Card,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import DutyOnRequest from "../on-duty/DutyOnRequest";
import PartialDay from "../partial-day/PartialDay";
import WorkFromHome from "../work-from-home/WorkFromHome";

const AttendanceAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const collapsible1 = useDisclosure();
  const collapsible2 = useDisclosure();

  const [currentDateTime, setCurrentDateTime] = useState({
    currentTime: "",
    currentDate: "",
    timeFormat: "",
  });

  const [webClockIn, setWebClockIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime({
        currentTime: getFormattedTime(),
        currentDate: getFormattedDate(),
        timeFormat: currentDateTime.currentTime.includes("AM") ? "AM" : "PM",
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  function getFormattedDate() {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const now = new Date();
    return now.toLocaleDateString("en-US", options);
  }

  const handleWebClockIn = () => {
    setWebClockIn(true);
  };

  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        <Text fontWeight="semibold" fontSize="22px">
          Action
        </Text>
        <Card p="1rem" h="auto">
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              gap: "4rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.2rem",
                }}
              >
                <Box
                  as="div"
                  p="3%"
                  border="1px solid gray"
                  fontWeight="semibold"
                  textAlign="center"
                  fontSize="18px"
                >
                  {currentDateTime.currentTime}
                  <sub>{currentDateTime.timeFormat}</sub>
                </Box>
                <Text fontWeight="400">{currentDateTime.currentDate}</Text>
              </Box>

              {webClockIn ? (
                <>
                  {" "}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "start",
                      alignItems: "start",
                      gap: "0.2rem",
                    }}
                  >
                    <Text
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "0.2rem",
                      }}
                    >
                      Toatl Hours <FiAlertCircle />
                    </Text>
                    <Text>Effective: 0h 0m</Text>
                    <Text>Gross: 0h 0m</Text>
                  </Box>
                </>
              ) : (
                ""
              )}
            </Box>
            <Box color="#0096FF" fontWeight="semibold">
              {!webClockIn ? (
                <>
                  <Box
                    _hover={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleWebClockIn();
                    }}
                  >
                    <Button colorScheme="whatsapp" color="textColor">
                      Web Clock-In
                    </Button>
                  </Box>{" "}
                </>
              ) : (
                ""
              )}
              {/* */}

              {webClockIn ? (
                <>
                  {" "}
                  <Box>
                    <Button
                      color="textColor"
                      colorScheme="red"
                      onClick={() => {
                        setWebClockIn(false);
                      }}
                    >
                      Web Clock-Out
                    </Button>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.5rem",
                      }}
                    >
                      <Text color="textColor" fontWeight="normal">
                        <b>0h:0m</b>
                      </Text>
                      <Text color="gray">Since Last Login</Text>
                    </Box>
                  </Box>
                </>
              ) : (
                ""
              )}

              <Box
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  collapsible2.onOpen();
                }}
              >
                <Text>Work From Home</Text>
              </Box>
              <Box
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  onOpen();
                }}
              >
                <Text>On Duty</Text>
              </Box>
              <Box
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  collapsible1.onOpen();
                }}
              >
                <Text>Partial Day</Text>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
      {/* //onDuty */}
      <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            On Duty Request
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <DutyOnRequest onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* //onDuty */}

      {/* //partial-day */}

      <Modal
        onClose={collapsible1.onClose}
        size={"2xl"}
        isOpen={collapsible1.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Partial Day Request
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <PartialDay onClose={collapsible1.onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* //partial-day */}

      {/* //Work from home */}

      <Modal
        onClose={collapsible2.onClose}
        size={"2xl"}
        isOpen={collapsible2.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Work From Home Request
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <WorkFromHome onClose={collapsible2.onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* //Work from home */}
    </>
  );
};
export default AttendanceAction;
