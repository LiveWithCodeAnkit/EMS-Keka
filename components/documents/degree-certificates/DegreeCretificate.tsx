import React from "react";
import { Box, Card, Text } from "@chakra-ui/react";

const DegreeCretificate = () => {
  return (
    <>
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
                  Degree & Docs
                </Text>
                <Text color="gray.400">
                  An Degree & Docs Document is any document which may be Used to
                  verify aspects
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default DegreeCretificate;
