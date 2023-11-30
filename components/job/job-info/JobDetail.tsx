import React from "react";
import { jobDetails } from "../constants/jobInfoList";
import DetailsViewCard from "../common-ui/DetailsViewCard";

const JobDetail = () => {
  return (
    <>
      <DetailsViewCard heading=" Job Details" listData={jobDetails} />
    </>
  );
};

export default JobDetail;
