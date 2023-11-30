import React, { useEffect, useState } from "react";
import {
  ClockCircle,
  ClockHour,
  ClockMinute,
  ClockNine,
  ClockRounder,
  ClockSecond,
  ClockSix,
  ClockThree,
  ClockTwelve,
} from "./AnalogClock.styled";

function AnalogClock() {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    const clock = () => {
      let date = new Date();

      let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

      setHour(`rotateZ(${hh + mm / 12}deg)`);
      setMinutes(`rotateZ(${mm}deg)`);
      setSeconds(`rotateZ(${ss}deg)`);
    };
    let i = setInterval(clock, 1000);

    return () => {
      if (i) clearInterval(i);
    };
  }, []);

  return (
    <ClockCircle>
      <ClockTwelve />
      <ClockThree />
      <ClockSix />
      <ClockNine />

      <ClockRounder></ClockRounder>
      <ClockHour sx={{ transform: hour }}></ClockHour>
      <ClockMinute sx={{ transform: minutes }}></ClockMinute>
      <ClockSecond sx={{ transform: seconds }}></ClockSecond>
    </ClockCircle>
  );
}

export default AnalogClock;
