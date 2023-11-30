import React from "react";
import { HiOutlineDotsVertical, HiOutlineDotsHorizontal } from "react-icons/hi";
import { LiaHouseDamageSolid } from "react-icons/lia";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const AttendanceRequest = () => {
  return (
    <>
      <Box>
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
                      Work From Home /On Duty Requests
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
            <Thead>
              <Tr bg="theadColor">
                <Th>DATE</Th>
                <Th>REQUEST TYPE</Th>
                <Th>REQUEST ON</Th>
                <Th>ATTACHMENTS</Th>
                <Th>NOTE</Th>
                <Th>STATUS</Th>
                <Th>LAST ACTION BY</Th>
                <Th>NEXT APPROVER</Th>
                <Th>ACTION</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text fontWeight="semibold">Aug 10,2023</Text>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.1rem",
                      }}
                    >
                      <LiaHouseDamageSolid fontSize="22px" color="gray" />
                      <Text color="gray">09:30 hour</Text>
                    </Box>
                  </Box>
                </Td>
                <Td>
                  <Text color="gray">Work From home</Text>
                </Td>
                <Td>
                  <Text color="">Aug 10,2023</Text>
                </Td>
                <Td>
                  <Text color="gray">--</Text>
                </Td>
                <Td>
                  <Text color="gray">--</Text>
                </Td>

                <Td>
                  <Text fontWeight="semibold">Approved</Text>
                </Td>
                <Td>
                  <Text fontWeight="semibold">SPY</Text>
                  <Text>on 10-Aug-2023</Text>
                </Td>
                <Td>
                  <Text fontWeight="semibold">-</Text>
                </Td>
                <Td>
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      colorScheme="whiteAlpha"
                      icon={<HiOutlineDotsHorizontal color="gray" />}
                    />
                    <MenuList>
                      <MenuItem>View Request</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AttendanceRequest;
