import React from "react";
import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
const OvertimeLogs = () => {
  return (
    <>
      <TableContainer bg="bgCard" rounded="1rem">
        <Table variant="simple">
          <Thead>
            <Tr bg="theadColor">
              <Th>OVERTIME DATE</Th>
              <Th>OVERTIME HOUR</Th>
              <Th>STATUS</Th>
              <Th>NOTE</Th>
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
                    flexDirection: "column",
                    justifyContent: "start",
                  }}
                >
                  <Text fontWeight="semibold">Aug 10,2023</Text>
                  <Text>Requested on Aug 10</Text>
                </Box>
              </Td>
              <Td>
                <Text color="gray">02:00Hrs</Text>
              </Td>
              <Td>
                <Text color="">Cancelled</Text>
              </Td>
              <Td>
                <Text color="gray">need it Cancellatic</Text>
              </Td>
              <Td>
                <Text color="gray">SPY</Text>
              </Td>

              <Td>
                <Text fontWeight="semibold">Approved</Text>
              </Td>
              <Td>
                <Text fontWeight="semibold">SPY</Text>
                <Text>on 10-Aug-2023</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default OvertimeLogs;
