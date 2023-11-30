import React from "react";
import {
  Box,
  Card,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

const ConsumendLeave = () => {
  return (
    <>
      <Card p="0.5rem" >
        <Box
          as="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text fontSize="xl">Consumed Leave Types</Text>

          <FiAlertCircle />
        </Box>

        <Box
          as="div"
          sx={{
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          <CircularProgress value={100} size="9rem" color="#FF4433">
            <CircularProgressLabel fontSize="12px" color="purple.500">
              Leave Type
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Card>
    </>
  );
};

export default ConsumendLeave;
