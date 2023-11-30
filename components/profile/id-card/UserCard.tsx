import { Box, Button, Card, Circle, Image, Text } from "@chakra-ui/react";
import React from "react";

const UserCard = () => {
  return (
    <>
      <Box>
        <Card paddingBottom="5rem" paddingTop="5rem">
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              h="20%"
              width="20%"
              rounded="full"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text fontSize="24px" fontWeight="bold">
                Jhon James
              </Text>
              <Text fontSize="22px" fontWeight="semibold">
                Front-End Developer
              </Text>
              <Box
                as="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                  }}
                >
                  <Text fontWeight="bold">Department</Text>
                  <Text>:</Text>
                  <Text>Web-Deployment</Text>
                </Box>

                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "Start",
                    gap: "2rem",
                  }}
                >
                  <Text fontWeight="bold">Location</Text>
                  <Text>:</Text>
                  <Text>Surat</Text>
                </Box>
                <Box
                  as="div"
                  sx={{
                    display: "flex",
                    justifyContent: "Start",
                    gap: "2rem",
                  }}
                >
                  <Text fontWeight="bold">Blood Group</Text>
                  <Text>:</Text>
                  <Text>A+</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default UserCard;
