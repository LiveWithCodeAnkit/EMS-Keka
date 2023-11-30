import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
  Alert,
  Box,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ShiftRequests = () => {
  return (
    <>
      <Box w={"full"}>
        <TableContainer bg="bgCard" rounded="1rem">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Td colSpan={9}>
                  <Box
                    as="div"
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text fontSize="22px" fontWeight="semibold">
                      Shift Requests
                    </Text>
                    <Box
                      as="div"
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <Text fontWeight="semibold">
                        19 Jul 2023 - 01 Sep 2023
                      </Text>
                      <IconButton
                        colorScheme="buttonColorScheme"
                        aria-label="Search database"
                        icon={<HiOutlineDotsVertical color="gray" />}
                      />
                    </Box>
                  </Box>
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Alert status="info">No Shift Requests Available</Alert>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default ShiftRequests;
