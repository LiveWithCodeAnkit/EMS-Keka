import React from "react";
import { Box, Card } from "@chakra-ui/react";
import AboutInfo from "./AboutInfo";
import AboutJob from "./AboutJob";
import AboutHobby from "./AboutHobby";

const AboutDetails = () => {
  return (
    <>
      <Card padding="2rem">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <AboutInfo />
          <AboutJob />
          <AboutHobby />
        </Box>
      </Card>
    </>
  );
};

export default AboutDetails;
