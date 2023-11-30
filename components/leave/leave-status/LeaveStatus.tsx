import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import WeeklyStatus from "./weekly-status/WeeklyStatus";
import MonthlyBarChart from "./monthly-status/MonthlyBarChart";
import ConsumendLeave from "./consumend-leave/ConsumendLeave";

const LeaveStatus = () => {
  return (
    <>
      <Text fontWeight="semibold" fontSize="2xl">
        My Leave Status
      </Text>
      <Grid templateColumns="33% 33% 33%" gap={6} p="2rem">
        <GridItem>
          {" "}
          <WeeklyStatus />
        </GridItem>
        <GridItem >
          {" "}
          <ConsumendLeave />
        </GridItem>

        <GridItem>
          {" "}
          <MonthlyBarChart />
        </GridItem>
      </Grid>
    </>
  );
};

export default LeaveStatus;
