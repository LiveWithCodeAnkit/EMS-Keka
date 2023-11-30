import React from "react";
import { employeTiming } from "../constants/jobInfoList";
import DetailsViewCard from "../common-ui/DetailsViewCard";

const EmployeTimeing = () => {
  return (
    <>
      <DetailsViewCard heading="Employee Time" listData={employeTiming} />
    </>
  );
};

export default EmployeTimeing;
