import { Box } from "@chakra-ui/react";
import React from "react";
import ShiftRequests from "./ShiftRequests";
import WeeklyOffRequest from "./WeeklyOffRequest";

const ShiftWeeklyOffLog = () => {
  return (
    <Box
      as="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        gap: "2rem",
      }}
    >
      <ShiftRequests />
      <WeeklyOffRequest />
    </Box>
  );
};

export default ShiftWeeklyOffLog;
