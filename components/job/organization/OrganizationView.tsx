import React from "react";
import { organizationInfo } from "../constants/jobInfoList";
import DetailsViewList from "../common-ui/DetailsViewList";

const OrganizationView = () => {
  return (
    <>
      <DetailsViewList heading="Organization" listData={organizationInfo} />
    </>
  );
};

export default OrganizationView;
