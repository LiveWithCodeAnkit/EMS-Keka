import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import LeaveBox from "../../components/leave-info/LeaveBox";
import HolidayList from "../../components/up-comming-holidays/HolidayList";
import AnnouncementList from "../../components/announcement/AnnouncementList";

const MiniBoxes = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, 2]}
        spacing="1rem"
        h="auto"
        padding="0.5rem"
        sx={{
          "@media (max-width: 425px)": {
            columns: 1,
          },
        }}
      >
        <Box>
          {" "}
          <LeaveBox />{" "}
        </Box>
        <Box>
          {" "}
          <HolidayList />
        </Box>
        <Box>
          {" "}
          <AnnouncementList />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default MiniBoxes;
