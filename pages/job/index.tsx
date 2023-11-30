import React from "react";
import InnerLayout from "../layout/InnerLayout";
import JobDetail from "../../components/job/job-info/JobDetail";
import EmployeTimeing from "../../components/job/employe-timeing/EmployeTimeing";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import OtherDetailsInfo from "../../components/job/other-info/OtherDetailsInfo";
import OrganizationView from "../../components/job/organization/OrganizationView";

const JobPage = () => {
  return (
    <>
      <InnerLayout>
        <Grid templateColumns="70% 20%" gap={6}>
          <GridItem colSpan={1} >
            <JobDetail />
            <Box h="1rem"></Box>
            <EmployeTimeing />
            <Box h="1rem"></Box>
            <OtherDetailsInfo />
          </GridItem>

          <GridItem colSpan={1}>
            <OrganizationView />
          </GridItem>
        </Grid>
      </InnerLayout>
    </>
  );
};

export default JobPage;
