import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
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
import ViewTimesheet from "./view-timesheet/ViewTimesheet";
const TimesheetLogs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TableContainer bg="bgCard" rounded="1rem">
        <Table variant="simple">
          <Thead>
            <Tr bg="theadColor">
              <Th>DATE</Th>
              <Th>Clock-In</Th>
              <Th>Clock-Out</Th>
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
                  <Text>Total 8hour 20min</Text>
                </Box>
              </Td>
              <Td>
                <Text color="gray">09:05Am</Text>
              </Td>
              <Td>
                <Text color="">06:33Pm</Text>
              </Td>
              <Td>
                <Button
                  color="gray"
                  onClick={onOpen}
                  colorScheme="buttonColorScheme"
                >
                  View
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.500">Timesheet details</DrawerHeader>
          <DrawerBody>
            <ViewTimesheet onClose={onClose} />
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={onClose}
              colorScheme="blue"
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TimesheetLogs;
