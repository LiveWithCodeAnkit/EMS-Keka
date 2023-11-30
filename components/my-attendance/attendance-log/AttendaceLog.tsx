import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { GoPencil, GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  Badge,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { attendanceLogs, monthNames } from "../constants/attendanceList";
import RequestAttendanceRegular from "../request-attendance-regularization/RequestAttendanceRegular";

const AttendaceLog = () => {
  const collapsible1 = useDisclosure();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex: any) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TableContainer bg="bgCard" rounded="1rem">
          <Table variant="">
            <Thead>
              <Tr>
                <Td colSpan={7}>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text fontSize="22px" fontWeight="semibold">
                      Last 30 Days
                    </Text>
                    <Box
                      as="div"
                      sx={{
                        display: "flex",
                      }}
                    >
                      {monthNames.map((data, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          sx={{
                            backgroundColor:
                              selectedButton === data.id
                                ? "#0096FF"
                                : "initial",
                            color:
                              selectedButton === data.id ? "white" : "initial",
                          }}
                          onClick={() => handleButtonClick(data.id)}
                        >
                          {data.monthName}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                </Td>
              </Tr>
            </Thead>
            <Thead>
              <Tr bg="theadColor">
                <Th>Date</Th>
                <Th>Attendance Visual</Th>
                <Th>Gross Hours</Th>
                <Th>Log</Th>
              </Tr>
            </Thead>
            <Tbody>
              {attendanceLogs.map((log) => (
                <Tr
                  key={log.id}
                  bg={log.totalHour !== undefined ? "" : log.bgCod}
                >
                  <Td>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        gap: "0.8rem",
                      }}
                    >
                      <Text>{log.dateInfo}</Text>
                      {log.badgeInfo && (
                        <Badge variant="solid" colorScheme={log.colorS}>
                          {log.badgeInfo}
                        </Badge>
                      )}
                    </Box>
                  </Td>
                  <Td colSpan={log.totalHour !== undefined ? 0 : 3}>
                    {log.totalHour !== undefined ? (
                      <ProgressBar
                        completed={Number(log.totalHour)}
                        customLabel={`${Number(log.totalHour)} Hour`}
                        maxCompleted={10}
                        bgColor="#0096FF"
                        height="1rem"
                      />
                    ) : (
                      <Text>{log.leaveTitle}</Text>
                    )}
                  </Td>
                  {log.totalHour !== undefined && (
                    <>
                      <Td>{log.groosHour}</Td>
                      <Td>
                        <Popover>
                          <PopoverTrigger>
                            <Button colorScheme="buttonColorScheme">
                              <CiCircleCheck color="green" fontSize="30px" />
                            </Button>
                          </PopoverTrigger>
                          <Portal>
                            <PopoverContent>
                              <PopoverArrow />
                              <PopoverHeader bg="modelHead">
                                <Box fontWeight="semibold" padding="0.5rem">
                                  <Text>Flexible shift Gros.. (Aug 14)</Text>
                                  <Text>9:00 - 18:00</Text>
                                </Box>
                              </PopoverHeader>
                              <PopoverCloseButton />
                              <PopoverBody>
                                <Box>
                                  <Button
                                    leftIcon={<GoPencil />}
                                    colorScheme="whiteAlpha"
                                    color="#0096FF"
                                    onClick={() => {
                                      collapsible1.onOpen();
                                    }}
                                  >
                                    Rgularize
                                  </Button>
                                  <Button
                                    leftIcon={<GoPencil />}
                                    colorScheme="whiteAlpha"
                                    color="#0096FF"
                                  >
                                    Apply Partial Day
                                  </Button>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "0.5rem",
                                    }}
                                  >
                                    <Text fontWeight="semibold">
                                      Attendance Adjustment
                                    </Text>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        gap: "1rem",
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
                                        <GoArrowDownLeft color="green" />
                                        9:00:00
                                      </Text>
                                      <Text
                                        sx={{
                                          display: "flex",
                                          justifyContent: "start",
                                          alignItems: "center",
                                          gap: "0.2rem",
                                        }}
                                      >
                                        <GoArrowUpRight color="red" />
                                        18:59:00
                                      </Text>
                                    </Box>
                                  </Box>
                                </Box>
                              </PopoverBody>
                            </PopoverContent>
                          </Portal>
                        </Popover>
                      </Td>
                    </>
                  )}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      {/* //request  */}

      <Modal
        onClose={collapsible1.onClose}
        size={"3xl"}
        isOpen={collapsible1.isOpen}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Request Attendance Regularization
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <RequestAttendanceRegular />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* //request  */}
    </>
  );
};

export default AttendaceLog;
