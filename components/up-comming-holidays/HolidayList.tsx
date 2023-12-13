import React from "react";
import { holidayData } from "./constant/holidays";
import ListCardBox from "../common-ui/list-card/ListCardBox";

const HolidayList = () => {
  return (
    <>
      <ListCardBox heading="Upcoming Holidays" info={holidayData} />
    </>
  );
};

export default HolidayList;
