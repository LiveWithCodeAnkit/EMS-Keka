import React from "react";
import { FiAlertCircle, FiChevronDown } from "react-icons/fi";
import { IoMdPeople } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { Box, Card, Text, Divider, Grid, GridItem } from "@chakra-ui/react";

const AttendanceStats = () => {
  return (
    <>
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
          Attendance Stats
        </Text>
        <Card p={"1rem"} h="11.5rem">
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
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
                Last Week <FiChevronDown />
              </Text>
              <FiAlertCircle style={{ fontSize: "18px", color: "gray" }} />
            </Box>

            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                as="div"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <RxAvatar
                  style={{
                    fontSize: "2.5rem",
                    background: "#FFC000",
                    color: "white",
                    borderRadius: "40px",
                  }}
                />
                <Text fontWeight={"semibold"}>Me</Text>
              </Box>
              <Box>
                <Text color="gray" fontSize={"12px"} fontWeight={"semibold"}>
                  AVG HRS / DAY
                </Text>
                <Text fontWeight={"semibold"} fontSize={"18px"}>
                  4h 21m
                </Text>
              </Box>
              <Box>
                <Text color="gray" fontSize={"12px"} fontWeight={"semibold"}>
                  ON TIME ARRIVAL
                </Text>
                <Text fontWeight={"semibold"} fontSize={"18px"}>
                  83%
                </Text>
              </Box>
            </Box>
            <Divider />

            <Grid templateColumns="30% 35% auto" gap={8}>
              <GridItem>
                {" "}
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <IoMdPeople
                    style={{
                      fontSize: "2rem",
                      background: "#87CEEB",
                      color: "white",
                      borderRadius: "15px",
                    }}
                  />
                  <Text fontWeight={"semibold"}>My Team</Text>
                </Box>
              </GridItem>
              <GridItem>
                <Box>
                  <Text fontWeight={"semibold"} fontSize={"18px"}>
                    0h 21m
                  </Text>
                </Box>
              </GridItem>

              <GridItem>
                <Text fontWeight={"semibold"} fontSize={"18px"}>
                  3%
                </Text>
              </GridItem>
            </Grid>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default AttendanceStats;
