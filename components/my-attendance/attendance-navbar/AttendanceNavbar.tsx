import { Box, Card, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const AttendanceNavbar = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          mt: "1%",
        }}
      >
        <Card w="full">
          <Box
            as="div"
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "2rem",
              h: "full",
            }}
          >
            <Link as={NextLink} href="/attendance">
              <Text
                fontWeight="semibold"
                color="#0096FF"
                padding="0.5rem"
                bg={router.pathname === "/attendance" ? "#B6D0E2" : ""}
                _hover={{
                  cursor: "pointer",
                  bg: "#B6D0E2",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                Attendance Log
              </Text>
            </Link>

            <Link as={NextLink} href="/attendance/shift-schedule">
              <Text
                fontWeight="semibold"
                color="#0096FF"
                padding="0.5rem"
                bg={
                  router.pathname === "/attendance/shift-schedule"
                    ? "#B6D0E2"
                    : ""
                }
                _hover={{
                  cursor: "pointer",
                  bg: "#B6D0E2",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                Shift Schedule
              </Text>
            </Link>
            <Link as={NextLink} href="/attendance/attendance-request">
              <Text
                fontWeight="semibold"
                color="#0096FF"
                padding="0.5rem"
                bg={router.pathname === "/attendance/attendance-request" ? "#B6D0E2" : ""}
                _hover={{
                  cursor: "pointer",
                  bg: "#B6D0E2",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                Attendance Request
              </Text>
            </Link>
            <Link as={NextLink} href="/attendance/overtime-request">
              <Text
                fontWeight="semibold"
                color="#0096FF"
                padding="0.5rem"
                bg={router.pathname === "/attendance/overtime-request" ? "#B6D0E2" : ""}
                _hover={{
                  cursor: "pointer",
                  bg: "#B6D0E2",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                Overtime Request
              </Text>
            </Link>
            <Link as={NextLink} href="/attendance/shift-weeklyOff">
              <Text
                fontWeight="semibold"
                color="#0096FF"
                padding="0.5rem"
                bg={router.pathname === "/attendance/shift-weeklyOff" ? "#B6D0E2" : ""}
                _hover={{
                  cursor: "pointer",
                  bg: "#B6D0E2",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                Shift Weekly Off Request
              </Text>
            </Link>
          </Box>
        </Card>
      </Box>
      <Box mt="2%">{children}</Box>
    </>
  );
};

export default AttendanceNavbar;
