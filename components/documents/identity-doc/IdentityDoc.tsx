import React from "react";
import { Box, Card, Text } from "@chakra-ui/react";
import { CiLock } from "react-icons/ci";
import AddIdentityCard from "../common-ui/AddIdentityCard";

const IdentityDoc = () => {
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
        <Card>
          <Box p="1rem">
            <Box
              as="div"
              sx={{
                display: "flex",
                justifyContent: "start",
                gap: "0.5rem",
              }}
            >
              <Box as="div" h="3rem" w="3rem" bg="#40E0D0" rounded="full"></Box>
              <Box
                as="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignContent: "center",
                  gap: "2rem",
                }}
              >
                <Box>
                  <Text fontWeight="bold" fontSize="22px">
                    Identity Docs
                  </Text>
                  <Text color="gray.400">
                    An Identity Document is any document which may be Used to
                    verify aspects
                  </Text>
                </Box>
                <Box>
                  <Text
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "22px",
                      color: "gray.400",
                    }}
                  >
                    <CiLock />
                    Secure
                  </Text>
                  <Text color="blue.400" fontWeight="semibold">
                    Only Selected People can view{" "}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
        <AddIdentityCard heading="Driving License" />
        <AddIdentityCard heading="Pan Card" />
      </Box>
    </>
  );
};
export default IdentityDoc;
