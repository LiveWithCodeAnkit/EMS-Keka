import React from "react";
import useClock from "../../../../lib/hooks/useClock";
import { Box } from "@chakra-ui/react";
import {
  ClockAMPM,
  ClockDate,
  ClockText,
  ClockTime,
} from "./DigitalClock.styled";

function DigitalClock() {
  const { hourDigital, minutesDigital, amPm, dayNow, monthNow, yearNow } =
    useClock();

  return (
    <Box>
      <ClockText>
        <ClockTime>{`${hourDigital}:`}</ClockTime>
        <ClockTime>{minutesDigital}</ClockTime>

        <ClockAMPM>{amPm}</ClockAMPM>
      </ClockText>

      <ClockDate>
        <span>{`${dayNow} `}</span>
        <span>{`${monthNow} , `}</span>
        <span>{yearNow}</span>
      </ClockDate>
    </Box>
  );
}

export default DigitalClock;
