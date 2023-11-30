import React from "react";
import ShowInfoCard from "../common-ui/littlebox/ShowInfoCard";

const LeaveBox = () => {
  return (
    <>
      <ShowInfoCard
        headTittle="My Leave "
        infoTitleOne="Balance"
        infoTitleTwo="Used"
        infoTitleThree="Remain"
        valueOne={"12"}
        valueTwo={"04"}
        valueThree={"08"}
      />
    </>
  );
};

export default LeaveBox;
