import React, { useRef, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { GrPrevious, GrNext } from "react-icons/gr";
import {
  Box,
  Button,
  Card,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import RequestWeeklyOff from "./request-weekly-off/RequestWeeklyOff";

export const StyleWrapper = styled.div`
  .fc .fc-toolbar.fc-header-toolbar {
    display: none;
  }

  .fc-toolbar.fc-header-toolbar {
    display: none;
  }
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button,
  .fc-button.fc-button-primary {
    display: none;
  }

  .fc-toolbar-title {
    padding-left: 1rem;
    padding-top: 1rem;
  }
`;

const ShiftSchedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dayHeaderClassNames = (arg) => {
    return ["custom-header-class"];
  };

  const calendarRef = useRef(null);
  const [currentMonthName, setCurrentMonthName] = useState("");

  useEffect(() => {
    const updateMonthName = () => {
      if (calendarRef.current) {
        const currentDate = calendarRef.current.getApi().getDate();
        const monthName = currentDate.toLocaleString("en-US", {
          month: "long",
        });
        setCurrentMonthName(monthName);
      }
    };

    if (calendarRef.current) {
      calendarRef.current.getApi().on("datesSet", updateMonthName);
      updateMonthName();
    }

    return () => {
      if (calendarRef.current) {
        calendarRef.current.getApi().off("datesSet", updateMonthName);
      }
    };
  }, []);

  const handlePrevClick = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().prev();
    }
  };

  const handleNextClick = () => {
    if (calendarRef.current) {
      calendarRef.current.getApi().next();
    }
  };

  return (
    <>
      <Card p="1rem">
        <StyleWrapper>
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
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
              <IconButton
                aria-label="Previous month"
                icon={<GrPrevious color="gray" />}
                onClick={handlePrevClick}
              />
              <Text fontSize="22px" fontWeight="semibold">
                {currentMonthName}
              </Text>
              <IconButton
                aria-label="Next month"
                icon={<GrNext color="gray" />}
                onClick={handleNextClick}
              />
            </Box>
            <Button colorScheme="twitter" variant="outline" onClick={onOpen}>
              Request Weekly Off
            </Button>
          </Box>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: "Event 1", date: "2023-01-01" },
              { title: "Event 2", date: "2023-01-05" },
              { title: "Happy Birthday", date: "2023-11-30" },
            ]}
            dayHeaderClassNames={dayHeaderClassNames}
          />
        </StyleWrapper>
      </Card>

      <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="#899499" color="white">
            Weekly Off Request
          </ModalHeader>
          <ModalCloseButton color="white" fontWeight="bold" fontSize="1rem" />
          <ModalBody>
            <RequestWeeklyOff onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShiftSchedule;
