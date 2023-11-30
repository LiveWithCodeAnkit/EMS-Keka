import React, { useEffect, useState } from "react";
import { Button, Box, Text, Card } from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";

const ClockInOutBox = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [breakStatus, setBreakStatus] = useState(false);
  const [workingTime, setWorkingTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    let workingInterval: string | number | NodeJS.Timeout;
    let breakInterval: string | number | NodeJS.Timeout;

    if (checkedIn && !breakStatus) {
      workingInterval = setInterval(() => {
        setWorkingTime((prevWorkingTime) => prevWorkingTime + 1000);
      }, 1000);
    }

    if (breakStatus && !checkedIn) {
      breakInterval = setInterval(() => {
        setBreakTime((prevBreakTime) => prevBreakTime + 1000);
      }, 1000);
    }

    return () => {
      clearInterval(workingInterval);
      clearInterval(breakInterval);
    };
  }, [checkedIn, breakStatus]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    const pad = (value: number) => (value < 10 ? `0${value}` : value);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <>
      <Card
        sx={{
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "5px",
          marginBottom: "10rem",
          marginTop: "0.5rem",
          "@media (max-width: 1024px)": {
            padding: "1px",
            marginBottom: "0px",
          },
        }}
      >
        <Text fontSize="xl" textAlign="center" fontWeight="semibold">
          My Timing
        </Text>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "1rem",
            border: "2px solid #F4F4F4",
            borderRadius: "5px",
            "@media (max-width: 320px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1px",
            }}
          >
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="bold"
              sx={{
                "@media (max-width: 320px)": {
                  fontSize: "16px",
                },
              }}
            >
              Working Time
            </Text>
            <Text
              fontSize="3xl"
              textAlign="center"
              fontWeight="semibold"
              sx={{
                "@media (max-width: 320px)": {
                  fontSize: "22px",
                },
              }}
            >
              {formatTime(workingTime)}
            </Text>
          </Box>
          <Box
            as="div"
            className="vertical"
            sx={{
              borderLeft: "2px solid #F4F4F4",
            }}
          ></Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1px",
            }}
          >
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="bold"
              sx={{
                "@media (max-width: 320px)": {
                  fontSize: "16px",
                },
              }}
            >
              Break Time
            </Text>
            <Text
              fontSize="3xl"
              textAlign="center"
              fontWeight="semibold"
              sx={{
                "@media (max-width: 320px)": {
                  fontSize: "22px",
                },
              }}
            >
              {formatTime(breakTime)}
            </Text>
          </Box>
        </Card>

        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            gap: "1rem",
            borderRadius: "5px",
            border: "2px solid #F4F4F4",
          }}
        >
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "4rem",
              "@media (max-width: 320px)": {  
                gap: "1rem",
              },
            }}
          >
            <Text fontSize="medium" textAlign="center" fontWeight="semibold">
              Break Time:
            </Text>
            <Text>01:00 PM-02:00 PM (60 min)</Text>
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "3.2rem",
              "@media (max-width: 320px)": {
                gap: "1rem",
              },
            }}
          >
            <Text fontSize="medium" fontWeight="semibold">
              Target Hours:
            </Text>
            <Text>08H:00M(Per Day)</Text>
          </Box>
        </Card>
        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            "@media (max-width: 320px)": {
              gap: "0.5rem",
            },
          }}
        >
          <Button
            rightIcon={<BiLogIn />}
            variant="outline"
            w={"9rem"}
            colorScheme={breakStatus ? "red" : "green"}
            onClick={() => {
              setBreakStatus((s) => !s);
            }}
          >
            {breakStatus ? "Back" : "Break"}
          </Button>
          <Button
            rightIcon={<BiLogIn />}
            variant="outline"
            colorScheme={checkedIn ? "red" : "green"}
            onClick={() => {
              setCheckedIn((s) => !s);
            }}
          >
            Clock {checkedIn ? "Out" : "In"}
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ClockInOutBox;
