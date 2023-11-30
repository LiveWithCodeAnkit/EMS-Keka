import { Box, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";
import React from "react";

const AttendanceTittle = () => {
  return (
    <>
      <Box
        as="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          w: "full",
        }}
      >
        <Text fontSize="22px" fontWeight="semibold">
          Logs & Requests
        </Text>
        <FormControl display="flex" alignItems="center" w="10%">
          <Switch id="hourType" />
          <FormLabel htmlFor="hourType" mb="0">
            24 hour format
          </FormLabel>
        </FormControl>
      </Box>
    </>
  );
};

export default AttendanceTittle;
