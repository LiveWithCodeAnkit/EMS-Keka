import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Card, Link, Text } from "@chakra-ui/react";
import { aboutSubmenuList } from "./constants/aboutInfo";

const About = ({ children }) => {
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
            {aboutSubmenuList.map((data: any, index: any) => (
              <Link as={NextLink} href={data.path} key={index}>
                <Text
                  fontWeight="semibold"
                  color="#0096FF"
                  padding="0.5rem"
                  bg={router.pathname === data.path ? "#B6D0E2" : ""}
                  _hover={{
                    cursor: "pointer",
                    bg: "#B6D0E2",
                  }}
                  sx={{
                    transition: "2s ease-out 100ms",
                  }}
                >
                  {data.menuTittle}
                </Text>
              </Link>
            ))}
          </Box>
        </Card>
      </Box>
      {children}
    </>
  );
};

export default About;
