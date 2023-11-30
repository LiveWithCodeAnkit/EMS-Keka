import React, { useState, useEffect } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoFingerPrintSharp } from "react-icons/io5";
import { Box, Card, Text } from "@chakra-ui/react";
import { attendanceDaysName } from "../constants/attendanceList";
import ProgressBar from "@ramonak/react-progress-bar";

const AttendanceTimeing = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [attendanceInfo, setAttendanceInfo] = useState({
    dayValue: "",
    hourInfo: "",
  });

  useEffect(() => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };

    const dayName = currentDate.toLocaleString("en-US", options);
    setCurrentDay(dayName.toLowerCase());
  }, []);

  const handleDataTime = (hourInfo: any, dayValue: any) => {
    // function
    setAttendanceInfo({
      dayValue: dayValue,
      hourInfo: hourInfo,
    });
  };

  return (
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
        Timings
      </Text>
      <Card p="1rem">
        <Box display="flex" flexDirection="column" gap="2rem">
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              gap="0.5rem"
            >
              {attendanceDaysName.map(
                (
                  data: {
                    id: string;
                    dayTittle: string;
                    dayValue: string;
                    hourInfo?: number;
                  },
                  index: number
                ) => (
                  <Box
                    key={index}
                    _hover={{
                      color: "red",
                      cursor: "pointer",
                      border: "2px solid red",
                      transition: "2s ease-out 100ms",
                    }}
                    border={
                      selectedDay === data.dayValue
                        ? "2px solid green"
                        : "1px solid gray"
                    }
                    borderRadius="15px"
                    padding="2px 10px 2px 9px"
                    bg={
                      currentDay === data.dayValue
                        ? "#0096FF"
                        : "" || data.dayValue === "sunday"
                        ? "#F5F5F5"
                        : ""
                    }
                    color={currentDay === data.dayValue ? "white" : ""}
                    onClick={() => {
                      if (data.hourInfo !== undefined) {
                        handleDataTime(data.hourInfo, data.dayValue);
                        setSelectedDay(data.dayValue);
                      }
                    }}
                  >
                    {data.dayTittle}
                  </Box>
                )
              )}
            </Box>
            <Box
              display="flex"
              justifyContent="start"
              alignItems="center"
              gap="0.5rem"
            >
              <BsGraphUpArrow color="gray" fontSize="20px" />
              <IoFingerPrintSharp color="gray" fontSize="20px" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            gap="0.5rem"
          >
            {attendanceInfo.dayValue ? (
              <Text fontWeight="semibold">
                {attendanceInfo.dayValue} (Flexible Timings)
              </Text>
            ) : (
              <Text fontWeight="semibold">Today (Flexible Timings)</Text>
            )}

            <ProgressBar
              completed={Number(attendanceInfo.hourInfo)}
              customLabel={`${Number(attendanceInfo.hourInfo)} Hour`}
              maxCompleted={10}
              bgColor="#0096FF"
              height="1rem"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text color="gray">Duration: {attendanceInfo.hourInfo} Hour</Text>
              <Text color="gray">Break: 0min</Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default AttendanceTimeing;
