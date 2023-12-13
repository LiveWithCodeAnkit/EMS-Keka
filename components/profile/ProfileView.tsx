import React from "react";
import { Box, Card, Heading } from "@chakra-ui/react";
import ProfileViewCard from "./common-ui/ProfileViewCard";
import { profilePrimaryInfo } from "./constants/profileInfo";

const ProfileView = () => {
  return (
    <>
      <Card padding="2rem">
        <Box
          as="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Box>
            <Heading size="md">Primary Details</Heading>
          </Box>
          <Box
            as="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <ProfileViewCard dataInfo={profilePrimaryInfo} />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ProfileView;
