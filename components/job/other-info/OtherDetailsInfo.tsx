import React from "react";
import { otherInfo } from "../constants/jobInfoList";
import DetailsViewCard from "../common-ui/DetailsViewCard";

const OtherDetailsInfo = () => {
  return (
    <>
      <DetailsViewCard heading="Other" listData={otherInfo} />
    </>
  );
};

export default OtherDetailsInfo;
