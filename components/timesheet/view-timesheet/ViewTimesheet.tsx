import React from "react";
import { Alert, AlertIcon, Box, Card, Text } from "@chakra-ui/react";
import { timeSheetData } from "../constants";

const ViewTimesheet = ({ close }: any) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          p: "0.8rem",
          gap: "1rem",
        }}
      >
        <Card>
          <Alert status="info" >
            <AlertIcon />
            Wed, Dec 6, 2023
          </Alert>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "1rem",
            }}
          >
            <Box>
              <Text fontWeight="normal" color="gray">
                Clock-In
              </Text>
              <Text>09:05Am</Text>
            </Box>
            <Box>
              <Text fontWeight="normal" color="gray">
                Clock-Out
              </Text>
              <Text>06:33Pm</Text>
            </Box>
            <Box>
              <Text fontWeight="normal" color="gray">
                Total Working hours
              </Text>
              <Text>08h : 39m</Text>
            </Box>
          </Box>
        </Card>
        {timeSheetData.map((data, index) => (
          <Card key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                p: "0.8rem",
                gap: "0.5rem",
              }}
            >
              <Text>
                <b>Project :</b>
                {data.project}
              </Text>
              <Text>
                <b>Sub Task :</b>
                {data.projectSubTask}
              </Text>
              <Text>
                <b>Working Time :</b>
                {data.workingTime} hour
              </Text>
              <Text>
                <b>Description:</b> {data.description}
              </Text>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default ViewTimesheet;
