"use client";
import { Button, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Clock = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  return (
    <Stack
      alignItems={"center"}
      m={6}
      sx={{
        "@media (max-width: 425px)": {
          display: "none",
        },
      }}
    >
      <AnalogClock />
      <DigitalClock />
      <Button
        rightIcon={checkedIn ? <FiLogOut /> : <FiLogIn />}
        colorScheme={checkedIn ? "red" : "green"}
        variant="outline"
        mt={4}
        onClick={() => {
          setCheckedIn((s) => !s);
        }}
      >
        Punch {checkedIn ? "out" : "in"}
      </Button>
    </Stack>
  );
};

export default Clock;
