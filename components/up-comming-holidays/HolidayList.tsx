import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { GiKite } from "react-icons/gi";
import {
  Box,
  Text,
  Divider,
  Card,
  Link,
  Icon,
  FormLabel,
} from "@chakra-ui/react";
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
