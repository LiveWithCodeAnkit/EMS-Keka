import { Box } from "@chakra-ui/react";
import React from "react";
import AttendanceBoxes from "../AttendanceBoxes";
import AttendanceTittle from "../attendance-tiitle/AttendanceTittle";

const Attendancelayout = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <AttendanceBoxes />
        <AttendanceTittle />
      </Box>
    </>
  );
};

export default Attendancelayout;
