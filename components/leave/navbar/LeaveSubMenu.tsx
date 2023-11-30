import { Box, Card, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const LeaveSubMenu = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
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
            <Link as={NextLink} href="/leaves">
              <Text
                fontWeight="semibold"
                color="#0096FF"
                padding="0.5rem"
                bg={router.pathname === "/leaves" ? "#B6D0E2" : ""}
                _hover={{
                  cursor: "pointer",
                  bg: "#B6D0E2",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                Summary{" "}
              </Text>
            </Link>
          </Box>
        </Card>
      </Box>
      {children}
    </>
  );
};

export default LeaveSubMenu;
