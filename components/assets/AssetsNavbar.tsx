import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Card, Text, Link } from "@chakra-ui/react";
import { assetMenuList } from "./constants/assetData";

const AssetsNavbar = ({ children }) => {
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
            {assetMenuList.map((menuInfo: any, index: any) => (
              <Link as={NextLink} href={menuInfo.menuPath} key={index}>
                <Text
                  fontWeight="semibold"
                  color="#0096FF"
                  padding="0.5rem"
                  bg={router.pathname === menuInfo.menuPath ? "#B6D0E2" : ""}
                  _hover={{
                    cursor: "pointer",
                    bg: "#B6D0E2",
                  }}
                  sx={{
                    transition: "2s ease-out 100ms",
                  }}
                >
                  {menuInfo.menuTittle}
                </Text>
              </Link>
            ))}
          </Box>
        </Card>
      </Box>
      <Box marginTop={7}> {children}</Box>
    </>
  );
};

export default AssetsNavbar;
