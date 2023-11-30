import React, { useState, useEffect } from "react";
import {
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalOverlay,
  OrderedList,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Box,
  Spinner,
  Grid,
} from "@chakra-ui/react";
import { employeeLeaveData, leavePolicyRules } from "./constants/leaveList";

const LeaveList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false); 
  const [hasNextPage, setHasNextPage] = useState(
    employeeLeaveData.length > itemsPerPage
  );
  const totalDataLength = employeeLeaveData.length;
  const totalPages = Math.ceil(totalDataLength / itemsPerPage);

  useEffect(() => {
    setHasPreviousPage(currentPage > 1);
    setHasNextPage(currentPage < totalPages);
  }, [currentPage, totalPages]);

  const handleClickNext = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setLoading(false);
    }, 1000); 
  };

  const handleClickPrevious = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      setLoading(false);
    }, 1000);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const displayedData = employeeLeaveData.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer>
     
        <Table size='sm'>
      
          <TableCaption
            onClick={onOpen}
            color="blue.500"
            fontWeight="bold"
            cursor="pointer"
            textDecoration="underline"
          >
            Opash Leave Policy
          </TableCaption>
         
          <Thead>
            <Tr>
              <Th>From</Th>
              <Th
                sx={{
                  "@media (max-width: 375px)": {
                    display: "none",
                  },
                }}
              >
                To
              </Th>
              <Th
                sx={{
                  "@media (max-width: 425px)": {
                    display: "none",
                  },
                }}
              >
                Type
              </Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <Tr>
                <Td colSpan={4}>
                  <Grid placeItems="center">
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Grid>
                </Td>
              </Tr>
            ) : (
              <>
                {displayedData.map((item, index) => (
                  <Tr key={item.id}>
                    <Td>{item.fromDate}</Td>
                    <Td
                      sx={{
                        "@media (max-width: 375px)": {
                          display: "none",
                        },
                      }}
                    >
                      {item.toDate}
                    </Td>
                    <Td
                      color={item.typeColor}
                      fontWeight="extrabold"
                      sx={{
                        "@media (max-width: 425px)": {
                          display: "none",
                        },
                      }}
                    >
                      {item.leaveType}
                    </Td>
                    <Td color={item.statusColor} fontWeight="bold">
                      {item.leaveStatus}
                    </Td>
                  </Tr>
                ))}
              </>
            )}

            <Tr>
              <Td colSpan={4} right="0">
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    colorScheme="red"
                    variant="outline"
                    size="sm"
                    onClick={handleClickPrevious}
                    isDisabled={!hasPreviousPage || loading}
                  >
                    Prev
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    variant="outline"
                    onClick={handleClickNext}
                    isDisabled={!hasNextPage || loading}
                  >
                    Next
                  </Button>
                </Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OrderedList>
              {leavePolicyRules.map((item, index) => (
                <ListItem key={index}>{item.ruleDescription}</ListItem>
              ))}
            </OrderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeaveList;
