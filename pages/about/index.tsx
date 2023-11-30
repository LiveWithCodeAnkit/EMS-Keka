import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import InnerLayout from "../layout/InnerLayout";
import About from "../../components/about/About";
import ProfileView from "../../components/profile/ProfileView";
import ReaportingTeam from "../../components/reporting-team/ReaportingTeam";
import AboutDetails from "../../components/about/about-info/AboutDetails";

const AboutPage = () => {
  return (
    <>
      <InnerLayout>
        <About>
          <Box
            as="div"
            sx={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <Grid templateColumns="repeat(2, 1fr)" gap="0.5rem">
              <GridItem w="100%">
                <AboutDetails />
              </GridItem>
              <GridItem
                w="70%"
                sx={{
                  "@media (max-width: 1024px)": {
                    w: "full",
                  },
                }}
              >
                {" "}
                <ReaportingTeam />
              </GridItem>
              <GridItem w="100%">
                {" "}
                <ProfileView />
              </GridItem>
            </Grid>
          </Box>
        </About>
      </InnerLayout>
    </>
  );
};

export default AboutPage;
