import React from "react";
import { CiCircleAlert } from "react-icons/ci";
import {
  Box,
  Button,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import TimesheetLogs from "./TimesheetLogs";
import AddTimesheet from "./add-timesheet/AddTimesheet";

const Timesheet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          mt: "3rem",
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
              Timesheet Logs
            </Text>
            <CiCircleAlert fontSize="28px" />
          </Box>
          <Button
            colorScheme="twitter"
            onClick={() => {
              onOpen();
            }}
          >
            Add Timesheet
          </Button>
        </Box>
        <TimesheetLogs />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg="gray.500">Timesheet Request</DrawerHeader>
          <DrawerBody>
            <AddTimesheet onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Timesheet;
