import { Box, Card, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { leaveMenubar } from "../constants/leaveList";
const LeaveMenuBar = ({ children }) => {
  const router = useRouter();

  const handleRoute = (path: any) => {
    router.push(path);
  };
  return (
    <>
      <Card>
        <Box
          as="div"
          sx={{
            display: "flex",
            paddingLeft: "0.5rem",
            justifyContent: "start",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "2rem",

            fontWeight: "semibold",
            transition: "2s ease-out 100ms",
            paddingStart: "0.5rem",
            "@media (max-width: 1024px)": {
              gap: "1rem",
            },
            "@media (max-width: 768px)": {
              gap: "0.2rem",
            },
          }}
        >
          {leaveMenubar.map((data: any, index: any) => (
            <Box
              key={index}
              as="button"
              position="relative"
              onClick={() => {
                handleRoute(data.path);
              }}
            >
              <Text
                fontWeight="semibold"
                padding="0.5rem"
                color="#0096FF"
                position="relative"
                _hover={{
                  cursor: "pointer",
                }}
                sx={{
                  transition: "2s ease-out 100ms",
                }}
              >
                {data.menuTittle}
              </Text>

              <Box
                sx={{
                  display: router.pathname.includes(data.path)
                    ? "block"
                    : "none",
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderBottom: "8px solid #0096FF",
                }}
              ></Box>
            </Box>
          ))}
        </Box>
      </Card>

      <Box
        sx={{
          marginTop: "0.5rem",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default LeaveMenuBar;
